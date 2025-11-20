import { Response } from "express";
import { logger } from "../utils/logger";
import { ensureAppError, ValidationError } from "../utils/errors";
import { RequestExtend } from "../types/request";
import { getAllUsers, updateUserPermissions } from "../services/adminService";

/**
 * handleGetAllUsers: Controlador para obtener todos los usuarios.
 */
export async function handleGetAllUsers(req: RequestExtend, res: Response) {
  try {
    const users = await getAllUsers();
    const isEmpty = users.length === 0;

    logger.info(`[${req.path}] Users fetched successfully!`, {
      count: users.length,
      empty: isEmpty,
    });

    const usersMapped = users.map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      roleId: u.roleId,
      isActive: u.isActive,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
    }));

    return res.status(200).json({
      success: true,
      message: isEmpty ? "No users found." : "Users retrieved successfully.",
      data: usersMapped,
    });
  } catch (error) {
    logger.error(`[${req.path}] Error fetching users`, {
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
 * handleUpdateUserPermissions: Controlador para actualizar los permisos de un usuario.
 */
export async function handleUpdateUserPermissions(
  req: RequestExtend,
  res: Response
) {
  try {
    const userId = Number(req.params.id);

    if (!Number.isInteger(userId) || userId <= 0) {
      throw new ValidationError("Invalid user ID", [
        {
          message: "User ID must be a positive integer",
          path: ["params", "id"],
        },
      ]);
    }

    const data = req.validatedData || req.body;

    if (!data.permissions?.length) {
      throw new ValidationError("At least one permission is required");
    }

    const updated = await updateUserPermissions(userId, data);

    logger.info(`[${req.path}] User permissions updated`, {
      userId,
      total: updated.length,
    });

    const updatedMapped = updated.map((up) => ({
      userId: up.userId,
      fileId: up.fileId,
      permissionTypeId: up.permissionTypeId,
      updatedAt: up.updatedAt,
    }));

    return res.status(200).json({
      success: true,
      message: "Permissions updated successfully",
      data: updatedMapped,
    });
  } catch (error) {
    logger.error(`[${req.path}] Error updating permissions`, {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    const appError = ensureAppError(error);

    return res.status(appError.status).json({
      success: false,
      error: {
        code: appError.code,
        message: appError.message,
      },
    });
  }
}
