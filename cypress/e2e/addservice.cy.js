import { addservice } from "../support/selector";

describe("Service CRUD", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.branchLogin();
  });

  it("Verify Service Add functionality", () => {

    cy.xpath(addservice.catalog)
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(addservice.service)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(addservice.add_service)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(addservice.service_name)
      .should("be.visible")
      .type("Aalu Service");

    cy.xpath(addservice.service_category)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(addservice.servicecategory_option)
      .first()
      .click({ force: true });

    cy.xpath(addservice.price)
      .should("be.visible")
      .clear()
      .type("500");

    cy.xpath(addservice.duration)
      .should("be.visible")
      .clear()
      .type("30");

    cy.xpath(addservice.save_service)
      .click({ force: true });

  });

});