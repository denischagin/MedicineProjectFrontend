import React from 'react'
import { Header } from 'widgets/Header'
import "app/styles/global.css"
import "app/styles/fonts.css"
import css from './App.module.css'
import { Routing } from 'app/routes'
import { withProviders } from 'app/providers'

const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <Routing />
    </div>
  )
}

export default withProviders(App)