import React from 'react'
import {shallow} from 'enzyme'
import {Link} from 'react-router-dom'
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

  it('renders a link for each subpath in the url', () => {
    const subPaths = ['a','b','c']
    Object.defineProperty(window.location, 'href', {
      writable: true,
      value: `http://localhost:3000/${subPaths.join('/')}`
    })

    const wrapper = shallow(<Breadcrumbs />)
    const renderedLinkCount = wrapper.find(Link).length

    expect(renderedLinkCount).toEqual(subPaths.length)
  })

})
