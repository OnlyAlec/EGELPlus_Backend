import express from "express";
import { logger } from "../utils/logger";
import { validateRequest } from "../middleware/validateRequest";
import { UpdateUserPermissionsSchema } from "../validators/adminSchema";
import {
  handleGetAllUsers,
  handleUpdateUserPermissions,
} from "../controllers/adminController";

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

/**
 * @swagger
 * /admin/users/{id}/permissions:
 *   put:
 *     tags: [Admin]
 *     summary: Update user permissions
 *     description: Updates the permissions of a specific user
 */
router.put(
  "/users/:id/permissions",
  validateRequest(UpdateUserPermissionsSchema, "/users/:id/permissions"),
  handleUpdateUserPermissions
);

export default router;
