// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-downloadfile/lib/downloadFileCommand';

Cypress.Commands.add('login', (username, password) => { 
    cy.visit("web/index.php/dashboard/index")
    cy.get("[name='username']").clear().type(username)
    cy.get("[name='password']").clear().type(password)
    cy.get("form").submit()
 })

 Cypress.Commands.add('loginWithSession', (username, password) => { 
    cy.session([username, password], () => {
        cy.visit("web/index.php/dashboard/index")
        cy.get("[name='username']").clear().type(username)
        cy.get("[name='password']").clear().type(password)
        cy.get("form").submit()
    },{
      validate() {
        cy.visit('/web/index.php/dashboard/index')
      }
    }
    )
 })

 Cypress.Commands.add('navigateTo', (text) => { 
    cy.contains(text).click()
 })