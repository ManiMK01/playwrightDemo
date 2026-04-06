class SignInPage {
    constructor(page){
        this.emailTF = page.locator("input#txtusername")
        this.passwordTF = page.locator("#txtpassword")
        this.loginBtn = page.getByRole("button", {name : "Login"})
        this.forgotLink = page.locator("//a[text()='Forgot Password ']")
    }
}

export default SignInPage