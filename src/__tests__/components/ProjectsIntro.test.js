import React from 'react'
import {shallow} from 'enzyme'
import {ProjectsIntro} from '../../components'

describe('ProjectsIntro', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsIntro />)
  })

  it('has the class "projects-intro"', () => {
    const wrapper = shallow(<ProjectsIntro />)

    const hasClass = wrapper.hasClass('projects-intro')

    expect(hasClass).toBe(true)
  })

})
