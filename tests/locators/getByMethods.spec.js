import {test} from "@playwright/test";

test("getByMethods", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/login");

    /* getByLabel() method is used to find the element by its label text. */
    await page.getByLabel("Email:", {exact: false}).fill("test@example.com");

    /* getByPlaceholder() method is used to find the element by its placeholder text. 
        exact: false means it will match any placeholder text that contains "Search " */
    await page.getByPlaceholder("Search ", {exact: false}).fill("Laptop");

    /* getByText() method is used to find the element by its text content. */
    await page.getByText("Electronics", {exact: false}).first().click();
 
    /* getByAltText() method is used to find the element by its alt text. */
    await page.getByAltText("nopCommerce demo store", {exact: false}).click();

    /* getByTitle() method is used to find the element by its title attribute. */
    await page.goto("https://demo.nopcommerce.com/electronics");
    await page.getByTitle("Show products in category Camera & photo").first().click();

    /* getByRole() method is used to find the element by its role. */
    await page.goto("https://demo.nopcommerce.com/electronics");
    await page.getByRole("link", {name: "Camera & photo"}).first().click();  
    
    /* getByTestId() method is used to find the element by its data-testid attribute. */
    await page.goto("https://www.saucedemo.com", { waitUntil: "networkidle" });
    await page.getByTestId("username").fill("standard_user");
    await page.getByTestId("password").fill("secret_sauce");
    await page.getByTestId("login-button").click(); 
})

