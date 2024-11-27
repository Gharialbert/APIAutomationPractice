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
Cypress.Commands.add('apiRequest', (method, url, body, headers = {}) => {
    return cy.request({
        method,
        url,
        headers: {
            Authorization: `Bearer b3f77d5eb6769cfbfe3343b31fcc3274c6efe1547970e5460142f5ea65a7c3aa`,
            'Content-Type': 'application/json',
            ...headers,
        },
        body,
        failOnStatusCode: false,
    });
});
