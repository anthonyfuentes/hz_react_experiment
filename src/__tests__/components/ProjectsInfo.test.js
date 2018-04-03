import React from 'react'
import {shallow} from 'enzyme'
import {
  ProjectsInfo,
  ProjectsIntro,
  ProjectsList
} from '../../components'

describe('ProjectsInfo', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsInfo />)
  })

  it('has the class "projects-info"', () => {
    const wrapper = shallow(<ProjectsInfo />)

    const hasClass = wrapper.hasClass('projects-info')

    expect(hasClass).toBe(true)
  })

  it('renders the projects intro', () => {
    const wrapper = shallow(<ProjectsInfo />)
    const projectsIntro = <ProjectsIntro />

    const rendersProjectsIntro = wrapper.containsMatchingElement(projectsIntro)

    expect(rendersProjectsIntro).toBe(true)
  })

  it('renders the projects list', () => {
    const wrapper = shallow(<ProjectsInfo />)
    const projectsList = <ProjectsList />

    const rendersProjectsList = wrapper.containsMatchingElement(projectsList)

    expect(rendersProjectsList).toBe(true)
  })

})
