import React from 'react'
import {shallow} from 'enzyme'
import {ContentHeader} from '../../components'

describe('ContentHeader', () => {

  it('renders without crashing', () => {
    shallow(<ContentHeader heading="" />)
  })

  it('has the class "content-header"', () => {
    const wrapper = shallow(<ContentHeader heading="" />)

    const hasClass = wrapper.hasClass('content-header')

    expect(hasClass).toBe(true)
  })

})
