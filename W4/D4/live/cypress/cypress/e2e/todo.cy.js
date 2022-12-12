describe("Test our todo app", () => {
  beforeEach("visit home page", () => {
    cy.visit("http://localhost:3001");
  });
});

// cy.visit("http://localhost:3000"); we dont need write it everytime as we used beforeEach instead if 'it' hence before each test case this page will run
// it("should focus on element with id='todo-input' as soon as page is visited", () => {
//   cy.focused().should("have.id", "todo-input");
// });

/*
// to check network request (if api get called)

it("should fetch todos correctly on page load", () => {
  cy.get("[data-testid=todo-item-value]").should("not.exist");
  cy.intercept("GET", "http://localhost:4004/todos", {
    fixture: "getTodos.json",
  }).as("getTodos");
  cy.wait("@getTodos");
  cy.get("[data-testid=todo-item-value]").should("exist");
});
// getTodos is short name for "GET", "http://localhost:4004/todos"

it("should add todo to list after typing input and clicking add button", () => {
  cy.intercept("GET", "http://localhost:4004/todos", {
    fixture: "getTodos.json",
  });
  // go to input element
  // type
  let message = "abcdefg";
  cy.focused().type(message);
  // click on add button
  cy.get("[data-testid=todo-button]").click();
  // wait for api to add data
  cy.intercept("POST", "http://localhost:4004/todos", {
    id: 3,
    value: "Todo3",
    isCompleted: false,
  }).as("postTodos");
  cy.wait("@postTodos");
  // check if data is added correctly
});
*/
