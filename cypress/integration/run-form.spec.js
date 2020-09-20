describe("run form", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");

    cy.get("input#startingIsk").invoke("val", "1337").trigger("input");
    cy.get("select#startingStation").select("Asghed VI");
    cy.get("button#startRun").click();
  });

  it("shows an add station button", () => {
    cy.get("button#addStation").should("exist");
  });

  it("show a station drop down to for the add button to use", () => {
    cy.get("select#addStation").should("exist");
  });

  it("should add a station entry when you click the add button", () => {
    cy.get("select#addStation").select("Kamela V");
    cy.get("button#addStation").click();
    cy.get(".station").contains(
      "Kamela V - 24th Imperial Crusade Logistic Support"
    );
  });

  it("when a station is in the box list already it should no longer be in the add station dropdown", () => {
    cy.get("select#addStation").select("Kamela V");
    cy.get("button#addStation").click();
    cy.get(`select#addStation > option[value="Kamela V"]`).should("not.exist");
  });
});
