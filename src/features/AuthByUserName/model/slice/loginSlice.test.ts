import { loginActions, loginReducer } from './loginSlice'
import { LoginSchema } from '../types/loginSchema'
import { loginByUserName } from '../services/loginByUserName/loginByUserName'

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      userName: '123',
    }

    expect(loginReducer(state as LoginSchema, loginActions.setUserName('Bob'))).toEqual({
      userName: 'Bob',
    })
  })

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    }

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({
      password: '12345',
    })
  })

  test('test loginByUserName pending', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    }

    expect(
      loginReducer(state as LoginSchema, loginByUserName.pending('', { userName: 'Bob', password: '12345' }))
    ).toEqual({
      isLoading: true,
      error: undefined,
    })
  })

  test('test loginByUserName success', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    }

    expect(
      loginReducer(
        state as LoginSchema,
        loginByUserName.fulfilled({ userName: 'Bob', id: '1' }, '', { userName: 'Bob', password: '12345' })
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
    })
  })

  test('test loginByUserName error', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    }

    expect(
      loginReducer(
        state as LoginSchema,
        loginByUserName.rejected(new Error('error'), '', { userName: 'Bob', password: '12345' }, 'error')
      )
    ).toEqual({
      isLoading: false,
      error: 'error',
    })
  })
})
