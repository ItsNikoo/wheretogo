import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://kudago.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/public-api/v1.4')
      }
    }
  },
  plugins: [react()],
})
