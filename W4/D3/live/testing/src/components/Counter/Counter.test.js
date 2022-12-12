import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

//now this will test only this

test.only("clicking on minus will reduce count value by 1", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("count-value");
  expect(counterElement).toHaveTextContent(0);

  const decButtonElement = screen.getByTestId("minus-button");
  fireEvent.click(decButtonElement);
  expect(counterElement).toHaveTextContent(-1);
});

test.only("clicking on minus will increase count value by 1", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("count-value");

  const incButtonElement = screen.getByTestId("plus-button");
  fireEvent.click(incButtonElement);
  fireEvent.click(incButtonElement);
  fireEvent.click(incButtonElement);
  fireEvent.click(incButtonElement);
  fireEvent.click(incButtonElement);
  expect(counterElement).toHaveTextContent(5);
});
