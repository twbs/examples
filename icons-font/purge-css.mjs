import { writeFile } from 'node:fs/promises'
import { PurgeCSS } from 'purgecss'

const stylesheet = 'css/styles.css'
const [{ css }] = await new PurgeCSS().purge({
  content: ['index.html'],
  css: [stylesheet],
  keyframes: true,
  // Keep responsive and state prefixes in class names such as lg:col-8.
  defaultExtractor: content => content.match(/[\w-]+(?::[\w-]+)*/g) || []
})

await writeFile(stylesheet, css)
