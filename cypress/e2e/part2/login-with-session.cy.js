describe("login with session", () => {
    beforeEach(() => {
        cy.loginWithSession("Admin", "admin123")
        cy.visit('/web/index.php/dashboard/index')
    })

    it("verify loginwith session 1", () => {
        cy.contains("Recruitment").click()
    })

    it("verify loginwith session 2", () => {
        cy.navigateTo("Recruitment")
    })
})