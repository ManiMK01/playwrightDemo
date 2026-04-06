class LeadPage{
    constructor(page){
        this.page = page;
        this.siginLink = page.locator('//a[@class="btn btn-primary btn-xl rounded-pill mt-5"]');
        this.loginLink = page.locator('//a[text()="User Log In"]');
    }
}
export default LeadPage