import React, { useEffect } from 'react'
import { useStore } from 'react-redux'

import { useAppDispatch } from 'app/providers/StoreProvider/config/redux'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

export interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children?: React.ReactNode
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
  reducers,
  removeAfterUnmount,
  children,
}: DynamicModuleLoaderProps) => {
  const dispatch = useAppDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
    })

    return () => {
      Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return children
}
