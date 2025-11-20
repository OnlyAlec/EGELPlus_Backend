import { Response } from "express";
import { logger } from "../utils/logger";
import {
  DatabaseError,
  ensureAppError,
  ValidationError,
} from "../utils/errors";
import { RequestExtend } from "../types/request";
import { getAllUsers } from "../services/adminService";

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
