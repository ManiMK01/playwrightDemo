import { test, expect } from "@playwright/test";
import LoginPage from "../pageObjectModel/loginPage.page";

test("login and verify iPhone X in shop", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await loginPage.login("rahulshettyacademy", "Learning@830$3mK2");

    // Wait for navigation to shop page
    await page.waitForURL("**/angularpractice/shop");

    // Verify iPhone X is present
    const iphoneX = page.locator("text=iphone X");
    await expect(iphoneX).toBeVisible();
});
