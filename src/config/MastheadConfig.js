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
        {content: 'Courses', url:`${BOSSK_BASE_URL}/courses`},
        {content: 'Collections', url:`${BOSSK_BASE_URL}/collection`},
        {content: 'Blog', url:`${BOSSK_BASE_URL}/blog`},
        {content: 'Resources', url:`${BOSSK_BASE_URL}/resources`},
        {divider: true, content: '', url:''},
        {content: 'Tags', url:`${BOSSK_BASE_URL}/tags`},
        {content: 'Wiki', url:`${BOSSK_BASE_URL}/wiki`},
        {content: 'Citations', url:`${BOSSK_BASE_URL}/citations`},
        {content: 'Events', url:`${BOSSK_BASE_URL}/events`},
      ]
    },
    {
      title: 'COMMUNITY',
      items: [
        {content: 'Forum', url:`${BOSSK_BASE_URL}/forum`},
        {content: 'Members', url:`${BOSSK_BASE_URL}/members`},
        {content: 'Groups', url:`${BOSSK_BASE_URL}/groups`},
        {content: 'Projects', url:`${BOSSK_BASE_URL}/projects`},
        {content: 'Questions & Answers', url:`${BOSSK_BASE_URL}/answers`}
      ]
    },
    {
      title: 'ABOUT',
      items: [
        {content: 'Newsletter', url:`${BOSSK_BASE_URL}/newsletter`},
        {divider: true, content: '', url:''},
        {content: 'Contact Us', url:`${BOSSK_BASE_URL}/contact`},
        {content: 'Terms of Use', url:`${BOSSK_BASE_URL}/terms`},
        {content: 'Copyright Infringement', url:`${BOSSK_BASE_URL}/copyright`},
        {content: 'Our Cyberinfrastructure', url:`${BOSSK_BASE_URL}/about/hubzero`}
      ]
    },
    {
      title: 'SUPPORT',
      items: [
        {content: 'Knowledge Base', url:`${BOSSK_BASE_URL}/kb`},
        {content: 'Report a Problem', url:`${BOSSK_BASE_URL}/feedback/report_problems`},
        {content: 'Tickets', url:`${BOSSK_BASE_URL}/support/tickets`},
        {content: 'Wish List', url:`${BOSSK_BASE_URL}/wishlist`}
      ]
    }
  ]
}

export default MastheadConfig
