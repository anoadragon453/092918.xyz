module.exports = {
  title: `Inner Equestria`,
  description: `A kirin place!`,
  evergreen: true,

  head: [
    [ `link`, { rel: `icon`, href: `/images/favicon.png` } ]
  ],

  plugins: {
    'seo': { 
      /* options */
    },
    'clean-urls': {
      normalSuffix: '',
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
    repo: `innereq/092918.xyz`,
    docsRepo: `innereq/092918.xyz`,
    docsDir: `site`,
    editLinks: true,
    domain: `https://092918.xyz`,
    logo: `/images/favicon.webp`,

    locales: {
      '/': {
        label: `English`,
        selectText: `Language`,
        editLinkText: `Found a mistake? Make a PR!`,
        lastUpdated: 'Last updated',
        
        nav: [
          {
            text: `Services`,
            items: [
              {
                text: `Software`,
                items: [
                  { text: `Instances`, link: `/how/` },
                ]
              },
              {
                text: `Links`,
                items: [
                  { text: `Derpy Email`, link: `https://mail.092918.xyz` },
                  { text: `Moonbutt Science Labs`, link: `https://moonbutt.science` },
                  { text: `Vault #99`, link: `https://vault.mle.party` },
                  { text: `Ministry of Moonbutt Science`, link: `https://ministry.moonbutt.science` },
                  { text: `Gospel of Celly`, link: `https://gospel.sunbutt.faith` },
                  { text: `My Little Equestria`, link: `https://mle.party` }
                ]
              }
            ]
          },
          {
            text: `Information`,
            items: [
              {
                text: `Know us`,
                items: [
                  { text: `Community`, link: `/who/` },
                  { text: `Status`, link: `https://status.092918.xyz` },
                  { text: `About`, link: `/about/` }
                ]
              },
              {
                text: `Support us`,
                items: [
                  { text: `Donate`, link: `/donate/` }
                ]
              }
            ]
          }
        ]
      },
      '/ru/': {
        label: `Русский`,
        selectText: `Язык`,
        editLinkText: `Нашёл ошибку? Сделай PR!`,
        lastUpdated: 'В последний раз изменено',

        nav: [
          {
            text: `Сервисы`,
            items: [
              {
                text: `Программы`,
                items: [
                  { text: `Серверы`, link: `/ru/how/` },
                ]
              },
              {
                text: `Ссылки`,
                items: [
                  { text: `Derpy Email`, link: `https://mail.092918.xyz` },
                  { text: `Moonbutt Science Labs`, link: `https://moonbutt.science` },
                  { text: `Vault #99`, link: `https://vault.mle.party` },
                  { text: `Ministry of Moonbutt Science`, link: `https://ministry.moonbutt.science` },
                  { text: `Gospel of Celly`, link: `https://gospel.sunbutt.faith` },
                  { text: `My Little Equestria`, link: `https://mle.party` }
                ]
              }
            ]
          },
          {
            text: `Информация`,
            items: [
              {
                text: `Знай нас`,
                items: [
                  { text: `Сообщество`, link: `/ru/who/` },
                  { text: `Статус`, link: `https://status.092918.xyz` },
                  { text: `О нас`, link: `/ru/about/` }
                ]
              },
              {
                text: `Поддержи нас`,
                items: [
                  { text: `Донат`, link: `/ru/donate/` }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
