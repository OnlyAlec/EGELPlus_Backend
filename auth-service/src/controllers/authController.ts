import { Response } from "express";
import { createUser } from "../services/authService";
import { ensureAppError } from "../utils/errors";
import { RequestExtend } from "../types/request";

export async function handleRegisterUser(req: RequestExtend, res: Response) {
  try {
    const { name, email, password } = req.validatedData || req.body;
    const newUser = await createUser({ name, email, password });

    res.status(201).json({
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
    const appError = ensureAppError(error);
    res.status(appError.status).json({
      success: false,
      error: {
        code: appError.code,
        message: appError.message,
      },
    });
  }
}
