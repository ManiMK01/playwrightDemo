import ExcelJS from "exceljs";
import path from "path";

export class ExcelUtils {

  static async readExcel(sheetName, row, column) {
    const workbook = new ExcelJS.Workbook();
    const filePath = path.join(__dirname, "../testData/TestScriptData.xlsx");
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(sheetName);
    return sheet.getRow(row).getCell(column).value;
  }

  static async writeExcel(sheetName, row, column, value) {
    const workbook = new ExcelJS.Workbook();
    const filePath = path.join(__dirname, "../testData/TestScriptData.xlsx");
    await workbook.xlsx.readFile(filePath);
    let sheet = workbook.getWorksheet(sheetName);
    if (!sheet) {
      sheet = workbook.addWorksheet(sheetName);
    }
    sheet.getRow(row).getCell(column).value = value;
    await workbook.xlsx.writeFile(filePath);
  }
}



// example to get and write
// import { test } from "@playwright/test";
// import { ExcelUtils } from "../utils/excelUtils.js";
// test("Excel Read Example", async ({ page }) => {

//   const username = await ExcelUtils.readExcel("Sheet1",1,1);
//   const password = await ExcelUtils.readExcel("Sheet1",1,2);

//   console.log(username,password);
// });