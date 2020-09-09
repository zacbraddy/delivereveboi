describe("End run button", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");

    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("button#startRun").click();
  });

  it("shows total isk made label", () => {
    cy.get("input#endingIsk").invoke("val", "1338").trigger("input");
    cy.get("button#endRun").click();
    cy.get("label").contains(
      "Congrats you made this much isk shifting space stuff!"
    );
    cy.get("div#profit").should("have.text", "1");
  });

  it("make ending isk read only", () => {
    cy.get("input#endingIsk").invoke("val", "1338").trigger("input");
    cy.get("button#endRun").click();
    cy.get("input#endingIsk").should("not.exist");
    cy.get("div#endingIsk").contains("1338");
  });

  it("makes it so that the reset button is shown", () => {
    cy.get("input#endingIsk").invoke("val", "1338").trigger("input");
    cy.get("button#endRun").click();
    cy.get("button#endRun").should("not.exist");
    cy.get("button#resetRun").should("exist");
  });
});
