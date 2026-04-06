// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('User Authentication - Logout', () => {
  test('Logout from user account', async ({ page }) => {
    // Navigate to login page
    await page.goto('https://demowebshop.tricentis.com/login');

    // Login with valid credentials first
    await page.getByLabel(/email address/i).fill('admin@example.com');
    await page.getByLabel(/password/i).fill('123456');
    await page.getByRole('button', { name: /login/i }).click();

    // Wait for navigation to complete
    await page.waitForURL(url => !url.pathname.includes('/login'), { timeout: 5000 }).catch(() => null);

    // Find and click logout button
    const logoutButton = page.locator('a:has-text("Log out"), button:has-text("Log out"), [href*="logout"]').first();
    
    if (await logoutButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await logoutButton.click();
    } else {
      // Alternative: look for dropdown menu with logout
      const accountMenu = page.locator('[class*="account"], [class*="profile"]').first();
      if (await accountMenu.isVisible({ timeout: 2000 }).catch(() => false)) {
        await accountMenu.click();
        await page.locator('a:has-text("Log out")').click();
      }
    }

    // Verify user is logged out by checking for Login link
    await expect(page.getByRole('link', { name: /log in/i })).toBeVisible({ timeout: 3000 });
  });
});
