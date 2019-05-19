import React from "react";
import { render, cleanup } from "react-testing-library";
import About from "./About";

afterEach(cleanup);

test("matches about snapshot", () => {
  const { container } = render(<About />);
  expect(container.firstChild).toMatchSnapshot();
});
