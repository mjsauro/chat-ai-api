import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.ts"],
    ...tseslint.configs.recommended[0], // spread base config first
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: "latest",
      },
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended[0].rules, // spread recommended rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      semi: ["error", "always"],                     // Require semicolons
      quotes: ["error", "single"],                   // Single quotes
      indent: ["error", "tab"],                      // Use tabs for indentation
      "object-curly-spacing": ["error", "always"],   // Space inside { }
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    plugins: {
      js,
    },
    rules: {
      // JS-specific rules
    },
  },
]);
