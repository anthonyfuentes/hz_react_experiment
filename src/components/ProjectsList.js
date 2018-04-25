import React from 'react'
import PropTypes from 'prop-types'
import '../style/projectsList.css'
import {Project} from './'

const ProjectsList = (props) => {
  const {projects} = props

  return (
    <section className="projects-list layout-top">
      <h2>My Projects</h2>
      {Object.keys(projects).map((id,i) =>
        <Project key={i} title={projects[id].title} />)}
    </section>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.object.isRequired
}

export default ProjectsList

