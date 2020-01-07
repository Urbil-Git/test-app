import React from "react";
import { render, wait, cleanup } from "@testing-library/react";
import FetchComponent, { fetchUserName } from "./FetchComponent";
import mockAxios from "axios";

//afterEach(cleanup);

/*jest.mock("axios", () => jest.fn().mockImplementation(() => ({
  get: () => Promise.resolve({
    data: { name: "Leanne Graham", email: "Sincere@april.biz" }
  })
})));*/

jest.mock('axios')

beforeAll(() => {
  mockAxios.mockImplementation(() => ({
    get: () => Promise.resolve({
      data: { name: "Leanne Graham", email: "Sincere@april.biz" }
    })
  }))
})

test("test when data is loading", () => {
  const { getByText } = render(<FetchComponent />);
  expect(getByText("Loading")).toBeInTheDocument();
});

test("test get method is called", () => {
  console.log("mockAxios: ", mockAxios.get);
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
});
