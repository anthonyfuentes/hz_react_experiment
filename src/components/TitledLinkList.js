import React from 'react'
import PropTypes from 'prop-types'
import '../style/titledLinkList.css'

const TitledLinkList = (props) => {

  const {links,title} = props

  return (
    <span className="titled-link-list">
      <h3>{title}</h3>
      <ul>
        {Object.keys(links).map((text, i) =>
          <li key={i}><a href={links[text]}>{text}</a></li>
        )}
      </ul>
    </span>
  )
}

TitledLinkList.propTypes = {
  title: PropTypes.string,
  links: PropTypes.object
}

TitledLinkList.defaultProps = {
  title: '',
  links: {}
}

export default TitledLinkList

