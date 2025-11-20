import { logger } from "../utils/logger";
import { Response, NextFunction } from "express";
import { ZodError, ZodObject } from "zod";
import { ValidationError } from "../utils/errors";
import { RequestExtend } from "../types/request";

export function validateRequest(schema: ZodObject, path: string) {
  return (req: RequestExtend, res: Response, next: NextFunction) => {
    logger.info(`[${path}] Init validation!`);
    try {
      const data = schema.parse(req.body);
      req.validatedData = data;
      logger.info(`[${path}] OK validation!`);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        logger.error(`[${path}] Validation failed`, {
          errorCount: error.issues.length,
          issues: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });

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
      logger.error(`[${path}] Unexpected validation error`, {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      next(error);
    }
  };
}
