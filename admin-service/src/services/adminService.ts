import { logger } from "../utils/logger";
import { prisma } from "../config/prisma";
import { DatabaseError, NotFoundError, AppError } from "../utils/errors";
import { UpdateUserPermissionsDto } from "../validators/adminSchema";

/**
 * ensureUserExists: valida que el usuario exista
 * @param userId ID del usuario a validar
 * @throws NotFoundError si el usuario no existe
 * @return el usuario encontrado
 */
async function ensureUserExists(userId: number) {
  const user = await prisma.users.findUnique({ where: { id: userId } });

  if (!user) throw new NotFoundError("User not found");
  return user;
}

/**
 * ensureEntityExists: utilidad para FK de files y permission_types
 * @param model Modelo de Prisma a consultar
 * @param id ID de la entidad a validar
 * @param label Etiqueta para mensajes de error
 * @throws NotFoundError si la entidad no existe
 */
async function ensureEntityExists(model: any, id: number, label: string) {
  const exists = await model.findUnique({ where: { id } });

  if (!exists) throw new NotFoundError(`${label} not found`);
}

/**
 * getAllUsers: Obtiene todos los usuarios.
 * @returns
 * @throws DatabaseError si ocurre un error al acceder a la base de datos.
 **/
export async function getAllUsers() {
  try {
    //* 1. Obtener todos los usuarios
    const users = await prisma.users.findMany({
      orderBy: { id: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
        isActive: true,
        roleId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    logger.info("[getAllUsers] Fetched users", {
      count: users.length,
    });

    return users;
  } catch (error) {
    logger.error("[getAllUsers] Error fetching users", { error });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to fetch users", error);
  }
}
