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

  it('renders the masthead', () => {
    const wrapper = shallow(<SiteHeader heading='' />)
    const masthead = <Masthead />

    const rendersMasthead = wrapper.containsMatchingElement(masthead)

    expect(rendersMasthead).toBe(true)
  })

  it('renders the sub-masthead', () => {
    const wrapper = shallow(<SiteHeader heading='' />)
    const subMasthead = <SubMasthead />

    const rendersSubMasthead = wrapper.containsMatchingElement(subMasthead)

    expect(rendersSubMasthead).toBe(true)
  })

})
