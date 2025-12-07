import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'app2',
      fileName: 'app2',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        // Use default export only
        exports: 'default',
      },
      // Don't externalize Vue and single-spa-vue - include them in the bundle
      external: [],
    },
  },
  server: {
    port: 9002,
    cors: true,
  },
});

