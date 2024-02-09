import animations from '../src/index.js'
import theme from '../src/theme.js'

const { animation } = theme

const safelist = Object.keys(animation).map((key) => `animate-${key}`)

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [animations],
  safelist
}
