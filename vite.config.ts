import { defineConfig } from 'vite';
import fs from "node:fs";

export default defineConfig({
  root: './src',
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        "root-config": "src/root-config.ts",
        "single-spa.min": "src/single-spa.min.js",
        "system.min.js": "src/system.min.js",
      },
      output: {
        format: "system",
        entryFileNames: "root-config.js",
      },
    },
  },
  server: {
    port: 9000,
    host: 'localhost',
    cors: true,
    https: {
      key: fs.readFileSync('./certs/localhost-key.pem'),
      cert: fs.readFileSync('./certs/localhost.pem')
    }
  },
});

