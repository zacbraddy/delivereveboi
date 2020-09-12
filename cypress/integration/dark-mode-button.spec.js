describe("Dark mode tests", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });

  it("has a dark mode button that defaults to dark mode", () => {
    cy.get("button#btnDarkMode").children("i").should("have.class", "fa-moon");
  });

  it("changes the darkmode icon to a sun when you're in light mode", () => {
    cy.get("button#btnDarkMode")
      .click()
      .children("i")
      .should("have.class", "fa-sun");
  });

  it("changes the local storage value for the currently displayed theme when you click the button", () => {
    const darkModeButton = cy.get("button#btnDarkMode");

    darkModeButton.click().should(() => {
      expect(localStorage.getItem("theme")).to.equal("theme-light");
    });

    darkModeButton.click().should(() => {
      expect(localStorage.getItem("theme")).to.equal("theme-dark");
    });
  });
});
