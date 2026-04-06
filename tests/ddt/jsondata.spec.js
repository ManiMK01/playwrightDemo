import {test} from "@playwright/test"
import { log } from "console"
import fs from "fs"
let dataFile = fs.readFileSync("E:/playwright/testData/singlesData.json")
let data = JSON.parse(dataFile)
test("get_data_from_json",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    // To read single data 
    console.log(data.greet); // with in a object not in array
    
    //To read multiple data from multiple sets
    data.forEach(element => {
        console.log(element.greet);    
    });
})

let autoData = fs.readFileSync("E:/playwright/testData/practiceTestAuto.json")
let testData = JSON.parse(autoData)
test("Usind_json_to_get_the_data",async({page})=>{
    await page.goto(testData.url)
    await page.locator("input#username").fill(testData.userName)
    await page.locator("input#password").fill(testData.password)
    await page.getByRole("button",{name:"Submit"}).click();
    let title = await page.title() 
    console.log(title);
    await page.waitForTimeout(3000)
    if(title=="Logged In Successfully | Practice Test Automation"){
        console.log("==========> Valid credensials <==========");
    }else{
        console.log("==========> Invalid credensials <==========>");     
    }
})

test("Usind_Array_json_to_get_the_data",async({page})=>{
    // testData.forEach(d => {
    //     let url = d.url  
    //     let userName = d.userName
    //     let password = d.password

    //     // this fuction not decleare as async and we cannot use await inside fuction as async  
    //     // which is not decleare as async so we cannot use for each to read the array of json data
    // });

    for(let data of testData){  // why we write the script inside a loop is when ever loop itereate it take differet set of data from the json array data
        let url = data.url
        let userName = data.userName
        let password = data.password
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
    }
})