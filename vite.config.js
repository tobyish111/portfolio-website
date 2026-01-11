import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path configuration
// For GitHub Pages: base path = /repository-name/
// For local dev: base path = /
const getBasePath = () => {
  if (process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY) {
    // Extract repository name from GITHUB_REPOSITORY (format: username/repo-name)
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1]
    return `/${repoName}/`
  }
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
})
