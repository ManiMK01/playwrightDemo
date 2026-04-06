import {test} from "@playwright/test"

test("keyboard_actions", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    // await page.locator("#name").fill("Mani")

    // await page.locator("#name").type("Mani")
    // await page.type("#name", "Mani") 

    // /* type method is used to type the text in the input field character by character with a delay of 100ms between each character. */
    // await page.locator("#name").click()
    // await page.keyboard.type("Mani") 

    /* insertText method is used to type the text in the input field without any delay between each character. */
    await page.locator("#name").click()
    await page.keyboard.insertText("Mani")
    await page.waitForTimeout(3000)

    // down and up method
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")
    await page.keyboard.down("B")
    await page.keyboard.up("B")
    await page.waitForTimeout(3000) 

    //press
    await page.keyboard.press("Tab") // press the tab key to move to the next input field
    await page.getByPlaceholder("Enter Your Email").fill("john.doe@example.com")
    await page.keyboard.press("Control+A") // press the control + a key to select all the text in the input field
    await page.keyboard.press("Control+C") // press the control + c key to copy the selected text
    await page.keyboard.press("Tab") 
    await page.keyboard.press("Control+V") // press the control + v key to paste the copied text
    await page.waitForTimeout(3000)
    
})

test("scroll", async({page})=>{
    await page.goto("https://www.amazon.in/")

    for(let i=1; i<11; i++){
        await page.keyboard.press("ArrowDown")
        await page.waitForTimeout(1000)
    }
    await page.waitForTimeout(2000)
    for(let i=1; i<6; i++){
        await page.keyboard.press("ArrowUp")
        await page.waitForTimeout(1000)
    }

    /* scroll the page by using the keyboard actions */
    // await page.keyboard.press("ArrowDown") // scroll down the page by using the arrow down key
    // await page.waitForTimeout(2000)
    // await page.keyboard.press("ArrowUp") // scroll up the page by using the arrow up key
    // await page.waitForTimeout(2000)
    // await page.keyboard.press("PageDown") // scroll down the page by using the page down key
    // await page.waitForTimeout(2000)
    // await page.keyboard.press("PageUp") // scroll up the page by using the page up key
    // await page.waitForTimeout(2000)
})




/* type() method is used to type the text in the input field character by character with a delay of 100ms between each character.
It is useful when we want to simulate the typing of a user in the input field. */

/* insertText() method is used to type the text in the input field without any delay between each character.
It is useful when we want to type the text in the input field without any delay between each character. */

/* press() method is used to press a key on the keyboard. It is useful when we want to press a key on the keyboard. */

/* down() method is used to press a key on the keyboard and hold it down. It is useful when we want to press a key on the keyboard and hold it down. */

/* up() method is used to release a key on the keyboard that was previously pressed using the down() method. 
It is useful when we want to release a key on the keyboard that was previously pressed using the down() method. */ 