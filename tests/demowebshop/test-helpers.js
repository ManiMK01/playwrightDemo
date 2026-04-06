// @ts-check
const { test, expect } = require('@playwright/test');

// Common test helper functions
async function loginUser(page, email = 'admin@example.com', password = '123456') {
  await page.goto('https://demowebshop.tricentis.com/login');
  await page.getByLabel(/email address/i).fill(email);
  await page.getByLabel(/password/i).fill(password);
  await page.getByRole('button', { name: /login/i }).click();
  await page.waitForLoadState('networkidle');
}

async function addProductToCart(page) {
  // Navigate to Books category
  await page.goto('https://demowebshop.tricentis.com/books');
  await page.waitForLoadState('networkidle');

  // Click on first product
  const firstProduct = page.locator('a[href*="/product/"]').first();
  await firstProduct.click();
  await page.waitForLoadState('networkidle');

  // Click Add to Cart
  await page.getByRole('button', { name: /add.*cart/i }).click();
  await page.waitForTimeout(500);
}

async function goToCart(page) {
  await page.getByRole('link', { name: /shopping cart/i }).click();
  await page.waitForLoadState('networkidle');
}

async function goToWishlist(page) {
  await page.getByRole('link', { name: /wishlist/i }).click();
  await page.waitForLoadState('networkidle');
}

module.exports = {
  loginUser,
  addProductToCart,
  goToCart,
  goToWishlist,
};
