/// <reference types="cypress" />
it('Successfully validate response body using params', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response)=>{
        expect(response.body.abilities[0].ability.name).to.equal("limber")
        expect(response.body.abilities[0].ability.url).to.equal("https://pokeapi.co/api/v2/ability/7/")
    })
});