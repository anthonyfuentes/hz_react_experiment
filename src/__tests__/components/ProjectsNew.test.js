import React from 'react'
import {shallow} from 'enzyme'
import {
  ContentHeader,
  NewProjectTracker,
  ProjectsNew
} from '../../components'

describe('ProjectsNew', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsNew />)
  })

  it('has the class "projects-new"', () => {
    const wrapper = shallow(<ProjectsNew />)

    const hasClass = wrapper.hasClass('projects-new')

    expect(hasClass).toBe(true)
  })

  it('renders the content header', () => {
    const wrapper = shallow(<ProjectsNew />)
    const contentHeader = <ContentHeader heading="New Project" />

    const rendersContentHeader = wrapper.containsMatchingElement(contentHeader)

    expect(rendersContentHeader).toBe(true)
  })

  it('renders the new project tracker', () => {
    const wrapper = shallow(<ProjectsNew />)

    const rendersTracker = wrapper.find(NewProjectTracker).length

    expect(rendersTracker).toEqual(1)
  })

})
