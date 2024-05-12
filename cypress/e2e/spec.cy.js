/// <reference types="cypress"/>

describe("My first cypress test", () => {
  it.skip("should pass", () => {
    cy.visit("/web/index.php/auth/login")
  })

  it("should redirect to login page", () => {
    cy.visit("web/index.php/dashboard/index")
    cy.url().should("contain", "/web/index.php/auth/login")
    cy.contains("Login")
  })

  it("should redirect to dashboard page", () => {
    cy.visit("web/index.php/dashboard/index")
    cy.get("[name='username']").clear().type("Admin")
    cy.get("[name='password']").clear().type("admin123")
    cy.get("form").submit()
    cy.url().should("contain", "/web/index.php/dashboard/index")
  })
})
