import express from "express";

import { specs, swaggerUi } from "./config/swagger.js";
import authRouter from "./routes/auth.js";
import { logger } from "./utils/logger.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * CORS
app.use((req, res, next) => {
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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/health", (req, res) => {
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
app.use((error, req, res) => {
  logger.error("Request error", {
    error: error.message,
    path: req.originalUrl,
    method: req.method,
  });

  res.status(error.status || 500).json({
    error: {
      message: error.message || "Ups.. (⊙＿⊙')",
      status: error.status || 500,
      timestamp: new Date().toISOString(),
    },
  });
});

app.all("/*splat", (req, res) => {
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
