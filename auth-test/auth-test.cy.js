it('successfully logs in', () => {
    cy.intercept('GET', `https://www.brmodeloweb.com/models?userId=*`).as('getUserModels')
    cy.loginViaAPI()
    cy.wait('@getUserModels')
    cy.contains('h2', 'Models').should('be.visible')
  })