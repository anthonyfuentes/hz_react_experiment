import {combineReducers} from 'redux'
import {
  ErrorsReducer,
  ProjectsReducer
} from './'

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  projects: ProjectsReducer
})

export default RootReducer
