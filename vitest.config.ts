import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

const vitestConfig = defineConfig({
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
export default mergeConfig(viteConfig, vitestConfig);
