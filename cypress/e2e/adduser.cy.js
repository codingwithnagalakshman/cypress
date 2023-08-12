describe("Add user", () => {

    beforeEach(() => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
        
    })

    it("should open admin menu", () => {
        // cy.contains("Admin").click()
        cy.get("li.oxd-main-menu-item-wrapper")
            .eq(0)
            .should('have.text', 'Admin')
            .click()
    })

    it("Add user", () => {
        cy.contains("Admin").click()
        cy.get(".orangehrm-header-container > button").click()
    })

})