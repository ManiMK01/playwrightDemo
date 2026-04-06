import {test} from '@playwright/test'

test('test_1', async({page}) => {
    await page.goto('/electronics');
    await page.waitForTimeout(3000)
})

/* npx playwright test tests/preactice.spec.js --config=playwright1.config.js */