import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from '../actions/types'

const ProjectsReducer = (state = {}, {payload, type}) => {
  switch (type) {
    case FETCH_PROJECTS_SUCCESS:
      const newState = {...state}
      const projects = payload.data.projects.map((project) => {
        return {...project, id: +project.id.split('-')[1]}
      })
      projects.forEach((project) => {
        newState[project.id] = project
      })
      return newState
    case FETCH_PROJECTS_FAILURE:
      return {}
    default:
      return state
  }
}

export default ProjectsReducer
