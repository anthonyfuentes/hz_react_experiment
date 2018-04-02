import React from 'react'
import {shallow} from 'enzyme'
import {ProjectsInfo} from '../../components'

describe('ProjectsInfo', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsInfo />)
  })

  it('has the class "projects-info"', () => {
    const wrapper = shallow(<ProjectsInfo />)

    const hasClass = wrapper.hasClass('projects-info')

    expect(hasClass).toBe(true)
  })

})
