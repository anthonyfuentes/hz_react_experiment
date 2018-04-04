import React from 'react'
import {ProjectsIntro,ProjectsList} from './'

const ProjectsHome = (props) => {

  return (
    <section className="projects-home">
      <ProjectsIntro />
      <ProjectsList />
    </section>
  )
}

export default ProjectsHome

