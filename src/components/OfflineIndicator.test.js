import React from "react";
import { render, cleanup } from "react-testing-library";
import OfflineIndicator from "./OfflineIndicator";

afterEach(cleanup);

jest.mock("../custom-hooks/useOffline");
const useOfflineMock = require("../custom-hooks/useOffline");

test("matches online snapshot", () => {
  useOfflineMock.useOffline.mockImplementation(() => false);
  const { container } = render(<OfflineIndicator />);
  expect(container.firstChild).toMatchSnapshot();
});

test("matches offline snapshot", () => {
  useOfflineMock.useOffline.mockImplementation(() => true);
  const { container } = render(<OfflineIndicator />);
  expect(container.firstChild).toMatchSnapshot();
});