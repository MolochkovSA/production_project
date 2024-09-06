import React from 'react'
import { classNames } from 'shared/lib'
import { Button } from 'shared/ui/Button/Button'

interface BugButtonProps {
  className?: string
}

// компонент для тестов
export const BugButton: React.FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = React.useState(false)

  const onThrow = () => {
    setError(true)
  }

  React.useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button className={classNames('', {}, [className])} onClick={onThrow}>
      throw error
    </Button>
  )
}
