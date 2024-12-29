// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (username, password)=>{
//     cy.clearCookies()
//     cy.clearLocalStorage()
//     cy.get('#user_login').clear()
//     cy.get('#user_login').type(username)
//     cy.get('input[name="user_password"]').clear()
//     cy.get('input[name="user_password"]').type(password)
//     cy.get('input[name="submit"]').click()
// })
// Cypress.Commands.add('paybills',() =>{
//     cy.get('#pay_bills_tab > a').click()
//    cy.url().should('include', 'http://zero.webappsecurity.com/bank/pay-bills.html')

//    cy.get('#sp_payee').select("bofa")
//    cy.get('#sp_account').select("2")

//    cy.get('#sp_amount')
//    .type('100')
//    .should('have.value', '100')
//    //.and('have.prop', 'valueAsNumber', 100) ->input type html = text, not needed
//    cy.get('#sp_date').click()
//    //cy.contains("[data-handler='SelectDay'] a", "25").click()
//    cy.get(':nth-child(3)>:nth-child(7)>.ui-state-default').click()
   
//    cy.get('#sp_description').type("Water Bill")

//    cy.get('#pay_saved_payees').click()
// }
// )


Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env ('userPassword')
) => {
cy.request('POST',`https://app.brmodeloweb.com/#!/`, {
username: email,
password,
}).then((response) => {
cy.setCookie('sessionId', response.body.sessionId)
cy.setCookie('userId', response.body.userId)
cy.setCookie('userName', response.body.userName)
cy.visit('/#!/main')
})
})