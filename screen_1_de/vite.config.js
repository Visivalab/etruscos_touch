import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

function copyStaticAssetDirs() {
  const assetDirs = ['images', 'videos', 'icons']

  return {
    name: 'copy-static-asset-dirs',
    closeBundle() {
      const rootDir = process.cwd()
      const sourceAssetsDir = resolve(rootDir, 'assets')
      const outputAssetsDir = resolve(rootDir, 'build', 'assets')

      for (const dir of assetDirs) {
        const sourceDir = resolve(sourceAssetsDir, dir)
        const outputDir = resolve(outputAssetsDir, dir)

        if (existsSync(sourceDir)) {
          cpSync(sourceDir, outputDir, { recursive: true })
        }
      }
    }
  }
}

export default defineConfig({
  base: './',
  plugins: [copyStaticAssetDirs()],
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
