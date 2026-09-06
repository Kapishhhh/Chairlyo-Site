import { sessionSelector } from "../support/selector";
const randomnumber = Date.now().toString().slice(-8);

describe("Session CRUD", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.branchLogin();
  });

  it("Verify Session Add functionality", () => {

    cy.xpath(sessionSelector.session)
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(sessionSelector.new_session)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(sessionSelector.search_session)
      .should("be.visible")
      .clear()
      .type("Aaaalu");

    cy.xpath(sessionSelector.add_new_customer)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(sessionSelector.lastname)
      .should("be.visible")
      .clear()
      .type("Sharma");

    cy.xpath(sessionSelector.phone)
      .should("be.visible")
      .click()
      .clear()
      .type(`+977 98${randomnumber}`);

    cy.xpath(sessionSelector.next)
      .should("be.visible")
      .click({ force: true });

    cy.xpath(sessionSelector.firstaddtosession)
      .should("be.visible")
            .scrollIntoView()

      .click({ force: true });

    cy.xpath(sessionSelector.assign_staff)
      .should("be.visible")
            .scrollIntoView()

      .click({ force: true });

    cy.xpath(sessionSelector.staff)
      .first()
            .scrollIntoView()

      .click({ force: true });

    cy.xpath(sessionSelector.addservice)
      .should("be.visible")
            .scrollIntoView()

      .click({ force: true });

    


    cy.xpath(sessionSelector.firstservice)
      .should("be.visible")
            .scrollIntoView()

      .click({ force: true });

        cy.xpath(sessionSelector.done)
        .should("be.visible")
        .click({ force: true });

    cy.xpath(sessionSelector.price)
      .should("be.visible")
            .scrollIntoView()

      .clear()
      .type("500");

    cy.xpath(sessionSelector.confirmaddsession)
          .scrollIntoView()

      .click({ force: true });

  });

});