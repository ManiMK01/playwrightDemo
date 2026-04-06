// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Placeholder Validation', () => {
  test('Verify placeholder text in Email field', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Verify the Email field is visible
    await expect(page.getByRole('textbox', { name: 'Email Id' })).toBeVisible();

    // Verify placeholder text is correct
    const emailField = page.getByRole('textbox', { name: 'Email Id' });
    await expect(emailField).toHaveAttribute('placeholder', 'Enter Your Email');
  });
});
