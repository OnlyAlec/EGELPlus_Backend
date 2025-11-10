import { prisma } from "../config/prisma";
import { hash as bcryptHash } from "bcrypt";
import { ConflictError, DatabaseError } from "../utils/errors";
import { SALT, USER_ROLE_ID } from "../config/constants";
import { RegisterUserDto } from "../validators/authSchema";

export async function createUser(userData: RegisterUserDto) {
  const { name, email, password } = userData;

  //* 1. Verificar si email esta registrado
  const existingUserEmail = await prisma.users.findFirst({
    where: {
      email: email,
    },
  });

  if (existingUserEmail) {
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
    throw new DatabaseError("Failed to create user");
  }

  return created;
}
