describe('handle radio buttons', () => {
    beforeEach( () => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
    })

    it('handle radio buttons', () => {
        cy.contains("PIM").click()

        cy.get(".oxd-topbar-body-nav-tab-item").eq(2).click()

        cy.get('[type="checkbox"]').check({force: true})

        cy.get("[type='radio']")
            .first()
            .should('be.checked')
            .parent()
            .should('have.text', 'Enabled')
            
        cy.get("[type='radio']")
            .last()
            .should('not.be.checked')
            .parent()
            .should('have.text', 'Disabled')

        cy.get("[type='radio']").eq(1).check({force: true})

        cy.get("[type='radio']")
            .first()
            .should('not.be.checked')
            
        cy.get("[type='radio']")
            .last()
            .should('be.checked')
            
    })

})