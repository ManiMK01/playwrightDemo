import {chromium, firefox, test} from "@playwright/test"

test("browser controls", async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    console.log(await context.cookies());
    
    await page.goto("https://www.amazon.in/");
    console.log("Amazon website open"); 
    
    /* To get the cookies of the webpage */
    console.log(await context.cookies());
    
    /* To find the title of the web page */
    console.log(await page.title());
    
    /* to find the size of the webpage before set size */
    let befoer_size = await page.viewportSize();
    console.log(befoer_size);

    /* to Set the size of the webpage */
    await page.setViewportSize({width: 1000, height: 500});

    /* To find the size of the webpage after setting it */
    let after_size = await page.viewportSize();
    console.log(after_size);
     
    /* To find the title of the web page */
    await page.goto("https://www.flipkart.com/");
    console.log(await context.cookies());
    console.log(await page.title());
    
    /* To find the url of the webPage */
    console.log(await page.url());
})


test("browser controls-2", async()=>{
    /* To execute and launch the perticular browser we use browserName and then we can use that browser to launch
    example await webkit.launch(); */
    let browser = await firefox.launch();
    let context = await browser.newContext();
    /* To close the browser instantly */
    await browser.close();
    /* To find tge newpage in the browser */
    let page = await context.newPage();
    /* To enter the url in the browser */
    await page.goto("https://www.amazon.in/");
    console.log("Amazon website open");
    
})

test.only("Take Screenshot", async({page})=>{
    await page.goto("https://www.amazon.in/",{ waitUntil: "networkidle" });
    console.log("Amazon website open"); 
    /* To take the screenshot of the webpage */
    await page.screenshot({path: "screenshot/ss.png"});
    /* To take the screenshot with time stamp */
     let time = new Date().getTime();
    await page.screenshot({path: `screenshot/ss-${time}.png`});
    console.log("Screenshot taken at time: " + time);
}) 

