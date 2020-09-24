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

  it("saves the station entry station to localStorage", () => {
    cy.get("select#addStation").select("Kamela V");
    cy.get("button#addStation")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("runStationBoxes")).currentBoxes[0].id
        ).to.equal("Kamela V");
      });
  });

  it("when a station is in the box list already it should no longer be in the add station dropdown", () => {
    cy.get("select#addStation").select("Kamela V");
    cy.get("button#addStation").click();
    cy.get(`select#addStation > option[value="Kamela V"]`).should("not.exist");
  });

  it("loads current boxes from localStorage onMount", () => {
    localStorage.setItem(
      "currentRun",
      '{ "startingIsk": 1337, "runInProgress": true }'
    );
    localStorage.setItem(
      "runStationBoxes",
      '{ "currentBoxes": [{ "id": "Kamela V", "displayName": "Kamela V - 24th Imperial Crusade Logistic Support", "boxes": 1 }]}'
    );
    cy.visit("/");

    cy.get(".station").contains(
      "Kamela V - 24th Imperial Crusade Logistic Support"
    );
  });

  it("shows a suggested best next station", () => {
    cy.get("select#addStation").select("Asghed VI");
    cy.get("button#addStation").click();
    cy.get("button.add-button").click();
    cy.get("select#addStation").select("Kamela V");
    cy.get("button#addStation").click();

    cy.get("div.suggested").contains(
      "Kamela V - 24th Imperial Crusade Logistic Support"
    );
  });
});
