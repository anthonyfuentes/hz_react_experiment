import React from 'react'
import PropTypes from 'prop-types'
import {DropdownItem} from 'reactstrap'

const DropMenuItem = (props) => {
  const CLASS_NAME = 'drop-menu-item'
  const {content,url,divider} = props

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
    return <DropdownItem divider
              className={`${CLASS_NAME} divider`} />
  }

  const buildLinkItem = () => {
    return (
      <DropdownItem className={CLASS_NAME}>
        <a href={url}>{content}</a>
      </DropdownItem>
    )
  }

  return (
    buildItem()
  )
}

DropMenuItem.propTypes = {
  content: PropTypes.any.isRequired,
  divider: PropTypes.bool,
  url: PropTypes.string.isRequired
}

DropMenuItem.defaultProps = {
  divider: false
}

export default DropMenuItem

