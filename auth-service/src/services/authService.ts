import { prisma } from "../config/prisma";
import { hash as bcryptHash, compare } from "bcrypt";
import { V4 } from "paseto";
import {
  ConflictError,
  DatabaseError,
  UnauthorizedError,
} from "../utils/errors";
import { SALT, USER_ROLE_ID } from "../config/constants";
import { LoginUserDto, RegisterUserDto } from "../validators/authSchema";
import { logger } from "../utils/logger";
import { createPrivateKey } from "crypto";

export async function createUser(userData: RegisterUserDto) {
  const { name, email, password } = userData;

  //* 1. Verificar si email esta registrado
  const existingUserEmail = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUserEmail) {
    logger.warn("Attempt to register with existing email", { email });
    throw new ConflictError("User already exists with this email");
  }

  //* 2. Obtener Rol por defecto
  const role = await prisma.roles.findFirst({
    where: {
      name: "user",
    },
  });

  //* 3. Hashear contraseña
  const pwdHash = await bcryptHash(password, SALT);

  //* 4. Preparar datos y guardar registro
  const data = {
    name,
    email,
    isActive: true,
    roleId: role?.id || USER_ROLE_ID,
  } as const;

  const created = await prisma.users.create({
    data: {
      ...data,
      password: pwdHash,
    },
  });

  if (!created) {
    logger.error("Failed to create user in database", { email, name });
    throw new DatabaseError("Failed to create user");
  }

  logger.info("User created successfully", {
    userId: created.id,
    email: created.email,
  });

  return created;
}

export async function loginUser(userData: LoginUserDto) {
  const { email, password } = userData;

  //* 1. Valida si el correo esta registrado
  const validUser = await prisma.users.findFirst({
    where: {
      email: email,
    },
    include: {
      roles: {
        select: { name: true },
      },
    },
  });

  if (!validUser) {
    logger.warn("Login attempt with non-existent email", { email });
    throw new UnauthorizedError("Invalid credentials");
  }

  //* 2. Valida si la contraseña es la correcta
  const isValidPassword = await compare(password, validUser.password);

  if (!isValidPassword) {
    logger.warn("Login attempt with invalid password", { email });
    throw new UnauthorizedError("Invalid credentials");
  }

  if (!validUser.isActive) {
    logger.warn("Login attempt with inactive user", { email });
    throw new UnauthorizedError("User is inactive");
  }

  //* 3. Prepara la data para el PASETO
  const payload = {
    sub: validUser.id.toString(),
    name: validUser.name,
    role: validUser.roles?.name || "user",
  };

  //* 4. Construye el PASETO
  const privateKey = process.env.PASETO_PRIVATE_KEY;

  if (!privateKey) {
    logger.error("PASETO_PRIVATE_KEY is not defined");
    throw new Error("Internal server configuration error");
  }

  const privateKeyPem = Buffer.from(privateKey, "base64").toString("utf-8");
  const keyObject = createPrivateKey(privateKeyPem);

  const token = await V4.sign(payload, keyObject, {
    expiresIn: "2h",
  });

  //* 5. Regresa el token
  logger.info("User logged in successfully", { userId: validUser.id });

  return {
    user: validUser,
    token,
  };
}
