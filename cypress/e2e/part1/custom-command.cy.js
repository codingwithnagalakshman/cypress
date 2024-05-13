describe("custom command", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("verify custom command", () => {
        cy.contains("Recruitment").click()
    })

    it("using NavigateTo custom command", () => {
        cy.navigateTo("Recruitment")
    })
})