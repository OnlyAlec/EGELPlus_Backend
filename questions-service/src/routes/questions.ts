import express from "express";
import { logger } from "../utils/logger";
import { validateRequest } from "../middleware/validateRequest";
import {
  CreateQuestionSchema,
  UpdateQuestionSchema,
} from "../validators/questionsSchema";
import {
  handleGetAllQuestions,
  handleCreateQuestion,
  handleUpdateQuestion,
  handleDeleteQuestion,
  handleGetQuestionsByString,
  handleGetQuestionStats,
  handleGetAreasHierarchy,
} from "../controllers/questionsController";

const router = express.Router();

router.use((req, _res, next) => {
  logger.info("Questions route accessed", {
    path: req.originalUrl,
    method: req.method,
  });
  next();
});

/**
 * @swagger
 * tags:
 *   - name: Questions
 *     description: CRUD operations for questions endpoints
 */

/**
 * @swagger
 * /questions:
 *   get:
 *     tags: [Questions]
 *     summary: Get all questions
 *     description: Returns a list of all questions
 */
router.get("/", handleGetAllQuestions);

/**
 * @swagger
 * /questions:
 *   post:
 *     tags: [Questions]
 *     summary: Create a new question
 *     description: Creates a new question
 */
router.post(
  "/",
  validateRequest(CreateQuestionSchema, "/create"),
  handleCreateQuestion
);

/**
 * @swagger
 * /questions/{id}:
 *   put:
 *     tags: [Questions]
 *     summary: Update a question by ID
 *     description: Updates an existing question by its ID
 */
router.put(
  "/:id",
  validateRequest(UpdateQuestionSchema, "/update"),
  handleUpdateQuestion
);

/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *     tags: [Questions]
 *     summary: Delete a question by ID
 *     description: Deletes an existing question by its ID
 */
router.delete("/:id", handleDeleteQuestion);

/**
 * @swagger
 * /questions/by-area/{areaName}:
 *   get:
 *     tags: [Questions]
 *     summary: Get questions by area name
 *     description: Returns a list of questions filtered by area name (case-insensitive). Use the area name as path parameter.
 */
router.get("/by-area/:area", handleGetQuestionsByString);

/**
 * @swagger
 * /questions/{id}/stats:
 *   get:
 *     tags: [Questions]
 *     summary: Get statistics for a question
 *     description: Returns basic metrics for a question such as responses count, correct rate and average response time.
 */
router.get("/:id/stats", handleGetQuestionStats);

/**
 * @swagger
 * /questions/areas:
 *   get:
 *     tags: [Questions]
 *     summary: Get areas with subareas
 *     description: Returns a list of top-level areas each containing their subareas.
 */
router.get("/areas", handleGetAreasHierarchy);

export default router;
