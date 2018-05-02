import React from 'react'
import {shallow} from 'enzyme'
import {NewProjectTracker} from '../../components'

describe('NewProjectTracker', () => {

  it('renders without crashing', () => {
    shallow(<NewProjectTracker />)
  })

  it('has the class "new-project-tracker"', () => {
    const wrapper = shallow(<NewProjectTracker />)

    const hasClass = wrapper.hasClass('new-project-tracker')

    expect(hasClass).toBe(true)
  })

})
