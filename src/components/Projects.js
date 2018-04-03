import React from 'react'
import {Route} from 'react-router-dom'
import {ContentHeader,ProjectsInfo,SiteFooter,SiteHeader} from './'

const Projects = (props) => {

  return (
    <div className="projects">
      <SiteHeader />
      <ContentHeader heading="Projects" />
      <Route path="/projects" component={ProjectsInfo} />
      <SiteFooter />
    </div>
  )
}

export default Projects

