import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [vue()],
  server: {
    host: "localhost",
    port: 8080,
  },
  // Optimization
  optimizeDeps: {
    exclude: [] // Possible exclution of OhVueIcons!
  }
});
