describe("upload file", () => {
  beforeEach(() => {
    cy.task("deleteFolder", "cypress/downloads/myresume.txt")
    cy.login("Admin", "admin123")
  })

  it.skip("upload file", () => {
    cy.contains("Recruitment").click()

    cy.get(".orangehrm-header-container > button").click()

    cy.get("[name='firstName']").clear().type("Naga")

    cy.get("[name='middleName']").clear().type("lakshman")

    cy.get("[name='lastName']").clear().type("Chirukuri")

    cy.get("input").eq(4).clear().type("abc@abc.com")

    // cy.get('input[type=file]').selectFile({
    //     contents: Cypress.Buffer.from('file contents'),
    //     fileName: 'file.txt',
    //     mimeType: 'text/plain',
    //     lastModified: Date.now(),
    //   }, {force: true})

    cy.get("input[type=file]").selectFile(
      {
        contents: "cypress/fixtures/resume.txt",
        fileName: "myresume.txt",
        mimeType: "text/plain",
        lastModified: Date.now(),
      },
      {force: true}
    )

    cy.get("form").submit()

    cy.get(".orangehrm-file-preview").click({force: true})

    // https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidateAttachment/candidateId/36
    // https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/36

    // cy.readFile("C:\\Users\\chiru\\Downloads\\myresume.txt").should('contain', 'This is my resume')

    cy.location("pathname").then((urlPath) => {
      const urlInfo = urlPath.split("/")
      const candidateId = urlInfo[urlInfo.length - 1]
      cy.downloadFile(
        "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidateAttachment/candidateId/" +
          candidateId,
        "cypress/fixtures",
        "resume.txt"
      )
      cy.readFile("cypress/fixtures/resume.txt").should(
        "contain",
        "This is my resume"
      )
    })
  })
})
