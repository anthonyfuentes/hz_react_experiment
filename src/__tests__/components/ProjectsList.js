import React from 'react'
import {shallow} from 'enzyme'
import {Project,ProjectsList} from '../../components'

describe('ProjectsList', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsList projects={{}} />)
  })

  it('has the class "projects-list"', () => {
    const wrapper = shallow(<ProjectsList projects={{}} />)

    const hasClass = wrapper.hasClass('projects-list')

    expect(hasClass).toBe(true)
  })

  it('renders the correct number of project components', () => {
    const projects = {1:{},2:{}}
    const wrapper = shallow(<ProjectsList projects={projects} />)

    const renderedWrapperCount = wrapper.find(Project).length

    expect(renderedWrapperCount).toBe(Object.keys(projects).length)
  })


})
