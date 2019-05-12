import React from "react";
import { render, cleanup } from "react-testing-library";
import Page from "./Page";

afterEach(cleanup);

test("matches snapshot", () => {
  const { container } = render(<Page />);
  expect(container.firstChild).toMatchSnapshot();
});

test("renders title", () => {
  const expectedTitle = "Expected Title";
  const { container, getByText } = render(<Page title={expectedTitle} />);

  expect(container.firstChild).toMatchSnapshot();
  expect(getByText(expectedTitle)).toBeTruthy();
});

test("renders children", () => {
  const expectedChildren = "Expected Children";
  const { container, getByText } = render(<Page>{expectedChildren}</Page>);

  expect(container.firstChild).toMatchSnapshot();
  expect(getByText(expectedChildren)).toBeTruthy();
});

test("renders title and children", () => {
  const expectedTitle = "Expected Title";
  const expectedChildren = "Expected Children";
  const { container, getByText } = render(
    <Page title={expectedTitle}>{expectedChildren}</Page>
  );

  expect(container.firstChild).toMatchSnapshot();
  expect(getByText(expectedTitle)).toBeTruthy();
  expect(getByText(expectedChildren)).toBeTruthy();
});

test("renders fallback UI for errors", () => {
  const expectedErrorMessage = "Expected Error Message";
  const ErrorThrowingChild = () => {
    throw Error(expectedErrorMessage);
  };
  const { container, getByText } = render(
    <Page>
      <ErrorThrowingChild />
    </Page>
  );

  expect(container).toMatchSnapshot();
  expect(getByText(expectedErrorMessage)).toBeTruthy();
});
