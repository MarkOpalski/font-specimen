import { defineConfig } from "vite";

export default defineConfig({
  // Serve from root for proper font file access
  publicDir: "css/type",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
