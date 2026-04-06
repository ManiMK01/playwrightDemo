// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('User Authentication - Login', () => {
  test('Login with valid credentials', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://demowebshop.tricentis.com/login');

    // Verify login page is displayed
    await expect(page).toHaveTitle(/login/i);
    await expect(page.getByRole('heading', { name: /login/i })).toBeVisible();

    // Fill email field
    await page.getByLabel(/email address/i).fill('admin@example.com');

    // Fill password field
    await page.getByLabel(/password/i).fill('123456');

    // Click login button
    await page.getByRole('button', { name: /login/i }).click();

    // Verify successful login - user should be redirected
    await expect(page).toHaveURL(/home|account|$/);
  });
});
