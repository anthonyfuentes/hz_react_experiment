import React from 'react'
import {Route,Switch} from 'react-router-dom'
import '../style/app.css'
import {NotFound,Projects} from './'

const App = (props) => {
  return (
    <div className="app">
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
