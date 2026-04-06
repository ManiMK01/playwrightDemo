import {test} from "@playwright/test"

// Approch-1
test("SmokeTesting @smoke", async({page}) =>{
    console.log("Smoke");
    
})

/* <===== Approch-2 =====> */
test("SmokeTetsting1", {tag: ['@smoke']}, async({page}) => {
    console.log("Smoke approch-2");
    
})

/* giving multipe group */
test("@smoke @reg test1", async({page}) => {
    console.log("smoke and reg-1");
    
})

test("test2", {tag: ['@smoke','@reg']}, async({page}) => {
    console.log("smoke and reg2");    
})
