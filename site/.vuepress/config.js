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
    },
    '/ru/': {
      lang: `ru-RU`,
      title: `Внутренняя Эквестрия`,
      description: `Киринская тусовка!`
    }
  },

  themeConfig: {
    lastUpdated: `Last updated`,
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
  
        nav: [
          { text: `Services`, link: `/how/` },
          { text: `Community`, link: `/who/` },
          { text: `About`, link: `/about/` }
        ]
      },
      '/ru/': {
        label: `Русский`,
        selectText: `Языки`,
        editLinkText: `Нашёл ошибку? Сделай PR!`,
  
        nav: [
          { text: `Сервисы`, link: `/ru/how/` },
          { text: `Сообщество`, link: `/ru/who/` },
          { text: `О нас`, link: `/ru/about/` }
        ]
      }
    }
  }

}