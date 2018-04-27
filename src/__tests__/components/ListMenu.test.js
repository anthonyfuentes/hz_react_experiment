import React from 'react'
import {shallow} from 'enzyme'
import {ListGroupItem} from 'reactstrap'
import {ListMenu} from '../../components'

describe('ListMenu', () => {

  it('renders without crashing', () => {
    shallow(<ListMenu menuItems={[]} />)
  })

  it('has the class "list-menu"', () => {
    const wrapper = shallow(<ListMenu menuItems={[]} />)

    const hasClass = wrapper.hasClass('list-menu')

    expect(hasClass).toBe(true)
  })

  it('renders the correct number of menu items', () => {
    const menuItems = [{},{},{},{}]
    const wrapper = shallow(<ListMenu menuItems={menuItems} />)

    const itemCount = wrapper.find(ListGroupItem).length

    expect(itemCount).toEqual(menuItems.length)
  })

})
