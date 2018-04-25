import {NotificationsActions} from '../../actions'
import {REMOVE_NOTIFICATIONS} from '../../actions/types'

describe('NotificationsActions', () => {

  describe('removeNotifications', () => {
    it('has type REMOVE_NOTIFICATIONS', () => {
      const action = NotificationsActions.removeNotifications()

      const hasCorrectType = (action.type === REMOVE_NOTIFICATIONS)

      expect(hasCorrectType).toBe(true)
    })

    it('has a payload with type matching first action argument', () => {
      const type = 'test'

      const action = NotificationsActions.removeNotifications(type)

      expect(action.payload.type).toEqual(type)
    })

    it('has a payload with notifications matching second action argument', () => {
      const notifications = ['a','b','c']

      const action = NotificationsActions.removeNotifications(null, notifications)

      expect(action.payload.notifications).toEqual(notifications)
    })
  })

})
