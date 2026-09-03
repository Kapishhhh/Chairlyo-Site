import { addprudct } from "../support/selector";

describe("Product CRUD", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.branchLogin();
  });

  it("Verify Product Add functionality", () => {

    cy.xpath(addprudct.catalog)
    //   .should("be.visible")
      .scrollIntoView()

      .click({ force: true });

    cy.xpath(addprudct.product)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(addprudct.add_product)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(addprudct.product_name)
      .should("be.visible")
      .type("Aalu Product");

    cy.xpath(addprudct.brand_name)
      .should("be.visible")
      .type("Aalu Brand");

    cy.xpath(addprudct.product_category)
      .should("be.visible")
      .click({ force: true });

    cy.get('[role="option"]')
      .first()
      .click({ force: true });

    cy.xpath(addprudct.selling_price)
      .should("be.visible")
      .clear()
      .type("500");

    cy.xpath(addprudct.stock_quantity)
      .should("be.visible")
      .clear()
      .type("10");

   cy.xpath(addprudct.save_product)
         // .should("be.visible")
         .click({ force: true });
   

  });

});