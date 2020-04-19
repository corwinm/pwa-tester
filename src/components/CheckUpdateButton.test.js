import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import CheckUpdateButton from "./CheckUpdateButton";
import { AppStatusContext } from "context/AppStatusContext";

afterEach(cleanup);

test("matches unregistered snapshot", () => {
  const { container } = render(
    <AppStatusContext.Provider value={{ registration: null }}>
      <CheckUpdateButton />
    </AppStatusContext.Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("matches registered snapshot", () => {
  const { container } = render(
    <AppStatusContext.Provider value={{ registration: {} }}>
      <CheckUpdateButton />
    </AppStatusContext.Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("matches update available snapshot", () => {
  const { container } = render(
    <AppStatusContext.Provider
      value={{ registration: {}, updateAvailable: true }}
    >
      <CheckUpdateButton />
    </AppStatusContext.Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("clicking update now posts message to registration", () => {
  const mockRegistration = { waiting: { postMessage: jest.fn() } };
  const { getByText } = render(
    <AppStatusContext.Provider
      value={{ registration: mockRegistration, updateAvailable: true }}
    >
      <CheckUpdateButton />
    </AppStatusContext.Provider>
  );

  fireEvent.click(getByText(/update now/i));

  expect(mockRegistration.waiting.postMessage.mock.calls.length).toBe(1);
  expect(mockRegistration.waiting.postMessage).toBeCalledWith({
    type: "SKIP_WAITING",
  });
});

test("clicking check for update updates the registration", async () => {
  const mockRegistration = { update: jest.fn() };

  const { getByText } = render(
    <AppStatusContext.Provider
      value={{ registration: mockRegistration, updateAvailable: false }}
    >
      <CheckUpdateButton />
    </AppStatusContext.Provider>
  );

  mockRegistration.update.mockImplementation(async () => {
    return Promise.resolve({ newregistration: "new registration" });
  });
  
  fireEvent.click(getByText(/Check for Update/i));
  expect(getByText(/updating/i)).toBeInTheDocument();
  expect(mockRegistration.update).toBeCalled();
  // await wait(() => getByText(/updating/i));

  // await wait();
  // expect(getByText(/updating/i)).toBeTruthy();
  // expect(getByText(/Check for Update/i)).toBeTruthy();
  await waitFor(() => expect(getByText(/Check for Update/i)).toBeInTheDocument());
});
