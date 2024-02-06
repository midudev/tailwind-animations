/** @type {import("prettier").Config} */
module.exports = {
  ...require('prettier-config-standard'),
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
