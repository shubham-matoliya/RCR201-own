describe("Test our todo app", () => {
  beforeEach("visit home page", () => {
    cy.visit("http://localhost:3001");
  });
  it("should focus on element with id='todo-input' as soon as page is visited", () => {
    cy.focused().should("have.id", "todo-input");
  });
});
