class CreateTicketPage {
    constructor(page) {
        this.subjectTF = page.locator("input#subject")
        this.TTDropDown = page.locator('//select[@name="tasktype"]')
        this.priorityDropdown = page.locator('//select[@name="priority"]')
        this.descriptionTF = page.locator('//textarea[@name="description"]')
        this.sendBtn = page.locator('//input[@value="Send"]')
        this.clearFormBtn = page.getByRole("button",{name : "Clear Form"})
    }
} 

export default CreateTicketPage 