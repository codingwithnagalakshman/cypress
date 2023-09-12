describe("login with request", () => {
    it("login with request", () => {
        cy.visit("/web/index.php/auth/login")
        cy.get("[type='hidden']").invoke("attr", "value").as("token")
        cy.get("@token").then(token => {
            cy.log(token)
            cy.request({
                method: 'POST',
                url: '/web/index.php/auth/validate', // baseUrl is prepend to URL
                form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
                body: {
                  username: 'Admin',
                  password: 'admin123',
                  _token: token
                },
              }).then(res => {
                cy.visit("web/index.php/dashboard/index")
                cy.navigateTo("Recruitment")
              })
        })
    })
})