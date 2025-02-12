import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ["antd"],
          i18next: ["i18next", "i18next-browser-languagedetector", "i18next-http-backend"],
        },
      },
    },
  },
});
