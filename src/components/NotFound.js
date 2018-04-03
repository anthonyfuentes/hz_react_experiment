import React from 'react'
import '../style/notFound.css'
import FourOFour from '../assets/images/404.gif'

const NotFound = (props) => {

  return (
    <section className="not-found">
      <img src={FourOFour} alt="404" />
    </section>
  )
}



export default NotFound

