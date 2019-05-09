import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("react-ga", () => {
  return {
    initialize: jest.fn(),
    pageview: jest.fn()
  };
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
