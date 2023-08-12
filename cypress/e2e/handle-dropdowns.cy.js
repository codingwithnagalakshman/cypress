describe('handle dropdown', () => {
    beforeEach( () => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
    })

    it("Handle dropdown box", () => {
        cy.contains("Recruitment").click()

        cy.get(".orangehrm-header-container > button").click()

        cy.get('.oxd-select-text').click()

        cy.get('.oxd-select-dropdown').should('be.visible')
            .contains('Senior QA Lead')
            .click()

        cy.get('.oxd-select-text-input').should('contain', 'Senior QA Lead')

        // cy.get('select').select(0)  //based on index
        // cy.get('select').select('Senior QA Lead') // based on dropdown name
        // cy.get('select').select('senior_qa_lead') // based on value
        // cy.get('select').select([0, 1])  //multi select
    })

})