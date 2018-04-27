import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers/RootReducer.js'
import 'bootstrap/dist/css/bootstrap.css'
import {AppContainer} from './containers'
import './style/index.css'

const store = createStore(RootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={AppContainer} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
