import {test} from "@playwright/test"
import data from "../../testData/data.json"

test("using_ValidAndInvalid_Data",async({page}) => {
    for(let d of data.valid_data){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.userName)
        await page.locator("input#password").fill(d.password)
        await page.getByRole("button",{name:"Submit"}).click();
        let title = await page.title() 
        if(title=="Logged In Successfully | Practice Test Automation"){
            console.log("==========> Valid credensials <==========");
        }else{
            console.log("==========> Invalid credensials <=========="); 
        }
    }
    // here we are useing the same set of code to execute so to avoid code duplication
    for(let d of data.invalid_data){
        await page.goto(d.url)
        await page.locator("input#username").fill(d.userName)
        await page.locator("input#password").fill(d.password)
        await page.getByRole("button",{name:"Submit"}).click();
        let title = await page.title() 
        if(title=="Logged In Successfully | Practice Test Automation"){
            console.log("==========> Valid credensials <==========");
        }else{
            console.log("==========> Invalid credensials <=========="); 
        }
    }
})

test.only("to_Avoid_Code_Duplication",async({page}) => {
    for(let key in data){ /* This 'in' loop is to get the key of main object example valid_data and invalid_data*/
        console.log(key);
        for(let d of data[key]){ /* This loop is to iterate the array of object data one after other by this we can avoid code duplication */
            await page.goto(d.url)
            await page.locator("input#username").fill(d.userName)
            await page.locator("input#password").fill(d.password)
            await page.getByRole("button",{name:"Submit"}).click();
            let title = await page.title() 
            if(title=="Logged In Successfully | Practice Test Automation"){
                console.log("==========> Valid credensials <==========");
            }else{
                console.log("==========> Invalid credensials <=========="); 
            }
        } 
    }
})