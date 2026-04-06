// spec: specs/textfield-registration-test.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Form Submission', () => {
  test('Submit form with all valid data', async ({ page }) => {
    // Navigate to the registration page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    // Fill Name field with 'John Smith'
    await page.getByRole('textbox', { name: 'Name' }).fill('John Smith');
    await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue('John Smith');

    // Fill Email field with 'john.smith@email.com'
    await page.getByRole('textbox', { name: 'Email Id' }).fill('john.smith@email.com');
    await expect(page.getByRole('textbox', { name: 'Email Id' })).toHaveValue('john.smith@email.com');

    // Fill Password field with 'Password@123'
    await page.getByRole('textbox', { name: 'Password' }).fill('Password@123');
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('Password@123');

    // Click the Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // Verify successful registration
    await expect(page.getByText('Registered successfully')).toBeVisible();
  });
});
