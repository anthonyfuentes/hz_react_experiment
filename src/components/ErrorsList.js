import React from 'react'
import PropTypes from 'prop-types'
import {NotificationContainer as Notification} from '../containers'

const ErrorsList = (props) => {
  const {errors} = props

  return (
    <div className="errors-list">
      <Notification type="error" notifications={errors} />
    </div>
  )
}

ErrorsList.propTypes = {
  errors: PropTypes.array.isRequired
}

export default ErrorsList

