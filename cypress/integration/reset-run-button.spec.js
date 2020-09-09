describe("Reset run button", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");

    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("button#startRun").click();
    cy.get("input#endingIsk").invoke("val", "1338").trigger("input");
    cy.get("button#endRun").click();
  });

  it("makes only the starting isk label and button remain on the screen", () => {
    cy.get("button#resetRun").click();

    cy.get("input#startingIsk").should("exist");
    cy.get("button#startRun").should("exist");
    cy.get("div#endingIsk").should("not.exist");
    cy.get("button#endRun").should("not.exist");
  });
});
