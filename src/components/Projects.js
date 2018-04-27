import React from 'react'
import {Route,Switch} from 'react-router-dom'
import {ContentHeader,SiteFooter,SiteHeader} from './'
import {ProjectsHomeContainer} from '../containers'
import {ProjectsShow} from '../components'

const Projects = (props) => {

  return (
    <div className="projects">
      <SiteHeader />
      <ContentHeader heading="Projects" />
      <Switch>
        <Route exact path="/projects" component={ProjectsHomeContainer} />
        <Route path="/projects/:id" component={ProjectsShow} />
      </Switch>
      <SiteFooter />
    </div>
  )
}

export default Projects

