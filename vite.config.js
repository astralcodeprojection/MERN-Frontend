import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif'],  // Ensure Vite processes image assets
  build: {
    outDir: 'dist'
  },
})
