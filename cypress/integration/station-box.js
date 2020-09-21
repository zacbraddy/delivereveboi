describe("station box row", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");

    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("select#startingStation").select("Asghed VI");
    cy.get("button#startRun").click();
    cy.get("select#addStation").select("Kamela V");
    cy.get("button#addStation").click();
  });

  it("shows an add box button", () => {
    cy.get("div.station > button.add-button").should("exist");
  });

  it("shows an subtract box button", () => {
    cy.get("div.station > button.subtract-button").should("exist");
  });

  it("shows a delivery button", () => {
    cy.get("div.station > button.deliver-button").should("exist");
  });
});
