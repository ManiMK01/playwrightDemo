import {test} from "@playwright/test";

/* To check the visibility of the element we can use isVisible() method */
test("isVisible method", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");

    /*waitFor() method is used to wait for the element to be visible on the page. */
    await page.locator("//input[@id='phone']").waitFor();

    /* To check the visibility of the element we can use isVisible() method */
    let isVisible = await page.locator("//input[@id='phone']").isVisible();
    console.log("Phone field is visible: " + isVisible);
})

/* To check the enabled state of the element we can use isEnabled() method */
test("isEnabled method", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0");

    /*waitFor() method is used to wait for the element to be visible on the page. */
    await page.locator("//input[@id='phone']").waitFor();   

    /* To check the enabled state of the element we can use isEnabled() method */
    let isEnabled = await page.locator("//input[@id='phone']").isEnabled();
    console.log("Phone field is enabled: " + isEnabled);    
})

/* To check the editable state of the element we can use isEditable() method */
test("isEditable method", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0");
    await page.locator("//button[text()='Yes']").waitFor();

    /* To check the editable state of the element we can use isEditable() method */
    let isEditable = await page.locator("//button[text()='Yes']").isEditable();
    console.log("Yes button is editable: " + isEditable);
})

/* To check the checked state of the element we can use isChecked() method */
test.only("isChecked method", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    await page.locator("//input[@id='domain_a']").click();

    /* To check the checked state of the element we can use isChecked() method */
    let isChecked = await page.locator("//input[@id='domain_a']").isChecked();
    console.log("Domain A checkbox is checked: " + isChecked);
})