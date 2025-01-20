import React from 'react'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoryFn } from '@storybook/react/*'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) =>
  function StoreDecorator(Story: StoryFn) {
    return (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
        <Story />
      </StoreProvider>
    )
  }
