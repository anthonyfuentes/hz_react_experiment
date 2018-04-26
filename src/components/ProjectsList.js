import React from 'react'
import PropTypes from 'prop-types'
import '../style/projectsList.css'
import {CarouselSlider,Project} from './'

const ProjectsList = (props) => {
  const {projects} = props

  const projectComponents = Object.keys(projects).map((id,i) =>
    <Project key={i} id={id} title={projects[id].title} />)

  return (
    <section className="projects-list layout-top">
      <h2>My Projects</h2>
      <CarouselSlider elements={projectComponents} />
    </section>
  )
}

ProjectsList.propTypes = {
  projects: PropTypes.object
}

ProjectsList.defaultProps = {
  projects: {}
}

export default ProjectsList

