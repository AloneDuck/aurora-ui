import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("playground has no automatically detectable accessibility violations", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Aurora UI" })).toBeVisible();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("dialog remains keyboard operable", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open dialog" }).click();
  await expect(page.getByRole("dialog", { name: "Release checklist" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
