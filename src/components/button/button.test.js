import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

test("matched snapshot", () => {
  const { /*container,*/ getByTestId } = render(
    <Button label="cancel"></Button>
  );
  expect(getByTestId("button")).toMatchInlineSnapshot(
    `
    <h1
    data-testid="button"
    >
    texto
    </h1>`
  );
});
