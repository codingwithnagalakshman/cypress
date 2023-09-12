describe("location", () => {
    beforeEach( () => {
        cy.login("Admin", "admin123")
    })

    it("location example", () =>{
        cy.location().should( loc => {
            expect(loc.host).to.eq("opensource-demo.orangehrmlive.com")
            expect(loc.protocol).to.eq("https:")
            expect(loc.pathname).to.eq("/web/index.php/dashboard/index")
            expect(loc.origin).to.eq("https://opensource-demo.orangehrmlive.com")
            expect(loc.href).to.eq("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")  
        })

        cy.location("pathname").should('eq', '/web/index.php/dashboard/index')
    })
})