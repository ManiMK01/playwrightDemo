import {test} from "@playwright/test"

test("singe_dropdown test", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.waitForTimeout(3000)

    /* value is the value which is present in the code and label is the text which is visible to us in the dropdown */
    await page.locator("#select3").selectOption({value:"India"});
    await page.waitForTimeout(3000)

    /* label is the text which is visible to us in the dropdown and value is the value which is present in the code */
    await page.locator("#select3").selectOption({label:"United Kingdom"});
    await page.waitForTimeout(3000)

    /* index is the position of the option in the dropdown starting from 0 and value is the value 
    which is present in the code and label is the text which is visible to us in the dropdown */
    await page.locator("#select3").selectOption({index:7});
    await page.waitForTimeout(3000)

    /* if we know the value of the option then we can directly pass the value in the selectOption() method */
    await page.locator("#select3").selectOption("China");
    await page.waitForTimeout(3000)
    
    /* giving multiple options */
    await page.locator("#select3").selectOption({value:"India",label:"India",index:0});
    await page.waitForTimeout(3000)
})

test("multi_dropdown test", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    //await page.locator("#select-multiple-native").selectOption([{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Mens Casual Slim Fit"},{value:"Pierced Owl Rose Gold Plated Stainless Steel Double"}])
    await page.locator("#select-multiple-native").selectOption([{index:0},{index:1},{index:2}])

    await page.waitForTimeout(3000)
    await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click();
    await page.waitForTimeout(3000)
})

test.only("custom_dropdown test", async({page})=>{
    await page.goto("https://www.amazon.in/s?k=ps5&crid=JL9T9MQJB7XB&sprefix=%2Caps%2C340&ref=nb_sb_ss_recent_1_0_recent")
    await page.locator("//select[@id='s-result-sort-select']").click({force:true});
    await page.locator("//a[@class='a-dropdown-link']").first().waitFor();
    let options = await page.locator("//a[@class='a-dropdown-link']").all();
    for(let option of options){
        let text = await option.textContent();
        console.log(text);
        if(text.includes("Best ")){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(3000)

    /* derictly by xpath */
    //await page.locator("//a[@class='a-dropdown-link' and contains(text(),'Price: High to Low')]").click();

    // let text = "Price: High to Low";
    // await page.locator(`//a[@class='a-dropdown-link' and text()="${text}"]`).click();
    // await page.waitForTimeout(3000)
})
/* auto    */
test("auto_suggestive_dropdown test", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator("input#twotabsearchtextbox").fill("shoes");
    // await page.waitForTimeout(3000) // don't use hard wait in script, use it only for debugging purpose
    await page.locator("(//div[@class='s-suggestion-container'])[1]").first().waitFor();
    // let allSuggestions = await page.locator("//div[@class='s-suggestion-container']/child::div[@role='button']").all();
    // for(let suggestion of allSuggestions){
    //     let text = await suggestion.textContent();
    //     console.log(text);
    //     if(text.includes(" for men sports")) {
    //         await suggestion.click(); 
    //         break;
    //     }
    // }
    // await page.waitForTimeout(5000)
     
    /* press down arrow key to select the option from the auto suggestive dropdown and then press enter key to click on the selected option */
    await page.locator("input#twotabsearchtextbox").press("ArrowDown"); // first suggestion will be selected
    await page.locator("input#twotabsearchtextbox").press("ArrowDown"); // second suggestion will be selected
    await page.locator("input#twotabsearchtextbox").press("Enter"); // selected option will be clicked
    await page.waitForTimeout(5000)
})