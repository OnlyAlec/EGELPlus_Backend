/**
 * helpers.ts: Funciones auxiliares en caso de ser necesarios.
 */

/**
 * normalizeText: Normaliza un texto de forma consistente para comparaciones.
 * - Si la entrada no es una cadena, devuelve `undefined`.
 * - Elimina espacios en los extremos, colapsa múltiples espacios interiores a uno.
 * - Normaliza Unicode (NFD) y elimina diacríticos (acentos).
 * - Convierte a minúsculas para comparaciones case-insensitive.
 *
 * Ejemplo: `"  ÁrEa  Núm.  "` -> `"area num."`
 *
 * @param s - El texto a normalizar.
 * @returns El texto normalizado o `undefined` si no es string.
 */
export function normalizeText(s?: string): string | undefined {
  if (typeof s !== "string") return undefined;

  const collapsed = s.trim().replace(/\s+/g, " ");
  const withoutDiacritics = collapsed
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
  return withoutDiacritics.toLowerCase();
}
