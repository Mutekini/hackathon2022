import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build : {
    outDir: 'pb_public'
  },
  plugins: [react()]
})
