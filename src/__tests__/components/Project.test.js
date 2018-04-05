import React from 'react'
import {shallow} from 'enzyme'
import {Project} from '../../components'

describe('Project', () => {

  it('renders without crashing', () => {
    shallow(<Project />)
  })

})
