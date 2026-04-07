import {test as base} from "@playwright/test"

export const test = base.extend({
    loginFixtuers : async ({page}, use) => {

        /*  It is a Pre-condition setting */
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.getByRole('textbox', {name: 'Username'}).fill('student')
        await page.fill('input#password', 'Password123')
        await page.click('#submit')
        
        /* use run the test script steps */
        await use()

        /* It is a post-condition setting after script it will execute */
        await page.click('#logout');  
        await page.close();   
    }
})