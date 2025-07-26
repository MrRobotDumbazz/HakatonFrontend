import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://hakaton-production-a902.up.railway.app/:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})//5