import {expect, test} from "@playwright/test"

test("create_multiple_tabs_test", async({browser})=>{
    let context = await browser.newContext();
    let page1 = await context.newPage();
    // to open new tab we have to create new page
    await page1.goto("https://www.flipkart.com/search?q=ps5+console&sid=4rr%2Cx1m&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&as-pos=1&as-type=RECENT&suggestionId=ps5+console%7CGaming+Consoles&requestId=9cd50f73-bc16-41c4-aee1-44ddd35469d3&as-searchtext=ps5%20console");

    // to open new tab we have to create new page
    let page2 = await context.newPage();
    await page2.goto("https://www.facebook.com/");

    // to open new tab we have to create new page
    let page3 = await context.newPage();
    await page3.goto("https://www.amazon.in/");

    // switching from one tab to another tab
    await page1.click("(//a[@class='GnxRXv'])[1]")
    await page1.waitForTimeout(3000)
})

test("handling_multiple_tabs_test", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    /* example 1 */
    // await page.goto("https://www.flipkart.com/search?q=ps5+console&sid=4rr%2Cx1m&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&as-pos=1&as-type=RECENT&suggestionId=ps5+console%7CGaming+Consoles&requestId=9cd50f73-bc16-41c4-aee1-44ddd35469d3&as-searchtext=ps5%20console");
    // await page.waitForTimeout(3000)
    // //await page.keyboard.press("Escape")
    // //await page.click("(//a[@class='GnxRXv'])[1]")
    // let [page2] = await Promise.all([    
    //         page.waitForEvent("popup"), // aleart, notification, new tabs, new windows all are called popup in playwright
    //         page.click("(//a[@class='GnxRXv'])[1]")
    //         //page.click("//div[@class='v1zwn21k v1zwn25 _1psv1zeb9 _1psv1ze0 _1psv1ze90 _1psv1ze6r _1psv1zel0 _1psv1zeir']")
    //     ])
    // await page.waitForTimeout(3000)
    // console.log(await page2.url());
    // await expect(page2.url().not.toBe("https://www.flipkart.com/search?q=ps5+console&sid=4rr%2Cx1m&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&as-pos=1&as-type=RECENT&suggestionId=ps5+console%7CGaming+Consoles&requestId=9cd50f73-bc16-41c4-aee1-44ddd35469d3&as-searchtext=ps5%20console"))

    /* example 2 */ 
    // await page.goto("https://www.redbus.in/")    
    // let [page2] = await Promise.all([ 
    //     /* waitForEvent("popup")  is used to switch to tab*/       
    //         page.waitForEvent("popup"),
    //         page.click('//a[@class="linkButton" and text()="Contact us"]') ])
    // await page.waitForTimeout(3000)        
    // await page2.click("#account_dd")
    // await page2.waitForTimeout(3000)    
    
    
    /* Example 3 */
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")

    let[window2] = await Promise.all([ page.waitForEvent("popup"),
        page.click("//button[text()='Shop Now']")])
    await window2.locator('//button[.="Add to Cart"]').click();
    let title = await page.title();
    await window2.waitForTimeout(10000)
    await expect(await window2.title()).not.toBe(title)

})