describe('email validation', () => {
    beforeEach(() => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
        
    })

    it('Email validations', () => {

        cy.contains("Recruitment").click()

        cy.get(".orangehrm-header-container > button").click()

        cy.wrap(['a', 'a b', 'ab@a', 'ab@1','ab@a.']).each((ele, index, eleArr) => {
            cy.get('input').eq(4).clear().type(ele)
            cy.get('.oxd-input-field-error-message').should('have.length', 1)
            cy.get(".oxd-input-field-error-message").eq(0)
            .should('have.text', 'Expected format: admin@example.com')
        })

        cy.get('input').eq(4).clear().type("abc@abc.com")
        cy.get('.oxd-input-field-error-message').should('have.length', 0)
        
    })
})