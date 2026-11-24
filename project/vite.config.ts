import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from GitHub Pages under /tattoo-studio/.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/tattoo-studio/' : '/',
  plugins: [react()],
}));
