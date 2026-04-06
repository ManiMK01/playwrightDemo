// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Text Field Basic Functionality', () => {
  test('Enter text into Name field with valid input', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Click on the Name field to focus it
    await page.getByRole('textbox', { name: 'Name' }).click();

    // Type 'John Doe' into the Name field
    await page.getByRole('textbox', { name: 'Name' }).fill('John Doe');

    // Verify the entered text
    await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('John Doe');
  });
});
