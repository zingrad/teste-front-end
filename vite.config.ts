import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/products": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/products/,
            "/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
          ),
      },
    },
  },
})
