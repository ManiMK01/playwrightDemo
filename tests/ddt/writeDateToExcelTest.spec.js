import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"

test("write_Data",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/TestScriptData.xlsx"))
    let sheet = book.getWorksheet("Sheet6")
    if(!sheet){
        sheet = book.addWorksheet("Sheet6")
    }
    //sheet.getRow(1).getCell(1).value="Hello"  // To enter a data
    await page.goto("https://www.amazon.in/")
    //await page.locator('//input[@name="q"]').fill("ps5")
    await page.locator('input#twotabsearchtextbox').fill("ps5")
    await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
    let allOptions = await page.locator('//div[@class="s-suggestion-container"]').allTextContents();
    console.log(allOptions);

    // How to store all the data from the allOptions into excel file
    for(let option of allOptions){
        let index = allOptions.indexOf(option) // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
        
        // if we want to strore it in a single row and multiple columns  we give
            // sheet.getRow(1).getCell(index+1).value=option
        // to store the data in row wise    
        sheet.getRow(index+1).getCell(1).value=option
    }

    await book.xlsx.writeFile(path.join(__dirname,"../../testData/TestScriptData.xlsx"))
})