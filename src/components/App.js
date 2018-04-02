import React from 'react'
import {Route} from 'react-router-dom'
import '../style/app.css'
import {
  Projects,
  SiteHeader,
  SiteFooter
} from './'

const App = (props) => {
  return (
    <div className="app">
      <SiteHeader />
      <Route path="/" component={Projects} />
      <SiteFooter />
    </div>
  )
}

export default App
