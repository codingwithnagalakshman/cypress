/// <reference types="cypress" />

describe("Describing alias", () => {
    describe("alias in tests", () => {
        it("@alias name", () => {
            cy.fixture("example.json").as("example")
            cy.get("@example").then(( data ) => {
                cy.log(data.body);
            })
        })
        
        it("using this keyword", function() {
            cy.fixture("example.json").as("data")
            cy.wrap().then( () => {
                cy.log(this.data.email);
            })
           
        })
    })

    describe("alias beforeEach method0", () => {
        beforeEach( () => {
            cy.fixture("example.json").as("example")
        })

        it("using this keyword", function() {
            cy.log(this.example.name);
        })
    })

    describe("alias for elements", () => {
        beforeEach( () => {
            cy.visit("web/index.php/dashboard/index")
            cy.get("[name='username']").clear().type("Admin")
            cy.get("[name='password']").clear().type("admin123")
            cy.get("form").submit()
            cy.contains("Performance").click()

            cy.get('.oxd-topbar-body-nav-tab-item').eq(0).click()
            cy.get('.oxd-dropdown-menu').should('be.visible')
                .find('li')
                .eq(0)
                .should('have.text', 'KPIs')
                .click()
            
            cy.get('[type="checkbox"]').as("checkbox")
        })

        it("handle checkboxes", function() {
            cy.get('@checkbox').check(["0", "1"], {force: true})

            cy.get('.orangehrm-horizontal-padding > div > .oxd-text').should('have.text', "(2) Records Selected")

            cy.get('@checkbox').check(["2", "4"], {force: true})

            cy.get('.orangehrm-horizontal-padding > div > .oxd-text').should('have.text', "(4) Records Selected")
        })
    })
})