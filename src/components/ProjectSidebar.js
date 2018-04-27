import React from 'react'
import PropTypes from 'prop-types'
import '../style/projectSidebar.css'
import ProjectDefault from '../assets/images/project.svg'
import {ProjectSidebarConfig as Config} from '../config'
import {ListMenu} from './'

const ProjectSidebar = (props) => {
  const {active} = props

  return (
    <div className="project-sidebar">
      <div>
        <img src={ProjectDefault} alt="project's default" />
      </div>
      <ListMenu active={active} menuItems={Config.menuItems} />
    </div>
  )
}

ProjectSidebar.propTypes = {
  active: PropTypes.string
}

ProjectSidebar.defaultProps = {
  active: null
}

export default ProjectSidebar

