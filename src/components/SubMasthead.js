import React from 'react'
import {Breadcrumbs} from './'
import '../style/subMasthead.css'
import {RouteConfig as Routes} from '../config'

const SubMasthead = (props) => {

  return (
    <div className="sub-masthead layout-top">
      <span>
        You are here: <Breadcrumbs />
      </span>
      <span className="inverse">
        <a href={`${Routes.bosskBaseUrl}/support`}>
          ?
        </a>
      </span>
    </div>
  )
}

export default SubMasthead

