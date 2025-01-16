import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema)

  return <Provider store={store}>{children}</Provider>
}
