import {test} from "@playwright/test"

test("waitforfuction", async({page})=>{
    await page.goto("https://www.amazon.in/")
    
    /* document.readyState is a property that returns the current state of the document.
        It can have the following values:
        - "loading": The document is still loading.
        - "interactive": The document has finished loading and the user can interact with it.
        - "complete": The document has finished loading and all resources have been loaded. */
    await page.waitForFunction(()=> {return document.readyState === "complete"})

    //await page.locator("//button[text()='Continue shopping']").click();
    await page.locator("//input[@id='twotabsearchtextbox']").fill("Hp laptop")

    /* wait for function is used to wait for a specific condition to be true before performing any action on the page.
    It is useful when we want to wait for a specific condition to be true before interacting with the page. */
    await page.waitForFunction(()=> {let ele = document.querySelectorAll('.s-suggestion-container')
        return ele.length > 1
    })
    let allAutoSuggestions = await page.locator("//div[@class='s-suggestion-container']").allTextContents();
    console.log(allAutoSuggestions);
})