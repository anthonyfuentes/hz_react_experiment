import React from 'react'
import '../style/projectsInfo.css'

const ProjectsInfo = (props) => {

  return (
    <section className="projects-info layout-top">
      <span className="col span5">
        <h3>Collaboration made easy</h3>
        <p>Whether working on a new funding proposal, research paper or developing an application, projects are a great way to manage your data, workflow and communication.</p>
        <button>Start a project</button>
      </span>
      <span className="col span4">
        <h3>With each project you get:</h3>
        <ul>
          <li>Wiki area</li>
          <li>To-do list management</li>
          <li>Microblogging</li>
          <li>Options to publish data</li>
          <li>Publication management</li>
        </ul>
        <button>Learn more >></button>
      </span>
    </section>
  )
}



export default ProjectsInfo

