import {test} from "@playwright/test";

test("Inner Text", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    /* To fill the username field */
    await page.locator("#name").fill("admin");
    /* To fill the email field */
    await page.locator("#email").fill("admin@example.com");
    /* To fill the password field */
    await page.locator("#password").fill("manager");
    /* To click on the login button */
    await page.locator("//button[text()='Register']").click();

    const text = await page.locator("//section[@class='poppins text-[14px]'and text()='Radio Button']").innerText();
    console.log("========> " +text + " <========");
})

test("Text Content and input value", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    /* To fill the username field */
    await page.locator("#name").fill("admin");

    /* To get the text content of the name field */
     const nameValue = await page.locator("#name").inputValue();
     console.log("Name value: " + nameValue);
    /* To fill the email field */
    await page.locator("#email").fill("admin@example.com");
    /* To fill the password field */
    await page.locator("#password").fill("manager");
     
    /* To get the text content of the password field */
    const passwordValue = await page.locator("#password").inputValue();
    console.log("Password value: " + passwordValue);

    /* To click on the login button */
    await page.locator("//button[text()='Register']").click();

    const text = await page.locator("//section[@class='poppins text-[14px]'and text()='Radio Button']").textContent();
    console.log("========> " +text+ " <========");
})

test("all Text Contents", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator("#name").fill("admin");
    let Mtext = await page.locator('//section[@class="poppins text-[14px]"]').allTextContents();
    console.log("All text contents: " + Mtext);
})

/* To get the attribute value of the element we can use getAttribute() method */
test("get Attribute value", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0"); 
    const value = await page.locator('//input[@id="male"]').getAttribute("type");
    console.log("Value of male input: " + value);   
})

/* all() method is used to get all the elements that match the locator and return an array of elements. */
test("allmethods", async({page})=>{
    await page.goto("https://www.flipkart.com/");
    await page.locator("//div[@class='css-175oi2r r-1awozwy']").first().waitFor();
    let allDivs = await page.locator("//div[@class='css-175oi2r r-1awozwy']").all();
    let firstDiv = await page.locator("//div[@class='css-175oi2r r-1awozwy']").first();
    let indexValue = await page.locator("//div[@class='css-175oi2r r-1awozwy']").nth(12);
    let lastDiv = await page.locator("//div[@class='css-175oi2r r-1awozwy']").last();
    console.log(allDivs);
    console.log("First div: " + firstDiv);
    console.log("Index value: " + indexValue);
    console.log("Last div: " + lastDiv);
})
