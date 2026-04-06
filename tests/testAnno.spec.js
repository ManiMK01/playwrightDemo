
import {test} from "@playwright/test"

// /*passed test script */ 
// test("test annotation", async({page})=>{
//     console.log("Basic Script");
    
// })

// // To Skip the perticular test script exexution test.skip()
// test.skip("test annotation-2", async({page})=>{
//     console.log("Skipping the perticular script");
    
// })

// // to skip the perticular driver
// test("test annotation-3", async({browserName})=>{    
//     test.skip(browserName==="chromium")
//     console.log("Skipping perticular WebDriver script (ex ==> chromium)");
// })

// // to execute perticular script
// // test.only("test annotation-4", async({page})=>{
// //     console.log("Test - 4");
    
// // })

// // When there is script that need to failed we use test.fail
// test.fail("test annotation-5", async({page})=>{
//     await page.goto(kjgfghkughn);
//     console.log("Test script fail");    
// })

// /* When there is a issue in a script to fix that we use test.fixme */
// test.fixme("test annotation-6", async({page})=>{
//     await page.goto(kjgfghkughn);
//     console.log("Fixme Test Script");
    
// })

// /* You can mark a test as slow by calling test.slow() inside the test body. 
//   like implicitlywait */

// test("test annotation-7", async({page})=>{
//     test.slow()
//     //await page.goto("hjadfcd")
//     console.log("Slow test script");
// })

/* To group the test cases we use test.describe and then we can write the test cases inside it */
test.describe("login", async() => {
    test("valid cred", async({browserName})=>{
        console.log("Valid data script");
        /* used for set default timeout for this perticular time when the time is finish and the sript still run
            then the sript will fail after time passed */
        test.setTimeout(5000)
    })
    
    test("invalid cred", async ({browserName}) => {
        console.log("inValid data script");
    })
})