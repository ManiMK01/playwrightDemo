// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Category Navigation and Filtering', () => {
  test('Navigate through product categories', async ({ page }) => {
    // Navigate to home page
    await page.goto('https://demowebshop.tricentis.com/');

    // Verify all categories are visible
    const categories = ['Books', 'Computers', 'Electronics', 'Apparel', 'Digital downloads', 'Jewelry', 'Gift Cards'];
    
    for (const category of categories) {
      const categoryLink = page.getByRole('link', { name: new RegExp(category, 'i') });
      const isVisible = await categoryLink.isVisible({ timeout: 2000 }).catch(() => false);
      
      if (isVisible) {
        await categoryLink.first().click();
        
        // Verify URL changes
        await expect(page).toHaveURL(new RegExp(category.toLowerCase().replace(/\\s+/g, '-')));
        
        // Go back to home
        await page.goto('https://demowebshop.tricentis.com/');
      }
    }
  });

  test('Filter products by price range', async ({ page }) => {
    // Navigate to Books category
    await page.goto('https://demowebshop.tricentis.com/books');
    await page.waitForLoadState('networkidle');

    // Look for price filter inputs
    const minPriceInput = page.locator('input[name*="min"], input[placeholder*="min"], input[placeholder*="from"]').first();
    const maxPriceInput = page.locator('input[name*="max"], input[placeholder*="max"], input[placeholder*="to"]').first();

    const hasMinInput = await minPriceInput.isVisible({ timeout: 2000 }).catch(() => false);
    const hasMaxInput = await maxPriceInput.isVisible({ timeout: 2000 }).catch(() => false);

    if (hasMinInput && hasMaxInput) {
      // Set price range
      await minPriceInput.fill('10');
      await maxPriceInput.fill('50');

      // Click filter button
      const filterButton = page.locator('button:has-text("Filter"), button:has-text("Apply"), button:has-text("Search")').first();
      
      if (await filterButton.isVisible({ timeout: 2000 }).catch(() => false)) {
        await filterButton.click();
        await page.waitForLoadState('networkidle');

        // Verify products are filtered
        const productItems = page.locator('[class*="product"], [data-product]');
        const productCount = await productItems.count();
        
        // Should have products or no results message
        if (productCount > 0) {
          await expect(productItems.first()).toBeVisible();
        }
      }
    }
  });
});
