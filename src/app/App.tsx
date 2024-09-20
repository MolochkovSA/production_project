import { Suspense } from 'react'
import { classNames } from 'shared/lib'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="loading">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
