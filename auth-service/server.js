import app from "./src/app.js";
import { logger, logAndExit } from "./src/utils/logger.js";

const PORT = process.env.PORT || 3001;
const startServer = () => {
  try {
    const server = app.listen(PORT, () => {
      logger.info(`[Auth Service] Server running on port ${PORT}`);
      logger.info(`\tDocs: http://localhost:${PORT}/api-docs`);
      logger.info(`\tHealth: http://localhost:${PORT}/health`);
    });

    const gracefulShutdown = (signal) => {
      logger.warn("[Auth Service] Byeeee! (╥﹏╥)", { signal });

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
    logger.error("[Auth Service] Failed to start server", error);
    logAndExit(error);
  }
};

process.on("uncaughtException", (error) => {
  logger.error("[Auth Service] Fatal error ┬──┬ ノ(ò_óノ)", error);
  logAndExit(error);
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error("[Auth Service] Unhandled Rejection", { reason, promise });
  logAndExit(reason);
});

startServer();

export { startServer };
