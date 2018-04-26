import React from 'react'
import PropTypes from 'prop-types'
import '../style/carouselSlider.css'

const CarouselSlider = (props) => {
  const {elements} = props

  return(
    <span className="carousel-slider">
      {elements.map((element,i) =>
        <span className="element" key={i}>{element}</span>
      )}
    </span>
  )
}

CarouselSlider.propTypes = {
  elements: PropTypes.array
}

CarouselSlider.defaultProps = {
  elements: []
}

export default CarouselSlider
