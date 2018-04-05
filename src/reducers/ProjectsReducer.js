import {FETCH_PROJECTS_SUCCESS} from '../actions/types'

const ProjectsReducer = (state = {}, {payload, type}) => {
  switch (type) {
    case FETCH_PROJECTS_SUCCESS:
      const newState = {...state}
      payload.data.projects.forEach((project) => {
        let id = +project.id.split('-')[1]
        newState[id] = project
      })
      return newState
    default:
      return state
  }
}

export default ProjectsReducer
