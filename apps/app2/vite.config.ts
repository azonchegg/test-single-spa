import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  
  define: {
    'process.env': '{}',
    'process.env.NODE_ENV': '"production"',
  },

  server: {
    port: 9002,
    cors: true,
  },

  build: {
    lib: {
      entry: './src/main.ts',
      name: 'app2',
      fileName: 'app2',
      formats: ['system'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
      // Externalize shared dependencies that will be provided by import maps
      external: ['vue', 'single-spa-vue'],
    },
  },
});
