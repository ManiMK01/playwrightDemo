import {test} from "@playwright/test"
import excel from "exceljs"
import { url } from "node:inspector";
import path from "node:path";

test("read_Single_Data",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage()

    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/TestScriptData.xlsx"))
    let sheet = await book.getWorksheet("Sheet1")
    // let data = await sheet.getRow(2).getCell(1).toString() 
    let data = await sheet.getRow(2).getCell(1).value 
    console.log(data)
})

test("Read_MultipleData",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/TestScriptData.xlsx"))
    let sheet = await book.getWorksheet("Sheet2")
    // to print row wise
    for(let row=1; row<=sheet.actualRowCount; row++){
        for(let cell=1; cell<=sheet.getRow(1).actualCellCount; cell++){
            let data = sheet.getRow(row).getCell(cell).value;
            console.log(data);
            
        }
    }

    // To print column wise
    for(let cell=1; cell<=sheet.getRow(1).actualCellCount; cell++){
        for(let row=1; row<=sheet.actualRowCount; row++){
            let data = sheet.getRow(row).getCell(cell).value;
            console.log(data);    
        }
    }
})

// http://49.249.28.218:8081/       

test("pass_testData_to_App",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage()

    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../../testData/TestScriptData.xlsx"))
    let sheet = await book.getWorksheet("small_CRM")
    // let url = sheet.getRow(1).getCell(2).value
    // let userName = sheet.getRow(2).getCell(2).value
    // let password = sheet.getRow(3).getCell(2).value

    // to get and store it in 
    let alldata=[]
    for(let r=2; r<=sheet.actualRowCount; r++){
        let row = sheet.getRow(r)
        let url = row.getCell(1).value
        let userName = row.getCell(2).value
        let password = row.getCell(3).value
        alldata.push({url:url,userName:userName,password:password})
    }
    console.log(alldata);

    // we can test with diffrent set of datas for this i gave two diff set data 
    for(let d of alldata){
        await page.goto(d.url)
        await page.waitForTimeout(3000)
        // await page.getByRole("link",{name:"CRM"}).click()
         let p2 = page.waitForEvent('popup')
        await page.getByRole("link",{name: "Small CRM"}).click()
        let page2 = await p2
        await page2.getByRole('link',{name:"Admin"}).click()
        await page2.locator("#txtusername").fill(d.userName)
        await page2.locator("#txtpassword").fill(d.password)
        await page2.getByRole("button",{name: "Login"}).click()
        await page2.waitForTimeout(4000)
    }
})