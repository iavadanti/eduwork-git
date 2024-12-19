/// <reference types="cypress" />
describe('Navbar Test',()=>{
    before(()=>{
        //testIsolation disabled in cypress.config.js
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('strong').should('contain.text', 'Online Banking')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible').and('contain.text', 'Feedback')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('#homeMenu').should('contain.text', 'Home')
    });

});