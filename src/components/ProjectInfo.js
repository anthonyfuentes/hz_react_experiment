import React from 'react'
import {Link} from 'react-router-dom'
import '../style/projectInfo.css'

const ProjectInfo = (props) => {
  const {
    title,
    alias,
    access,
    created,
    owner
  } = props

  return(
    <div className="project-info">
      <h3>Project Information</h3>
      <p>
        <Link to="#" id="edit-link">Edit Project</Link>
      </p>
      <table>
        <tbody>
          <tr>
            <td>Title</td><td>{title}</td>
          </tr>
          <tr>
            <td>Alias</td><td>{alias}</td>
          </tr>
          <tr>
            <td>Access</td><td>{access}</td>
          </tr>
          <tr>
            <td>Created</td><td>{created}</td>
          </tr>
          <tr>
            <td>Owner</td><td>{owner}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ProjectInfo.defaultProps = {
  match: {params:{}}
}

export default ProjectInfo
