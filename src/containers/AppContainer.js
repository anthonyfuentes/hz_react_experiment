import {connect} from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  const props = {
    errors: state.errors
  }

  return props
}

const AppContainer = connect(
  mapStateToProps,
  {}
)(App)

export default AppContainer

