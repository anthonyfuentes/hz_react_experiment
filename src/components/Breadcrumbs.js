import React from 'react'
import {Link} from 'react-router-dom'
import {RouteConfig} from '../config'
import '../style/breadcrumbs.css'

const Breadcrumbs = (props) => {

  const buildLinks = () => {
    const urlSegments = getUrlSegments()
    urlSegments.shift()

    const links = urlSegments.map((segment, i) => {
      const pathChain = urlSegments.slice(0, i + 1)
      const link = buildLink(pathChain, i)

      return link
    })

    return links
  }

  const buildLink = (path, key) => {
    let linkText = buildLinkText(path)
    const relativeUrl = `/${path.join('/')}`

    return(
      <span key={key}> / <Link to={relativeUrl}>
          {linkText}
        </Link>
      </span>
    )
  }

  const buildLinkText = (path) => {
    let linkText = path[path.length - 1]
    linkText = linkText.charAt(0).toUpperCase() + linkText.slice(1)

    return linkText
  }

  const getUrlSegments = () => {
    const relativeUrl = getRelativeUrl()

    const urlSegments = relativeUrl.split('/')

    return urlSegments
  }

  const getRelativeUrl = () => {
    const baseUrl = RouteConfig.baseUrl
    const currentUrl = window.location.href

    const relativeUrl = currentUrl.replace(baseUrl, '')

    return relativeUrl
  }

  return (
    <span className="breadcrumbs">
      <Link to="/projects">Projects</Link>
      {buildLinks()}
    </span>
  )
}



export default Breadcrumbs

