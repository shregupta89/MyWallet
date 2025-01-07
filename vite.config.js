import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//Adds support for JSX and TSX syntax.
import { nodePolyfills } from 'vite-plugin-node-polyfills'
//Provides Node.js-specific modules (like Buffer, process, etc.) as polyfills in a browser environment.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),nodePolyfills()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/icons-material',
      'react',
      'react-dom',
    ],
  },
});

//