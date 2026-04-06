// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Form Submission', () => {
  test('Submit form with empty Email field', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Fill Name field with 'Jane Doe'
    await page.getByRole('textbox', { name: 'Name' }).fill('Jane Doe');
    await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('Jane Doe');

    // Leave Email field empty (skip it)

    // Fill Password field with 'SecurePass@456'
    await page.getByRole('textbox', { name: 'Password' }).fill('SecurePass@456');
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('SecurePass@456');

    // Click the Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // Verify form validation error is displayed for Email field
    await expect(page.getByText('Email is required')).toBeVisible();
  });
});
