import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import swaggerJsdoc from "swagger-jsdoc";

import { logger } from "./utils/logger";
import { AppError } from "./utils/errors";
import adminRouter from "./routes/admin";
import { apiReference } from "@scalar/express-api-reference";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Swagger/OpenAPI Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EGEL Plus - Admin Service API",
      version: "1.1.0",
      description:
        "Users, Files and Questions management service for EGEL Plus app in case of Admins",
    },
    servers: [
      {
        url: "http://ulsa.onlyalec.site/egelplus/admin",
        description: "Microservice Admin",
      },
    ],
  },
  apis: [
    process.env.NODE_ENV === 'production'
      ? "./dist/routes/*.js"
      : "./src/routes/*.ts"
  ],};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

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
app.get("/admin/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    service: "admin-service",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// * OpenAPI JSON endpoint - serves the generated spec for Scalar
app.get("/admin/openapi.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// * Scalar API Reference
app.use(
  "/admin/docs",
  apiReference({
    theme: "kepler",
    showToolbar: "never",
    hideClientButton: true,
    telemetry: false,
    isLoading: true,
    documentDownloadType: "json",
    url: "/egelplus/admin/openapi.json",
  })
);

// * Routes
app.use("/admin", adminRouter);

// * Catch errors
const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  const appError = error instanceof AppError ? error : null;

  logger.error("Request error", {
    error: error.message,
    path: req.originalUrl,
    method: req.method,
  });

  const body: any = {
    message: error.message || "Ups.. (⊙＿⊙')",
    status: appError?.status || 500,
    timestamp: new Date().toISOString(),
  };
  if (appError && (appError as any).code) body.code = (appError as any).code;
  if (appError && (appError as any).details) body.details = (appError as any).details;

  res.status(appError?.status || 500).json({ error: body });
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
