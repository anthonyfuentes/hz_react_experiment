import React from 'react'
import PropTypes from 'prop-types'
import '../style/masthead.css'

const Masthead = (props) => {
  const {heading} = props

  return (
    <header className="masthead layout-top">
      <h1>
        {heading}
      </h1>
      <span>(Site header)</span>
    </header>
  )
}

Masthead.propTypes = {
  heading: PropTypes.string
}

export default Masthead

