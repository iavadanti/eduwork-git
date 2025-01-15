    Cypress.Commands.add('requestAuth', () => {
        cy.request({
            method: 'GET',
            url: '/basic_auth',
            auth: {
              username: Cypress.env('USERNAME'),
              password: Cypress.env('PASSWORD')
            },
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include('Congratulations! You must have the proper credentials.');
          });
     })