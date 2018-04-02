import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import './style/index.css'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
)
