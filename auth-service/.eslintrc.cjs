/* ESLint configuration for auth-service */
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@config', './src/config'],
          ['@controllers', './src/controllers'],
          ['@middleware', './src/middleware'],
          ['@models', './src/models'],
          ['@routes', './src/routes'],
          ['@services', './src/services'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.mjs', '.cjs', '.json'],
      },
    },
  },
  plugins: ['import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Prettier
    'prettier/prettier': ['error'],

    // Code style / good practices
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-constant-condition': ['warn', { checkLoops: false }],
    'no-console': 'off',

    // Import rules
    'import/no-unresolved': ['error', { commonjs: true, amd: false }],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        newlines-between: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.config.js', '*.config.cjs'],
      env: { node: true },
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
};
