import {connect} from 'react-redux'
import ProjectsHome from '../components/ProjectsHome'
import {ProjectsActions} from '../actions'

const {fetchProjects} = ProjectsActions

const mapStateToProps = (state) => {
  const props = {
    projects: state.projects
  }

  return props
}

const ProjectsHomeContainer = connect(
  mapStateToProps,
  {fetchProjects}
)(ProjectsHome)

export default ProjectsHomeContainer

