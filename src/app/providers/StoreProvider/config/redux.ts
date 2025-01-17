import { asyncThunkCreator, buildCreateSlice, createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { createReduxStore } from './store'
import { StateSchema } from './StateSchema'

const store = createReduxStore()
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<StateSchema>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppStore = useStore.withTypes<typeof store>()
export const createAppSelector = createSelector.withTypes<StateSchema>()

export const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})
