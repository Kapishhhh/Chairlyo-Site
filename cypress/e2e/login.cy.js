import { loginSelector } from "../support/selector";

describe("Login Page", () => {

  it("Verify invalid login functionality", () => {

    cy.visit("/");

    cy.login("kapish", "wrongpassword");

    cy.get(loginSelector.email_field)
      .should("be.visible");

  });

  it("Verify valid login functionality", () => {

    cy.visit("/");

    cy.login();

    cy.contains("Branch")
      .should("be.visible");

  });

});