import React from 'react'
import {shallow} from 'enzyme'
import {DropMenu} from '../../components'

describe('DropMenu', () => {

  it('renders without crashing', () => {
    shallow(<DropMenu />)
  })

  it('has the class "drop-menu"', () => {
    const wrapper = shallow(<DropMenu />)

    const hasClass = wrapper.hasClass('drop-menu')

    expect(hasClass).toBe(true)
  })

})
