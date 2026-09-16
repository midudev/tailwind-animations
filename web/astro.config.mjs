import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://tailwind-animations.com',
  compressHTML: true,
  devToolbar: {
    enabled: false
  },
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
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Figtree',
      cssVariable: '--font-sans',
      weights: ['300 700'],
      fallbacks: ['-apple-system', 'Arial', 'sans-serif']
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: ['400 700'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace']
    }
  ]
})
