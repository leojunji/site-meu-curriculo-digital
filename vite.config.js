// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist", // built files will be placed in dist
    assetsDir: "assets", //assests(src/assets) will be placed in assets(dist/assests)
    emptyOutDir: false,
  },
});
