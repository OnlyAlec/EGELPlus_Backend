const LEVELS = ["debug", "info", "warn", "error"];
const LEVEL_COLORS = {
  debug: "\x1b[36m", // cyan
  info: "\x1b[32m", // green
  warn: "\x1b[33m", // yellow
  error: "\x1b[31m", // red
};
const RESET = "\x1b[0m";

const LEVEL_EMOJI = {
  debug: "⌘",
  info: "(⌐⊙_⊙)",
  warn: "(҂◡_◡) ᕤ",
  error: "(╥﹏╥)",
};

const SERVICE = process.env.SERVICE_NAME || "auth-service";
const LOG_LEVEL = (process.env.LOG_LEVEL || "info").toLowerCase();
const THRESHOLD =
  LEVELS.indexOf(LOG_LEVEL) === -1 ? 1 : LEVELS.indexOf(LOG_LEVEL);

function maskSensitive(key, value) {
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

function serializeMeta(meta) {
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

function formatErrorStack(err) {
  if (!err) return "";
  if (err instanceof Error) {
    return `\n    Stack: ${err.stack?.replace(/\n/g, "\n    ")}`;
  }
  return "";
}

function log(level, message, meta) {
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
    console.log(line + "\n");
  } else if (level === "warn") {
    process.stderr.write(line + "\n");
    console.log(line + "\n");
  } else {
    process.stdout.write(line + "\n");
    console.log(line + "\n");
  }
}

export const logger = {
  debug: (msg, meta) => log("debug", msg, meta),
  info: (msg, meta) => log("info", msg, meta),
  warn: (msg, meta) => log("warn", msg, meta),
  error: (msg, meta) => log("error", msg, meta),
  child: (context = {}) => ({
    debug: (m, meta) => logger.debug(m, { ...context, ...meta }),
    info: (m, meta) => logger.info(m, { ...context, ...meta }),
    warn: (m, meta) => logger.warn(m, { ...context, ...meta }),
    error: (m, meta) => logger.error(m, { ...context, ...meta }),
  }),
};

export function logAndExit(err, code = 1) {
  logger.error("Process exiting due to fatal error", err);
  setTimeout(() => process.exit(code), 50);
}
