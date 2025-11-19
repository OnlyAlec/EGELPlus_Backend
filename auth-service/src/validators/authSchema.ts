import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string(),
});

export type RegisterUserDto = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type LoginUserDto = z.infer<typeof LoginSchema>;
