import React from 'react'
import {shallow} from 'enzyme'
import {
  ProjectsHome,
  ProjectsIntro,
  ProjectsList
} from '../../components'

describe('ProjectsHome', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsHome />)
  })

  it('has the class "projects-home"', () => {
    const wrapper = shallow(<ProjectsHome />)

    const hasClass = wrapper.hasClass('projects-home')

    expect(hasClass).toBe(true)
  })

  it('renders the projects intro', () => {
    const wrapper = shallow(<ProjectsHome />)
    const projectsIntro = <ProjectsIntro />

    const rendersProjectsIntro = wrapper.containsMatchingElement(projectsIntro)

    expect(rendersProjectsIntro).toBe(true)
  })

  it('renders the projects list', () => {
    const wrapper = shallow(<ProjectsHome />)
    const projectsList = <ProjectsList />

    const rendersProjectsList = wrapper.containsMatchingElement(projectsList)

    expect(rendersProjectsList).toBe(true)
  })

})
