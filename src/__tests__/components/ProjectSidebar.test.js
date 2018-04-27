import React from 'react'
import {shallow} from 'enzyme'
import {
  ListMenu,
  ProjectSidebar
} from '../../components'

describe('ProjectSidebar', () => {

  it('renders without crashing', () => {
    shallow(<ProjectSidebar />)
  })

  it('has the class "project-sidebar"', () => {
    const wrapper = shallow(<ProjectSidebar />)

    const hasClass = wrapper.hasClass('project-sidebar')

    expect(hasClass).toBe(true)
  })

  it('renders a ListMenu', () => {
    const wrapper = shallow(<ProjectSidebar />)

    const listMenuCount = wrapper.find(ListMenu).length

    expect(listMenuCount).toEqual(1)
  })

})
