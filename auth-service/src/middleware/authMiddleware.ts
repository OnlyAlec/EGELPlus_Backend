import { Response, NextFunction } from "express";
import { UnauthorizedError } from "../utils/errors";
import { RequestExtend } from "../types/request";

export const verifyAuthHeader = (
  req: RequestExtend,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(new UnauthorizedError("No token provided"));
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return next(new UnauthorizedError("Invalid token format"));
  }

  const token = parts[1];
  req.token = token;
  next();
};
