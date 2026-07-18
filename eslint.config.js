import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: [
      '**/node_modules/**',
      'web/.astro/**',
      'web/.vscode/**',
      'web/dist/**',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  eslintConfigPrettier,
]
