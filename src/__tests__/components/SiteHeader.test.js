import React from 'react'
import {shallow} from 'enzyme'
import {
  SiteHeader,
  Masthead,
  SubMasthead
} from '../../components'

describe('SiteHeader', () => {

  it('renders without crashing', () => {
    shallow(<SiteHeader heading='' />)
  })

  it('has the class "site-header"', () => {
    const wrapper = shallow(<SiteHeader heading='' />)

    const hasClass = wrapper.hasClass('site-header')

    expect(hasClass).toBe(true)
  })

  it('renders one masthead', () => {
    const wrapper = shallow(<SiteHeader />)

    const mastheadCount = wrapper.find(Masthead).length

    expect(mastheadCount).toBe(1)
  })

  it('renders one sub-masthead', () => {
    const wrapper = shallow(<SiteHeader heading='' />)

    const subMastheadCount = wrapper.find(SubMasthead).length

    expect(subMastheadCount).toBe(1)
  })

})
