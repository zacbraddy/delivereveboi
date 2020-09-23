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
    cy.get("div.station button.add-button").should("exist");
  });

  it("shows an subtract box button", () => {
    cy.get("div.station button.subtract-button").should("exist");
  });

  it("shows a delivery button", () => {
    cy.get("div.station button.deliver-button").should("exist");
  });

  it("increments the number of boxes at a station when the add button is clicked", () => {
    cy.get("div.station button.add-button")
      .click()
      .then(() => {
        cy.get("div.station div.number-of-boxes").contains("2");
      });
  });

  it("saves the station entry changes to localStorage when add button is clicked", () => {
    cy.get("div.station button.add-button")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("runStationBoxes")).currentBoxes[0]
            .boxes
        ).to.equal(2);
      });
  });

  it("decrements the number of boxes at the station when the subtract button is clicked", () => {
    cy.get("div.station button.add-button").click();
    cy.get("div.station button.subtract-button")
      .click()
      .then(() => {
        cy.get("div.station div.number-of-boxes").contains("1");
      });
  });

  it("saves the station entry changes to localStorage when subtract button is clicked", () => {
    cy.get("div.station button.add-button").click();
    cy.get("div.station button.subtract-button")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("runStationBoxes")).currentBoxes[0]
            .boxes
        ).to.equal(1);
      });
  });

  it("does not decrement if the number of boxes at a station is 1", () => {
    cy.get("div.station button.subtract-button")
      .click()
      .then(() => {
        cy.get("div.station div.number-of-boxes").contains("1");
      });
  });

  it("removes the station when you click the deliver button", () => {
    cy.get("div.station button.deliver-button")
      .click()
      .then(() => {
        cy.get("div.station").should("not.exist");
      });
  });

  it("save the station entry changes to localStorage when deliver button is clicked", () => {
    cy.get("div.station button.deliver-button")
      .click()
      .should(() => {
        expect(
          JSON.parse(localStorage.getItem("runStationBoxes")).currentBoxes
            .length
        ).to.equal(0);
      });
  });
});
