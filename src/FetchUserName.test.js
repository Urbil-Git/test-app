import mockAxios from 'axios'

import { API, fetchUserName } from './FetchUserName'

const mockGet = jest.fn().mockResolvedValue({data: {name: "Leanne Graham", email: "Sincere@april.biz"}})
jest.mock("axios", () => {
    return function(){
        return {
            get:mockGet
        }
    }
})

test("axios get function is called once", async() => {
    await fetchUserName("/users/1")
    expect(mockGet).toHaveBeenCalledTimes(1)
})