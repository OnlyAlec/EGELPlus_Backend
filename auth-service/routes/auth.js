const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authentication and user session endpoints
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


/**
 * @swagger
 * /auth/profile:
 *   get:
 *     tags: [Auth]
 *     summary: Get authenticated user's profile
 *     description: Returns the profile of the currently authenticated user. Requires a valid JWT Bearer token in the Authorization header.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile fetched successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/profile', jwtRequired, (req, res) => {
  res.send('Profile endpoint!');
});

/**
 * @swagger
 * /auth/verify:
 *   get:
 *     tags: [Auth]
 *     summary: Verify JWT and return token details
 *     description: Validates the provided JWT and returns decoded information. Requires a valid JWT Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token is valid.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.get('/verify', jwtRequired, (req, res) => {
  res.send('Verify endpoint!');
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Log in and obtain a JWT
 *     description: Authenticates user credentials and returns a JWT on success. Does not require authentication.
 *     responses:
 *       200:
 *         description: Logged in successfully; JWT returned.
 *       401:
 *         description: Invalid credentials.
 */
router.post('/login', (req, res) => {
  res.send('Login endpoint!');
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register a new user
 *     description: Creates a new user account. Does not require authentication.
 *     responses:
 *       200:
 *         description: User registered successfully.
 */
router.post('/register', jwtRequired, (req, res) => {
  res.send('Register endpoint!');
});

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Log out the current user
 *     description: Invalidates the current session. Requires a valid JWT Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully.
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 */
router.post('/logout', jwtRequired, (req, res) => {
  res.send('Logout endpoint!');
});

module.exports = router;