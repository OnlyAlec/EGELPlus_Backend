import express from "express";
import { logger } from "../utils/logger";

const router = express.Router();

router.use((req, _res, next) => {
  logger.info("Admin route accessed", {
    path: req.originalUrl,
    method: req.method,
  });
  next();
});

/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Operations for Admin endpoints
 */

export default router;
