import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
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

test("clicking share calls share api",() => {
  navigator.share = jest.fn();
  const { getByText } = render(<ShareButton />);
  fireEvent.click(getByText(/share/i));
  
  expect(navigator.share).toBeCalled();
})