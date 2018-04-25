import {default as Hub} from './HubConfig.js'

const HUB_BASE_URL = Hub.routes.baseUrl

const SiteFooterConfig = [
  {
    title: 'GET HELP',
    links: {
      'Feedback': `${HUB_BASE_URL}/feedback`,
      'Forgot username?': `${HUB_BASE_URL}/members/myaccount`,
      'Lost password?': `${HUB_BASE_URL}/login/reset`,
      'Accessibility Issues': `${HUB_BASE_URL}/legal/accessibility`,
      'Contact us': `${HUB_BASE_URL}/about/contact`
    }
  },
  {
    title: 'PARTICIPATE',
    links: {
      'Submit a resource': `${HUB_BASE_URL}/resources/new`,
      'Create a group': `${HUB_BASE_URL}/groups/new`,
      'Answer questions': `${HUB_BASE_URL}/answers`,
      'Make a wish': `${HUB_BASE_URL}/wishlist`,
      'Join the discussion': `${HUB_BASE_URL}/forum`
    }
  },
  {
    title: 'DISCOVER',
    links: {
      'What\'s New': `${HUB_BASE_URL}/whatsnew`,
      'Resources': `${HUB_BASE_URL}/resources`,
      'Wiki': `${HUB_BASE_URL}/wiki`,
      'Tags': `${HUB_BASE_URL}/tags`,
      'Knowledge Base': `${HUB_BASE_URL}/kb`
    }
  },
  {
    title: 'ABOUT US',
    links: {
      'Who we are': `${HUB_BASE_URL}/about`,
      'Terms of use': `${HUB_BASE_URL}/legal/terms`,
      'Privacy Policy': `${HUB_BASE_URL}/legal/privacy`,
      'Abuse Policy': `${HUB_BASE_URL}/legal/abuse`,
      'Copyright Infringement': `${HUB_BASE_URL}/about/dmcapolicy`
    }
  }
]

export default SiteFooterConfig

