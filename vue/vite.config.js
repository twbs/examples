import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
            'legacy-js-api',
          ],
        },
    },
  },
})
