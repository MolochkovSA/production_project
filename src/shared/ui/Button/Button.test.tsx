import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
    // screen.debug()
  })

  test('test classNames', () => {
    render(<Button className="test">TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('test')
    // screen.debug()
  })

  test('test clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    // screen.debug()
  })
})
