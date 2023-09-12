import data from '../fixtures/example.json'

describe("fixtures example", ()=> {
    beforeEach(() => {
        cy.login(data.user.username, data.user.password)
    })
    it("verify fixtures data", () => {
        cy.wrap(data).its('email').should('eq', 'hello@cypress.io')
    })
})