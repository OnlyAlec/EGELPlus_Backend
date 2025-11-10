import { logger } from "../utils/logger";
import { Response, NextFunction } from "express";
import { ZodError, ZodObject } from "zod";
import { ValidationError } from "../utils/errors";
import { RequestExtend } from "../types/request";

export function validateRequest(schema: ZodObject, path: String) {
  return (req: RequestExtend, res: Response, next: NextFunction) => {
    logger.info(`[${path}] Init validation!`);
    try {
      const data = schema.parse(req.body);
      req.validatedData = data;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        logger.error(`[${path}] ${error.issues.length} error/s in validation`);

        const details = error.issues.map((issue) => ({
          message: issue.message,
          path: issue.path.map((p) => String(p)) as (string | number)[],
        }));

        const validationError = new ValidationError(
          "Validation failed",
          details
        );

        res.status(validationError.status).json({
          success: false,
          error: {
            code: validationError.code,
            message: validationError.message,
            details: validationError.details,
          },
        });
        return;
      }
      next(error);
    }
  };
}
