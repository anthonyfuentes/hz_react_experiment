import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'
import {DropMenuItem} from './'

class DropMenu extends Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    const {
      title,
      items,
      toggleStyles
    } = this.props

    return (
      <Dropdown className="drop-menu" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={toggleStyles}>
          {title}
        </DropdownToggle>
        <DropdownMenu>
          {items.map((item,i) => <DropMenuItem {...item} key={i} />)}
        </DropdownMenu>
      </Dropdown>
    )
  }

}

DropMenu.propTypes = {
  items: PropTypes.array.isRequired
}

DropMenu.defaultProps = {
  items: []
}

export default DropMenu

