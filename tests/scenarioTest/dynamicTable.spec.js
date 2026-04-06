import { test, expect } from '@playwright/test';

test('Infinite scroll test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/infinite_scroll');

  let previousHeight = 0;

  for (let i = 0; i < 5; i++) {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    // Wait for new content to load
    await page.waitForTimeout(2000);
    // Get new height
    const newHeight = await page.evaluate(() => document.body.scrollHeight);
    // Validation
    expect(newHeight).toBeGreaterThan(previousHeight);
    previousHeight = newHeight;
  }
});

test('Infinite scroll with dynamic exit condition', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/infinite_scroll');

  let previousHeight = 0;
  let maxScrolls = 20; // safety limit
  let scrollCount = 0;
  let found = false;

  while (scrollCount < maxScrolls) {
    // Get current content
    const texts = await page.locator('.jscroll-added').allTextContents();

    // Condition 1: Data found
    if (texts.some(text => text.includes('Lorem'))) {
      found = true;
      break;
    }

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for loading
    await page.waitForLoadState('networkidle');

    // Get new height
    const newHeight = await page.evaluate(() => document.body.scrollHeight);

    // Condition 2: No more data loading
    if (newHeight === previousHeight) {
      console.log('No more new data loaded');
      break;
    }

    previousHeight = newHeight;
    scrollCount++;
  }

  // Final validation
  expect(found).toBeTruthy();
});