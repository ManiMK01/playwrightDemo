import {test} from "@playwright/test";

/* wait for method is used to wait for the element to be in a particular state before performing any action on it.
It is useful when we want to ensure that an element is visible, enabled, or attached to the DOM before interacting with it. */
test("wait for text", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//button[text()='Continue shopping']").click();
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes");
    await page.locator("//div[@role='row']",{hasText:" for women"}).waitFor();
    let autosugg = await page.locator("//div[@role='row']",{hasText:" for women"}).allTextContents();
    console.log(autosugg);
})
 
/* wait for timeout is used to wait for a specific amount of time before performing any action on the page.
It is not recommended to use wait for timeout as it can lead to flaky tests and increase the test execution time. */
test("wait for timeout", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//button[text()='Continue shopping']").click();
    await page.locator("//input[@id='twotabsearchtextbox']").waitFor({timeout:3000});
    await page.locator("//div[@role='row']",{hasText:" for women"}).waitFor();
    let autosugg = await page.locator("//div[@role='row']").allTextContents();
    console.log(autosugg);
})

/* wait for selector is used to wait for a specific element to be present in the DOM before performing any action on it.
It is useful when we want to ensure that an element is present in the DOM before interacting with it. */
test("wait for element state", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("//button[text()='Continue shopping']").click();
    //await page.locator("//input[@id='twotabsearchtextbox']").waitFor({state:"visible",timeout:3000});
    await page.waitForSelector("//input[@id='twotabsearchtextbox']",{state:"visible"});
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
    await page.locator("//div[@role='row']",{hasText:" for women"}).waitFor()
    let autosugg = await page.locator("//div[@role='row']").allTextContents();
    console.log(autosugg);
})

/* wait for navigation is used to wait for the page to navigate to a new URL before performing any action on it.
It is useful when we want to ensure that the page has navigated to a new URL before interacting with it. */
test("wait for navigation", async({page})=>{
    await page.goto("https://www.amazon.in/") 
    /* we need to execute this line parallely so we use promise */
    await Promise.all([
        page.waitForNavigation(),
        page.click("nav-cart-count-container")
    ])
    //page.click("nav-cart-count-container")
})

/* wait for loadState is used to wait for the page to load completely before performing any action on it.
It is useful when we want to ensure that the page has loaded completely before interacting with it. */
test("wait for loadState", async({page})=>{
    await page.goto("https://www.amazon.in/") 
    /* we need to execute this line parallely so we use promise */
    await Promise.all([

        /* waitUntil is used to specify the condition for waiting for navigation. 
        It can be set to "load", "domcontentloaded", or "networkidle". */
        page.waitForNavigation({waitUntil:"networkidle"}),
        page.click("nav-cart-count-container")
    ])
    page.click("nav-cart-count-container")

    /* networkidle is used to wait for the network to be idle before performing any action on the page.
    It is useful when we want to ensure that all the network requests have completed before interacting with the page. */
    await page.waitForLoadState("networkidle",{timeout:3000});
    
    /* domcontentloaded is used to wait for the DOM content to be loaded before performing any action on the page.
    It is useful when we want to ensure that the DOM content has been loaded before interacting with the page. */   
    await page.waitForLoadState("domcontentloaded");
    
    /* load is used to wait for the page to load completely before performing any action on it.
    It is useful when we want to ensure that the page has loaded completely before interacting with it. */
    await page.waitForLoadState("load");
})


test("waitforevent", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.fill("#writeArea", "I am downloading the file")
    let [downloadfile] = await Promise.all([

        /* wait for event is used to wait for a specific event to occur before performing any action on the page.   
    It is useful when we want to ensure that a specific event has occurred before interacting with the page. */
        page.waitForEvent("download"),
        page.click("#downloadButton")
     ])
        console.log(await downloadfile.path());
})