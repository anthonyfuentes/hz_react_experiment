import {ErrorsReducer} from '../../reducers'
import {ADD_ERROR} from '../../actions/types'

describe('ErrorsReducer', () => {
  describe('default', () => {
    it('returns an empty array if state undefined', () => {
      const response = ErrorsReducer(undefined, {})

      expect(response).toEqual([])
    })

    it('returns the received state for action with unkown type', () => {
      const state = [1,2,3]

      const response = ErrorsReducer(state, {})

      expect(response).toEqual(state)
    })
  })

  describe('ADD_ERROR', () => {
    const payload = {message:'test',type:'error'}
    const expectedState = [payload]
    const action = {type: ADD_ERROR,payload}

    const response = ErrorsReducer([], action)

    expect(response).toEqual(expectedState)
  })
})
