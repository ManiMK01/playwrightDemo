// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Text Field Basic Functionality', () => {
  test('Enter text into Email field with valid email', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Click on the Email field to focus it
    await page.getByRole('textbox', { name: 'Email Id' }).click();

    // Type 'user@example.com' into the Email field
    await page.getByRole('textbox', { name: 'Email Id' }).fill('user@example.com');

    // Verify the entered email
    await expect(page.getByRole('textbox', { name: 'Email Id' })).toHaveValue('user@example.com');
  });
});
