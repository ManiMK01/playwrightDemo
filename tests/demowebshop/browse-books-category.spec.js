// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Product Browsing - Categories', () => {
  test('Browse products in Books category', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://demowebshop.tricentis.com/');

    // Verify home page is displayed
    await expect(page.getByRole('link', { name: /books/i })).toBeVisible();

    // Click on Books category
    await page.getByRole('link', { name: /books/i }).first().click();

    // Verify Books category page is loaded
    await expect(page).toHaveURL(/books/);

    // Verify products are displayed
    const productItems = page.locator('[class*="product"], [data-product]').first();
    await expect(productItems).toBeVisible({ timeout: 5000 });
  });

  test('Browse products in Computers category', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://demowebshop.tricentis.com/');

    // Click on Computers category
    await page.getByRole('link', { name: /computers/i }).first().click();

    // Verify Computers category page is loaded
    await expect(page).toHaveURL(/computers/);

    // Verify products are displayed
    const productItems = page.locator('[class*="product"], [data-product]').first();
    await expect(productItems).toBeVisible({ timeout: 5000 });
  });

  test('Browse products in Electronics category', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://demowebshop.tricentis.com/');

    // Click on Electronics category
    await page.getByRole('link', { name: /electronics/i }).first().click();

    // Verify Electronics category page is loaded
    await expect(page).toHaveURL(/electronics/);

    // Verify products are displayed
    const productItems = page.locator('[class*="product"], [data-product]').first();
    await expect(productItems).toBeVisible({ timeout: 5000 });
  });
});
