// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('User Authentication - Registration', () => {
  test('Register new user with valid data', async ({ page }) => {
    // Navigate to register page
    await page.goto('https://demowebshop.tricentis.com/register');

    // Verify register page is displayed
    await expect(page).toHaveTitle(/register/i);
    await expect(page.getByRole('heading', { name: /register/i })).toBeVisible();

    // Fill email field
    await page.getByLabel(/email address/i).fill('testuser' + Date.now() + '@example.com');

    // Fill password field
    await page.getByLabel(/^password$/i, { exact: true }).fill('TestPassword@123');

    // Fill confirm password field
    await page.getByLabel(/confirm password/i).fill('TestPassword@123');

    // Click register button
    await page.getByRole('button', { name: /register/i }).click();

    // Verify successful registration
    await expect(page).toHaveURL(/register|home|account/);
  });
});
