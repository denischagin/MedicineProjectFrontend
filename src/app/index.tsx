import React from 'react'
import { Header } from 'widgets/Header'
import { withProviders } from './providers'
import { Routing } from './routes'
import './styles/global.css'
import './styles/fonts.css'

const App = () => {
  return (
    <>
      <Header />
      <Routing />
    </>
  )
}

export default withProviders(App)