import {test} from "@playwright/test"

test("Auth", async({browser}) =>{
    const context = await browser.newContext({
        httpCredentials: {
            username : 'admin',
            password : 'admin'
        }
    })
    const page = await context.newPage();
    await page.goto('')
})