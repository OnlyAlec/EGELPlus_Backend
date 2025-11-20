import { Response } from "express";
import { logger } from "../utils/logger";
import {
  DatabaseError,
  ensureAppError,
  ValidationError,
} from "../utils/errors";
import { RequestExtend } from "../types/request";
import {
  getAllQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuestionsByString,
  getStatsQuestion,
  getAreasHierarchy,
} from "../services/questionsService";

/**
 * handleGetAllQuestions: Controlador para obtener todas las preguntas.
 */
export async function handleGetAllQuestions(req: RequestExtend, res: Response) {
  try {
    const questions = await getAllQuestions();
    const isEmpty = questions.length === 0;

    logger.info(`[${req.path}] Questions fetched successfully!`, {
      count: questions.length,
      empty: isEmpty,
    });

    const questionsMapped = questions.map((q) => ({
      id: q.id,
      area: q.areas?.parentAreaID,
      subarea: q.areas?.name,
      text: q.text,
      difficulty: q.difficulty.name,
      hint: q.hint,
      explanation: q.explanation,
      type: q.question_types.name,
      options: q.question_options,
    }));

    return res.status(200).json({
      success: true,
      message: isEmpty
        ? "No questions found."
        : "Questions retrieved successfully.",
      data: questionsMapped,
    });
  } catch (error) {
    logger.error(`[${req.path}] Failed fetching questions`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    const errorBody: any = {
      code: appError.code,
      message: appError.message,
    };
    if ((appError as any).details)
      errorBody.details = (appError as any).details;

    return res.status(appError.status).json({
      success: false,
      error: errorBody,
    });
  }
}

/**
 * handleCreateQuestion: Controlador para crear una nueva pregunta.
 */
export async function handleCreateQuestion(req: RequestExtend, res: Response) {
  try {
    const data = req.validatedData || req.body;
    const newQuestion = await createQuestion(data);

    if (!newQuestion) {
      throw new DatabaseError("Error at creation question");
    }

    logger.info(`[${req.path}] Question created!`, {
      id: newQuestion.id,
      text: newQuestion.text,
    });

    const questionMapped = {
      id: newQuestion.id,
      area: newQuestion?.areas?.parentAreaID || null,
      subarea: newQuestion?.areas?.name || null,
      text: newQuestion.text,
      difficulty: newQuestion?.difficulty.name || null,
      hint: newQuestion?.hint || null,
      explanation: newQuestion?.explanation || null,
      options: newQuestion.question_options,
    };
    return res.status(201).json({
      success: true,
      data: questionMapped,
    });
  } catch (error) {
    logger.error(`[${req.path}] Error creating question`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    const errorBody: any = {
      code: appError.code,
      message: appError.message,
    };
    if ((appError as any).details)
      errorBody.details = (appError as any).details;

    return res.status(appError.status).json({
      success: false,
      error: errorBody,
    });
  }
}

/**
 * handleUpdateQuestion: Controlador para actualizar una pregunta existente.
 */
export async function handleUpdateQuestion(req: RequestExtend, res: Response) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      logger.warn(`[${req.path}] Invalid 'id' parameter`, {
        id: req.params.id,
      });
      throw new ValidationError(
        "'id' path parameter must be a positive integer",
        [{ message: "Invalid id parameter", path: ["params", "id"] }]
      );
    }

    const data = req.validatedData || req.body;
    const updatedQuestion = await updateQuestion(id, data);

    logger.info(`[${req.path}] Question updated successfully!`, {
      id: updatedQuestion.id,
      text: updatedQuestion.text,
    });

    return res.status(200).json({
      success: true,
      data: updatedQuestion,
    });
  } catch (error) {
    logger.error(`[${req.path}] Error updating question`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    const errorBody: any = {
      code: appError.code,
      message: appError.message,
    };
    if ((appError as any).details)
      errorBody.details = (appError as any).details;

    return res.status(appError.status).json({
      success: false,
      error: errorBody,
    });
  }
}

/**
 * handleDeleteQuestion: Controlador para eliminar una pregunta por su ID.
 */
export async function handleDeleteQuestion(req: RequestExtend, res: Response) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      logger.warn(`[${req.path}] Invalid 'id' parameter`, {
        id: req.params.id,
      });
      throw new ValidationError("ID must be a Positive Integer");
    }

    const result = await deleteQuestion(id);

    logger.info(`[${req.path}] Question deleted successfully!`, { id });

    return res.status(200).json({
      success: true,
      message: "Question deleted successfully!",
      data: result,
    });
  } catch (error) {
    logger.error(`[${req.path}] Error deleting question`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    const errorBody: any = {
      code: appError.code,
      message: appError.message,
    };
    if ((appError as any).details)
      errorBody.details = (appError as any).details;

    return res.status(appError.status).json({
      success: false,
      error: errorBody,
    });
  }
}

/**
 * handleGetQuestionsByString: Controlador para obtener preguntas filtradas por área o subárea.
 */
export async function handleGetQuestionsByString(
  req: RequestExtend,
  res: Response
) {
  try {
    const areaName = req.params.area;

    const questions = await getQuestionsByString(areaName);
    const isEmpty = questions.length === 0;

    logger.info(`[${req.path}] Questions by name fetched successfully!`, {
      area: areaName,
      count: questions.length,
      empty: isEmpty,
    });

    const questionsMapped = questions.map((q) => ({
      id: q.id,
      area: q.areas?.parentAreaID || null,
      subarea: q.areas?.name || null,
      text: q.text,
      difficulty: q.difficulty?.name || null,
      hint: q.hint || null,
      explanation: q.explanation || null,
      options: q.question_options,
    }));

    return res.status(200).json({
      success: true,
      message: isEmpty
        ? "No questions found for this name."
        : "Questions retrieved successfully.",
      data: questionsMapped,
    });
  } catch (error) {
    logger.error(`[${req.path}] Failed fetching questions by name`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    const errorBody: any = {
      code: appError.code,
      message: appError.message,
    };

    if ((appError as any).details) {
      errorBody.details = (appError as any).details;
    }

    return res.status(appError.status).json({
      success: false,
      error: errorBody,
    });
  }
}

/**
 * handleGetQuestionStats: Controlador para obtener estadísticas de una pregunta.
 */
export async function handleGetQuestionStats(
  req: RequestExtend,
  res: Response
) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      logger.warn(`[${req.path}] Invalid 'id' parameter`, {
        id: req.params.id,
      });
      throw new ValidationError(
        "'id' path parameter must be a positive integer",
        [{ message: "Invalid id parameter", path: ["params", "id"] }]
      );
    }

    const stats = await getStatsQuestion(id);

    return res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    logger.error(`[${req.path}] Error fetching question stats`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    const errorBody: any = {
      code: appError.code,
      message: appError.message,
    };
    if ((appError as any).details)
      errorBody.details = (appError as any).details;

    return res.status(appError.status).json({
      success: false,
      error: errorBody,
    });
  }
}

/**
 * handleGetAreasHierarchy: Controlador para obtener áreas con sus subáreas.
 */
export async function handleGetAreasHierarchy(
  req: RequestExtend,
  res: Response
) {
  try {
    const areas = await getAreasHierarchy();
    const isEmpty = areas.length === 0;

    logger.info(`[${req.path}] Areas hierarchy fetched successfully!`, {
      count: areas.length,
      empty: isEmpty,
    });

    const areasMapped = areas.map((a) => ({
      id: a.id,
      name: a.name,
      subareas: a.subareas,
    }));

    return res.status(200).json({
      success: true,
      message: isEmpty
        ? "No areas found."
        : "Areas hierarchy retrieved successfully.",
      data: areasMapped,
    });
  } catch (error) {
    logger.error(`[${req.path}] Error fetching areas hierarchy`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    const errorBody: any = {
      code: appError.code,
      message: appError.message,
    };
    if ((appError as any).details)
      errorBody.details = (appError as any).details;

    return res.status(appError.status).json({
      success: false,
      error: errorBody,
    });
  }
}
