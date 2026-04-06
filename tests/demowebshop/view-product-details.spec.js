// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Product Details', () => {
  test('View product details', async ({ page }) => {
    // Navigate to Books category
    await page.goto('https://demowebshop.tricentis.com/books');

    // Wait for products to load
    await page.waitForLoadState('networkidle');

    // Click on first product
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();

    // Verify product detail page is loaded
    await page.waitForLoadState('networkidle');

    // Verify product name is displayed
    await expect(page.locator('h1, [class*="product-name"]').first()).toBeVisible();

    // Verify price is displayed
    const priceElement = page.locator('[class*="price"], span:has-text("$")').first();
    await expect(priceElement).toBeVisible();

    // Verify Add to Cart button is visible
    await expect(page.getByRole('button', { name: /add.*cart/i })).toBeVisible();
  });
});
