import {RouteConfig as Routes} from '../config'

class RouterHelper {

  static getRelativeUrl() {
    const baseUrl = Routes.baseUrl
    const currentUrl = window.location.href

    const relativeUrl = currentUrl.replace(baseUrl, '')

    return relativeUrl
  }

  static getUrlSegments() {
    const relativeUrl = this.getRelativeUrl()

    const urlSegments = relativeUrl.split('/')

    return urlSegments
  }

}

export default RouterHelper
