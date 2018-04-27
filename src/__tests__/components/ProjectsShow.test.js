import React from 'react'
import {shallow} from 'enzyme'
import {ProjectsShow} from '../../components'

describe('ProjectsShow', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsShow />)
  })

  it('has the class "projects-show"', () => {
    const wrapper = shallow(<ProjectsShow />)

    const hasClass = wrapper.hasClass('projects-show')

    expect(hasClass).toBe(true)
  })

})
