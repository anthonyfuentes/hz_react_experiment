import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import {
  ContentHeader,
  ProjectDashboard,
  ProjectNotFound
} from './'

class ProjectsShow extends Component {

  constructor(props) {
    super(props)
    const {project} = props

    this.state = {
      id: parseInt(this.props.match.params.id, 10),
      project: project
    }
  }

  componentDidMount() {
    let {id,project} = this.state

    if (!project.id)
    {
      this.props.fetchProject(id)
    }
  }

  render() {
    const {project} = this.state

    return(
      <div className="projects-show">
        <ContentHeader heading={project.title} />
        <section>
          {!project.id && <ProjectNotFound id={this.state.id} />}
          {!!project.id && <Route path="/projects/:id"
                            render={(props) => <ProjectDashboard {...props}
                                                project={project} />} />
          }
        </section>
      </div>
    )
  }
}

ProjectsShow.propTypes = {
  fetchProject: PropTypes.func.isRequired,
  project: PropTypes.object
}

ProjectsShow.defaultProps = {
  match: {params:{id:0}},
  project: {title: 'Projects',id:'ID (delete)',alias:'Alias (delete)',access:'Access (delete)',created:'Created (delete)',owner:'Owner (delete)'}
}

export default ProjectsShow
