import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../style/projectNotFound.css'

const ProjectNotFound = (props) => {
  const {id} = props

  return (
    <div className="project-not-found layout-top">
      <span className="col span5">
        <h3>Missing Project</h3>
        <p>
          We couldn't find a project with an ID of {id}. It may have been deleted, archived, or has yet to be created.
        </p>
      </span>
      <span className="col span5">
        <h3>Projects Dashboard</h3>
        <p>
          Visit the <Link to="/projects">Projects Dashboard</Link> for info on starting and joining projects.
        </p>
      </span>
    </div>
  )
}

ProjectNotFound.propTypes = {
  id: PropTypes.number.isRequired
}

export default ProjectNotFound

