import {ProjectsReducer} from '../../reducers'
import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from '../../actions/types'

describe('ProjectsReducer', () => {
  describe('default', () => {
    it('returns an empty object if state undefined', () => {
      const response = ProjectsReducer(undefined, {})

      expect(response).toEqual({})
    })

    it('returns the received state for action with unkown type', () => {
      const state = [1,2,'test']

      const response = ProjectsReducer(state, {})

      expect(response).toEqual(state)
    })
  })

  it('FETCH_PROJECTS_SUCCESS', () => {
    const projects = [{id: 'project-1'}]
    const data = {projects}
    const initialState = {99: {id: 99}}
    const expectedState = Object.assign({}, initialState, {1:{id:1}})
    const action = {type: FETCH_PROJECTS_SUCCESS, payload: {data}}

    const response = ProjectsReducer(initialState, action)

    expect(response).toEqual(expectedState)
  })

  it('FETCH_PROJECTS_FAILURE', () => {
    const expectedState = {}
    const initialState = {99: {id: 99}}
    const action = {type: FETCH_PROJECTS_FAILURE}

    const response = ProjectsReducer(initialState, action)

    expect(response).toEqual(expectedState)
  })

})
