import React from 'react'
import {Link} from 'react-router-dom'
import '../style/project.css'

const Project = (props) => {
  const {id,title} = props

  return (
    <Link to={`/projects/${id}/info`} className="project">
      <div>{title}</div>
    </Link>
  )
}

export default Project

