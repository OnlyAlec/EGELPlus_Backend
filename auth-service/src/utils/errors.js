export class AppError extends Error {
  constructor(message, { code = "APP_ERROR", status = 500, cause } = {}) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.status = status;
    if (cause) this.cause = cause;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message = "Validation failed", details = []) {
    super(message, { code: "VALIDATION_ERROR", status: 400 });
    this.details = details;
  }
}

export class ConflictError extends AppError {
  constructor(message = "Resource conflict") {
    super(message, { code: "CONFLICT", status: 409 });
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, { code: "NOT_FOUND", status: 404 });
  }
}

export class ExternalServiceError extends AppError {
  constructor(message = "Upstream service error", cause) {
    super(message, { code: "EXTERNAL_SERVICE", status: 502, cause });
  }
}

export class DatabaseError extends AppError {
  constructor(message = "Database error", cause) {
    super(message, { code: "DB_ERROR", status: 500, cause });
  }
}

export function mapFirebaseError(err) {
  const code = err?.code || "";
  switch (code) {
    case "auth/email-already-in-use":
      return new ConflictError("Email already registered");
    case "auth/invalid-email":
      return new ValidationError("Invalid email format");
    case "auth/weak-password":
      return new ValidationError("Weak password");
    default:
      return new ExternalServiceError("Firebase auth error", err);
  }
}

export function ensureAppError(err) {
  if (err instanceof AppError) return err;
  return new AppError("Unexpected error", { cause: err });
}
