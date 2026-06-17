import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Keeps the original name for the main entry file
        entryFileNames: 'assets/[name].js',
        // Keeps the original name for chunks
        chunkFileNames: 'assets/[name].js',
        // Keeps the original name for extension files like CSS or images
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
