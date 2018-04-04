import React from 'react'
import {shallow} from 'enzyme'
import {MastheadConfig as Config} from '../../config'
import {DropMenu,Masthead} from '../../components'

describe('Masthead', () => {

  it('renders without crashing', () => {
    shallow(<Masthead />)
  })

  it('has the class "masthead"', () => {
    const wrapper = shallow(<Masthead />)

    const hasClass = wrapper.hasClass('masthead')

    expect(hasClass).toBe(true)
  })

  it('renders the correct dropdown menus', () => {
    const toggleStyles = Config.dropMenuToggleStyles
    const dropMenus = Config.menus.map((menu) =>
      <DropMenu {...menu} toggleStyles={toggleStyles} />)
    const wrapper = shallow(<Masthead />)

    const containsDropMenus = wrapper.contains(dropMenus)

    expect(containsDropMenus).toBe(true)
  })

})
