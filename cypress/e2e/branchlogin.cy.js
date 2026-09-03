describe("Branch Login", () => {

  it("Verify Branch login functionality", () => {

    cy.visit("/");

    cy.branchLogin();

  });

});