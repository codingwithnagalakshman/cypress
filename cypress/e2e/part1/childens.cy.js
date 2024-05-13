/// <reference types="cypress" />

describe("Get the children nodes", () => {
  beforeEach(() => {
    cy.visit("web/index.php/dashboard/index")
    cy.get("[name='username']").clear().type("Admin")
    cy.get("[name='password']").clear().type("admin123")
    cy.get("form").submit()
  })

  const data = ["Pending Self Review", "Candidate to Interview"]
  it.skip("get children nodes", () => {
    cy.get(".orangehrm-todo-list")
      .children()
      .each((ele, index, eleArr) => {
        cy.wrap(ele).children().last().should("contain", data[index])
      })
  })
})
