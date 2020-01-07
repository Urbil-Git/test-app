import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Form from "./Form";

afterEach(cleanup);

test("Form renders without crashing", () => {
  render(<Form />);
});

describe("Form input filling tests", () => {
  test("Form submit empty name input fails", () => {
    const { getByTestId } = render(<Form />);
    fireEvent.click(getByTestId("submitButton"));
    expect(getByTestId("nameHelper")).toHaveTextContent("incorrect name");
  });

  test("Form submit empty email input fails", () => {
    const { getByTestId } = render(<Form />);
    fireEvent.click(getByTestId("submitButton"));
    expect(getByTestId("emailHelper")).toHaveTextContent("incorrect email");
  });

  test("Form submit not empty name input fails", () => {
    const { getByTestId } = render(<Form />);
    fireEvent.change(getByTestId("name"), { target: { value: "not empty" } });
    fireEvent.click(getByTestId("submitButton"));
    expect(getByTestId("nameHelper")).toBeEmpty();
  });

  test("Form submit not empty email input fails", () => {
    const { getByTestId, debug } = render(<Form />);
    debug(getByTestId("email"));
    fireEvent.change(getByTestId("email"), { target: { value: "not empty" } });
    debug(getByTestId("email"));
    fireEvent.click(getByTestId("submitButton"));
    expect(getByTestId("emailHelper")).toBeEmpty();
  });
});
