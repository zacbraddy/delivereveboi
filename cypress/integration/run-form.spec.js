describe("run form", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");

    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("select#startingStation").select("Asghed VI");
    cy.get("button#startRun").click();
  });

  it("shows an add station button", () => {
    cy.get("button#btnAddStation").should("exist");
  });

  it("show a station drop down to for the add button to use", () => {
    cy.get("select#selAddStation").should("exist");
  });
});
