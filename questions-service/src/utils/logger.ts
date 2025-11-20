type LogLevel = "debug" | "info" | "warn" | "error";

interface LogMeta {
  [key: string]: unknown;
}

interface ChildLogger {
  debug: (message: string, meta?: LogMeta | Error) => void;
  info: (message: string, meta?: LogMeta | Error) => void;
  warn: (message: string, meta?: LogMeta | Error) => void;
  error: (message: string, meta?: LogMeta | Error) => void;
}

const LEVELS: readonly LogLevel[] = ["debug", "info", "warn", "error"];
const LEVEL_COLORS: Record<LogLevel, string> = {
  debug: "\x1b[36m", // cyan
  info: "\x1b[32m", // green
  warn: "\x1b[33m", // yellow
  error: "\x1b[31m", // red
};
const RESET = "\x1b[0m";

const LEVEL_EMOJI: Record<LogLevel, string> = {
  debug: "⌘",
  info: "(⌐⊙_⊙)",
  warn: "(҂◡_◡) ᕤ",
  error: "(╥﹏╥)",
};

const SERVICE = process.env.SERVICE_NAME || "questions-service";
const LOG_LEVEL = (process.env.LOG_LEVEL || "info").toLowerCase();
const THRESHOLD =
  LEVELS.indexOf(LOG_LEVEL as LogLevel) === -1
    ? 1
    : LEVELS.indexOf(LOG_LEVEL as LogLevel);

function maskSensitive(key: string, value: unknown): unknown {
  const SENSITIVE_KEYS = [
    "password",
    "token",
    "authorization",
    "auth",
    "secret",
  ];
  if (SENSITIVE_KEYS.includes(String(key).toLowerCase())) return "***";
  if (typeof value === "string" && value.length > 500)
    return value.slice(0, 500) + "…";
  return value;
}

function serializeMeta(meta: LogMeta | undefined): string {
  if (!meta) return "";
  try {
    const safe = Object.fromEntries(
      Object.entries(meta).map(([k, v]) => [k, maskSensitive(k, v)])
    );
    return "\n    " + JSON.stringify(safe, null, 2).replace(/\n/g, "\n    ");
  } catch {
    return ""; // swallow
  }
}

function formatErrorStack(err: unknown): string {
  if (!err) return "";
  if (err instanceof Error) {
    return `\n    Stack: ${err.stack?.replace(/\n/g, "\n    ")}`;
  }
  return "";
}

function log(level: LogLevel, message: string, meta?: LogMeta | Error): void {
  const idx = LEVELS.indexOf(level);
  if (idx === -1 || idx < THRESHOLD) return;
  const ts = new Date().toISOString();
  const color = LEVEL_COLORS[level];
  const emoji = LEVEL_EMOJI[level];
  const base = `${color}${emoji} [${SERVICE}] ${level.toUpperCase()} ${ts}${RESET}`;
  const metaStr = serializeMeta(
    meta && !(meta instanceof Error) ? meta : undefined
  );
  const errStack = meta instanceof Error ? formatErrorStack(meta) : "";
  const line = `${base} :: ${message}${metaStr}${errStack}`;
  if (level === "error") {
    process.stderr.write(line + "\n");
  } else if (level === "warn") {
    process.stderr.write(line + "\n");
  } else {
    process.stdout.write(line + "\n");
  }
}

export const logger = {
  debug: (msg: string, meta?: LogMeta | Error) => log("debug", msg, meta),
  info: (msg: string, meta?: LogMeta | Error) => log("info", msg, meta),
  warn: (msg: string, meta?: LogMeta | Error) => log("warn", msg, meta),
  error: (msg: string, meta?: LogMeta | Error) => log("error", msg, meta),
  child: (context: LogMeta = {}): ChildLogger => ({
    debug: (m: string, meta?: LogMeta | Error) =>
      logger.debug(m, { ...context, ...(meta instanceof Error ? {} : meta) }),
    info: (m: string, meta?: LogMeta | Error) =>
      logger.info(m, { ...context, ...(meta instanceof Error ? {} : meta) }),
    warn: (m: string, meta?: LogMeta | Error) =>
      logger.warn(m, { ...context, ...(meta instanceof Error ? {} : meta) }),
    error: (m: string, meta?: LogMeta | Error) =>
      logger.error(m, { ...context, ...(meta instanceof Error ? {} : meta) }),
  }),
};

export function logAndExit(err: unknown, code: number = 1): void {
  if (err instanceof Error) {
    logger.error("Process exiting due to fatal error", err);
  } else {
    logger.error("Process exiting due to fatal error", {
      error: String(err),
    });
  }
  setTimeout(() => process.exit(code), 50);
}
