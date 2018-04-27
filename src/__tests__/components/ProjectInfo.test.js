import React from 'react'
import {shallow} from 'enzyme'
import {ProjectInfo} from '../../components'

describe('ProjectInfo', () => {

  it('renders without crashing', () => {
    shallow(<ProjectInfo />)
  })

  it('has the class "project-info"', () => {
    const wrapper = shallow(<ProjectInfo />)

    const hasClass = wrapper.hasClass('project-info')

    expect(hasClass).toBe(true)
  })

})
