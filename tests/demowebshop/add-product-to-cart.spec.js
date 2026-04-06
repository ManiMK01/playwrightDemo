// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Shopping Cart Operations', () => {
  test('Add product to shopping cart', async ({ page }) => {
    // Navigate to Books category
    await page.goto('https://demowebshop.tricentis.com/books');

    // Wait for products to load
    await page.waitForLoadState('networkidle');

    // Click on first product
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();

    // Wait for product detail page to load
    await page.waitForLoadState('networkidle');

    // Get initial cart count
    const cartLink = page.locator('a:has-text("Shopping cart")').first();
    const initialCartText = await cartLink.textContent();

    // Click Add to Cart button
    await page.getByRole('button', { name: /add.*cart/i }).click();

    // Wait for action to complete
    await page.waitForTimeout(500);

    // Verify cart count increases
    const updatedCartText = await cartLink.textContent();
    expect(updatedCartText).not.toBe(initialCartText);
  });

  test('View items in shopping cart', async ({ page }) => {
    // Navigate to Books category
    await page.goto('https://demowebshop.tricentis.com/books');
    await page.waitForLoadState('networkidle');

    // Add a product to cart
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /add.*cart/i }).click();

    // Navigate to shopping cart
    await page.getByRole('link', { name: /shopping cart/i }).click();

    // Verify shopping cart page is displayed
    await expect(page).toHaveURL(/cart/);

    // Verify cart contains items
    const cartItems = page.locator('table tbody tr, [class*="cart-item"]').first();
    await expect(cartItems).toBeVisible();
  });

  test('Update product quantity in shopping cart', async ({ page }) => {
    // Navigate to Books category and add product
    await page.goto('https://demowebshop.tricentis.com/books');
    await page.waitForLoadState('networkidle');
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /add.*cart/i }).click();

    // Navigate to cart
    await page.getByRole('link', { name: /shopping cart/i }).click();
    await page.waitForLoadState('networkidle');

    // Update quantity
    const quantityInput = page.locator('input[name*="quantity"]').first();
    await quantityInput.fill('2');

    // Click update cart button
    const updateButton = page.locator('button:has-text("Update Shopping Cart"), input[value*="Update"]').first();
    await updateButton.click();

    // Wait for update to complete
    await page.waitForTimeout(500);

    // Verify quantity is updated
    await expect(quantityInput).toHaveValue('2');
  });

  test('Remove product from shopping cart', async ({ page }) => {
    // Navigate to Books category and add product
    await page.goto('https://demowebshop.tricentis.com/books');
    await page.waitForLoadState('networkidle');
    const firstProduct = page.locator('a[href*="/product/"]').first();
    await firstProduct.click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /add.*cart/i }).click();

    // Navigate to cart
    await page.getByRole('link', { name: /shopping cart/i }).click();
    await page.waitForLoadState('networkidle');

    // Click remove button
    const removeCheckbox = page.locator('input[name*="removefromcart"]').first();
    await removeCheckbox.click();

    // Click update cart button
    const updateButton = page.locator('button:has-text("Update Shopping Cart"), input[value*="Update"]').first();
    await updateButton.click();

    // Wait for removal to complete
    await page.waitForTimeout(500);

    // Verify product is removed
    const cartItems = page.locator('table tbody tr, [class*="cart-item"]').first();
    await expect(cartItems).not.toBeVisible().catch(() => {
      // Empty cart state
      return expect(page.locator('text=/empty|no items/i').first()).toBeVisible();
    });
  });
});
