import express from "express";
import { logger } from "../utils/logger";
import { validateRequest } from "../middleware/validateRequest";
import {
  verifyTokenPresent,
  verifyPasetoToken,
} from "../middleware/authMiddleware";
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

router.use(verifyTokenPresent, verifyPasetoToken);

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
 *     description: Retrieve a list of all questions available in the system. The response includes details such as area, subarea, difficulty, type, and options for each question.
 *     responses:
 *       200:
 *         description: A list of questions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       area:
 *                         type: integer
 *                       subarea:
 *                         type: string
 *                       text:
 *                         type: string
 *                       difficulty:
 *                         type: string
 *                       hint:
 *                         type: string
 *                       explanation:
 *                         type: string
 *                       type:
 *                         type: string
 *                       options:
 *                         type: array
 *       500:
 *         description: Internal server error
 */
router.get("/", handleGetAllQuestions);

/**
 * @swagger
 * /questions:
 *   post:
 *     tags: [Questions]
 *     summary: Create a new question
 *     description: Create a new question with the provided details. Requires a valid payload matching the creation schema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateQuestion'
 *     responses:
 *       201:
 *         description: Question created successfully.
 *       400:
 *         description: Validation error.
 *       500:
 *         description: Internal server error.
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
 *     description: Update an existing question identified by its ID. Requires a valid payload matching the update schema.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateQuestion'
 *     responses:
 *       200:
 *         description: Question updated successfully.
 *       400:
 *         description: Validation error or invalid ID.
 *       404:
 *         description: Question not found.
 *       500:
 *         description: Internal server error.
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
 *     description: Delete an existing question identified by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question to delete.
 *     responses:
 *       200:
 *         description: Question deleted successfully.
 *       400:
 *         description: Invalid ID.
 *       404:
 *         description: Question not found.
 *       500:
 *         description: Internal server error.
 */
router.delete("/:id", handleDeleteQuestion);

/**
 * @swagger
 * /questions/by-area/{area}:
 *   get:
 *     tags: [Questions]
 *     summary: Get questions by area name
 *     description: Retrieve a list of questions filtered by the specified area name (case-insensitive).
 *     parameters:
 *       - in: path
 *         name: area
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the area to filter by.
 *     responses:
 *       200:
 *         description: A list of questions for the specified area.
 *       500:
 *         description: Internal server error.
 */
router.get("/by-area/:area", handleGetQuestionsByString);

/**
 * @swagger
 * /questions/{id}/stats:
 *   get:
 *     tags: [Questions]
 *     summary: Get statistics for a question
 *     description: Retrieve statistical metrics for a specific question, such as response count, correct rate, and average response time.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the question.
 *     responses:
 *       200:
 *         description: Statistics for the question.
 *       400:
 *         description: Invalid ID.
 *       404:
 *         description: Question not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/:id/stats", handleGetQuestionStats);

/**
 * @swagger
 * /questions/areas:
 *   get:
 *     tags: [Questions]
 *     summary: Get areas with subareas
 *     description: Retrieve the hierarchy of areas, including their respective subareas.
 *     responses:
 *       200:
 *         description: A list of areas with subareas.
 *       500:
 *         description: Internal server error.
 */
router.get("/areas", handleGetAreasHierarchy);

export default router;
