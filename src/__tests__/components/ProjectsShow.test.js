import React from 'react'
import {shallow} from 'enzyme'
import {
  ContentHeader,
  ProjectNotFound,
  ProjectsShow
} from '../../components'

describe('ProjectsShow', () => {

  it('renders without crashing', () => {
    shallow(<ProjectsShow fetchProject={()=>{}} />)
  })

  it('has the class "projects-show"', () => {
    const wrapper = shallow(<ProjectsShow fetchProject={()=>{}} />)

    const hasClass = wrapper.hasClass('projects-show')

    expect(hasClass).toBe(true)
  })

  it('renders the content header', () => {
    const wrapper = shallow(<ProjectsShow fetchProject={()=>{}} />)
    const contentHeader = <ContentHeader heading="Projects" />

    const rendersContentHeader = wrapper.containsMatchingElement(contentHeader)

    expect(rendersContentHeader).toBe(true)
  })


  it('renders the project not found component if project has falsey ID', () => {
    const project = {id:0,title:'Test'}
    const wrapper = shallow(<ProjectsShow fetchProject={()=>{}} project={project} />)

    const rendersProjectNotFound = wrapper.containsMatchingElement(<ProjectNotFound id={0} />)

    expect(rendersProjectNotFound).toBe(true)
  })

  it('does not render the project not found component if project has truthy ID', () => {
    const project = {id:1,title:'Test'}
    const wrapper = shallow(<ProjectsShow fetchProject={()=>{}} project={project} />)

    const rendersProjectNotFound = wrapper.containsMatchingElement(<ProjectNotFound id={1} />)

    expect(rendersProjectNotFound).toBe(false)
  })

})
