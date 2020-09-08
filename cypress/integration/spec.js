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

  it("has a button to start a run", () => {
    cy.get("button#startRun").contains(
      "Tell me your opening balance and then we can get this run started!"
    );
  });

  it("saves what is in the starting isk to local storage when you start the run", () => {
    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");

    cy.get("button#startRun")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("currentRun")).startingIsk
        ).to.equal("1337");
      });

    cy.get("input#startingIsk").invoke("val", "1338").trigger("change");

    cy.get("button#startRun")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("currentRun")).startingIsk
        ).to.equal("1338");
      });
  });

  it("there is no more start run button but there is a end run button", () => {
    cy.get("button#startRun").click();

    cy.get("button#startRun").should("not.exist");
    cy.get("button#endRun").contains("End your delivery run here");
  });
});
