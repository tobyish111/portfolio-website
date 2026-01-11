import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path configuration
// Using custom domain (tobybuckmaster.dev) - always use root path
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
