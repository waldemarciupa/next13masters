import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/`);
	});

	test("main navigation", async ({ page }) => {
		await expect(page).toHaveURL(`${process.env.NEXT_PUBLIC_SITE_URL}/`);
	});
});
