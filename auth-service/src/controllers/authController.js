import { registerUser } from "../services/authService.js";

export async function startRegisterUser(req) {
  try {
    const { name, email, password, role } = req.body || {};
    const roleMap = { admin: 1, user: 2 };
    const normalizedRole =
      typeof role === "string" ? roleMap[role.toLowerCase()] : role;
    const result = await registerUser({
      name,
      email,
      password,
      role: normalizedRole,
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error };
  }
}
