import {test} from "@playwright/test"

// test("fixturs", async({page})=> {
//     await page.goto("https://www.amazon.in/");
    
// })

// test("fixturs", async({browser})=> {
//     let context = browser.newContext() // we can add whatever cookies and data we can add 
//     let page = await context.newPage()
//     await page.goto("https://www.amazon.in/");
// })

test("fixturs", async({browserName,browser})=> {
    console.log(browserName);
    let context = await browser.newContext() 
    let page = await context.newPage()
    await page.goto("https://www.amazon.in/");
})