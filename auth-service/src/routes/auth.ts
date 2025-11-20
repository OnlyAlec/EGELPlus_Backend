import express from "express";
import { logger } from "../utils/logger";
import { validateRequest } from "../middleware/validateRequest";
import { verifyAuthHeader } from "../middleware/authMiddleware";
import { LoginSchema, RegisterSchema } from "../validators/authSchema";
import {
  handleLoginUser,
  handleLogoutUser,
  handleRegisterUser,
} from "../controllers/authController";

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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "alice@example.com"
 *               password:
 *                 type: string
 *                 example: "P@ssw0rd!"
 *     responses:
 *       200:
 *         description: Logged in successfully; JWT returned.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           example: "Alice Gomez"
 *                         email:
 *                           type: string
 *                           format: email
 *                           example: "alice@example.com"
 *                         isActive:
 *                           type: boolean
 *                           example: true
 *                         roleId:
 *                           type: integer
 *                           example: 1
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: "2023-10-01T12:00:00Z"
 *                     token:
 *                       type: string
 *                       description: JWT Access Token
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Invalid credentials.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: "UNAUTHORIZED"
 *                     message:
 *                       type: string
 *                       example: "Invalid credentials"
 */
router.post("/login", validateRequest(LoginSchema, "/login"), handleLoginUser);

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
 *                 description: User password. Must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).
 *                 example: "P@ssw0rd!"
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Alice Gomez"
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: "alice@example.com"
 *                     isActive:
 *                       type: boolean
 *                       example: true
 *                     roleId:
 *                       type: integer
 *                       example: 1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2023-10-01T12:00:00Z"
 *       400:
 *         description: Bad request — validation failed for the request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: "VALIDATION_ERROR"
 *                     message:
 *                       type: string
 *                       example: "Validation error: name must be at least 3 characters"
 *       409:
 *         description: Conflict — user with this email already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: "CONFLICT_ERROR"
 *                     message:
 *                       type: string
 *                       example: "User with this email already exists"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: "INTERNAL_SERVER_ERROR"
 *                     message:
 *                       type: string
 *                       example: "Internal server error"
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Logged out successfully"
 *       401:
 *         description: Unauthorized - Missing or invalid JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: "UNAUTHORIZED"
 *                     message:
 *                       type: string
 *                       example: "No token provided"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: object
 *                   properties:
 *                     code:
 *                       type: string
 *                       example: "INTERNAL_SERVER_ERROR"
 *                     message:
 *                       type: string
 *                       example: "Internal server error"
 */
router.post("/logout", verifyAuthHeader, handleLogoutUser);

export default router;
