import axios from 'axios'
import {
  Secrets,
  RouteConfig as Routes
} from '../config'
import {FETCH_PROJECTS_SUCCESS} from './types'

export const fetchProjects = () => {
  const apiKey = Secrets.bosskApiKey
  const headers = {Authorization: `Bearer ${apiKey}`}
  const projectsFetchUrl = `${Routes.bosskBaseUrl}/api/v1.1/projects/list`
  const promise = axios.get(projectsFetchUrl, {headers})

  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: promise
  }
}
