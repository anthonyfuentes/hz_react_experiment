import React from 'react'
import {shallow} from 'enzyme'
import {NotFound} from '../../components'

describe('NotFound', () => {

  it('renders without crashing', () => {
    shallow(<NotFound />)
  })

  it('has the class "not-found"', () => {
    const wrapper = shallow(<NotFound />)

    const hasClass = wrapper.hasClass("not-found")

    expect(hasClass).toBe(true)
  })

})
