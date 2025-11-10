import { Response } from "express";
import { createUser } from "../services/authService";
import { ensureAppError } from "../utils/errors";
import { RequestExtend } from "../types/request";
import { logger } from "../utils/logger";

export async function handleRegisterUser(req: RequestExtend, res: Response) {
  try {
    const { name, email, password } = req.validatedData || req.body;
    const newUser = await createUser({ name, email, password });

    logger.info(`[${req.path}] User registered successfully`, {
      userId: newUser.id,
      email: newUser.email,
    });

    return res.status(201).json({
      success: true,
      data: {
        name: newUser.name,
        email: newUser.email,
        isActive: newUser.isActive,
        roleId: newUser.roleId,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    logger.error(`[${req.path}] Error registering user`, {
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
