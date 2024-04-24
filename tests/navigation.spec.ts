import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${process.env.NEXT_PUBLIC_SITE_URL}/`);
	});

	test("navigate all products", async ({ page }) => {
		const nav = page.getByRole("navigation").first();
		await nav.getByRole("link", { name: "All" }).click();
		await expect(page).toHaveURL(`${process.env.NEXT_PUBLIC_SITE_URL}/products/1`);
	});

	test("navigate t-shirt category", async ({ page }) => {
		const nav = page.getByRole("navigation").first();
		await nav.getByRole("link", { name: "T-shirts" }).click();
		await expect(page).toHaveURL(`${process.env.NEXT_PUBLIC_SITE_URL}/categories/t-shirts/1`);
	});
});
