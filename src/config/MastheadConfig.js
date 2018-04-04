import RouteConfig from './RouteConfig.js'

const BOSSK_BASE_URL = RouteConfig.bosskBaseUrl

const MastheadConfig = {
  dropMenuToggleStyles: {
    backgroundColor :"#fff",
    border: "none",
    color: "#686868",
    fontWeight: "bold"
  },
  menus: [
    {
      title: 'DISCOVER',
      items: [
        {text: 'Courses', link:`${BOSSK_BASE_URL}/courses`},
        {text: 'Collections', link:`${BOSSK_BASE_URL}/collection`},
        {text: 'Blog', link:`${BOSSK_BASE_URL}/blog`},
        {text: 'Resources', link:`${BOSSK_BASE_URL}/resources`},
        {divider: true},
        {text: 'Tags', link:`${BOSSK_BASE_URL}/tags`},
        {text: 'Wiki', link:`${BOSSK_BASE_URL}/wiki`},
        {text: 'Citations', link:`${BOSSK_BASE_URL}/citations`},
        {text: 'Events', link:`${BOSSK_BASE_URL}/events`},
      ]
    },
    {
      title: 'COMMUNITY',
      items: [
        {text: 'Forum', link:`${BOSSK_BASE_URL}/forum`},
        {text: 'Members', link:`${BOSSK_BASE_URL}/members`},
        {text: 'Groups', link:`${BOSSK_BASE_URL}/groups`},
        {text: 'Projects', link:`${BOSSK_BASE_URL}/projects`},
        {text: 'Questions & Answers', link:`${BOSSK_BASE_URL}/answers`}
      ]
    },
    {
      title: 'ABOUT',
      items: [
        {text: 'Newsletter', link:`${BOSSK_BASE_URL}/newsletter`},
        {divider: true},
        {text: 'Contact Us', link:`${BOSSK_BASE_URL}/contact`},
        {text: 'Terms of Use', link:`${BOSSK_BASE_URL}/terms`},
        {text: 'Copyright Infringement', link:`${BOSSK_BASE_URL}/copyright`},
        {text: 'Our Cyberinfrastructure', link:`${BOSSK_BASE_URL}/about/hubzero`}
      ]
    },
    {
      title: 'SUPPORT',
      items: [
        {text: 'Knowledge Base', link:`${BOSSK_BASE_URL}/kb`},
        {text: 'Report a Problem', link:`${BOSSK_BASE_URL}/feedback/report_problems`},
        {text: 'Tickets', link:`${BOSSK_BASE_URL}/support/tickets`},
        {text: 'Wish List', link:`${BOSSK_BASE_URL}/wishlist`}
      ]
    }
  ]
}

export default MastheadConfig
