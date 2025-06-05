import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Needed to resolve paths

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
