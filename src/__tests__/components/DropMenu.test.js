import React from 'react'
import {shallow} from 'enzyme'
import {Dropdown,DropdownMenu,DropdownToggle} from 'reactstrap'
import {DropMenu} from '../../components'

describe('DropMenu', () => {

  it('renders without crashing', () => {
    shallow(<DropMenu title="" />)
  })

  it('has the class "drop-menu"', () => {
    const wrapper = shallow(<DropMenu title="" />)

    const hasClass = wrapper.hasClass('drop-menu')

    expect(hasClass).toBe(true)
  })

  it('renders one dropdown wrapper', () => {
    const wrapper = shallow(<DropMenu title="" />)

    const renderedWrapperCount = wrapper.find(Dropdown).length

    expect(renderedWrapperCount).toBe(1)
  })

  it('renders one dropdown toggle', () => {
    const wrapper = shallow(<DropMenu title="" />)

    const renderedToggleCount = wrapper.find(DropdownToggle).length

    expect(renderedToggleCount).toBe(1)
  })

  it('renders one dropdown toggle', () => {
    const wrapper = shallow(<DropMenu title="" />)

    const renderedMenuCount = wrapper.find(DropdownMenu).length

    expect(renderedMenuCount).toBe(1)
  })

})
