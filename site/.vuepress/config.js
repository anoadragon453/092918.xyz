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

  locales: {
    '/': {
      lang: `en-US`,
      title: `Inner Equestria`,
      description: `A kirin place!`
    }
  },

  themeConfig: {
    repo: `innereq/092918.xyz`,
    docsRepo: `innereq/092918.xyz`,
    docsDir: `site`,
    editLinks: true,
    domain: `https://092918.xyz`,

    locales: {
      '/': {
        label: `English`,
        selectText: `Languages`,
        editLinkText: `Found a mistake? Make a PR!`,
        lastUpdated: 'Last updated',
  
        nav: [
          { text: `Services`, link: `/how/` },
          { text: `Community`, link: `/who/` },
          { text: `Donate`, link: `/donate/` },
          { text: `About`, link: `/about/` },
          { text: `Status`, link: `https://status.092918.xyz` }
        ]
      }
    }
  }
}