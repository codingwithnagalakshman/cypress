describe("Handle text box", () => {

    beforeEach(() => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
        
    })

    
    it("Handle text box", () => {
        cy.contains("Recruitment").click()

        cy.get(".orangehrm-header-container > button").click()
        
        cy.get("[name='firstName']")
            .clear()
            .type("Naga")
            .should('have.value', "Naga")

        cy.get("[name='middleName']")
            .clear()
            .type("lakshman")
            .should('have.value', "lakshman")

        cy.get("[name='lastName']")
            .clear()
            .type("Chirukuri")
            .should('have.value', "Chirukuri")

    })

    it.only("Validate text box", () => {
        cy.contains("Recruitment").click()
        cy.get(".orangehrm-header-container > button").click()
        cy.get("form").submit()

        cy.get(".oxd-input-field-error-message").should('have.length', 3);
        cy.get(".oxd-input-field-error-message").eq(0)
            .should('have.text', 'Required')
        
        cy.get(".oxd-input-field-error-message").eq(1)
            .should('have.text', 'Required')

        cy.get(".oxd-input-field-error-message").eq(2)
            .should('have.text', 'Required')

        cy.get("[name='firstName']")
            .clear()
            .type("Naga")
            .should('have.value', "Naga")

        cy.get(".oxd-input-field-error-message").should('have.length', 2);
    
        cy.get(".oxd-input-field-error-message").each( (element, inex, elementArr) => {
            cy.wrap(element).should('have.text', 'Required')
        });

        cy.get("[name='lastName']")
            .clear()
            .type("Chirukuri")
            .should('have.value', "Chirukuri")
        
        cy.get(".oxd-input-field-error-message").should('have.length', 1);  
        
        cy.get(".oxd-input-field-error-message")
            .should('have.text', 'Required')

    })

})