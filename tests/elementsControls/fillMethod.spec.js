import {test} from "@playwright/test";

test("fill method", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    /* To fill the username field */
    await page.locator("#name").fill("admin");
    /* To fill the email field */
    await page.locator("#email").fill("admin@example.com");
    /* To fill the password field */
    await page.locator("#password").fill("manager");
    /* To click on the login button */
    await page.locator("//button[text()='Register']").click();
    await page.pause(3000);
    console.log("Registration successful");
})

