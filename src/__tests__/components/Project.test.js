import React from 'react'
import {shallow} from 'enzyme'
import {Project} from '../../components'

describe('Project', () => {

  it('renders without crashing', () => {
    shallow(<Project />)
  })

  it('has the class "project"', () => {
    const wrapper = shallow(<Project />)

    const hasClass = wrapper.hasClass('project')

    expect(hasClass).toBe(true)
  })

})
