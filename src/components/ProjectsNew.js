import React from 'react'
import {
  ContentHeader,
  NewProjectTracker
} from '../components'

const ProjectsNew = (props) => {

  return (
    <div className="projects-new">
      <ContentHeader heading="New Project" />
      <NewProjectTracker />
    </div>
  )
}

export default ProjectsNew

