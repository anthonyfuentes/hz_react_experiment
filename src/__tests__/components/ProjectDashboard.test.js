import React from 'react'
import {shallow} from 'enzyme'
import {
  ProjectDashboard,
  ProjectSidebar
} from '../../components'

describe('ProjectDashboard', () => {

  it('renders without crashing', () => {
    shallow(<ProjectDashboard project={{}} />)
  })

  it('has the class "project-dashboard"', () => {
    const wrapper = shallow(<ProjectDashboard project={{}} />)

    const hasClass = wrapper.hasClass('project-dashboard')

    expect(hasClass).toBe(true)
  })

  it('renders the project sidebar', () => {
    const wrapper = shallow(<ProjectDashboard project={{}} />)

    const projectSidebarCount = wrapper.find(ProjectSidebar).length

    expect(projectSidebarCount).toEqual(1)
  })

})
