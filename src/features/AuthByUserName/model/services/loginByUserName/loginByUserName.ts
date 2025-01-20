import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUser, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage'

interface LoginByUserNameProps {
  userName: string
  password: string
}

enum LoginErrors {
  INCORRECT_DATA = 'INCORRECT_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

export const loginByUserName = createAsyncThunk<IUser, LoginByUserNameProps, { rejectValue: string }>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const responce = await axios.post<IUser>('http://localhost:8000/login', authData)

      if (!responce.data) {
        throw new Error()
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(responce.data))
      thunkAPI.dispatch(userActions.setAuthData(responce.data))

      return responce.data
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue('error')
    }
  }
)
