import React from 'react'
import {shallow} from 'enzyme'
import {SiteFooter} from '../../components'

describe('SiteFooter', () => {

  it('renders without crashing', () => {
    shallow(<SiteFooter />)
  })

  it('has the class "site-footer"', () => {
    const wrapper = shallow(<SiteFooter />)

    const hasClass = wrapper.hasClass('site-footer')

    expect(hasClass).toBe(true)
  })

})
