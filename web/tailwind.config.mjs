import animations from '../src/index.js'
import theme from '../src/theme.js'

const { animation } = theme

const safelist = Object.keys(animation).map((key) => `animate-${key}`)

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'responsive-175': 'repeat(auto-fit,minmax(175px,1fr))'
      },
      colors: {
        andromeeda: {
          100: '#d3d4d5',
          200: '#a7a8ab',
          300: '#7b7d82',
          400: '#4f5158',
          500: '#23262e',
          600: '#1c1e25',
          700: '#15171c',
          800: '#0e0f12',
          900: '#070809'
        }
      }
    }
  },
  plugins: [animations],
  safelist
}

