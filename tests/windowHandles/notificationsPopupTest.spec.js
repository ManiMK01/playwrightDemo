import {test} from "@playwright/test"

test("auto_Hanlde_Notification",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage();

    // notification are auto handled by playwright and denied the permissions
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole('button',{name: 'Notification'}).click()

    // evaluate() is use it evaluate() executes JavaScript code inside the browser page context and returns the result to Node.js.
    let result = await page.evaluate(()=>{return Notification.requestPermission()})
    // it will denied automatically
    console.log(`permissions:${result}`);
})

test.only("give_Permission_to_Notification",async({browser})=>{
    let context = await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]}) // to give premission

    /* We can give this permissions:["notifications"] config js also to get permission
        we gave it in use{ }  we can access of the mic, camera, etc,. */
    let page = await context.newPage();

    // notification are auto handled by playwright and denied the permissions
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole('button',{name: 'Notification'}).click()

    // evaluate() is use it evaluate() executes JavaScript code inside the browser page context and returns the result to Node.js.
    let result = await page.evaluate(()=>{return Notification.requestPermission()})
    // it will denied automatically
    console.log(`Before Revoking the permissions:${result}`);

    // To revoke all premission
    await context.clearPermissions();
    let result2 = await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`After Revoking the permissions:${result2}`);

})
