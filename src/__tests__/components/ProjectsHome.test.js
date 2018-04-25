import React from 'react'
import {shallow} from 'enzyme'
import {
  ProjectsHome,
  ProjectsIntro,
  ProjectsList
} from '../../components'

describe('ProjectsHome', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsHome fetchProjects={()=>{}} projects={{}} />)
  })

  it('has the class "projects-home"', () => {
    const wrapper = shallow(<ProjectsHome fetchProjects={()=>{}} projects={{}} />)

    const hasClass = wrapper.hasClass('projects-home')

    expect(hasClass).toBe(true)
  })

  it('renders the projects intro', () => {
    const wrapper = shallow(<ProjectsHome fetchProjects={()=>{}} projects={{}} />)
    const projectsIntro = <ProjectsIntro />

    const rendersProjectsIntro = wrapper.containsMatchingElement(projectsIntro)

    expect(rendersProjectsIntro).toBe(true)
  })

  it('renders the projects list', () => {
    const wrapper = shallow(<ProjectsHome fetchProjects={()=>{}} projects={{}} />)
    const projectsList = <ProjectsList projects={{}} />

    const rendersProjectsList = wrapper.containsMatchingElement(projectsList)

    expect(rendersProjectsList).toBe(true)
  })

})
