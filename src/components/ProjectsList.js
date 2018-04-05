import React from 'react'
import '../style/projectsList.css'

const ProjectsList = (props) => {
  const {projects} = props

  return (
    <section className="projects-list layout-top">
      <h2>My Projects</h2>
      {/*projects.map((project,i) => <Project key={i} {...project})*/}
    </section>
  )
}

export default ProjectsList

