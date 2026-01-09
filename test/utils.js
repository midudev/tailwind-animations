import tailwindcss from '@tailwindcss/postcss'
import postcss from 'postcss'
import minify from '@csstools/postcss-minify'
import { join } from 'path'

const TAILWIND_BASE = '@import "tailwindcss";'
const PLUGIN_IMPORT = `@import "${join(process.cwd(), 'src/index.css')}";`

export function generatePluginCSS (options = {}) {
  const { inline = '', content = '' } = options

  return postcss([
    tailwindcss(),
    minify()
  ])
    .process(`${TAILWIND_BASE}\n${PLUGIN_IMPORT}\n${inline}`, {
      from: join(process.cwd(), 'test/index.test.js'),
      content: [{ raw: content, extension: 'html' }]
    })
    .then(result => result.css)
}
