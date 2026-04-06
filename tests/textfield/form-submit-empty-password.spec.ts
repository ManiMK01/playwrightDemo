// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Form Submission', () => {
  test('Submit form with empty Password field', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Fill Name field with 'Test User'
    await page.getByRole('textbox', { name: 'Name' }).fill('Test User');
    await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('Test User');

    // Fill Email field with 'user@test.com'
    await page.getByRole('textbox', { name: 'Email Id' }).fill('user@test.com');
    await expect(page.getByRole('textbox', { name: 'Email Id' })).toHaveValue('user@test.com');

    // Leave Password field empty (skip it)

    // Click the Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // Verify form validation error is displayed for Password field
    await expect(page.getByText('Password is required')).toBeVisible();
  });
});
