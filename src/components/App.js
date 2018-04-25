import React from 'react'
import PropTypes from 'prop-types'
import {Route,Switch} from 'react-router-dom'
import '../style/app.css'
import {ErrorsList,NotFound,Projects} from './'

const App = (props) => {
  const {errors} = props

  return (
    <div className="app">
      {errors && (errors.length > 0) && <ErrorsList errors={errors} />}
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

App.propTypes = {
  errors: PropTypes.array
}

export default App
