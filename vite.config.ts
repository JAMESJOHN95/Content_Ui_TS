import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { UserConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    sourcemapIgnoreList: (source: string) => source.includes("bootstrap.min.css.map"),
  },
  build: {
    rollupOptions: {
      external: [/^node:.*/],
    },
  },
} as UserConfig);
