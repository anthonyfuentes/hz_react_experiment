import React from 'react'
import {shallow} from 'enzyme'
import {ProjectNotFound} from '../../components'

describe('ProjectNotFound', () => {

  it('renders without crashing', () => {
    shallow(<ProjectNotFound id={0} />)
  })

  it('has the class "project-not-found"', () => {
    const wrapper = shallow(<ProjectNotFound id={0} />)

    const hasClass = wrapper.hasClass('project-not-found')

    expect(hasClass).toBe(true)
  })

})

