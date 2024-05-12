describe("invoke functions", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123")
  })

  const sum = (value1, value2) => {
    return value1 + value2
  }

  it.skip("invoke functions", () => {
    cy.get(".oxd-brand-banner")
      .children()
      .invoke("attr", "src")
      .should("contain", "orangehrm-logo.png")

    cy.wrap({sum}).invoke("sum", 10, 20).should("eq", 30)

    cy.get(".oxd-brand-banner")
      .children()
      .should(
        "have.attr",
        "src",
        "/web/images/orangehrm-logo.png?v=1689053487449"
      )
  })
})
