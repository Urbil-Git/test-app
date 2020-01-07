import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MysteriousComponent from "./MysteriousComponent";

//afterEach(cleanup)

test("counter updates correctly", () => {
  const { getByTestId, debug } = render(<MysteriousComponent />);
  debug(getByTestId("label"));
  fireEvent.click(getByTestId("button"));
  debug(getByTestId("label"));
  expect(getByTestId("label")).toHaveTextContent("1");
});
