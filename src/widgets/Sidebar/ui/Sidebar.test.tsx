import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { MemoryRouter } from 'react-router-dom'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation.tsx'

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTranslation(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    // screen.debug()
  })

  test('test toggle', () => {
    renderWithTranslation(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )

    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    // screen.debug()
  })
})
