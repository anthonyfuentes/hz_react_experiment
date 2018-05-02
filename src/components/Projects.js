import React from 'react'
import {Route,Switch} from 'react-router-dom'
import {SiteFooter,SiteHeader} from './'
import {ProjectsNew} from '../components'
import {
  ProjectsHomeContainer,
  ProjectsShowContainer
} from '../containers'

const Projects = (props) => {

  return (
    <div className="projects">
      <SiteHeader />
      <Switch>
        <Route exact path="/projects" component={ProjectsHomeContainer} />
        <Route path="/projects/new" component={ProjectsNew} />
        <Route path="/projects/:id" component={ProjectsShowContainer} />
      </Switch>
      <SiteFooter />
    </div>
  )
}

export default Projects

