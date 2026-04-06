// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Product Search', () => {
  test('Search for product using search box', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://demowebshop.tricentis.com/');

    // Verify search box is visible
    const searchBox = page.getByPlaceholder(/search/i);
    await expect(searchBox).toBeVisible();

    // Type search term
    await searchBox.fill('book');

    // Click search button
    await page.getByRole('button', { name: /search/i }).click();

    // Wait for search results to load
    await page.waitForLoadState('networkidle');

    // Verify search results page is displayed
    await expect(page).toHaveURL(/search/);

    // Verify products are displayed
    const productItems = page.locator('[class*="product"], [data-product]').first();
    await expect(productItems).toBeVisible();
  });

  test('Search with no matching results', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://demowebshop.tricentis.com/');

    // Search for non-existent product
    const searchBox = page.getByPlaceholder(/search/i);
    await searchBox.fill('xyznonexistentproduct12345');

    // Click search button
    await page.getByRole('button', { name: /search/i }).click();

    // Wait for search results to load
    await page.waitForLoadState('networkidle');

    // Verify no results message is displayed or page is empty
    const noResultsMessage = page.locator('text=/no products|no items|sorry|not found/i').first();
    const hasNoResultsMessage = await noResultsMessage.isVisible({ timeout: 3000 }).catch(() => false);

    if (!hasNoResultsMessage) {
      // Check if products list is empty
      const productItems = page.locator('[class*="product"], [data-product]');
      const productCount = await productItems.count();
      expect(productCount).toBe(0);
    }
  });
});
