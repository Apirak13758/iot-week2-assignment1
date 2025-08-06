// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Add this proxy configuration
      '/api': {
        target: 'https://66070218iotweek1assignment1.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
        secure: true, // Only for development with self-signed certs
      }
    }
  }
})