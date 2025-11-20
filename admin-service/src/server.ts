import { Server } from "http";
import app from "./app";
import { logger, logAndExit } from "./utils/logger";

const PORT = process.env.PORT || 3004;

const startServer = (): Server | undefined => {
  try {
    const server = app.listen(PORT, () => {
      logger.info(`[Admin Service] Server running on port ${PORT}`);
      logger.info(`\tAPI Reference: http://localhost:${PORT}/admin/docs`);
      logger.info(`\tHealth: http://localhost:${PORT}/admin/health`);
    });

    const gracefulShutdown = (signal: string): void => {
      logger.warn("[Admin Service] Byeeee! (╥﹏╥)", { signal });

      server.close(() => {
        logger.info("\tHTTP server closed");
        process.exit(0);
      });

      setTimeout(() => {
        logger.error("\tCould not close connections in time, force exit");
        process.exit(1);
      }, 30000);
    };

    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));

    return server;
  } catch (error) {
    if (error instanceof Error) {
      logger.error("[Admin Service] Failed to start server", error);
    } else {
      logger.error("[Admin Service] Failed to start server", {
        error: String(error),
      });
    }
    logAndExit(error);
    return undefined;
  }
};

process.on("uncaughtException", (error: Error) => {
  logger.error("[Admin Service] Fatal error ┬──┬ ノ(ò_óノ)", error);
  logAndExit(error);
});

process.on(
  "unhandledRejection",
  (reason: unknown, promise: Promise<unknown>) => {
    logger.error("[Admin Service] Unhandled Rejection", {
      reason: String(reason),
      promise: String(promise),
    });
    logAndExit(reason);
  }
);

startServer();

export { startServer };
