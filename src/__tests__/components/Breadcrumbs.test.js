import React from 'react'
import {shallow} from 'enzyme'
import {Breadcrumb,Breadcrumbs} from '../../components'

describe('Breadcrumbs', () => {

  it('renders without crashing', () => {
    shallow(<Breadcrumbs />)
  })

  it('has the class "breadcrumbs"', () => {
    const wrapper = shallow(<Breadcrumbs />)

    const hasClass = wrapper.hasClass('breadcrumbs')

    expect(hasClass).toBe(true)
  })

  it('renders a Breadcrumb for all segments of the url', () => {
    const segments = ['a','b','c']
    Object.defineProperty(window.location, 'href', {
      writable: true,
      value: `http://localhost:3000/${segments.join('/')}`
    })

    const wrapper = shallow(<Breadcrumbs />)
    const breadcrumbCount = wrapper.find(Breadcrumb).length

    expect(breadcrumbCount).toEqual(segments.length)
  })

})
