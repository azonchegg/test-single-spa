import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: "src/root-config.ts",
      external: ["single-spa"],
      preserveEntrySignatures: "allow-extension",
      output: {
        format: "system",
        entryFileNames: "root-config.js",
      },
    },
  },
  server: {
    port: 9000,
    cors: true
  },
});

