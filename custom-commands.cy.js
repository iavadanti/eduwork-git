/// <reference types="cypress" />

describe('using custom commands', () => {
  
 beforeEach('Visit the website', () => {
   cy.visit('http://zero.webappsecurity.com/login.html')
   cy.url().should('include', 'login.html')
    });
it('login and pay bills', () => {
  //login
  cy.fixture("user").then(user => {
   const username = user.username
   const password = user.password
          
  //login
   cy.login(username, password)
   cy.get('#account_summary_tab > a').should('have.text', 'Account Summary')

   //pay bills
   cy.paybills()
   cy.get('#alert_content > span').should('contain.text', 'The payment was successfully submitted')

        })
    });
  });