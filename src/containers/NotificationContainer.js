import {connect} from 'react-redux'
import Notification from '../components/Notification'
import {NotificationsActions} from '../actions'

const {removeNotifications} = NotificationsActions

const NotificationContainer = connect(
  null,
  {removeNotifications}
)(Notification)

export default NotificationContainer

