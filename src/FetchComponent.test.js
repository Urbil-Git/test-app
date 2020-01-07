import React from "react";
import { render, wait, cleanup } from "@testing-library/react";
import FetchComponent, { fetchUserName } from "./FetchComponent";
import mockAxios from "axios";

//afterEach(cleanup);

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: { name: "Leanne Graham", email: "Sincere@april.biz" }
    })
}));

//jest.setTimeout(10000);

test("test when data is loading", () => {
  const { getByText } = render(<FetchComponent />);
  const loading = getByText("Loading");
  //expect(mockAxios).toHaveBeenCalledTimes(0);
  expect(loading).toBeInTheDocument();
});

/*test("test get method is called", () => {
  //const response = { name: "Leanne Graham", email: "Sincere@april.biz" };
  mockAxios.mockImplementationOnce(() => ({
    get: () => Promise.resolve(response)
  }));
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});*/
