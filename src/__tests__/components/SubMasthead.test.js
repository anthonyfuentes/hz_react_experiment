import React from 'react'
import {shallow} from 'enzyme'
import {SubMasthead} from '../../components'

describe('SubMasthead', () => {

  it('renders without crashing', () => {
    shallow(<SubMasthead />)
  })

  it('has the class "sub-masthead"', () => {
    const wrapper = shallow(<SubMasthead />)

    const hasClass = wrapper.hasClass('sub-masthead')

    expect(hasClass).toBe(true)
  })

})
