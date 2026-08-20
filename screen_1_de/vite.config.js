import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: assetInfo => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css'
          }

          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
