/// <reference types="cypress" />

describe("cypress life cycle methods", () => {
    before( () => {
        cy.log("this method runs only once")
    })

    beforeEach(() => {
        cy.log("this method execute before each test")
    })

    it("test case 1", () => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
    })

    it("test case 2", () => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type("Admin")
        cy.get("[name='password']").clear().type("admin123")
        cy.get("form").submit()
    })
    
    afterEach(() => {
        cy.log("this method execute after each test")
    })

    after(() => {
        cy.log("this method execute only once after all tests")
    })
})