import * as z from "zod";

/*
 * Reglas comunes para reutilización en los schemas
 */
const idRule = z.number().int().positive();
const textRule = z
  .string()
  .min(10, "El texto de la pregunta debe tener al menos 10 caracteres.");

/**
 * Schema de pregunta
 */
const QuestionSchema = z.object({
  text: textRule,
  difficultyId: idRule,
  typeId: idRule,
  subareaId: idRule,
  areaId: idRule.optional(),
  hint: z.string().optional(),
  explanation: z.string().optional(),

  question_options: z
    .array(
      z.object({
        text: z.string().min(1, "El texto de la opción no puede estar vacío."),
        correct: z.boolean(),
        additional: z.string().optional(),
      })
    )
    .refine(
      (opts) => opts.filter((o) => o.correct === true).length === 1,
      "Debe haber exactamente una opción marcada como correcta."
    ),
});

/**
 * Schema para crear una nueva pregunta
 */
export const CreateQuestionSchema = QuestionSchema.safeExtend({
  question_options: QuestionSchema.shape.question_options.length(
    3,
    "La pregunta debe incluir exactamente 3 opciones."
  ),
});

export type CreateQuestionDto = z.infer<typeof CreateQuestionSchema>;

/**
 * Schema para actualizar una pregunta existente
 */
export const UpdateQuestionSchema = QuestionSchema.safeExtend({
  question_options: QuestionSchema.shape.question_options.length(
    3,
    "La pregunta debe incluir exactamente 3 opciones."
  ),
});

export type UpdateQuestionDto = z.infer<typeof UpdateQuestionSchema>;
