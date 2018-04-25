import React from 'react'
import PropTypes from 'prop-types'
import '../style/contentHeader.css'
import {HubConfig as Hub } from '../config'

const ContentHeader = (props) => {
  const {heading} = props

  return (
    <header className="content-header layout-top">
      <span className="heading">
        {heading}
      </span>
      <span id="browse-link">
        <a href={`${Hub.routes.baseUrl}/projects/browse`}>
          Browse public projects
        </a>
      </span>
    </header>
  )
}

ContentHeader.propTypes = {
  heading: PropTypes.string.isRequired
}

export default ContentHeader

