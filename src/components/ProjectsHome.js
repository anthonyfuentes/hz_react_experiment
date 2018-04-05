import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {ProjectsIntro,ProjectsList} from './'

class ProjectsHome extends Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    const {projects} = this.props

    return (
      <section className="projects-home">
        <ProjectsIntro />
        <ProjectsList projects={projects} />
      </section>
    )
  }

}

ProjectsHome.propTypes = {
  fetchProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired
}

export default ProjectsHome

