import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://tailwind-animations.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})
