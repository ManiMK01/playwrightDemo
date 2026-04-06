import {test} from "@playwright/test"
import path from "node:path";
import fs from "fs"

test("upload_SingeFile",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")

     // Another way
    console.log(__dirname)
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../tests/uploadFiles/resume1.xlsx"))
    // setInputFiles()
    await page.locator("#singleFileInput").setInputFiles("E:/playwright/tests/uploadFiles/resume.txt") // ../ to travers back
    await page.getByRole('button',{name:"Upload Single File"}).click()
    await page.waitForTimeout(5000)
    await page.locator("#multipleFilesInput").setInputFiles(["E:/playwright/tests/uploadFiles/resume.txt","E:/playwright/tests/uploadFiles/resume1.xlsx"])
    await page.getByRole('button',{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(4000)
   
})

test("upload_MultipleFiles",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#multipleFilesInput").setInputFiles(["E:/playwright/tests/uploadFiles/resume.txt","E:/playwright/tests/uploadFiles/resume1.xlsx"])
    await page.getByRole('button',{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(4000)

    /* Another way to upload multiple file*/
})

test("upload_From_LocalDivice",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Manikandan/OneDrive/Desktop/data file/TestScriptData.xlsx")
    await page.getByRole('button',{name:"Upload Single File"}).click()
    await page.waitForTimeout(5000) 
     await page.locator("#multipleFilesInput").setInputFiles([
        "C:/Users/Manikandan/OneDrive/Desktop/data file/TestScriptData.xlsx",
        "C:/Users/Manikandan/OneDrive/Desktop/data file/commondata.properties"])
    await page.getByRole('button',{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(4000)

})

test("How_to_Remove_file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Manikandan/OneDrive/Desktop/data file/TestScriptData.xlsx")
    await page.locator("#singleFileInput").setInputFiles([]) // to remove the files
    await page.getByRole('button',{name:"Upload Single File"}).click()
    await page.waitForTimeout(5000) 
    await page.locator("#multipleFilesInput").setInputFiles([
        "C:/Users/Manikandan/OneDrive/Desktop/data file/TestScriptData.xlsx",
        "C:/Users/Manikandan/OneDrive/Desktop/data file/commondata.properties"])
    await page.locator("#multipleFilesInput").setInputFiles([]) // same for multiple files also
    await page.getByRole('button',{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(4000)
})

test("downloadFiles",async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    
    await page.getByRole("textbox",{name:"Enter text here"}).fill("Hello I am downloading file from here")
    // to store in diff name
    await page.locator("#fileName").fill("NewFile.txt")

    let [downloadFiles] = await Promise.all([  
        page.waitForEvent("download"),
        page.getByRole("button",{name:"Download"}).click()
    ]) // if we write before waitForEvent it will still wait for click operation
    // to save the file
    let downloadfolder = "E:/playwright/tests/downloadedFiles"
    let fileName = downloadFiles.suggestedFilename()
    // await downloadFiles.saveAs(downloadFiles.suggestedFilename())
    //await downloadFiles.saveAs(path.join(downloadfolder,fileName));
    await downloadFiles.saveAs(path.join(__dirname,"../../tests/downloadedFiles",fileName))
    console.log(await downloadFiles.path())
    await page.waitForTimeout(4000)  
})

test("dwonload_To_LocalSystem",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0") 
    await page.getByRole("textbox",{name:"Enter text here"}).fill("Hello I am downloading file from here")
    await page.locator("#fileName").fill("file.txt")
    // let [downloadFiles] = await Promise.all([  
    //     page.waitForEvent("download"),
    //     page.getByRole("button",{name:"Download"}).click()
    // ]) 

    // Another way to wait till the download to complete
    let download = page.waitForEvent("download")
    await page.getByRole("button",{name:"Download"}).click()
    let downloadFiles = await download

    let downloadfolder = "C:/Users/Manikandan/OneDrive/Desktop/data file"
    let fileName = downloadFiles.suggestedFilename()
    let fullPath = path.join(downloadfolder,fileName)
    await downloadFiles.saveAs(path.join(downloadfolder,fileName));
    //await downloadFiles.saveAs(path.join(__dirname,"../../tests/downloadedFiles",fileName))
    console.log(await downloadFiles.path())
    await page.waitForTimeout(4000)  

    // Verification is it is saved or not 
    if(fs.existsSync(fullPath)){
        console.log(`File exists in: ${fullPath}`);
    }else{
        console.log("No such file exists");
        
    }
})