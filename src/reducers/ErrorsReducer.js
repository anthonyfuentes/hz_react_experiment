import {
  ADD_ERROR,
  REMOVE_NOTIFICATIONS
} from '../actions/types'

const ErrorsReducer = (state = [], {payload, type}) => {
  switch(type) {
    case ADD_ERROR:
      const newState = [
        ...state,
        payload
      ]
      return newState
    case REMOVE_NOTIFICATIONS:
      if (payload.type !== 'error') {
        return state
      }
      const oldErrors = payload.notifications
      const difference = state.filter(notification => !oldErrors.includes(notification))
      return difference
    default:
      return state
  }
}

export default ErrorsReducer
