describe("start run button", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("has a button to start a run", () => {
    cy.get("button#startRun").contains(
      "Tell me your opening balance and then we can get this run started!"
    );
  });

  it("saves what is in the starting isk to local storage when you start the run when input was the event that set the starting isk", () => {
    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");

    cy.get("button#startRun")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("currentRun")).startingIsk
        ).to.equal("1337");
      });
  });

  it("saves what is in the starting isk to local storage when you start the run when change was the event that set the starting isk", () => {
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

  it("turns the startingisk input into a static piece of content", () => {
    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("button#startRun").click();

    cy.get("input#startingIsk").should("not.exist");
    cy.get("div#startingIsk").contains("1337");
  });

  it("shows completion isk input when the run is started", () => {
    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("button#startRun").click();
    cy.get("label").contains("Ending isk value");
    cy.get("input#endingIsk").type("number");
  });

  it("sets the starting isk to zero if nothing is entered when the button is pressed", () => {
    cy.get("button#startRun").click();
    cy.get("div#startingIsk").contains("0");
  });

  it("loads current run from localStorage onMount", () => {
    localStorage.setItem(
      "currentRun",
      '{ "startingIsk": 1337, "runInProgress": true }'
    );
    cy.visit("/");

    cy.get("div#startingIsk").contains("1337");
  });

  it("saves the starting station to localStorage", () => {
    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("select#startingStation").select("Asghed VI");

    cy.get("button#startRun")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("currentRun")).startingStation
        ).to.equal("Asghed VI");
      });
  });
});
