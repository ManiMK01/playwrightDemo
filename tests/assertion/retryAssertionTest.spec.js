import {test,expect} from "@playwright/test"

test("retryAssertion", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    page
})