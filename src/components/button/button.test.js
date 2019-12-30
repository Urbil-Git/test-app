import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

test("it renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please"></Button>);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

test("it renders button correctly", () => {
  const { getByTestId } = render(<Button label="save"></Button>);
  expect(getByTestId("button")).toHaveTextContent("save");
});
