import {test} from "@playwright/test"
import fs from "fs"
let dataFile = fs.readFileSync("E:/playwright/testData/practiceTestAuto.json")
let data = JSON.parse(dataFile)

test.describe("grouping_test", async (parame) => {
    let url = data.url
    let userName = data.userName
    let password = data.password
    test("test_1",async({page}) => {
            await page.goto(url)
            await page.locator("input#username").fill(userName)
            await page.locator("input#password").fill(password)
            await page.getByRole("button",{name:"Submit"}).click();
            let title = await page.title() 
            if(title=="Logged In Successfully | Practice Test Automation"){
                console.log("==========> Valid credensials <==========");
            }else{
                console.log("==========> Invalid credensials <=========="); 
            }
    })
    // do script like after the loging we write the script for other works like other Testcases
    test("test_2",async({page}) => {
        await page.goto(url)
            await page.locator("input#username").fill(userName)
            await page.locator("input#password").fill(password)
            await page.getByRole("button",{name:"Submit"}).click();
            let title = await page.title() 
            if(title=="Logged In Successfully | Practice Test Automation"){
                console.log("==========> Valid credensials <==========");
            }else{
                console.log("==========> Invalid credensials <=========="); 
            }
    })

    await test("test_3",async({page}) => {
        await page.goto(url)
            await page.locator("input#username").fill(userName)
            await page.locator("input#password").fill(password)
            await page.getByRole("button",{name:"Submit"}).click();
            let title = await page.title() 
            if(title=="Logged In Successfully | Practice Test Automation"){
                console.log("==========> Valid credensials <==========");
            }else{
                console.log("==========> Invalid credensials <=========="); 
            }
    })
})