import React from 'react'
import {shallow} from 'enzyme'
import {DropMenuItem} from '../../components'

describe('DropMenuItem', () => {

  it('renders without crashing', () => {
    shallow(<DropMenuItem content="" url="" />)
  })

  it('has class "drop-menu-item"', () => {
    const wrapper = shallow(<DropMenuItem content="" url="" />)

    const hasClass = wrapper.hasClass('drop-menu-item')

    expect(hasClass).toBe(true)
  })

  it('renders a divider if "divider" prop is true', () => {
    const wrapper = shallow(<DropMenuItem divider={true} content="" url="" />)

    const isDivider = wrapper.hasClass('divider')

    expect(isDivider).toBe(true)
  })

  it('renders a menu item if "divider" prop is false', () => {
    const wrapper = shallow(<DropMenuItem content="" url="" />)

    const isDivider = wrapper.hasClass('divider')

    expect(isDivider).toBe(false)
  })

})
