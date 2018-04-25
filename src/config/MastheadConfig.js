import {default as Hub} from './HubConfig.js'

const HUB_BASE_URL = Hub.routes.baseUrl

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
        {content: 'Courses', url:`${HUB_BASE_URL}/courses`},
        {content: 'Collections', url:`${HUB_BASE_URL}/collection`},
        {content: 'Blog', url:`${HUB_BASE_URL}/blog`},
        {content: 'Resources', url:`${HUB_BASE_URL}/resources`},
        {divider: true, content: '', url:''},
        {content: 'Tags', url:`${HUB_BASE_URL}/tags`},
        {content: 'Wiki', url:`${HUB_BASE_URL}/wiki`},
        {content: 'Citations', url:`${HUB_BASE_URL}/citations`},
        {content: 'Events', url:`${HUB_BASE_URL}/events`},
      ]
    },
    {
      title: 'COMMUNITY',
      items: [
        {content: 'Forum', url:`${HUB_BASE_URL}/forum`},
        {content: 'Members', url:`${HUB_BASE_URL}/members`},
        {content: 'Groups', url:`${HUB_BASE_URL}/groups`},
        {content: 'Projects', url:`${HUB_BASE_URL}/projects`},
        {content: 'Questions & Answers', url:`${HUB_BASE_URL}/answers`}
      ]
    },
    {
      title: 'ABOUT',
      items: [
        {content: 'Newsletter', url:`${HUB_BASE_URL}/newsletter`},
        {divider: true, content: '', url:''},
        {content: 'Contact Us', url:`${HUB_BASE_URL}/contact`},
        {content: 'Terms of Use', url:`${HUB_BASE_URL}/terms`},
        {content: 'Copyright Infringement', url:`${HUB_BASE_URL}/copyright`},
        {content: 'Our Cyberinfrastructure', url:`${HUB_BASE_URL}/about/hubzero`}
      ]
    },
    {
      title: 'SUPPORT',
      items: [
        {content: 'Knowledge Base', url:`${HUB_BASE_URL}/kb`},
        {content: 'Report a Problem', url:`${HUB_BASE_URL}/feedback/report_problems`},
        {content: 'Tickets', url:`${HUB_BASE_URL}/support/tickets`},
        {content: 'Wish List', url:`${HUB_BASE_URL}/wishlist`}
      ]
    }
  ]
}

export default MastheadConfig
