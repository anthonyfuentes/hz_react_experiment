import React from 'react'
import {RouteHelper as Router} from '../helpers'
import '../style/breadcrumbs.css'
import {Breadcrumb} from './'

const Breadcrumbs = (props) => {

  const buildBreadcrumbs = () => {
    const urlSegments = Router.getUrlSegments()

    const breadcrumbs = urlSegments.map((segment, i) => {
      const pathSegments = urlSegments.slice(0, i + 1)
      const isLast = urlSegments.length === (i + 1)
      const breadcrumb = buildBreadcrumb(pathSegments, i, isLast)

      return breadcrumb
    })

    return breadcrumbs
  }

  const buildBreadcrumb = (pathSegments, key, isLast) => {
    let text = buildLinkText(pathSegments)
    const url = `/${pathSegments.join('/')}`

    return <Breadcrumb key={key} text={text} url={url} isLast={isLast} />
  }

  const buildLinkText = (path) => {
    let linkText = path[path.length - 1]
    linkText = linkText.charAt(0).toUpperCase() + linkText.slice(1)

    return linkText
  }

  return (
    <span className="breadcrumbs">
      {buildBreadcrumbs()}
    </span>
  )
}

export default Breadcrumbs

