import { branchSelector } from "../support/selector";

describe("Branch CRUD", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });

  it("Verify Branch CRUD functionality", () => {

    cy.xpath(branchSelector.add_branch)
      .should("be.visible")
      .click();

    cy.xpath(branchSelector.branch_name)
      .should("be.visible")
      .type("aalu Branch");

    cy.xpath(branchSelector.slug)
      .should("be.visible")
      .type("aalu-branch");

    cy.get(branchSelector.branch_phone).eq(0)
      .should("be.visible")
      .clear()
      .type("+9779812345678");

    cy.xpath(branchSelector.branch_email)
      .should("be.visible")
      .type("aalu@example.com");

    cy.xpath(branchSelector.status).eq(0)
      .should("be.visible")
      .click();

    cy.xpath(branchSelector.active_status)
    cy.get('[role="option"]')
      .contains("Active")
      .click({ force: true });

    cy.xpath(branchSelector.address)
      .should("be.visible")
      .type("Shankhamul, Kathmandu, Nepal")
      .click({ force: true });


    cy.xpath(branchSelector.admin_first_name)
      .should("be.visible")
      .type("nice")
      .click({ force: true });

    cy.xpath(branchSelector.admin_last_name)
      .should("be.visible")
      .type("wow")
      .click({ force: true });

    cy.xpath(branchSelector.admin_email)
      .should("be.visible")
      .clear()
      .type("aalu@example.com")
      .click({ force: true });

    cy.xpath(branchSelector.admin_password)
      .should("be.visible")
      .type("Aaaaaaaaaaalu@1")
      .click({ force: true });


    cy.get(branchSelector.admin_phone).eq(1)
      .should("be.visible")
      .clear()
      .type("9779811111111")
      .click({ force: true });


    cy.xpath(branchSelector.save_changes).eq(0)
      // .should("be.visible")
      .click({ force: true });


      

  });
    it("Verify Branch search functionality", () => {

    cy.xpath(branchSelector.search)
      .should("be.visible")
      .type("aalu Branch");


});

it("Verify Branch edit functionality", () => {

  cy.xpath(branchSelector.edit_branch)
    // .should("be.visible")
    .click({ force: true });

    cy.xpath(branchSelector.branch_name)
      .should("be.visible")
      .clear()
      .type("aalu Branch Updated");
    
    cy.xpath(branchSelector.save_changes).eq(1)
      .should("be.visible")
      .click({ force: true });

});
it("Verify Branch delete functionality", () => {

  cy.xpath(branchSelector.icon_delete_branch)
    // .should("be.visible")
    .click({ force: true });

   cy.xpath(branchSelector.type)
    .should("be.visible")  
    .click({ force: true })
    .type("Delete Branch");
    
  

});

it("verify branch click delete buttonn", () => {

  cy.xpath(branchSelector.delete_branch)
    // .should("be.visible")
    .click({ force: true });
});
});
