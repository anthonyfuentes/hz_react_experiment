import {REMOVE_NOTIFICATIONS} from './types'

export const removeNotifications = (type, notifications) => {
  const action = {
    type: REMOVE_NOTIFICATIONS,
    payload: {
      notifications,
      type
    }
  }

  return action
}

