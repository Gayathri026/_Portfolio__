import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/_Portfolio__"

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
