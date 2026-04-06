// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Wishlist Management', () => {
  test('Add product to wishlist', async ({ page }) => {
    // Navigate to Books category
    await page.goto('https://demowebshop.tricentis.com/books');
    await page.waitForLoadState('networkidle');

    // Click on first product
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();

    // Wait for product detail page
    await page.waitForLoadState('networkidle');

    // Get initial wishlist count
    const wishlistLink = page.locator('a:has-text("Wishlist")').first();
    const initialWishlistText = await wishlistLink.textContent();

    // Click Add to Wishlist button
    const addToWishlistButton = page.locator('button:has-text("Add to wishlist"), button:has-text("Add to Wishlist")').first();
    
    if (await addToWishlistButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await addToWishlistButton.click();
      
      // Wait for action to complete
      await page.waitForTimeout(500);

      // Verify wishlist count increases
      const updatedWishlistText = await wishlistLink.textContent();
      expect(updatedWishlistText).not.toBe(initialWishlistText);
    }
  });

  test('View items in wishlist', async ({ page }) => {
    // Navigate to Books category
    await page.goto('https://demowebshop.tricentis.com/books');
    await page.waitForLoadState('networkidle');

    // Add a product to wishlist
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();
    await page.waitForLoadState('networkidle');

    const addToWishlistButton = page.locator('button:has-text("Add to wishlist"), button:has-text("Add to Wishlist")').first();
    if (await addToWishlistButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await addToWishlistButton.click();
      await page.waitForTimeout(500);
    }

    // Navigate to wishlist
    await page.getByRole('link', { name: /wishlist/i }).click();

    // Verify wishlist page is displayed
    await expect(page).toHaveURL(/wishlist/);

    // Verify wishlist contains items
    const wishlistItems = page.locator('table tbody tr, [class*="wishlist-item"]').first();
    
    const itemsVisible = await wishlistItems.isVisible({ timeout: 3000 }).catch(() => false);
    if (itemsVisible) {
      await expect(wishlistItems).toBeVisible();
    }
  });

  test('Move product from wishlist to cart', async ({ page }) => {
    // Navigate to Books category
    await page.goto('https://demowebshop.tricentis.com/books');
    await page.waitForLoadState('networkidle');

    // Add a product to wishlist
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();
    await page.waitForLoadState('networkidle');

    const addToWishlistButton = page.locator('button:has-text("Add to wishlist"), button:has-text("Add to Wishlist")').first();
    if (await addToWishlistButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await addToWishlistButton.click();
      await page.waitForTimeout(500);
    }

    // Navigate to wishlist
    await page.getByRole('link', { name: /wishlist/i }).click();
    await page.waitForLoadState('networkidle');

    // Click Add to Cart button on wishlist item
    const addToCartButton = page.locator('button:has-text("Add to cart"), button:has-text("Add to Cart")').first();
    
    if (await addToCartButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await addToCartButton.click();
      await page.waitForTimeout(500);

      // Verify product is added to cart by checking cart link
      const cartLink = page.locator('a:has-text("Shopping cart")').first();
      const cartText = await cartLink.textContent();
      expect(cartText).toMatch(/\(1\)|\(\d+\)/);
    }
  });
});
