describe("BmiForm Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("accepts input", () => {
    const weight = "68";
    const height = "178";

    cy.get("#weight").type(weight).should("have.value", weight);
    cy.get("#height").type(height).should("have.value", height);
  });

  context("Form submission", () => {
    it("Adds a new bmi card data", () => {
      let weight = "68";
      const height = "178";
      let today = new Date().toLocaleString().split(",")[0];

      cy.get("#weight").type(weight).should("have.value", weight);
      cy.get("#height").type(height).should("have.value", height);

      cy.get("#bmi-btn").click();
      cy.get("#weight").should("have.value", "");
      cy.get("#height").should("have.value", "");

      cy.get("[data-test = 'weight']").should("contain", weight);
      cy.get("[data-test = 'height']").should("contain", height);
      cy.get("[data-test = 'bmi']").should("contain", "21.21");
      cy.get("[data-test = 'date']").should("contain", today);
    });
  });
});
