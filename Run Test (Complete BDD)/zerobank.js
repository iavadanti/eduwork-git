import SearchPage from '../search.page';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given ('I open the home page', () => {
    SearchPage.visit()
});

When ('I type a word in search bar and I click enter', () => {
    SearchPage.search('online {enter}')
});

Then ('I see my search result in the website', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
});