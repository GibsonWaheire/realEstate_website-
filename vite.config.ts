import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// Note: using Tailwind via PostCSS (postcss.config.js). Remove v4 vite plugin.
import { fileURLToPath, URL } from 'node:url'

// Determine base path based on deployment environment
const getBasePath = () => {
  // Check for custom DEPLOY_ENV variable first
  if (process.env.DEPLOY_ENV === 'github-pages') {
    return '/realEstate_website-/'
  }
  
  // Check for Netlify environment
  if (process.env.NETLIFY === 'true' || process.env.DEPLOY_ENV === 'netlify') {
    return '/'
  }
  
  // Check for GitHub Actions (commonly used for GitHub Pages deployment)
  if (process.env.GITHUB_ACTIONS === 'true') {
    return '/realEstate_website-/'
  }
  
  // Default to root for local development and other environments
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
