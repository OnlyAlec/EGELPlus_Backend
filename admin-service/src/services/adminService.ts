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

/**
 * updateUserPermissions: actualiza varios permisos de un usuario
 * @param userId ID del usuario a actualizar
 * @param dto Data transfer object con los permisos a actualizar
 * @returns lista de permisos actualizados/creados
 * @throws NotFoundError si el usuario o alguna entidad relacionada no existe
 * @throws DatabaseError si ocurre un error al acceder a la base de datos
 */
export async function updateUserPermissions(
  userId: number,
  dto: UpdateUserPermissionsDto
) {
  try {
    //* 1. Validar usuario
    await ensureUserExists(userId);

    //* 2. Validar FK de cada permiso (books y permission_types)
    for (const perm of dto.permissions) {
      await ensureEntityExists(prisma.books, perm.fileId, "File (book)");
      await ensureEntityExists(
        prisma.permission_types,
        perm.permissionTypeId,
        "Permission type"
      );
    }

    //* 3. Transacción
    const updated = await prisma.$transaction(async (tx) => {
      const results = [];

      for (const perm of dto.permissions) {
        const existingPerms = await tx.permissions.findMany({
          where: { userId, fileId: perm.fileId },
        });

        if (existingPerms.length === 0) {
          // Crear permiso nuevo
          const created = await tx.permissions.create({
            data: {
              userId,
              fileId: perm.fileId,
              permissionTypeId: perm.permissionTypeId,
            },
          });
          results.push(created);
        } else if (existingPerms.length === 1) {
          // Actualizar el existente
          const upd = await tx.permissions.update({
            where: { id: existingPerms[0].id },
            data: { permissionTypeId: perm.permissionTypeId },
          });
          results.push(upd);
        } else {
          // Caso raro: duplicados (basura heredada)
          await tx.permissions.deleteMany({
            where: { userId, fileId: perm.fileId },
          });

          // Crear uno limpio
          const recreated = await tx.permissions.create({
            data: {
              userId,
              fileId: perm.fileId,
              permissionTypeId: perm.permissionTypeId,
            },
          });
          results.push(recreated);
        }
      }

      return results;
    });

    logger.info("[updateUserPermissions] Permissions updated", {
      userId,
      updatedCount: updated.length,
    });

    return updated;
  } catch (error) {
    logger.error("[updateUserPermissions] Error updating permissions", {
      error,
    });
    if (error instanceof AppError) throw error;
    throw new DatabaseError("Failed to update user permissions", error);
  }
}
