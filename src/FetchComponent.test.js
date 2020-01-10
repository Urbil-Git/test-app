import React from "react";
import { render, cleanup } from "@testing-library/react";
import FetchComponent from "./FetchComponent";
import { fetchUserName } from "./FetchUserName";

const response = {
  data: { name: "Leanne Graham", email: "Sincere@april.biz" }
};

jest.mock("./FetchUserName");

beforeEach(() => {
  fetchUserName.mockClear();
  fetchUserName.mockResolvedValueOnce(response);
});

afterEach(cleanup);

test("test when data is loading", () => {
  fetchUserName.mockResolvedValueOnce(response);
  const { getByText } = render(<FetchComponent />);
  expect(getByText("Loading")).toBeInTheDocument();
});

test("test get method is called", async () => {
  render(<FetchComponent />);
  expect(fetchUserName).toBeCalledTimes(1);
});
