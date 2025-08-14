import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// Note: using Tailwind via PostCSS (postcss.config.js). Remove v4 vite plugin.
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
