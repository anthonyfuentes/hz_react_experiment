import React from 'react'
import {Link} from 'react-router-dom'
import {RouteHelper as Router} from '../helpers'
import '../style/breadcrumbs.css'

const Breadcrumbs = (props) => {

  const buildBreadcrumbs = () => {
    const urlSegments = Router.getUrlSegments()

    const links = urlSegments.map((segment, i) => {
      const pathSegments = urlSegments.slice(0, i + 1)
      const isLast = urlSegments.length === (i + 1)
      const link = buildBreadcrumb(pathSegments, i, isLast)

      return link
    })

    return links
  }

  const buildBreadcrumb = (pathSegments, key, isLast) => {
    let breadcrumb
    let linkText = buildLinkText(pathSegments)
    const relativeUrl = `/${pathSegments.join('/')}`

    if (!isLast) {
      breadcrumb = buildLink(linkText, relativeUrl, key)
    } else {
      breadcrumb = buildLast(linkText, key)
    }

    return breadcrumb
  }

  const buildLink = (linkText, relativeUrl, key) => {
    return(
      <span key={key}>
        <Link to={relativeUrl}>
          {linkText}
        </Link> / </span>
    )
  }

  const buildLast = (linkText, key) => {
    return(
      <span key={key}>
        {linkText}
      </span>
    )
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

