/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '博客',
  author: '温俊',
  theme: 'system',
  siteUrl: 'https://wenjun.me',
  siteRepo: 'https://github.com/defpis/blog',
  headerTitle: 'wenjun.me',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dollphin@outlook.com',
  github: 'https://github.com/defpis',
  language: 'zh-CN',
  locale: 'zh-CN',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
