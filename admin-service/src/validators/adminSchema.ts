import * as z from "zod";

/**
 * Schema para actualizar los permisos de un usuario
 */
export const UpdateUserPermissionsSchema = z.object({
  permissions: z
    .array(
      z.object({
        fileId: z.number().int().positive(),
        permissionTypeId: z.number().int().positive(),
      })
    )
    .min(1, "Debe enviar al menos un permiso."),
});

export type UpdateUserPermissionsDto = z.infer<
  typeof UpdateUserPermissionsSchema
>;
