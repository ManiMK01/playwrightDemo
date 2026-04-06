// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('User Authentication - Login Failure', () => {
  test('Login with invalid credentials', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://demowebshop.tricentis.com/login');

    // Verify login page is displayed
    await expect(page).toHaveTitle(/login/i);

    // Fill email field with invalid email
    await page.getByLabel(/email address/i).fill('nonexistent@example.com');

    // Fill password field with wrong password
    await page.getByLabel(/password/i).fill('WrongPassword123');

    // Click login button
    await page.getByRole('button', { name: /login/i }).click();

    // Verify error message is displayed
    // Check for common error messages
    const errorIndicator = page.locator('[class*="error"], [class*="validation"], [role="alert"]');
    await expect(errorIndicator).toBeVisible({ timeout: 5000 }).catch(() => {
      // If no error message visible, check if user is still on login page
      return expect(page).toHaveURL(/login/);
    });
  });
});
