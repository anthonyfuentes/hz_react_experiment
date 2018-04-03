import React from 'react'
import {shallow} from 'enzyme'
import App from '../../components/App'

describe('App', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
  })

  it('has the class "app"', () => {
    const wrapper = shallow(<App />)

    const hasClass = wrapper.hasClass('app')

    expect(hasClass).toBe(true)
  })

})
