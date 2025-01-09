import { expect, test } from "@playwright/test";

test("primary button keeps the approved visual contract", async ({ page }) => {
  await page.goto("/");
  const styles = await page.getByRole("button", { name: "Open dialog" }).evaluate((element) => {
    const computed = getComputedStyle(element);
    return { backgroundColor: computed.backgroundColor, borderRadius: computed.borderRadius, minHeight: computed.minHeight };
  });
  expect(styles).toEqual({ backgroundColor: "rgb(37, 99, 235)", borderRadius: "12px", minHeight: "44px" });
});
