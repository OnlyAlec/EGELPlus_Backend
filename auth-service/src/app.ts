import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";

import authRouter from "./routes/auth";
import { logger } from "./utils/logger";
import { AppError } from "./utils/errors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

// * General Endpoints
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    service: "auth-service",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// * Routes
app.use("/auth", authRouter);

// * Catch errors
const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  const appError = error instanceof AppError ? error : null;

  logger.error("Request error", {
    error: error.message,
    path: req.originalUrl,
    method: req.method,
  });

  res.status(appError?.status || 500).json({
    error: {
      message: error.message || "Ups.. (⊙＿⊙')",
      status: appError?.status || 500,
      timestamp: new Date().toISOString(),
    },
  });
};

app.use(errorHandler);

app.all("/*splat", (req: Request, res: Response) => {
  res.status(404).json({
    error: {
      message: "༼ つ ╹ ╹ ༽つ Not Found",
      status: 404,
      path: req.originalUrl,
      timestamp: new Date().toISOString(),
    },
  });
});

export default app;
