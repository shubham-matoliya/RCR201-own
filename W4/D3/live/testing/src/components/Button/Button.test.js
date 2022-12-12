import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button with testid 'button' ", () => {
  render(<Button />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});

test("renders button with text 'Hello' ", () => {
  const label = "Hello";
  render(<Button label={label} />);
  const buttonElement = screen.getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});

test("onClick should call without passing handleclick function", () => {
  const label = "Hello";
  render(<Button label={label} />);
  const buttonElement = screen.getByTestId("button");
  fireEvent.click(buttonElement);
});

test("onClick should call handleclick function once", () => {
  const fn = jest.fn();
  const label = "Hello";
  render(<Button label={label} handleClick={fn} />);
  const buttonElement = screen.getByTestId("button");
  fireEvent.click(buttonElement);
  expect(fn).toBeCalledTimes(1);
});

test("onClick should call handleclick more than one depends on number of clicks", () => {
  const fn = jest.fn();
  const label = "Hello";
  render(<Button label={label} handleClick={fn} />);
  const buttonElement = screen.getByTestId("button");
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  fireEvent.click(buttonElement);
  expect(fn).toBeCalledTimes(5);
});
