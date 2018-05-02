import React from 'react'
import {Link} from 'react-router-dom'
import '../style/newProjectTracker.css'

const NewProjectTracker = (props) => {

  const steps = [
    {
      content: 'Name & alias',
      url: '/projects/new'
    },
    {
      content: 'Describe your project',
      url: '/projects/new/describe',
    },
    {
      content: 'Add team member(s)',
      url: '/projects/new/team',
    },
  ]

  const buildStepElements = (steps) => {
    const stepElements = steps.map((step, i) => {
      let element
      const isLast = steps.length === (i + 1)

      if (!isLast) {
        element = buildElement(step.content, i)
      } else {
        element = buildLast(step.content, i)
      }

      return element
    })

    return stepElements
  }

  const buildElement = (content, key) => {
    return (
      <li key={key}>
        <Link to="#">
          {content}
        </Link>
        <span className="pointer"> > </span>
      </li>
    )
  }

  const buildLast = (content, key) => {
    return (
      <li key={key}>
        <Link to="#">
          {content}
        </Link>
      </li>
    )
  }

  return (
    <div className="new-project-tracker layout-top">
      <ol>
        {buildStepElements(steps)}
      </ol>
    </div>
  )
}

export default NewProjectTracker

