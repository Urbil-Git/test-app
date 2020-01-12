import React from "react";

import { render, wait, cleanup } from "@testing-library/react";
import FetchComponent from "./FetchComponent";
import { fetchUserName as fetchUserNameMock, API } from './FetchUserName'

jest.mock("./FetchUserName")

beforeEach(() => {
  fetchUserNameMock.mockResolvedValue({name: "Leanne Graham", email: "Sincere@april.biz"})
})

afterEach(() => {
  fetchUserNameMock.mockClear()
  cleanup
})

test("FetchComponent renders showing loading message", () => {
  const { getByTestId } = render(<FetchComponent/>)
  expect(getByTestId('loadingdiv')).toHaveTextContent('Loading')
})

test("FetchComponent calls fetchUserName function once", () => {
  render(<FetchComponent/>)
  expect(fetchUserNameMock).toHaveBeenCalledTimes(1)
})

test("FetchComponent calls fetchUserName function with correct parameters", () => {
  render(<FetchComponent/>)
  expect(fetchUserNameMock).toHaveBeenCalledWith("/users/1")
})

test("FetchComponent mounts and renders fetched data", async() => {
  const {getByTestId} = render(<FetchComponent/>)
  await wait(() => getByTestId("datadiv"))
})

test("FetchComponent mounts and fails to fetch data", async() => {
  expect.assertions(1)
  fetchUserNameMock.mockRejectedValue({error: {response: {data: "Error", status: 500}}})
  const {getByTestId} = render(<FetchComponent/>)
  try {
    await wait(() => getByTestId("errordiv"))
    expect(getByTestId("errordiv")).toBeInTheDocument()
  }
  catch(expection){
    //expect(getByTestId("errordiv")).toBeInTheDocument()
  }
})