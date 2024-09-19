import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('counter')).toBeInTheDocument()
    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10')
  })

  test('test increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })

    fireEvent.click(screen.getByTestId('increment-btn'))

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 11')
  })

  test('test decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })

    fireEvent.click(screen.getByTestId('decrement-btn'))

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 9')
  })
})
