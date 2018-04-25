import {combineReducers} from 'redux'
import {ErrorsReducer} from './'
import {ProjectsReducer} from './'

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  projects: ProjectsReducer
})

export default RootReducer
