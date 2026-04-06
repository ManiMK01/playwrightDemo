class LoginPage {
    constructor(page){
        this.page = page

        this.userNameTextField = page.locator("input#username");
        this.passwordTextField = page.locator("input#password");
        this.submitBtn = page.getByRole('button', { name: 'Sign In' });
        this.termsCheckbox = page.locator("input[type='checkbox']");
    }
    async login(username, password) {
        await this.userNameTextField.fill(username);
        await this.passwordTextField.fill(password);
        await this.termsCheckbox.check();
        await this.submitBtn.click();
    }
}
export default LoginPage