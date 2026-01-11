import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path configuration
// For custom domain: base path = / (root)
// For GitHub Pages subdomain: base path = /repository-name/
// For local dev: base path = /
const getBasePath = () => {
  // If using custom domain (CNAME file exists), use root path
  // For custom domains, GitHub Pages serves from root
  if (process.env.CUSTOM_DOMAIN === 'true' || process.env.USE_ROOT_PATH === 'true') {
    return '/'
  }
  
  // For GitHub Pages subdomain (username.github.io/repo-name), use repo name
  if (process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    // Only use subpath if not using custom domain
    return `/${repoName}/`
  }
  
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
})
