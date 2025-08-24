import Joi from "joi";

import { ValidationError } from "../utils/errors.js";

export const ALLOWED_ROLES = [1, 2];

const userCreateSchema = Joi.object({
  name: Joi.string().min(2).max(80).trim().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).max(128).required(),
  role: Joi.number()
    .valid(...ALLOWED_ROLES)
    .default(2),
});

export function validateUserCreate(payload) {
  const { value, error } = userCreateSchema.validate(payload, {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  });
  if (error) {
    throw new ValidationError(
      "Invalid user data",
      error.details.map((d) => ({ message: d.message, path: d.path }))
    );
  }
  return value;
}

export class User {
  constructor({ uidFirebase = null, email, name, role }) {
    this.uidFirebase = uidFirebase;
    this.email = email;
    this.name = name;
    this.role = role;
  }
}

export function buildUserEntity(createCmd, { uidFirebase }) {
  return new User({
    uidFirebase,
    email: createCmd.email,
    name: createCmd.name,
    role: createCmd.role,
  });
}
