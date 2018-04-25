import React from 'react'
import {Link} from 'react-router-dom'
import '../style/project.css'

const Project = (props) => {
  const {title} = props

  return (
    <span className="project">
      <Link to="#">
        <div>{title}</div>
      </Link>
    </span>
  )
}



export default Project

