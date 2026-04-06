import {test, expect} from "@playwright/test"

test("AssertionTest",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
     
})


/** Hard assert 
 * expect(page).toHaveURL()    ==> Page has url
 *  expect(page).toHaveTitle()  ==> Page has title
 *  expect(loactor).toBeVisible()  ==> Element is visible
 *  expect(locator).toBeEnabled()  ==> Control is enable
 *  expect(locator).toBeDisabled()  ==> Element is disabled
 *  expect(locator).toBeChecked()  ==> Radio/Checkbox is checked
 *  expect(locator).toHaveAttribute() ==> Element has attribute
 *  expect(locator).toHaveText()  ==> Element matches text
 *  expect(locator).toContainText()  ==> Element contains text
 *  expect(locator).toHaveValue()  ==> Input has a value
 *  expect(locator).toHaveCount()  ==> List of elements has given length
 * **/ 


/**
 * soft Assert
 *  expect.soft(locator).assertMethods;
 */