/**
 * Tipo para las opciones de una pregunta.
 */
export type QuestionOption = {
  text: string;
  correct: boolean;
  additional: string | null;
};

/**
 * Tipo genérico para las relaciones que solo exponen el nombre.
 */
export type RelatedName = {
  name: string;
};

/**
 * Tipo que representa una pregunta con sus relaciones incluidas,
 * tal como se obtiene de la base de datos.
 */
export type QuestionWithDetails = {
  id: number;
  text: string;
  hint: string | null;
  explanation: string | null;
  approved: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  userId: number | null;
  areaId: number | null;
  difficultyId: number;
  typeId: number;

  areas: RelatedName | null;
  difficulty: RelatedName;
  question_types: RelatedName;
  question_options: QuestionOption[];
};
