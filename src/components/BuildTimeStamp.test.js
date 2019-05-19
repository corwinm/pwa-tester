import React from "react";
import { render, cleanup } from "react-testing-library";
import BuildTimeStamp from "./BuildTimeStamp";

afterEach(cleanup);

test("displays the build date", () => {
  const { getByText } = render(<BuildTimeStamp />);
  
  expect(getByText(/built/i)).toBeTruthy();
  expect(Date.parse(getByText(/built/i).innerHTML.substring(6))).toBeTruthy();
});
