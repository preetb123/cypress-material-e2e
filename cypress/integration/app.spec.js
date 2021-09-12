describe("autocomplete", () => {
  it("should display the autocomplete", () => {
    cy.visit("/");
    // cy.get("#combo").click();
    // cy.get(".MuiAutocomplete-option").should("have.length", 4);
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("test", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000/");
    cy.get("#combo").click();
    // cy.focused();
    cy.get(".MuiAutocomplete-option").should("have.length", 4);
    cy.get("#combo-option-1").click();
    cy.get("#combo").should("have.value", "The Godfather");
    //cy.get("#combo").contains("The Godfather");
    // cy.get('#combo').should("")
    /* ==== End Cypress Studio ==== */
  });
});
