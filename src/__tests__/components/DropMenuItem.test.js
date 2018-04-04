import React from 'react'
import {shallow,mount} from 'enzyme'
import {DropMenuItem} from '../../components'

describe('DropMenuItem', () => {

  it('renders without crashing', () => {
    shallow(<DropMenuItem />)
  })

  it('has class "drop-menu-item"', () => {
    const wrapper = shallow(<DropMenuItem />)

    const hasClass = wrapper.hasClass('drop-menu-item')

    expect(hasClass).toBe(true)
  })

  it('renders a divider if "divider" prop is true', () => {
    const wrapper = mount(<DropMenuItem divider={true} />)

    const isDivider = !!wrapper.find('.dropdown-divider').length

    expect(isDivider).toBe(true)
  })

})
