import React from 'react'
import PropTypes from 'prop-types'
import {Masthead,SubMasthead} from './'

const SiteHeader = (props) => {

  const {heading} = props

  return (
    <div className="site-header">
      <Masthead heading={heading} />
      <SubMasthead />
    </div>
  )

}

SiteHeader.propTypes = {
  heading: PropTypes.string
}

SiteHeader.defaultProps = {
  heading: 'bossk'
}

export default SiteHeader

