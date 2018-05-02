import {RouteHelper} from '../../helpers'
import {RouteConfig as Routes} from '../../config'

describe('RouteHelper', () => {

  describe('.getRelativeUrl', () => {
    it('returns the URL following the sites base url', () => {
      let relativeUrl
      const expectedUrl = 'test/url'
      const url = `${Routes.baseUrl}${expectedUrl}`

      Object.defineProperty(window.location, 'href', {
        writable: true,
        value: url
      })

      relativeUrl = RouteHelper.getRelativeUrl()

      expect(relativeUrl).toEqual(expectedUrl)
    })
  })

  describe('.getUrlSegments', () => {
    it('returns an array in which each segment of the url is an element', () => {
      let urlSegments
      const expectedSegments = ['test', 'url']
      const url = `${Routes.baseUrl}${expectedSegments.join('/')}`

      Object.defineProperty(window.location, 'href', {
        writable: true,
        value: url
      })

      urlSegments = RouteHelper.getUrlSegments()

      expect(urlSegments).toEqual(expectedSegments)
    })
  })

})
