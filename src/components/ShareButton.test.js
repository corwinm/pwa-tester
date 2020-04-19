import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ShareButton from "./ShareButton";

afterEach(cleanup);

test("matches enabled snapshot", () => {
  navigator.share = jest.fn();
  const { container } = render(<ShareButton />);
  expect(container.firstChild).toMatchSnapshot();
});

test("matches disabled snapshot", () => {
  navigator.share = undefined;
  const { container } = render(<ShareButton />);
  expect(container.firstChild).toMatchSnapshot();
});

test("clicking share calls share api", () => {
  navigator.share = jest.fn();
  const { getByText } = render(<ShareButton />);
  fireEvent.click(getByText(/share/i));

  expect(navigator.share).toBeCalled();
});

test("clicking share calls share api and fails quietly", () => {
  console.log = jest.fn();
  const expectedError = Error("");
  navigator.share = jest.fn(() => {
    throw expectedError;
  });
  const { getByText } = render(<ShareButton />);
  fireEvent.click(getByText(/share/i));

  expect(navigator.share).toBeCalled();
  expect(console.log).toBeCalledWith("Error sharing:", expectedError);
});

test("clicking share while disabled doesn't call share api", () => {
  navigator.share = undefined;
  const { getByText } = render(<ShareButton />);
  fireEvent.click(getByText(/share/i));
});
