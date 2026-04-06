// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Text Field Basic Functionality', () => {
  test('Enter text into Password field', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Click on the Password field to focus it
    await page.getByRole('textbox', { name: 'Password' }).click();

    // Type 'SecurePassword123!' into the Password field
    await page.getByRole('textbox', { name: 'Password' }).fill('SecurePassword123!');

    // Verify the password field contains the entered value
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('SecurePassword123!');
  });
});
