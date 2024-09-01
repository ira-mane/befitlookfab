import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export default defineConfig({
  plugins: [
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customChunk: (args) => {
        let { file, id, moduleId, root } = args;
        if (file.startsWith('src/pages/')) {
          file = file.substring(4);
          file = file.replace(/\.[^.$]+$/, '');
          return file;
        }
        return null;
      },
      customSplitting: {
        'react-vendor': ['react', 'react-dom'],
        'utils': [/src\/utils/],
      },
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});