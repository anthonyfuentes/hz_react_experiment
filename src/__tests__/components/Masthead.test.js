import React from 'react'
import {shallow} from 'enzyme'
import {Masthead} from '../../components'

describe('Masthead', () => {

  it('renders without crashing', () => {
    shallow(<Masthead />)
  })

  it('has the class "masthead"', () => {
    const wrapper = shallow(<Masthead />)

    const hasClass = wrapper.hasClass('masthead')

    expect(hasClass).toBe(true)
  })

})
