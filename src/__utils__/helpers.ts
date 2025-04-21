/**
 * Generates a random token with a prefix to support
 * unique, idempotent local testing.
 * @param prefix
 * @returns
 */
export function generateTestToken(prefix: string): string {
  return `${prefix}-${Date.now().toString()}`;
}
