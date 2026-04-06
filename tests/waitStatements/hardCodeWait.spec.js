import {test} from "@playwright/test";

test("hard code wait", async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    /* Hard code wait is a method of waiting for a specific amount of time before performing any action on the page.
    It is not recommended to use hard code wait as it can lead to flaky tests and increase the test execution time. */  
    await page.waitForTimeout(3000);
    await page.getByText("Username",{exact:true}).fill("student");
    await page.waitForTimeout(3000);
    await page.getByText("Password",{exact:true}).fill("Password123");
    await page.waitForTimeout(3000);
    await page.locator("button#submit").click();
})

test.only("autosuggestion", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//button[text()='Continue shopping']").click();
    await page.locator("input#twotabsearchtextbox").fill("mobile");
    await page.waitForTimeout(3000);
    let a = await page.locator("//div[@role='row']").allTextContents();
    console.log(a);
    
})