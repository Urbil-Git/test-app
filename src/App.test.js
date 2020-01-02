import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import mockedAxios from "axios";

jest.mock("axios");

test("App renders without crashing", () => {
  render(<App text={"Title"}></App>);
});
