import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://www.zohoapis.in/invoice/v3/contacts'
    }
  },
  plugins: [react()],
})
