import React from 'react'
import {shallow} from 'enzyme'
import {Breadcrumbs} from '../../components'

describe('Breadcrumbs', () => {

  it('renders without crashing', () => {
    shallow(<Breadcrumbs />)
  })

  it('has the class "breadcrumbs"', () => {
    const wrapper = shallow(<Breadcrumbs />)

    const hasClass = wrapper.hasClass('breadcrumbs')

    expect(hasClass).toBe(true)
  })

})
