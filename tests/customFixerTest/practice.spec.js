import {test} from "../../customFixture/login.js"

test("DemoTest", async({loginFixtuers,page}) => {
    await page.click("//a[text()='Log out']")
})