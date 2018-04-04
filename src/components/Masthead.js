import React from 'react'
import PropTypes from 'prop-types'
import {DropMenu} from './'
import '../style/masthead.css'
import UserSilhouette from '../assets/images/user_silhouette.svg'
import {
  MastheadConfig as Config,
  RouteConfig as Routes
} from '../config'

const Masthead = (props) => {
  const {heading} = props
  const toggleStyles = Config.dropMenuToggleStyles

  return (
    <header className="masthead layout-top">
      <span className="col">
        <h1>
          <em>{heading}</em>
        </h1>
        {Config.menus.map((menu,i) =>
          <DropMenu {...menu} toggleStyles={toggleStyles} key={i} />
        )}
      </span>
      <span>
        <a className="search" href={`${Routes.bosskBaseUrl}/search`}>
          <span role="img" aria-label="magnifying glass">&#x1F50D;</span>
        </a>
        <a href={`${Routes.bosskBaseUrl}/members`}>
          <img alt="user silhouette" className="user-thumb" src={UserSilhouette} />
        </a>
      </span>
    </header>
  )
}

Masthead.propTypes = {
  heading: PropTypes.string
}

export default Masthead

