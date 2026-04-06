import {test as base} from "@playwright/test"

export const test = base.extend({
    loginFixtuers : async ({page}, use) => {
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.getByRole('textbox', {name: 'Username'}).fill('student')
        await page.fill('input#password', 'Password123')
        await page.click('#submit')
        
        await use()
    }
})