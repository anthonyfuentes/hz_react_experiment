import React from 'react'
import {shallow} from 'enzyme'
import {SiteFooter,TitledLinkList} from '../../components'
import {SiteFooterConfig as linkLists} from '../../config'

describe('SiteFooter', () => {

  it('renders without crashing', () => {
    shallow(<SiteFooter />)
  })

  it('has the class "site-footer"', () => {
    const wrapper = shallow(<SiteFooter />)

    const hasClass = wrapper.hasClass('site-footer')

    expect(hasClass).toBe(true)
  })

  it('renders the correct titled link lists', () => {
    const linkListsCount = linkLists.length

    const wrapper = shallow(<SiteFooter />)
    const renderedLinkListsCount = wrapper.find(TitledLinkList).length

    expect(renderedLinkListsCount).toEqual(linkListsCount)
  })

})
