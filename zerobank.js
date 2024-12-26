import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given ('I open the home page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('contain', 'index.html')
});

When ('I type a word in search bar and I click enter', () => {
    cy.get('#searchTerm').clear()
    cy.get('#searchTerm').type('online {enter}')
});

Then ('I see my search result in the website', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
});