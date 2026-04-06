import {test} from "@playwright/test";

test("locator using css", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    /* To Fill the username field we can use two method fill() or type() */
    /* enter the username in the username field */
    await page.locator("input#username").fill("student");
    /* enter the password in the password field */
    await page.locator("input#password").type("Password123");
    /* lick on the login button */
    await page.locator("[class='btn']").click(); 
    console.log("Login successfully");
})

test("locator using xpath", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    /* enter the username in the username field */
    await page.locator("//input[@id='username']").fill("student");
    /* enter the password in the password field */
    await page.locator("//input[@id='password']").type("Password123");
    /* lick on the login button */
    await page.locator("//button[@id='submit']").click(); 
    console.log("Login successfully");
})

