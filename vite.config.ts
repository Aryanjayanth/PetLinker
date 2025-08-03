import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'framer-motion': path.resolve(__dirname, './node_modules/framer-motion'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['framer-motion'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
});
