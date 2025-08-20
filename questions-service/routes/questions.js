const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Questions
 *     description: Manage questions and related resources
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * Simple JWT-presence middleware.
 * Replace with real verification (e.g., Firebase Admin) as needed.
 */
function jwtRequired(req, res, next) {
  const auth = req.headers['authorization'] || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing or invalid JWT' });
  }
  // TODO: validate token (Firebase Admin, etc.) and attach decoded info to req.user
  req.token = token;
  next();
}

/**
 * @swagger
 * /questions:
 *   get:
 *     tags: [Questions]
 *     summary: List all questions
 *     description: Returns a list of all questions. Requires a valid JWT Bearer token in the Authorization header.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Questions fetched successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/', jwtRequired, (req, res) => {
  res.send('Get all questions endpoint!');
});

/**
 * @swagger
 * /questions/stats:
 *   get:
 *     tags: [Questions]
 *     summary: Get questions statistics
 *     description: Returns aggregated statistics for questions (e.g., counts by status/area). Requires a valid JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Statistics fetched successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/stats', jwtRequired, (req, res) => {
  res.send('Stats questions endpoint!');
});

/**
 * @swagger
 * /questions/by-area/{id_area}:
 *   get:
 *     tags: [Questions]
 *     summary: List questions by area
 *     description: Returns questions belonging to the specified area. Requires a valid JWT.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_area
 *         required: true
 *         schema:
 *           type: string
 *         description: Area identifier
 *     responses:
 *       200:
 *         description: Questions by area fetched successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/by-area/:id_area', jwtRequired, (req, res) => {
  res.send('Get questions by area endpoint!');
});

/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     tags: [Questions]
 *     summary: Get a question by ID
 *     description: Returns the question that matches the provided ID. Requires a valid JWT.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question identifier
 *     responses:
 *       200:
 *         description: Question fetched successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/:id', jwtRequired, (req, res) => {
  res.send('Get specific question endpoint!');
});

/**
 * @swagger
 * /questions:
 *   post:
 *     tags: [Questions]
 *     summary: Create a new question
 *     description: Creates a new question. Requires a valid JWT.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Question created successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.post('/', jwtRequired, (req, res) => {
  res.send('Create question endpoint!');
});

/**
 * @swagger
 * /questions/{id}:
 *   put:
 *     tags: [Questions]
 *     summary: Update an existing question
 *     description: Updates the question that matches the provided ID. Requires a valid JWT.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question identifier
 *     responses:
 *       200:
 *         description: Question updated successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.put('/:id', jwtRequired, (req, res) => {
  res.send('Update question endpoint!');
});

/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *     tags: [Questions]
 *     summary: Delete a question
 *     description: Deletes the question that matches the provided ID. Requires a valid JWT.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Question identifier
 *     responses:
 *       200:
 *         description: Question deleted successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.delete('/:id', jwtRequired, (req, res) => {
  res.send('Delete question endpoint!');
});

module.exports = router;