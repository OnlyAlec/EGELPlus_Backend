import express from "express";
import { logger } from "../utils/logger";
import { validateRequest } from "../middleware/validateRequest";
import { RegisterSchema } from "../validators/authSchema";
import { handleRegisterUser } from "../controllers/authController";

const router = express.Router();

router.use((req, _res, next) => {
  logger.info("Auth route accessed", {
    path: req.originalUrl,
    method: req.method,
  });
  next();
});

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
router.get("/profile", (req, res) => {
  res.send("Profile endpoint!");
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
router.get("/verify", (req, res) => {
  res.send("Verify endpoint!");
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
router.post("/login", (req, res) => {
  res.send("Login endpoint!");
});

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Register a new user
 *     description: Creates a new user account. Does not require authentication.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 3
 *                 description: Full name of the user (minimum 3 characters).
 *                 example: "Alice Gomez"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Valid email address for the user.
 *                 example: "alice@example.com"
 *               password:
 *                 type: string
 *                 description: User password. Do not include in responses. Apply your server-side strength rules.
 *                 example: "P@ssw0rd!"
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: Newly created user id.
 *                   example: "clijx0a1b0000xyz1234"
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: "alice@example.com"
 *       400:
 *         description: Bad request — validation failed for the request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Validation error: name must be at least 3 characters"
 *       409:
 *         description: Conflict — user with this email already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User with this email already exists"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
router.post(
  "/register",
  validateRequest(RegisterSchema, "/register"),
  handleRegisterUser
);

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
router.post("/logout", (req, res) => {
  res.send("Logout endpoint!");
});

export default router;
