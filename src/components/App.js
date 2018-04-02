import React from 'react'
import {SiteHeader,SiteFooter} from './'
import '../style/app.css'

const App = (props) => {
  return (
    <div className="app">
      <SiteHeader />
      <SiteFooter />
    </div>
  )
}

export default App
