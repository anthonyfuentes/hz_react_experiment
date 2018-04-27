import React from 'react'
import PropTypes from 'prop-types'
import {ListGroup,ListGroupItem} from 'reactstrap'

const ListMenu = (props) => {
  const {
    active,
    menuItems
  } = props

  const generateListItems = (items) => {
    const listItems = items.map(generateListItem)

    return listItems
  }

  const generateListItem = (item, key) => {
    const isActive = (active === item.name)

    return (
      <ListGroupItem active={isActive} key={key}>
        {item.content}
      </ListGroupItem>
    )
  }

  return (
    <div className="list-menu">
    <ListGroup>
      {generateListItems(menuItems)}
    </ListGroup>
    </div>
  )
}

ListMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
}

export default ListMenu

