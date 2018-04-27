import React from 'react'
import PropTypes from 'prop-types'
import '../style/projectDashboard.css'
import {Redirect,Route,Switch} from 'react-router-dom'
import {
  ProjectInfo,
  ProjectSidebar
} from './'

const ProjectDashboard = (props) => {
  const {
    location:{pathname},
    project
  } = props

  const getProjectArea = (url) => {
    const areaRegex = /\/projects\/.+\/(.+)/

    let area = areaRegex.exec(url)
    area = area ? area[1] : ''

    return area
  }

  const activeArea = getProjectArea(pathname)

  return (
    <section className="project-dashboard">
      <ProjectSidebar active={activeArea} />
      <div className="project-area">
        <Switch>
          <Redirect exact from="/projects/:id" to={`/projects/${project.id}/info`} />
          <Route path="/projects/:id/info"
            render={(props) => <ProjectInfo {...props} {...project} />} />
        </Switch>
      </div>
    </section>
  )
}

ProjectDashboard.propTypes = {
  project: PropTypes.object.isRequired
}

ProjectDashboard.defaultProps = {
  location: {pathname:''}
}

export default ProjectDashboard

