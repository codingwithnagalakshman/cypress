const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const { rm } = require('fs')

module.exports = defineConfig({
  projectId: "r953er",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile}),
      on('task', {
        deleteFolder(folderName) {
          return new Promise((resolve, reject) => {
            rm(folderName, { maxRetries: 10, recursive: true }, (err) => {
              if (err) {
                console.error(err)
                resolve(null)
              }
              resolve(null)
            })
          })
        },
      })
    },

    baseUrl: "https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout: 4000, //dom based commands
    execTimeout: 60000, //cy.exec
    taskTimeout: 60000, //cy.task
    pageLoadTimeout: 60000, //page transition like cy.visit, cy.reload, cy.go
    requestTimeout: 5000, // cy.wait
    responseTimeout: 30000, //cy.request
    downloadsFolder: "cypress/downloads",
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    viewportHeight: 1000,
    viewportWidth: 1500
  }
});
