import { logger } from "../utils/logger";
import { prisma } from "../config/prisma";
import {
  DatabaseError,
  NotFoundError,
  ConflictError,
  AppError,
} from "../utils/errors";

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
