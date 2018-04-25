import axios from 'axios'
import {
  Secrets,
  HubConfig as Hub
} from '../config'
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from './types'

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

const fetchProjectsFailure = (payload) => {
  const action = {
    type: FETCH_PROJECTS_FAILURE,
    payload
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
        dispatch(fetchProjectsFailure(response))
      })
  }

  return thunk
}

