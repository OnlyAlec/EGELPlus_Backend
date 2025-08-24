// ESLint flat config for auth-service (Flat Config API)
// Using CommonJS exports because file extension is .cjs
const js = require("@eslint/js");
const prettierPlugin = require("eslint-plugin-prettier");
const importPlugin = require("eslint-plugin-import");
const globals = require("globals");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.log",
      ".eslintrc.cjs",
    ],
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@config", "./src/config"],
            ["@controllers", "./src/controllers"],
            ["@middleware", "./src/middleware"],
            ["@models", "./src/models"],
            ["@routes", "./src/routes"],
            ["@services", "./src/services"],
            ["@utils", "./src/utils"],
          ],
          extensions: [".js", ".mjs", ".cjs", ".json"],
        },
      },
    },
    rules: Object.assign({}, js.configs.recommended.rules, {
      "prettier/prettier": "error",
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-constant-condition": ["warn", { checkLoops: false }],
      "no-console": "off",
      "import/no-unresolved": "error",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          pathGroups: [
            { pattern: "@/**", group: "internal", position: "before" },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
    }),
  },
];
