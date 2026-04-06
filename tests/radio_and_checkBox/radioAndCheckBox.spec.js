import {expect, test} from "@playwright/test"   

test("radio button test", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    await page.locator("//input[@value='wallet']").click();
    await page.waitForTimeout(3000)
    await page.locator("//input[@value='Upi']").check();
    await page.waitForTimeout(3000)

    // assertion
    await expect(await page.locator("//input[@value='Upi']")).toBeChecked();

    // one more way to check whether the radio button is checked or not
    const isChecked = await page.locator("//input[@value='Upi']").isChecked();
    console.log(isChecked);

    // one more way to check whether the radio button is checked or not
    await expect(await page.locator("//input[@value='Upi']",isChecked)).toBeChecked();

    /* if we want to check whether the radio button is not checked then we can use toBeFalsy() method */
    await expect(await page.locator("//input[@value='emi']").isChecked()).toBeFalsy();
    
    /* if we want to check whether the radio button is checked then we can use toBeTruthy() method */
    await expect(await page.locator("//input[@value='Upi']").isChecked()).toBeTruthy();
    await page.waitForTimeout(3000)
})

test("check box test", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("//input[@id='domain_a']").check();
    await page.waitForTimeout(3000)
    // assertion to Verify cheked
    await expect(page.locator("//input[@id='domain_a']")).toBeChecked();
    await page.locator("//input[@id='domain_b']").uncheck();
    // Verify uncheked
    await expect(await page.locator("//input[@id='domain_b']").isChecked()).toBeFalsy();
    await page.waitForTimeout(3000)
})