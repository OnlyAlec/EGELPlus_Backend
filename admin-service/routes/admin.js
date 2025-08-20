const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Administrator
 *     description: 
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
 * /admin/users:
 *   get:
 *     tags: [Administrator]
 *     summary: 
 *     description: 
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/users', jwtRequired, (req, res) => {
  res.send('All users endpoint!');
});

/**
 * @swagger
 * /admin/users/{id}/permissions:
 *   put:
 *     tags: [Administrator]
 *     summary: 
 *     description: 
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User identifier
 *     responses:
 *       200:
 *         description: 
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.put('/users/:id/permissions', jwtRequired, (req, res) => {
  res.send('Set permissions to user endpoint!');
});

/**
 * @swagger
 * /admin/questions/all:
 *   get:
 *     tags: [Administrator]
 *     summary: 
 *     description: 
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/questions/all', jwtRequired, (req, res) => {
  res.send('Get all questions endpoint!');
});

/**
 * @swagger
 * /admin/questions/{id}:
 *   delete:
 *     tags: [Administrator]
 *     summary: 
 *     description: 
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description:
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.delete('/questions/:id', jwtRequired, (req, res) => {
  res.send('Delete question [User] endpoint!');
});

/**
 * @swagger
 * /admin/reports:
 *   get:
 *     tags: [Administrator]
 *     summary: 
 *     description: 
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/reports', jwtRequired, (req, res) => {
  res.send('Reports questions endpoint!');
});

module.exports = router;