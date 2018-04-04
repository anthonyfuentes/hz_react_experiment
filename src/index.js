import React from 'react'
import ReactDOM from 'react-dom'
import promise from 'redux-promise'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'

import RootReducer from './reducers/RootReducer.js'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import './style/index.css'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
