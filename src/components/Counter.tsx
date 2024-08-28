import React from 'react'

import * as styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={styles.btn}>
      <button onClick={increment}>{count}</button>
    </div>
  )
}
