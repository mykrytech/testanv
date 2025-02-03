import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/testanv/' // Sesuai dengan nama repo GitHub kamu
});
