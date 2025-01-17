import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, UserSchema } from '../types/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY)

      if (user) {
        state.authData = JSON.parse(user)
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
      }
    },
    logout: (state) => {
      state.authData = undefined
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
