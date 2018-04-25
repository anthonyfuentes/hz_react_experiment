import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Alert} from 'reactstrap'
import '../style/notification.css'

class Notification extends Component {

  static typeColorMappings = {
    error: 'danger'
  }

  constructor(props) {
    super(props)
    const {type} = props
    const color = this.typeToColor(type)

    this.state = {
      color,
      type,
      visible: true
    }
  }

  typeToColor(type) {
    const color = Notification.typeColorMappings[type] || 'primary'

    return color
  }

  onDismiss() {
    this.setState({visible: false})
    this.props.removeNotifications(this.state.type, this.props.notifications)
  }

  render() {
    const {notifications} = this.props
    const {color} = this.state

    return (
      <span className="notification">
        <Alert color={color} isOpen={this.state.visible} toggle={this.onDismiss.bind(this)}>
          <ul>
            {notifications.map((message, i) => <li key={i}>{message}</li>)}
          </ul>
        </Alert>
      </span>
    )
  }

}

Notification.propTypes = {
  notifications: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default Notification
