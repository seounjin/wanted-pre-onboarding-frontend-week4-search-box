module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react', 'prettier'],
  rules: {
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],

      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
