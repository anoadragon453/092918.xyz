module.exports = {
  title: `Inner Equestria`,
  description: `A kirin place!`,
  evergreen: true,

  head: [
    [ `link`, { rel: `icon`, href: `/images/favicon.webp` } ]
  ],

  plugins: {
    'seo': { 
      /* options */
    },
    'clean-urls': {
      normalSuffix: '.html',
      indexSuffix: '/'
    }
  },

  themeConfig: {
    lastUpdated: `Last updated`,
    repo: `innereq/092918.xyz`,
    docsRepo: `innereq/092918.xyz`,
    docsDir: `site`,
    editLinks: true,
    editLinkText: `Found a mistake? Make a PR!`,
    domain: `https://092918.xyz`,

    nav: [
      { text: `Services`, link: `/how/` },
      { text: `Community`, link: `/who/` },
      { text: `About`, link: `/about/` },
    ]
  }

}