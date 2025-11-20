import * as z from "zod";
import {
  LOWERCASE_ERROR,
  MAX_LENGHT_ERROR,
  MIN_LENGHT_ERROR,
  NUMBER_ERROR,
  SPECIAL_ERROR,
  UPPERCASE_ERROR,
} from "../config/constants";

export const RegisterSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z
    .string()
    .min(8, { message: MIN_LENGHT_ERROR })
    .max(20, { message: MAX_LENGHT_ERROR })
    .refine((password) => /[A-Z]/.test(password), {
      message: UPPERCASE_ERROR,
    })
    .refine((password) => /[a-z]/.test(password), {
      message: LOWERCASE_ERROR,
    })
    .refine((password) => /[0-9]/.test(password), {
      message: NUMBER_ERROR,
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: SPECIAL_ERROR,
    }),
});

export type RegisterUserDto = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type LoginUserDto = z.infer<typeof LoginSchema>;
