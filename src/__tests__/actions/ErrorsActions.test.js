import {ErrorsActions} from '../../actions'
import {ADD_ERROR} from '../../actions/types'

describe('ErrorsActions', () => {

  describe('addError', () => {
    it('has type ADD_ERROR', () => {
      const action = ErrorsActions.addError()

      const hasCorrectType = (action.type === ADD_ERROR)

      expect(hasCorrectType).toBe(true)
    })

    it('payload matches argument message', () => {
      const message = 'test'

      const action = ErrorsActions.addError(message)

      expect(action.payload).toEqual(message)
    })
  })

})
