import {test, expect} from "@playwright/test"

test.describe("hooksCondition", () => {
    test.beforeAll("PreCondition-Suite",async({browser}) =>{
        console.log("Connect with data base")
    })
    
    test.beforeEach("preCondition-test", async({page}) =>{
        console.log("Login to application")
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.getByRole('textbox', {name: 'Username'}).fill("student");
        await page.getByRole('textbox', {name: 'Password'}).fill('Password123')
        await page.getByRole('button', {name: 'Submit'}).click();
    })

    test.afterAll("postCondition", async({browser}) => {
        console.log("colse db connection");
        
    })

    test.afterEach("postCondition-test", async({page}) => {
        console.log("logout from application");
    })

    test("TestCase-1", async({page}) => {
        console.log("test-1")
        await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
        await expect(page.locator('//p[@class="has-text-align-center"]/child::strong')).toHaveText('Congratulations student. You successfully logged in!')
        await page.getByRole('link', {name: 'Log out'});
    })
})