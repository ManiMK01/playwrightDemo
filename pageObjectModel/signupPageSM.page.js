class SignUpPage {
    constructor(page){
        this.page = page;
        this.nameTF = page.locator("#name")
        this.emailTF = page.locator("#email")
        this.passwordTF = page.locator("#password")
        this.re_PasswordTF = page.locator("#cpassword")
        this.contactNOTF = page.locator("#txtpassword")
        this.maleRadioBtn = page.locator('//input[@value="m"]')
        this.femaleRadioBtn = page.locator('//input[@value="f"]')    
        this.submitBtn = page.locator('//input[@name="submit"]')   
    }
    
}
export default SignUpPage