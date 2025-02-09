const eslintPluginTailwindCSS = require('eslint-plugin-tailwindcss')
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')
const { defineConfig } = require('eslint-define-config')
const parser = require('@typescript-eslint/parser')

module.exports = defineConfig([
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      tailwindcss: eslintPluginTailwindCSS,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-contradicting-classname': 'warn',
    },
    settings: {
      tailwindcss: {
        groupByResponsive: true,
      },
    },
  },
])
