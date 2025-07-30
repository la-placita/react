import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    // Asegurar que PropTypes funcione en desarrollo
    __DEV__: mode === 'development'
  },
  server: {
    // Configuración para desarrollo
    host: '0.0.0.0',
    port: 5173
  }
}))
