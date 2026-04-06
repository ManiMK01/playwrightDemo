import {test} from "@playwright/test";

test("wait for method", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    /* wait for method is used to wait for the element to be in a particular state before performing any action on it.
    It is useful when we want to ensure that an element is visible, enabled, or attached to the DOM before interacting with it. */
    await page.locator('//input[@id="domain_a"]').waitFor({state:"visible",timeout:3000})
})
