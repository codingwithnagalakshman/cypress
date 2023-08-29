/// <reference types="cypress" />

describe("filter example", () => {
    beforeEach( () => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
    })

    it("Filter India", () => {
        cy.contains("Admin").click()
        cy.contains("Nationalities").click()

        cy.get("ul.oxd-pagination__ul li").eq(1).click()
        
        cy.get('.oxd-table-row > [style="flex-basis: 80%;"] > div')
            .filter(":contains('Indian')")
            .should('have.length', 1);
    })
})