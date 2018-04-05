import {combineReducers} from 'redux'
import {ProjectsReducer} from './'

const RootReducer = combineReducers({
  projects: ProjectsReducer // {<id>: <project data>}
})

export default RootReducer
