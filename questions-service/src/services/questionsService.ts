import { logger } from "../utils/logger";
import { prisma } from "../config/prisma";
import { normalizeText } from "../utils/helpers";
import {
  CreateQuestionDto,
  UpdateQuestionDto,
} from "../validators/questionsSchema";
import {
  DatabaseError,
  NotFoundError,
  ConflictError,
  AppError,
} from "../utils/errors";

/**
 * validateFK: Valida la existencia de una clave foránea en la base de datos.
 * @param model El modelo de Prisma a consultar.
 * @param id El ID a validar.
 * @param label La etiqueta descriptiva del campo.
 * @throws NotFoundError si la clave foránea no existe.
 */
async function validateFK(model: any, id: number | undefined, label: string) {
  if (id === undefined || id === null) return;

  const exists = await model.findUnique({ where: { id } });
  if (!exists) throw new NotFoundError(`Invalid ${label}`);
}

/**
 * validateRelationsGeneric: Valida las relaciones (difficultyId, typeId, areaId) en la base de datos.
 * @param data Los datos de la pregunta a validar.
 * @throws NotFoundError si alguna de las relaciones no existe.
 */
async function validateRelationsGeneric(data: any) {
  await validateFK(prisma.difficulty, data.difficultyId, "difficultyId");
  await validateFK(prisma.question_types, data.typeId, "typeId");
  await validateFK(prisma.areas, data.areaId, "areaId");
}

/**
 * ensureQuestionExists: Verifica si una pregunta existe por su ID.
 * @param id El ID de la pregunta a verificar.
 * @returns La pregunta si existe.
 * @throws NotFoundError si la pregunta no existe.
 */
async function ensureQuestionExists(id: number) {
  const exists = await prisma.questions.findUnique({ where: { id } });

  if (!exists) {
    logger.warn("[questions] Question not found", { id });
    throw new NotFoundError("Question not found");
  }

  return exists;
}

/**
 * getAreaSubAreaById: Dado el valor almacenado en `questions.areaId`
 * @param storedAreaId El valor almacenado en questions.areaId
 * @returns Un objeto con areaId y subareaId resueltos.
 */
async function getAreaSubAreaById(storedAreaId: number | null) {
  if (!storedAreaId) return { areaId: null, subareaId: null };

  const areaRec = await prisma.areas.findUnique({
    where: { id: storedAreaId },
  });
  if (!areaRec) return { areaId: null, subareaId: null };

  if (areaRec.parentAreaID && typeof areaRec.parentAreaID === "number") {
    return { areaId: areaRec.parentAreaID, subareaId: areaRec.id };
  }

  return { areaId: areaRec.id, subareaId: null };
}

/**
 * getAllQuestions: Obtiene todas las preguntas de la base de datos.
 * @returns Una promesa que resuelve a un array de preguntas.
 * @throws DatabaseError si ocurre un error al acceder a la base de datos.
 */
export async function getAllQuestions() {
  try {
    //* 1. Obtener todas las preguntas
    const questions = await prisma.questions.findMany({
      orderBy: { id: "asc" },
      include: {
        question_options: {
          orderBy: { id: "asc" },
          select: {
            text: true,
            correct: true,
          },
        },
        difficulty: {
          select: { name: true },
        },
        question_types: {
          select: { name: true },
        },
        areas: {
          select: { parentAreaID: true, name: true },
        },
      },
    });

    logger.info("[getAllQuestions] Fetched questions", {
      count: questions.length,
    });

    return questions;
  } catch (error) {
    logger.error("[getAllQuestions] Failed fetching questions", { error });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to fetch questions");
  }
}

/**
 * createQuestion: Crea una nueva pregunta en la base de datos.
 * @param rawData Los datos de la pregunta a crear.
 * @returns Una promesa que resuelve a la pregunta creada.
 * @throws ConflictError si ya existe una pregunta con el mismo texto.
 * @throws DatabaseError si ocurre un error al acceder a la base de datos.
 */
export async function createQuestion(question: CreateQuestionDto) {
  try {
    //* 1. Evitar duplicados usando los datos normalizados (busqueda case-insensitive)
    const existingQuestion = await prisma.questions.findFirst({
      where: {
        text: { equals: question.text, mode: "insensitive" },
      },
    });
    if (existingQuestion) {
      logger.warn("[createQuestion] Duplicate text attempt", {
        text: question.text[10],
      });
      throw new ConflictError("A question with the same text already exists");
    }

    //* 2. Validar subarea
    const subArea = await prisma.areas.findFirst({
      where: {
        id: question.subareaId,
        parentAreaID: {
          not: null,
        },
      },
    });
    if (!subArea) throw new NotFoundError("Invalid subarea");

    //* 3. Validar relaciones (FKs)
    const validateData: any = {
      text: question.text,
      difficultyId: question.difficultyId,
      typeId: question.typeId,
    };
    await validateRelationsGeneric(validateData);

    //* 4. Crear pregunta y sus opciones en una transacción
    const { question_options, subareaId, ...questionData } = question;
    questionData.areaId = subArea.id || undefined;

    const created = await prisma.$transaction(async (tx) => {
      const question = await tx.questions.create({
        data: questionData,
      });

      const options = question_options.map((opt) => ({
        questionId: question.id,
        text: normalizeText(opt.text) || opt.text,
        correct: opt.correct,
        additional: opt?.additional,
      }));

      for (const opt of options) {
        await tx.question_options.create({ data: opt });
      }

      return question;
    });

    logger.info("[createQuestion] Question created", {
      id: created.id,
      text: created.text,
    });

    //* 5. Validacion y creación objeto de regreso
    return prisma.questions.findUnique({
      where: {
        id: created.id,
      },
      include: {
        question_options: {
          select: {
            text: true,
            correct: true,
            additional: true,
          },
        },
        areas: {
          select: {
            id: true,
            name: true,
            parentAreaID: true,
          },
        },
        difficulty: {
          select: {
            name: true,
          },
        },
      },
    });
  } catch (error) {
    logger.error("[createQuestion] Error creating question", { error });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to create question", error);
  }
}

/**
 * updateQuestion: Actualiza una pregunta existente en la base de datos por su ID.
 * @param id El ID de la pregunta a actualizar.
 * @param rawData Los datos de la pregunta a actualizar.
 * @returns Una promesa que resuelve a la pregunta actualizada.
 * @throws NotFoundError si la pregunta no existe.
 * @throws ConflictError si se intenta actualizar a un texto que ya existe.
 * @throws DatabaseError si ocurre un error al acceder a la base de datos.
 */
export async function updateQuestion(id: number, rawData: UpdateQuestionDto) {
  try {
    //* 1. Verificar existencia de la pregunta a actualizar
    const existingQuestion = await ensureQuestionExists(id);

    //* 2. Normalización mínima de datos
    const data: any = {};
    if (typeof rawData.text === "string")
      data.text = normalizeText(rawData.text);
    if (rawData.difficultyId !== undefined)
      data.difficultyId = rawData.difficultyId;
    if (rawData.typeId !== undefined) data.typeId = rawData.typeId;
    if (typeof rawData.hint === "string")
      data.hint = normalizeText(rawData.hint);
    if (typeof rawData.explanation === "string")
      data.explanation = normalizeText(rawData.explanation);

    //* 3. Validar subarea/área si aplica
    if (rawData.subareaId !== undefined && rawData.subareaId !== null) {
      // validar existencia de la subarea
      const sub = await prisma.areas.findUnique({
        where: { id: rawData.subareaId },
      });
      if (!sub) throw new NotFoundError("Invalid subareaId");

      // opción 2: almacenamos la subarea en la columna `areaId`
      data.areaId = rawData.subareaId;
    }

    //* 4. Validar relaciones (FKs)
    await validateRelationsGeneric(data);

    //* 5. Evitar duplicados si cambia el texto (comparando contra la versión normalizada existente)
    const existingNormalized = normalizeText(existingQuestion.text);
    if (data.text && data.text !== existingNormalized) {
      const duplicate = await prisma.questions.findFirst({
        where: { text: { equals: data.text, mode: "insensitive" } },
      });
      if (duplicate) {
        logger.warn("[updateQuestion] Duplicate text attempt", {
          text: data.text,
        });
        throw new ConflictError("A question with the same text already exists");
      }
    }

    //* 6. Actualizar pregunta y manejar subarea/área y opciones si vienen en el payload
    const updated = await prisma.$transaction(async (tx) => {
      // validar subarea/area en update if provided
      if (
        (rawData as any).subareaId !== undefined &&
        (rawData as any).subareaId !== null
      ) {
        const sub = await tx.areas.findUnique({
          where: { id: (rawData as any).subareaId },
        });
        if (!sub) throw new NotFoundError("Invalid subareaId");
        if (
          (rawData as any).areaId !== undefined &&
          (rawData as any).areaId !== null
        ) {
          if (sub.parentAreaID !== (rawData as any).areaId) {
            throw new NotFoundError(
              "Provided subareaId does not belong to provided areaId"
            );
          }
        }
        data.areaId = (rawData as any).subareaId;
      }

      const q = await tx.questions.update({ where: { id }, data });

      if (Array.isArray(rawData.question_options)) {
        // Obtener opciones existentes
        const existingOpts = await tx.question_options.findMany({
          where: { questionId: id },
        });

        const incoming = rawData.question_options;

        // Mapear por id para decidir update/create
        const incomingIds = incoming
          .map((o: any) => o.id)
          .filter(Boolean) as number[];

        // 1) Actualizar o crear cada incoming
        // for (const opt of incoming) {
        //   if (opt.id && existingOpts.some((e) => e.id === opt.id)) {
        //     // actualizar
        //     // eslint-disable-next-line no-await-in-loop
        //     await tx.question_options.update({
        //       where: { id: opt.id },
        //       data: {
        //         text: normalizeText(opt.text) || opt.text,
        //         correct: opt.isCorrect,
        //         additional: null,
        //       },
        //     });
        //   } else {
        //     // crear nuevo asociado
        //     // eslint-disable-next-line no-await-in-loop
        //     await tx.question_options.create({
        //       data: {
        //         questionId: id,
        //         text: normalizeText(opt.text) || opt.text,
        //         correct: opt.isCorrect,
        //         additional: null,
        //       },
        //     });
        //   }
        // }

        // 2) Eliminar opciones que no vienen en el incoming (si las hay)
        const toDelete = existingOpts.filter(
          (e) => !incomingIds.includes(e.id)
        );
        for (const d of toDelete) {
          // eslint-disable-next-line no-await-in-loop
          await tx.question_options.delete({ where: { id: d.id } });
        }
      }

      return q;
    });

    // Recuperar la pregunta completa con opciones para devolver formato esperado
    const full = await prisma.questions.findUnique({
      where: { id: updated.id },
      include: { question_options: { orderBy: { id: "asc" } } },
    });

    logger.info("[updateQuestion] Question updated", {
      id: updated.id,
      text: updated.text,
    });

    const optionsOut = (full?.question_options || []).map((o: any) => ({
      text: normalizeText(o.text) || o.text,
    }));

    const correctIndex = (full?.question_options || []).findIndex(
      (o: any) => o.correct === true
    );

    const areaResolved = await getAreaSubAreaById(full?.areaId ?? null);

    return {
      id: full?.id,
      text: full?.text,
      options: optionsOut,
      correctAnswerIndex: correctIndex >= 0 ? correctIndex : null,
      explanation: full?.explanation || null,
      hint: full?.hint || null,
      areaId: areaResolved.areaId,
      subareaId: areaResolved.subareaId,
      difficultyLevel: full?.difficultyId,
    };
  } catch (error) {
    logger.error("[updateQuestion] Error updating question", { error });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to update question", error);
  }
}

/**
 * deleteQuestion: Elimina una pregunta de la base de datos por su ID.
 * @param id El ID de la pregunta a eliminar.
 * @returns Una promesa que resuelve a un objeto indicando éxito.
 * @throws NotFoundError si la pregunta no existe.
 * @throws DatabaseError si ocurre un error al acceder a la base de datos.
 */
export async function deleteQuestion(id: number) {
  try {
    //* 1. Verificar existencia de la pregunta a eliminar
    await ensureQuestionExists(id);

    //* 2. Eliminar opciones asociadas (por FK con cascade, pero para claridad lo hacemos explícito)
    await prisma.question_options.deleteMany({
      where: { questionId: id },
    });

    await prisma.question_references?.deleteMany({
      where: { questionId: id },
    });

    await prisma.question_images?.deleteMany({
      where: { questionId: id },
    });

    //* 3. Eliminar pregunta
    await prisma.questions.delete({
      where: { id },
    });

    logger.info("[deleteQuestion] Question deleted", { id });

    return { success: true, id };
  } catch (error) {
    logger.error("[deleteQuestion] Error deleting question", { error });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to delete question");
  }
}

/**
 * getQuestionsByString: Obtiene preguntas filtradas por nombre de área o subárea.
 * @param name Nombre del área o subárea.
 * @returns Array de preguntas crudas (formato final se hace en el controller).
 * @throws NotFoundError si el área no existe.
 * @throws DatabaseError si ocurre un error inesperado en la base de datos.
 */
export async function getQuestionsByString(name: string) {
  try {
    //* 1. Normalizar para uso interno y logging
    const normalized = normalizeText(name) || "";
    const searchName =
      typeof name === "string" ? name.trim().replace(/\s+/g, " ") : name;

    //* 2. Buscar área o subárea por nombre
    const area = await prisma.areas.findFirst({
      where: {
        name: {
          equals: searchName,
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        name: true,
        parentAreaID: true,
      },
    });

    if (!area) {
      logger.warn("[getQuestionsByString] Name not found", {
        name: normalized,
      });
      throw new NotFoundError("Name not found");
    }

    //* 3. Resolver si es área padre o subárea
    let areaIds: number[] = [];

    if (area.parentAreaID === null) {
      const subareas = await prisma.areas.findMany({
        where: { parentAreaID: area.id },
        select: { id: true },
      });

      areaIds = [area.id, ...subareas.map((s) => s.id)];
    } else {
      areaIds = [area.id];
    }

    //* 4. Obtener preguntas relacionadas
    const questions = await prisma.questions.findMany({
      where: { areaId: { in: areaIds } },
      orderBy: { id: "asc" },
      include: {
        question_options: {
          orderBy: { id: "asc" },
          select: {
            text: true,
            correct: true,
            additional: true,
          },
        },
        difficulty: { select: { name: true } },
        areas: { select: { id: true, name: true, parentAreaID: true } },
      },
    });

    logger.info("[getQuestionsByString] Questions fetched", {
      searchName: normalized,
      foundAreaId: area.id,
      count: questions.length,
    });

    return questions;
  } catch (error) {
    logger.error("[getQuestionsByString] Error fetching questions", {
      error,
    });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to fetch questions by name", error);
  }
}

/**
 * getStatsQuestion: Obtiene estadísticas de preguntas.
 * @param id El ID de la pregunta.
 * @returns Un objeto con estadísticas básicas de la pregunta.
 * @throws NotFoundError si la pregunta no existe.
 * @throws DatabaseError si ocurre un error al acceder a la base de datos.
 */
export async function getStatsQuestion(id: number) {
  try {
    //* 1. Verificar existencia de la pregunta
    await ensureQuestionExists(id);

    //* 2. Conteos y agregados generales
    const responsesCount = await prisma.responses.count({
      where: { questionId: id },
    });

    const avgAgg = await prisma.responses.aggregate({
      where: { questionId: id, responseTime: { not: null } },
      _avg: { responseTime: true },
    });

    const avgResponseTimeMs =
      typeof avgAgg._avg.responseTime === "number"
        ? Number(avgAgg._avg.responseTime)
        : null;

    const lastResponse = await prisma.responses.findFirst({
      where: { questionId: id },
      orderBy: { createdAt: "desc" },
      select: { createdAt: true },
    });

    //* 3. Calcular correctCount: obtener opciones correctas y contar respuestas que seleccionaron esas opciones
    const correctOptions = await prisma.question_options.findMany({
      where: { questionId: id, correct: true },
      select: { id: true },
    });

    let correctCount = 0;
    if (correctOptions.length > 0) {
      const correctIds = correctOptions.map((o) => o.id);
      correctCount = await prisma.responses.count({
        where: { questionId: id, selectedOptionId: { in: correctIds } },
      });
    }

    const correctRate =
      responsesCount > 0 ? (correctCount / responsesCount) * 100 : null;

    logger.info("[getStatsQuestion] Fetched question stats", {
      id,
      responsesCount,
      correctCount,
    });

    return {
      questionId: id,
      responsesCount,
      correctCount,
      correctRate: correctRate !== null ? Number(correctRate.toFixed(2)) : null,
      avgResponseTimeMs:
        avgResponseTimeMs !== null
          ? Number(avgResponseTimeMs.toFixed(2))
          : null,
      lastResponseAt:
        lastResponse && lastResponse.createdAt
          ? lastResponse.createdAt.toISOString()
          : null,
    };
  } catch (error) {
    logger.error("[getStatsQuestion] Error computing stats", { id, error });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to compute question stats", error);
  }
}

/**
 * getAreasHierarchy: Obtiene las áreas top-level con sus subáreas.
 * @returns Array de áreas con campo `subareas` (array).
 * @throws DatabaseError si ocurre un error al acceder a la base de datos.
 */
export async function getAreasHierarchy() {
  try {
    //* 1. Traer áreas padre (solo top-level)
    const parentAreas = await prisma.areas.findMany({
      where: { parentAreaID: null },
      select: { id: true, name: true },
      orderBy: { id: "asc" },
    });

    const result = [];

    //* 2. Procesar área por área
    for (const area of parentAreas) {
      //* 2.1 Traer subáreas
      const subareas = await prisma.areas.findMany({
        where: { parentAreaID: area.id },
        select: { id: true, name: true },
        orderBy: { id: "asc" },
      });

      //* 2.2 Mapear subáreas con su conteo individual
      const subareasMapped = [];

      for (const sub of subareas) {
        const subCount = await prisma.questions.count({
          where: { areaId: sub.id },
        });

        subareasMapped.push({
          id: sub.id,
          name: sub.name,
          totalQuestions: subCount,
        });
      }

      //* 3. Push final del área (sin totales del área padre)
      result.push({
        id: area.id,
        name: area.name,
        subareas: subareasMapped,
      });
    }

    logger.info("[getAreasHierarchy] Areas hierarchy built", {
      count: result.length,
    });

    return result;
  } catch (error) {
    logger.error("[getAreasHierarchy] Error fetching areas hierarchy", {
      error,
    });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to fetch areas hierarchy", error);
  }
}
