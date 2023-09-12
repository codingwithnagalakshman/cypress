describe("its - gets the property value", () => {
    const jsonexample = {
        name: "Nagalakshman", 
        age: 33,
        hobbies: ["playing cricket", "playing chess"]
    };

    it("its usage", () => {
        cy.wrap(jsonexample).its("name").should("eq", "Nagalakshman")
        cy.wrap(jsonexample.hobbies).its(0).should("eq", "playing cricket")
        cy.wrap(jsonexample.hobbies).its("length").should("eq", 2)
    })

    beforeEach(() => {
        cy.login("Admin", "admin123")
    })


    it("its usage 2", () => {
        cy.get(".oxd-main-menu-item-wrapper").its('length').should('eq', 12)
        cy.get(".oxd-main-menu-item-wrapper").should('have.length', 12)
    })
})