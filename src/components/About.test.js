import React from "react";
import { render, cleanup } from "@testing-library/react";
import About from "./About";

afterEach(cleanup);

test("matches about snapshot", () => {
  const { container } = render(<About />);
  expect(container.firstChild).toMatchSnapshot();
});
