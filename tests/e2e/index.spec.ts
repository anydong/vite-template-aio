import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Vite\s*\+\s*React\s*\+\s*TS/);
  await expect(page.getByRole("heading", { level: 1 })).toBeDefined();
});
