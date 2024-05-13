describe("Navigate back and forward", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("Go backward", () => {
        cy.navigateTo("Recruitment")
        cy.go("back")
    })

    it("Go backward with number", () => {
        cy.navigateTo("Recruitment")
        cy.go(-1)
    })

    it("Go forward", () => {
        cy.navigateTo("Recruitment")
        cy.go("back")
        cy.go("forward")
    })

    it("Go forward with number", () => {
        cy.navigateTo("Recruitment")
        cy.go(1)
        cy.go(-1)
    })
})