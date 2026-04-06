// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Form Submission', () => {
  test('Submit form with empty Name field', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Leave Name field empty (skip it)

    // Fill Email field with 'test@email.com'
    await page.getByRole('textbox', { name: 'Email Id' }).fill('test@email.com');
    await expect(page.getByRole('textbox', { name: 'Email Id' })).toHaveValue('test@email.com');

    // Fill Password field with 'Test@123'
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('Test@123');

    // Click the Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // Verify form validation error is displayed for Name field
    await expect(page.getByText('Name is required')).toBeVisible();
  });
});
