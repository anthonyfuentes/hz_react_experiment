import React from 'react'
import {shallow} from 'enzyme'
import {Link} from 'react-router-dom'
import {Breadcrumb} from '../../components'

describe('Breadcrumb', () => {

  it('renders without crashing', () => {
      shallow(<Breadcrumb isLast={false} text={''} url={''} />)
  })

  it('has the class "crumb"', () => {
    const wrapper = shallow(<Breadcrumb isLast={false} text={''} url={''} />)

    const hasClass = wrapper.hasClass('crumb')

    expect(hasClass).toBe(true)
  })

  it('renders a link if isLast is false', () => {
    const wrapper = shallow(<Breadcrumb isLast={false} text={''} url={''} />)

    const rendersLink = !!wrapper.find(Link).length

    expect(rendersLink).toBe(true)
  })

  it('does not render a link if isLast is true', () => {
    const wrapper = shallow(<Breadcrumb isLast={true} text={''} />)

    const rendersLink = !!wrapper.find(Link).length

    expect(rendersLink).toBe(false)
  })

})
