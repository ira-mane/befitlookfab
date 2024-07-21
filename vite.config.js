// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: () => {
          return {
            vendor: ['react', 'react-dom'],
          };
        },
      },
    },
    chunkSizeWarningLimit: 1600
  },
  plugins: [react()]
});


