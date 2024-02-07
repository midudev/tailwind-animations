/** @type {import("prettier").Config} */
module.exports = {
  ...require('prettier-config-standard'),
  plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-tailwindcss')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
