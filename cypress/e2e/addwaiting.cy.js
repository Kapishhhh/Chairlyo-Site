import { waitingSelector } from "../support/selector";

describe("Waiting CRUD", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.branchLogin();
  });

  it("Verify Waiting Add functionality", () => {

    cy.xpath(waitingSelector.waiting)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(waitingSelector.addwaiting)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(waitingSelector.search)
      .should("be.visible")
      .clear()
      .type("Aaaalu");

    cy.xpath(waitingSelector.firstsearch)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(waitingSelector.next)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

    cy.get("main").scrollTo("bottom");

    cy.xpath(waitingSelector.staff)
      .should("exist")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(waitingSelector.staffoption)
      .should("exist")
      .scrollIntoView()
      .click({ force: true });

    cy.get("main").scrollTo("bottom");

    cy.xpath(waitingSelector.addyourfirstservice)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(waitingSelector.aluservice)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
      cy.wait(1000);

      cy.xpath(waitingSelector.done)
        .should("be.visible")
        .scrollIntoView()
        .click({ force: true });


    cy.xpath(waitingSelector.addtowaiting)
      .first()
      .should("exist")
      .scrollIntoView({ duration: 500 })
      .should("be.visible")
      .click({ force: true });

      cy.xpath(waitingSelector.startsession)
        .should("be.visible")
        .scrollIntoView()
        .click({ force: true });

    cy.xpath(waitingSelector.completesession)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(waitingSelector.completesessionoption)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

    cy.xpath(waitingSelector.process)
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });

      cy.xpath(waitingSelector.process500)
        .should("be.visible")
        .scrollIntoView()
        .click({ force: true });
        cy.wait(10000);
        cy.get(waitingSelector.cross)
          .should("be.visible")
          .scrollIntoView()
          .click({ force: true });  

  });

});