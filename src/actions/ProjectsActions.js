import axios from 'axios'
import {
  Secrets,
  HubConfig as Hub
} from '../config'
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_FAILURE
} from './types'
import {ErrorsActions} from './'

const fetchProjectsRequest = () => {
  const action = {
    type: FETCH_PROJECTS_REQUEST
  }

  return action
}

const fetchProjectsSuccess = (payload) => {
  const action = {
    type: FETCH_PROJECTS_SUCCESS,
    payload
  }

  return action
}

const fetchProjectsFailure = () => {
  const action = {
    type: FETCH_PROJECTS_FAILURE
  }

  return action
}

export const fetchProjects = () => {
  const thunk = (dispatch) => {
    dispatch(fetchProjectsRequest())

    const apiKey = Secrets.hubApiKey
    const headers = {Authorization: `Bearer ${apiKey}`}
    const projectsFetchUrl = `${Hub.routes.baseUrl}/api/v1.1/projects/list`

    axios.get(projectsFetchUrl, {headers})
      .then(response => {
        dispatch(fetchProjectsSuccess(response))
      })
      .catch(response => {
        dispatch(fetchProjectsFailure())
        dispatch(ErrorsActions.addError('Something went wrong: unable to load projects'))
      })
  }

  return thunk
}

const fetchProjectRequest = () => {
  const action = {
    type: FETCH_PROJECT_REQUEST
  }

  return action
}

const fetchProjectSuccess = (payload) => {
  const action = {
    type: FETCH_PROJECT_SUCCESS,
    payload
  }

  return action
}

const fetchProjectFailure = () => {
  const action = {
    type: FETCH_PROJECT_FAILURE
  }

  return action
}

export const fetchProject = (id) => {
  const thunk = (dispatch) => {
    dispatch(fetchProjectRequest())

    const apiKey = Secrets.hubApiKey
    const headers = {Authorization: `Bearer ${apiKey}`}
    const projectFetchUrl = `${Hub.routes.baseUrl}/api/v1.1/projects/${id}`

    axios.get(projectFetchUrl, {headers})
      .then(response => {
        dispatch(fetchProjectSuccess(response))
      })
      .catch(response => {
        dispatch(fetchProjectFailure())
        dispatch(ErrorsActions.addError(`Something went wrong: unable to load project with ID ${id}`))
      })
  }

  return thunk
}

