import {expect, test} from "@playwright/test"

test("dialogs handling",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")
    // dialogs are auto handle by the playwright so to avoid the auto handling 

    // // it will cancell the dialogs automatically
    // await page.getByRole("button",{name: 'Simple Alert'}).click()
    // await page.waitForTimeout(3000)
    // await page.getByRole("button",{name: 'Confirmation Alert'}).click()
    // await expect( page.locator('//p[@id="demo"]')).toContainText("Cancel")
    // await page.waitForTimeout(3000)
    // await page.getByRole("button",{name: 'Prompt Alert'}).click()
    // await expect( page.locator('//p[@id="demo"]')).toContainText("cancelled")
    // await page.waitForTimeout(3000)


    // // work with dialogs
    // //  When no page.on('dialog') or browserContext.on('dialog') listeners are present, all dialogs are automatically dismissed.
    // /* to avoid autohandling and do it by the Script to handle it so we use on('dialod',()=>{}) and once('dialod',()=>{}) method */
   
    // /* once we write the page.on on top of the script by default whenever the dialog is triggered
    //   it invoce the same page.on again and again */
    // page.on("dialog", (dialog)=>{dialog.accept()}) // to accept 
    // // page.on("dialog", (dialog)=>{dialog.dismiss()}) // to Dismisss
    // // page.on("dialog", (dialog)=>{dialog.message()}) //  display the msg in the aleart
    // await page.getByRole("button",{name: 'Simple Alert'}).click()
    // await page.waitForTimeout(3000)
    // await page.getByRole("button",{name: 'Confirmation Alert'}).click()
    // await page.waitForTimeout(3000)
    // await page.getByRole("button",{name: 'Prompt Alert'}).click() // for prompt it will cancel it 
    // await page.waitForTimeout(3000)    
    let text = "Mani"
    page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
            console.log(await dialog.message()) // to get the msg from alert
            await dialog.accept()
        }else if(dialog.type()=='confirm'){await dialog.accept()}
        else if(dialog.type()=='prompt'){
            if(dialog.defaultValue=="Mani"){
            console.log(await dialog.defaultValue()); // to get the value present in the text before we pass own text (ex) Harry Potter
            }else{
            await dialog.accept(text)}}
    })
     await page.getByRole("button",{name: 'Simple Alert'}).click()
    await page.waitForTimeout(3000)
    await page.getByRole("button",{name: 'Confirmation Alert'}).click()
    await expect(page.locator('//p[@id="demo"]')).toContainText("OK") //assertion
    await page.waitForTimeout(3000)
    await page.getByRole("button",{name: 'Prompt Alert'}).click()
    await expect(await page.locator('//p[@id="demo"]').textContent()).toBe("Hello Mani! How are you today?") //asstertion
    await page.waitForTimeout(3000)    
    

    // page.once('dialog',()=>{})
})

test.only("using_Page_Once", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("button",{name: 'Simple Alert'}).click()
    await page.waitForTimeout(3000)
    await page.getByRole("button",{name: 'Confirmation Alert'}).click()
    await page.waitForTimeout(3000)
    page.once("dialog", async(dialog)=>{dialog.accept("Mani")}) // it only handle for that preticular alert only for next we need to give again or playwright auto handle it 
    await page.getByRole("button",{name: 'Prompt Alert'}).click()
    await page.waitForTimeout(3000)
    await page.reload()
    await page.getByRole("button",{name: 'Prompt Alert'}).click()
    await page.waitForTimeout(3000)
})