import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = '/', initialState } = options

  render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
