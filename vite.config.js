import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirect example: Redirect requests from `/old-path` to `/new-path`
      '/old-path': {
        target: 'https://pramukhhomessid.netlify.app/new-path',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/old-path/, '/new-path'),
      },
    },
  },
})
