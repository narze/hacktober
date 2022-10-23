import { test, expect } from "@playwright/test";

test("homepage", async ({ page, }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Hacktoberfest Museum/);
  await expect(page.getByText('React Useless')).toBeVisible()
});
