import {test} from "@playwright/test"
import LoginPage from "../../pageObjectModel/loginPage.page"
import logindata from "../../testData/practiceTestAuto.json"
test("loginTest", async({page}) => {
    let lp = new LoginPage(page);
    /* launch url */
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    /* pass userName */
    await lp.userNameTextField.fill("student")
    /* pass password */
    await lp.passwordTextField.fill("Password123")
    /* click on submit button */
    await lp.submitBtn.click();

    await page.waitForTimeout(3000)
})

test("loginUsingJsonTest", async({page}) => {

    let lp = new LoginPage(page);
    let url = logindata.url
    let userName = logindata.userName
    let password = logindata.password
    /* launch url */
    await page.goto(url)
    /* pass userName */
    await lp.userNameTextField.fill(userName)
    /* pass password */
    await lp.passwordTextField.fill(password)
    /* click on submit button */
    await lp.submitBtn.click();

    await page.waitForTimeout(3000)
})