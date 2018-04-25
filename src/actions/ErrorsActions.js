import {ADD_ERROR} from './types'

export const addError = (message) => {
  const action = {
    type: ADD_ERROR,
    payload: message
  }

  return action
}

