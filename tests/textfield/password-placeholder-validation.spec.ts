// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Placeholder Validation', () => {
  test('Verify placeholder text in Password field', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Verify the Password field is visible
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();

    // Verify placeholder text is correct
    const passwordField = page.getByRole('textbox', { name: 'Password' });
    await expect(passwordField).toHaveAttribute('placeholder', 'Enter your password');
  });
});
