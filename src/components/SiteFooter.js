import React from 'react'
import '../style/siteFooter.css'

const SiteFooter = (props) => {

  return (
    <footer className="site-footer">
      <div className="footer-links layout-top">
        (footer links)
      </div>
      <div className="footer-copy layout-top">
        <span>Copyright © 2012 Hubzilla</span>
        <span>
          Powered by <a href="https://help.hubzero.org">HUBzero®</a>, a Purdue project
        </span>
      </div>
    </footer>
  )
}

export default SiteFooter

