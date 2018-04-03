import React from 'react'
import {shallow} from 'enzyme'
import {ProjectsList} from '../../components'

describe('ProjectsList', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsList />)
  })

  it('has the class "projects-list"', () => {
    const wrapper = shallow(<ProjectsList />)

    const hasClass = wrapper.hasClass('projects-list')

    expect(hasClass).toBe(true)
  })

})
