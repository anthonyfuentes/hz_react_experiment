import React from 'react'
import {shallow} from 'enzyme'
import {TitledLinkList} from '../../components'

describe('TitledLinkList', () => {

  it('renders without crashing', () => {
    shallow(<TitledLinkList title="" />)
  })

  it('has the class "titled-link-list"', () => {
    const wrapper = shallow(<TitledLinkList title="" />)

    const hasClass = wrapper.hasClass('titled-link-list')

    expect(hasClass).toBe(true)
  })

  it('renders a list item for each link', () => {
    const links = {a:'',b:'',c:''}
    const linkCount = Object.keys(links).length
    const wrapper = shallow(<TitledLinkList title="" links={links} />)

    const renderedItemCount = wrapper.find('li').length

    expect(renderedItemCount).toEqual(linkCount)
  })

})
