import { Request } from "express";

/**
 * Extended Request type with validatedData property
 */
export interface RequestExtend extends Request {
  validatedData?: Record<string, unknown>;
}
