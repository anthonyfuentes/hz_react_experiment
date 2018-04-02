import React from 'react'
import {shallow} from 'enzyme'
import App from '../../components/App'
import {SiteFooter,SiteHeader} from '../../components'

describe('App', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
  })

  it('has the class "app"', () => {
    const wrapper = shallow(<App />)

    const hasClass = wrapper.hasClass('app')

    expect(hasClass).toBe(true)
  })

  it('renders the site header', () => {
    const wrapper = shallow(<App />)
    const siteHeader = <SiteHeader />

    const rendersSiteHeadaer = wrapper.containsMatchingElement(siteHeader)

    expect(rendersSiteHeadaer).toBe(true)
  })

  it('renders the site footer', () => {
    const wrapper = shallow(<App />)
    const siteFooter = <SiteFooter />

    const rendersSiteFooter = wrapper.containsMatchingElement(siteFooter)

    expect(rendersSiteFooter).toBe(true)
  })

})
