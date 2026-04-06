import {test} from "@playwright/test"

test("basic mouse actions", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    // click action
    await page.locator("//button[@id='btn']").click(); 
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Right Click']").click({modifiers: ['Shift']}); // Way to perform shift + click action
    await page.waitForTimeout(2000)
    // right click action
    //await page.locator("//a[text()='Right Click']").click();
    await page.locator("//button[@id='btn_a']").click({button: "right"}); // Way to perform right click action
    await page.locator("//div[text()='Yes']").click();
    await page.waitForTimeout(2000)

    // double click action
    await page.locator("//a[text()='Double Click']").click();
    //await page.locator("//button[@id='btn_a']").dblclick(); // Way to perform double click action click on YES button
    await page.locator("//button[@id='btn_a']").click({clickCount: 2}); // Another way to perform double click action click on YES button
    await page.waitForTimeout(2000)

    // down and up action
    await page.locator("//section[text()='Mouse Actions']").click();
    await page.locator("//section[text()='Click & Hold']/ancestor::a").click();

    /* hover action is used to move the mouse pointer over a specific element on the page. 
    It is useful when we want to trigger a hover effect on an element or when we want to interact with an element that is only visible when hovered over. */ 
    await page.locator("//div[@id='circle']").hover()

    /* mouse down action is used to simulate the pressing of a mouse button. 
     It is useful when we want to perform a drag and drop action or when we want to perform a click and hold action. */
    await page.mouse.down(); 
    await page.waitForTimeout(3000)

    /* mouse up action is used to simulate the releasing of a mouse button. 
     It is useful when we want to perform a drag and drop action or when we want to perform a click and hold action. */
    await page.mouse.up();
    await page.waitForTimeout(3000)

    // disabled or hidden button
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    /* force click is used to click on an element that is either disabled or hidden.
    It is useful when we want to click on an element that is not interactable or when we want to click on an element that is hidden behind another element. */
    //await page.locator("//input[@id='submit']").click({force: true})
    await page.waitForTimeout(2000)

    /* Another way to click on a disabled or hidden button is to use dispatch event method */
    await page.locator("//input[@id='submit']").dispatchEvent('click')
    await page.waitForTimeout(2000)

    // mouse hover action
    await page.locator("//section[text()='Mouse Actions']").click();
    await page.locator("//section[text()='Mouse Hover']/ancestor::a").click();
    await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover();
    await page.waitForTimeout(2000)
    await page.mouse.move(100, 200) // move the mouse pointer to a specific location on the page
    await page.waitForTimeout(5000)

})

test("scroll action", async({page})=>{
    // Vertical scroll
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0, 1000) // scroll down the page by 1000 pixels Vertically
    await page.waitForTimeout(2000)
    await page.mouse.wheel(0, -1000) // scroll up the page by 1000 pixels Vertically
    await page.waitForTimeout(2000)

    // horizontal scroll
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
    await page.waitForTimeout(2000)
    await page.mouse.wheel(1000, 0) // scroll right the page by 1000 pixels Horizontally
    await page.waitForTimeout(2000)
    await page.mouse.wheel(-1000, 0) // scroll left the page by 1000 pixels Horizontally
    await page.waitForTimeout(2000)

    // To scroll to a specific element on the page
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(2000)
    await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000)
})

test("drag and drop action", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    /* Moving  or drag & drop using mouse action */
    await page.locator("//div[text()='Drag Me']").hover();
    await page.mouse.down();
    await page.waitForTimeout(3000)
    await page.mouse.move(200, 500) // move the mouse pointer to a specific location on the page
    await page.waitForTimeout(3000)
    await page.mouse.up();
    await page.waitForTimeout(3000)

    /* drag and drop using mouse action */
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator("//div[text()='Mobile Charger']").hover();
    await page.waitForTimeout(3000)
    await page.mouse.down();
    await page.locator("//div[text()='Mobile Accessories']/parent::div").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000)

    // drag and drop by taking element's bounding box 
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator("//div[text()='Mobile Charger']").hover();
    await page.mouse.down();

    /* bounding box is used to get the position and size of an element on the page.
    It is useful when we want to get the position and size of an element on the page. */
    let target1 = await page.locator("//div[text()='Mobile Accessories']/parent::div").boundingBox();
    await page.mouse.move(target1.x, target1.y) // move the mouse pointer to a specific location on the page
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(3000)

    // drag and drop using drag and drop method 
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    /* dragTo method is used to perform drag and drop action by dragging an element and dropping it on another element.
    It is useful when we want to perform a drag and drop action by dragging an element and dropping it on another element. */
   
    //await page.locator("//div[text()='Mobile Charger']").dragTo(page.locator("//div[text()='Mobile Accessories']/parent::div"))
    //await page.waitForTimeout(3000) 

    let source =  page.locator(`//div[text()='Mobile Charger']`)
    let target =  page.locator(`//div[text()='Laptop Accessories']/parent::div`)
    await source.dragTo(target)
    await page.waitForTimeout(3000)
})

 