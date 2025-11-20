/**
 * Tipo que representa una pregunta con sus relaciones incluidas,
 * tal como se obtiene de la base de datos.
 */
export type AdminUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  roleId: number;
  createdAt: Date | null;
  updatedAt: Date | null;
};
