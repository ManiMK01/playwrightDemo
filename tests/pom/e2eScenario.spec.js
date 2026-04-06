import {test} from "@playwright/test"
import CreateTicketPage from "../../pageObjectModel/createTicketPage.page"
import HomePage from "../../pageObjectModel/homePage.page"
import SignInPage from "../../pageObjectModel/signinPageSM.page" 
import SignUpPage from "../../pageObjectModel/signupPageSM.page"
import LeadPage from "../../pageObjectModel/leadingPageSM.page"

test("EndToEndScenarioTest",async ({page}) => {
    let ran = Math.floor(Math.random()*1000);
    /* To handle popup manually */
    page.on("dialog",async (dialog) => {
        console.log(await dialog.message);
        await dialog.accept()
    })
    let lead = new LeadPage(page)
    let signupP = new SignUpPage(page)
    let signinP = new SignInPage(page)
    let hp = new HomePage(page)
    let createTicket = new CreateTicketPage(page)

    /* Launch the browser and enter the url */
    await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
    /*  Click on signUp page */
    await lead.siginLink.click()
    /* Enter the name */
    await signupP.nameTF.fill("mk"+ran)
    /* Enter emailId */
    await signupP.emailTF.fill(`mk${ran}@gmail.com`)
    /* Enter password */
    await signupP.passwordTF.fill("mk")
     /* Enter re-password */
    await signupP.re_PasswordTF.fill("mk")
    /* Enter contect no */
    await signupP.contactNOTF.fill("9874563210")
    /* Select gender */
    await signupP.maleRadioBtn.click()
    /* click submit button */
    await signupP.submitBtn.click()
    /* Handle alert popup manualy */
    // It will got and get the dialog msg and accept

    /* Enter email into login */
    
    await signinP.emailTF.fill(`mk${ran}@gmail.com`)
    /* Enter password in login page */
    await signinP.passwordTF.fill("mk")
    /* click on login button */
    await signinP.loginBtn.click()
    /* Create ticket */
    await hp.createTicketLink.click()
    /* Enter subject */
    await createTicket.subjectTF.fill("logo font")
    /* Select task type */
    await createTicket.TTDropDown.selectOption({value:"ot1"})
    /* Select priority */
    await createTicket.priorityDropdown.selectOption({value:"important"})
    /* Give decription */
    await createTicket.descriptionTF.fill("Font and colour in the logo is not as per the requirement")
    /* Click on send button */
    await createTicket.sendBtn.click()
    /* Handle popup mannualy */
    // it will handle by dialog
     
    /* click on view ticket */
    await hp.viewTicketLink.click()
    /* take screenshot of the ticket page */
    await page.screenshot({path:`./screenshot/tickets.png`})
})