import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  ContentHeader,
  ProjectsIntro,
  ProjectsList
} from './'

class ProjectsHome extends Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    const {projects} = this.props

    return (
      <div className="projects-home">
        <ContentHeader heading="Projects" />
        <section>
          <ProjectsIntro />
          <ProjectsList projects={projects} />
        </section>
      </div>
    )
  }

}

ProjectsHome.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired
}

export default ProjectsHome

