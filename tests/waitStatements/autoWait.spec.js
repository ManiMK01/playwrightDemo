import {test} from "@playwright/test";
import { time } from "node:console";

test("auto wait", async({page})=>{
    /* setDefaultTimeout is used to set the default timeout for all the actions performed on the page. 
    It is useful when we want to set a global timeout for all the actions instead of setting it for each action individually. */
    page.setDefaultTimeout(3000);

    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")

    /* Auto wait is a feature in Playwright that automatically waits for elements to be in a certain state before performing actions on them.
    It eliminates the need for explicit waits and makes the test code more concise and reliable. */
    await page.locator("//input[@id='attended ']").check();
})

/* actionTimeout is used to set the timeout for a specific action. 
It is useful when we want to set a timeout for a particular action instead of setting it for all the actions performed on the page. */
//test.use({actionTimeout:5000})
test("auto wait_1", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    /* Auto wait is a feature in Playwright that automatically waits for elements to be in a certain state before performing actions on them.
    It eliminates the need for explicit waits and makes the test code more concise and reliable. */
    await page.locator("//input[@id='username']").fill("student");
    await page.locator("//button[@class='bt']").click();
})