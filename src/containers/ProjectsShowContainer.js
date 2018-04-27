import {connect} from 'react-redux'
import ProjectsShow from '../components/ProjectsShow'
import {ProjectsActions} from '../actions'

const {fetchProject} = ProjectsActions

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params
  const project = state.projects[id]

  const props = {
    project
  }

  return props
}

const ProjectsShowContainer = connect(
  mapStateToProps,
  {fetchProject}
)(ProjectsShow)

export default ProjectsShowContainer

