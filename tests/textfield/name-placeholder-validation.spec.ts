// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Placeholder Validation', () => {
  test('Verify placeholder text in Name field', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Verify the Name field is visible
    await expect(page.getByRole('textbox', { name: 'Name' })).toBeVisible();

    // Verify placeholder text is visible
    const nameField = page.getByRole('textbox', { name: 'Name' });
    await expect(nameField).toHaveAttribute('placeholder', 'Enter your name');
  });
});
