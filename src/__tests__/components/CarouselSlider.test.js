import React from 'react'
import {shallow} from 'enzyme'
import {CarouselSlider} from '../../components'

describe('CarouselSlider', () => {

  it('renders without crashing', () => {
    shallow(<CarouselSlider />)
  })

  it('has the class "carousel-slider"', () => {
    const wrapper = shallow(<CarouselSlider />)

    const hasClass = wrapper.hasClass('carousel-slider')

    expect(hasClass).toBe(true)
  })

  it('renders the correct number of project components', () => {
    const elements = [{},{}]
    const wrapper = shallow(<CarouselSlider elements={elements} />)

    const renderedElementCount = wrapper.find('.element').length

    expect(renderedElementCount).toBe(elements.length)
  })

})
