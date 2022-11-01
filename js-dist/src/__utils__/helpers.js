"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTestToken = void 0;
/**
 * Generates a random token with a prefix to support
 * unique, idempotent local testing.
 * @param prefix
 * @returns
 */
function generateTestToken(prefix) {
    return `${prefix}-${Date.now().toString()}`;
}
exports.generateTestToken = generateTestToken;
//# sourceMappingURL=helpers.js.map