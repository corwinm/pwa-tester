import React from "react";
import { render, cleanup } from "@testing-library/react";
import Camera from "./Camera";

jest.mock("custom-hooks/useCamera");

afterEach(cleanup);

test("matches snapshot", () => {
  const { container } = render(<Camera />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Error from cameraSource shows not supported", () => {
  const { useCamera } = require("custom-hooks/useCamera");
  const testMessage = "This is a test error message";
  useCamera.mockImplementation(() => Error(testMessage));

  const { getByText, container } = render(<Camera />);

  expect(container.firstChild).toMatchSnapshot();
  expect(getByText(/Camera is NOT supported/)).toBeTruthy();
  expect(getByText(new RegExp(testMessage))).toBeTruthy();
});

test("Object from cameraSource shows supported and video", () => {
  const { useCamera } = require("custom-hooks/useCamera");
  useCamera.mockImplementation(() => ({
    mockCameraSource: "mockCameraSource",
  }));

  const origionalSrcObject = HTMLVideoElement.prototype.srcObject;
  HTMLVideoElement.prototype.srcObject = {};

  const { getByText, container } = render(<Camera />);

  expect(container.firstChild).toMatchSnapshot();
  expect(getByText(/Camera is supported!/)).toBeTruthy();
  expect(container.querySelector("video")).toBeTruthy();
  HTMLVideoElement.prototype.srcObject = origionalSrcObject;
});

test("Object from cameraSource shows supported and video with fallback video source", () => {
  const { useCamera } = require("custom-hooks/useCamera");
  useCamera.mockImplementation(() => ({
    mockCameraSource: "mockCameraSource",
  }));

  window.URL.createObjectURL = jest.fn(() => "mock-video-url");

  const { getByText, container } = render(<Camera />);

  expect(container.firstChild).toMatchSnapshot();
  expect(getByText(/Camera is supported!/)).toBeTruthy();
  expect(container.querySelector("video")).toBeTruthy();
});
