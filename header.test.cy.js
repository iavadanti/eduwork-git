/// <reference types="cypress" />
describe('Validate Headers and response body', () =>{
    beforeEach(() => {

        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
      
      })
      
    it('Successfully validate content-type', () => {
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')

    });
    it('Successfully validate response body', () => {
        cy.get('@pokemon').its('body')
        .should('include', {name:'ditto'})

    });
});