import express from "express";
import { logger } from "../utils/logger";
import { handleGetAllUsers } from "../controllers/adminController";

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

/**
 * @swagger
 * /admin:
 *   get:
 *     tags: [Admin]
 *     summary: Get all users
 *     description: Returns a list of all users
 */
router.get("/", handleGetAllUsers);

export default router;
