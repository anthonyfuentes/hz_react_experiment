import React from 'react'
import {Route} from 'react-router-dom'
import {ContentHeader,ProjectsInfo} from './'

const Projects = (props) => {

  return (
    <div className="projects">
      <ContentHeader heading="Projects" />
      <Route path="/" component={ProjectsInfo} />
    </div>
  )
}

export default Projects

