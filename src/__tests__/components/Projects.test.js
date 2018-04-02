import React from 'react'
import {shallow} from 'enzyme'
import {ContentHeader,Projects} from '../../components'

describe('Projects', () => {

  it('renders without crashing', () => {
    shallow(<Projects />)
  })

  it('has the class "projects"', () => {
    const wrapper = shallow(<Projects />)

    const hasClass = wrapper.hasClass('projects')

    expect(hasClass).toBe(true)
  })

  it('renders the content header', () => {
    const wrapper = shallow(<Projects />)
    const contentHeader = <ContentHeader heading="Projects" />

    const rendersContentHeadaer = wrapper.containsMatchingElement(contentHeader)

    expect(rendersContentHeadaer).toBe(true)
  })

})
