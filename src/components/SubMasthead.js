import React from 'react'
import {Breadcrumbs} from './'
import '../style/subMasthead.css'

const SubMasthead = (props) => {

  return (
    <div className="sub-masthead layout-top">
      <span>
        You are here: <Breadcrumbs />
      </span>
      <span className="inverse">
        <a href="https://bossk.aws.hubzero.org/support">
          ?
        </a>
      </span>
    </div>
  )
}

export default SubMasthead

