module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ["src/authzedapi/**", "src/*.test.js"],
  rules: {},
};
