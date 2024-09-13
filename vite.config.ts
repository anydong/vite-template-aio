/// <reference types="vitest" />

import path from "node:path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
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
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: true,
    browser: {
      provider: "playwright", // or 'webdriverio'
      enabled: false,
      headless: true,
      name: "chromium", // browser name is required
    },
  },
});
