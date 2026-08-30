import { loginSelector } from "../support/selector";

describe("login page", () => {

  it("Verify login functionality", () => {

    cy.visit("/");

    cy.login();

  });


  it("verify failed login", () => {

    cy.visit("/");

    cy.login("kapish", "wrongpassword");

    cy.get(loginSelector.email_field)
      .should("be.visible");

  });

});