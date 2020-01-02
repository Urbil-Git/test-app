import { fetchData } from './client'
import axios from 'axios'

jest.mock('axios')

describe('fetchData', () => {

    test('data fetched successfully', async() => {
        const data = {data: {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }}
        axios.get.mockImplementationOnce(() => Promise.resolve(response))
    })
    test('data fetched erroneously', async() => {
        const error = {error: { response: { status: 400, data: '400 error' } }}
    })
})