import React from 'react'
import {shallow} from 'enzyme'
import {
  ContentHeader,
  Projects,
  SiteFooter,
  SiteHeader
} from '../../components'

describe('Projects', () => {

  it('renders without crashing', () => {
    shallow(<Projects />)
  })

  it('has the class "projects"', () => {
    const wrapper = shallow(<Projects />)

    const hasClass = wrapper.hasClass('projects')

    expect(hasClass).toBe(true)
  })

  it('renders the site header', () => {
    const wrapper = shallow(<Projects />)
    const siteHeader = <SiteHeader />

    const rendersSiteHeader = wrapper.containsMatchingElement(siteHeader)

    expect(rendersSiteHeader).toBe(true)
  })

  it('renders the site footer', () => {
    const wrapper = shallow(<Projects />)
    const siteFooter = <SiteFooter />

    const rendersSiteFooter = wrapper.containsMatchingElement(siteFooter)

    expect(rendersSiteFooter).toBe(true)
  })


})
