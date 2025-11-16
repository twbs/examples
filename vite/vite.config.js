import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: './dist'
  },
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'color-functions',
            'global-builtin',
            'legacy-js-api',
          ],
        },
    },
  },
}
