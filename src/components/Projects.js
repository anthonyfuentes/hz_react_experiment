import React from 'react'
import {Route} from 'react-router-dom'
import {ContentHeader,SiteFooter,SiteHeader} from './'
import {ProjectsHomeContainer} from '../containers'

const Projects = (props) => {

  return (
    <div className="projects">
      <SiteHeader />
      <ContentHeader heading="Projects" />
      <Route path="/projects" component={ProjectsHomeContainer} />
      <SiteFooter />
    </div>
  )
}

export default Projects

