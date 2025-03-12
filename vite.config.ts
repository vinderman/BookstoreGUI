import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      Shared: resolve(__dirname, './src/shared/'),
      Entities: resolve(__dirname, './src/entities/'),
      Features: resolve(__dirname, './src/features/')
    }
  },
  server: {
    port: 3000
  }
})
