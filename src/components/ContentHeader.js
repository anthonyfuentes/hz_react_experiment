import React from 'react'
import PropTypes from 'prop-types'
import '../style/contentHeader.css'

const ContentHeader = (props) => {
  const {heading} = props

  return (
    <header className="content-header layout-top">
      <span className="heading">{heading}</span>
      <span className="">Browse public projects</span>
    </header>
  )
}

ContentHeader.propTypes = {
  heading: PropTypes.string.isRequired
}

export default ContentHeader

