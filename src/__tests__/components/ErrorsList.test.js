import React from 'react'
import {shallow} from 'enzyme'
import {ErrorsList} from '../../components'

describe('ErrorsList', () => {

  it('renders without crashing', () => {
    shallow(<ErrorsList errors={[]}/>)
  })

  it('has the class "errors"', () => {
    const wrapper = shallow(<ErrorsList errors={[]} />)

    const hasClass = wrapper.hasClass('errors-list')

    expect(hasClass).toBe(true)
  })

})

