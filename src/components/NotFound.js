import React from 'react'
import {Link} from 'react-router-dom'
import '../style/notFound.css'
import FourOFour from '../assets/images/404.gif'

const NotFound = (props) => {

  return (
    <section className="not-found">
      <div className="row">
        <img src={FourOFour} alt="404" />
      </div>
      <div className="row">
        <Link to="/projects" className="btn btn-success">
          Back to the hub
        </Link>
      </div>
    </section>
  )
}

export default NotFound

