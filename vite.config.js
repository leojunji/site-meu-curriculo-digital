import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/", // Define a base URL como raiz do projeto
  build: {
    rollupOptions: {
      input: { //define as páginas do site, em geral as páginas do site(exceto a index.html), ficam dentro do src
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "src/about/index.html"),
      },
    },
  },
});
