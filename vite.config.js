import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    // Proxy WP REST API calls to avoid CORS in development
    proxy: {
      '/wp-json': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => `/markencia${path}`,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-syntax-highlighter')) {
              return 'syntax-highlighter';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-icons';
            }
            return 'vendor'; // all other node_modules
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase slightly if needed
  },
})
