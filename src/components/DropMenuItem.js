import React from 'react'
import PropTypes from 'prop-types'
import {DropdownItem} from 'reactstrap'

const DropMenuItem = (props) => {
  const CLASS_NAME = 'drop-menu-item'
  const {text,link,divider} = props

  const buildItem = () => {
    let item

    if (divider) {
      item = buildDivider()
    } else {
      item = buildLinkItem()
    }

    return item
  }

  const buildDivider = () => {
    return <DropdownItem divider className={CLASS_NAME} />
  }

  const buildLinkItem = () => {
    return (
      <DropdownItem className={CLASS_NAME}>
        <a href={link}>{text}</a>
      </DropdownItem>
    )
  }

  return (
    buildItem()
  )
}

DropMenuItem.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  divider: PropTypes.bool
}

DropMenuItem.defaultProps = {
  text: '',
  link: '#',
  divider: false
}

export default DropMenuItem

