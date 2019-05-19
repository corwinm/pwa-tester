import React from "react";
import { render, cleanup, fireEvent, wait, act } from "react-testing-library";
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
  expect(mockRegistration.waiting.postMessage).toBeCalledWith("skipWaiting");
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
    await wait(() => expect(getByText(/updating/i)).toBeTruthy());

    return { newregistration: "new registration" };
  });

  fireEvent.click(getByText(/Check for Update/i));

  expect(mockRegistration.update).toBeCalled();

  return await wait(() => expect(getByText(/Check for Update/i)).toBeTruthy());
});
