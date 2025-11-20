interface AppErrorOptions {
  code?: string;
  status?: number;
  cause?: unknown;
}

interface ValidationDetail {
  message: string;
  path: (string | number)[];
}

export class AppError extends Error {
  public readonly code: string;
  public readonly status: number;
  public cause?: unknown;

  constructor(
    message: string,
    { code = "APP_ERROR", status = 500, cause }: AppErrorOptions = {}
  ) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.status = status;
    if (cause) this.cause = cause;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  public readonly details: ValidationDetail[];

  constructor(
    message: string = "Validation failed",
    details: ValidationDetail[] = []
  ) {
    super(message, { code: "VALIDATION_ERROR", status: 400 });
    this.details = details;
  }
}

export class ConflictError extends AppError {
  constructor(message: string = "Resource conflict") {
    super(message, { code: "CONFLICT", status: 409 });
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, { code: "NOT_FOUND", status: 404 });
  }
}

export class ExternalServiceError extends AppError {
  constructor(message: string = "Upstream service error", cause?: unknown) {
    super(message, { code: "EXTERNAL_SERVICE", status: 502, cause });
  }
}

export class DatabaseError extends AppError {
  constructor(message: string = "Database error", cause?: unknown) {
    super(message, { code: "DB_ERROR", status: 500, cause });
  }
}

export function ensureAppError(err: unknown): AppError {
  if (err instanceof AppError) return err;
  return new AppError("Unexpected error", { cause: err });
}
