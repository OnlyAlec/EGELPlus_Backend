import { Request, Response, NextFunction } from "express";
import { V4 } from "paseto";
import { logger } from "../utils/logger";
import { RequestExtend } from "../types/request";

export const verifyTokenPresent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.warn(`[${req.path}] Missing or invalid Authorization header`);
    return res.status(401).json({
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message: "Authentication token is missing or invalid format",
      },
    });
  }
  next();
};

export const verifyPasetoToken = async (
  req: RequestExtend,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message: "Token not provided",
      },
    });
  }

  try {
    const key = process.env.PASETO_PUBLIC_KEY;

    if (!key) {
      logger.error("PASETO_PUBLIC_KEY is not defined in environment variables");
      throw new Error("Internal Server Error: Configuration missing");
    }

    const payload = await V4.verify(token, key);

    // Attach payload to request for further use if needed
    req.user = payload;

    next();
  } catch (error) {
    logger.error(`[${req.path}] Token verification failed`, {
      error: error instanceof Error ? error.message : String(error),
    });
    return res.status(403).json({
      success: false,
      error: {
        code: "FORBIDDEN",
        message: "Invalid or expired token",
      },
    });
  }
};
