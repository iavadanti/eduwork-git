///<reference types="cypress" />
describe ("Basic authentication using env var", ()=>{

    it('basic auth using cy.request', () => {
       cy.requestAuth()
        
    });
    it('basic auth using cy.visit', () => {
        cy.visit('/basic_auth', {
                auth: {
                    username: Cypress.env('USERNAME'),
                    password: Cypress.env('PASSWORD')
                },
                
            failOnStatusCode: false
        })
        cy.get('p').should('include.text', 'Congratulations! You must have the proper credentials.')
    });
});