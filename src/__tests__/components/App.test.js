import React from 'react'
import {shallow} from 'enzyme'
import {App} from '../../components'
import {ErrorsList} from '../../components'

describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('has the class "app"', () => {
    const wrapper = shallow(<App />)

    const hasClass = wrapper.hasClass('app')

    expect(hasClass).toBe(true)
  })

  it('renders the errors component if there are errors', () => {
    const errors = [{}]
    const wrapper = shallow(<App errors={errors} />)

    const renderedErrorsCount = wrapper.find(ErrorsList).length

    expect(renderedErrorsCount).toBe(1)
  })

  it('doesn\'t renders the errors component if there are no errors', () => {
    const wrapper = shallow(<App />)

    const renderedErrorsCount = wrapper.find(ErrorsList).length

    expect(renderedErrorsCount).toBe(0)
  })

})
