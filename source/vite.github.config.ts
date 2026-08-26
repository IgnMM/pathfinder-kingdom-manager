import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/pathfinder-kingdom-manager/",
  plugins: [react()],
  publicDir: process.env.GITHUB_PUBLIC_DIR || "public",
  build: {
    outDir: "github-dist",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(process.cwd(), "github-index.html"),
    },
  },
});
