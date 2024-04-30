import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/", // Define a base URL como raiz do projeto
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/about/index.html"),
      },
    },
  },
});
