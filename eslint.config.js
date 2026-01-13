import neostandard from 'neostandard'

export default [
  ...neostandard({}),
  {
    ignores: [
      'web/.astro/**',
      'web/.vscode/**',
      'web/dist/**',
      'web/node_modules/**',
    ],
  },
]
