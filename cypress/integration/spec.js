describe("General tests", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("has an input box for entering starting isk", () => {
    cy.get("input#startingIsk").type("number");
  });

  it(" has a label for entering the starting isk", () => {
    cy.get("label").contains("Starting isk value");
  });
});
