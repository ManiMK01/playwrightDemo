import {expect, test} from "@playwright/test"

test("iFrames", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frames = await page.frames()
    // to find how many frame has the value include the main page also consider as a frame
    console.log(frames.length);

    // To find the name of the frames
    for(let frame1 of  frames){
        console.log(await frame1.title());
    }
     
    /* ----------Approach=1-----frame()--------using name, url------------- */
    let frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.locator('//input[@name="mytext1"]').fill("Mani")

    // inputValue is used to get the value from the text field
    await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain('M')

    /* ----------- Approach=2 ------------ */
    let frame2aTextField = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
    frame2aTextField.fill("Mani")
    await page.waitForTimeout(2000)

    /* =========== Approach-3 ============== */

    // contentFrame is going to return the frame object
    let frame4 = await page.locator('//frame[@src="frame_4.html"]').contentFrame()
    frame4.locator('//input[@name="mytext4"]').fill("Mani")
    await page.waitForTimeout(3000)

    /* To work with nested frame */
    let frame3 = await page.frameLocator('//frame[@src="frame_3.html"]')
    // nested frame 
    let nestedFrame = await frame3.frameLocator('//iframe')
    nestedFrame.locator('//div[@class="ulDsOb" and .="I am a human"] ').click()
    await page.waitForTimeout(3000)

})