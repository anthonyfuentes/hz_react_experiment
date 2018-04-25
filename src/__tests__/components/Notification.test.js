import React from 'react'
import {shallow} from 'enzyme'
import {Notification} from '../../components'

describe('Notification', () => {

  it('renders without crashing', () => {
    shallow(<Notification notifications={[]} />)
  })

  it('has the class "notification"', () => {
    const wrapper = shallow(<Notification notifications={[]} />)

    const hasClass = wrapper.hasClass("notification")

    expect(hasClass).toBe(true)
  })

})
