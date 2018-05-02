import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Breadcrumb = (props) => {
  const {
    isLast,
    text,
    url
  } = props

  const buildLink = () => {
    return(
      <span>
        <Link to={url}>
          {text}
        </Link> / </span>
    )
  }

  const buildLast = () => {
    return(
      <span>
        {text}
      </span>
    )
  }

  return(
    <span className="crumb">
      {!isLast && buildLink()}
      {isLast && buildLast()}
    </span>
  )

}

Breadcrumb.propTypes = {
  isLast: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string
}

Breadcrumb.defaultProps = {
  url: ''
}

export default Breadcrumb
