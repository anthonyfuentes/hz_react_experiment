import React from 'react'
import {Route} from 'react-router-dom'
import {ContentHeader,ProjectsHome,SiteFooter,SiteHeader} from './'

const Projects = (props) => {

  return (
    <div className="projects">
      <SiteHeader />
      <ContentHeader heading="Projects" />
      <Route path="/projects" component={ProjectsHome} />
      <SiteFooter />
    </div>
  )
}

export default Projects

