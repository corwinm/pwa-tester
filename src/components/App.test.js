import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

jest.mock("react-ga", () => {
  return {
    initialize: jest.fn(),
    pageview: jest.fn(),
  };
});

jest.mock("components/BuildTimeStamp", () => () => "Mock Timestamp");

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("matches snapshot", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});
