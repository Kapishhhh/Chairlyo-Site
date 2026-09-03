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
import { loginSelector } from "./selector";

// ADMIN 
Cypress.Commands.add(
  "login",
  (
    username = Cypress.env("username"),
    password = Cypress.env("password")
  ) => {

    cy.get(loginSelector.email_field)
      .clear()
      .type(username);

    cy.xpath(loginSelector.password_field)
      .clear()
      .type(password);

    cy.get(loginSelector.signon_button)
      .click();

  }
);


// BRANCH 
Cypress.Commands.add(
  "branchLogin",
  (
    username = Cypress.env("branchUsername"),
    password = Cypress.env("branchPassword")
  ) => {

    cy.get(loginSelector.email_field)
      .clear()
      .type(username);

    cy.xpath(loginSelector.password_field)
      .clear()
      .type(password);

    cy.get(loginSelector.signon_button)
      .click();

  }
);
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