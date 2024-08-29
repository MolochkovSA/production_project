import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib'
import { useTheme } from './providers/ThemeProvider'

import './styles/index.scss'
import { AppRouter } from './providers/router'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  )
}
