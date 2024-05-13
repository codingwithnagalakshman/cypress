describe("read file", () => {
    
    it("read file", () => {
        cy.readFile("cypress/fixtures/resume.txt").should('contain', 'This is my resume')
    })
})