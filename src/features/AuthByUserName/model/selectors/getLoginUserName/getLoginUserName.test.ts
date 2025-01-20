import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUserName } from './getLoginUserName'

describe('getLoginUserName', () => {
  test('should return Bob', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        userName: 'Bob',
      },
    }
    expect(getLoginUserName(state as StateSchema)).toEqual('Bob')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUserName(state as StateSchema)).toEqual(undefined)
  })
})
