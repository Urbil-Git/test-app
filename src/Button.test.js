import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("onclick button's text changes", () => {
  const { getByTestId } = render(<Button language={"en"} />);
  debugger;
  fireEvent.click(getByTestId("lgbutton"));
  expect(getByTestId("lgbutton").textContent).toMatchInlineSnapshot();
});
