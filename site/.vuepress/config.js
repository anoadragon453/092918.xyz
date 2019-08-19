module.exports = {
  title: 'Inner Equestria',
  description: 'A kirin place!',
  evergreen: true,

  head: [
    [ 'link', { rel: 'icon', href: '/images/favicon.png' } ]
  ],

  plugins: {
    'seo': { 
      /* options */
    },
    'clean-urls': {
      normalSuffix: '.html',
      indexSuffix: '/'
    },
    'sitemap': {
      hostname: 'https://092918.xyz'
    }
  },

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Inner Equestria',
      description: 'A kirin place!'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Inner Equestria',
      description: 'Киринская тусовка!'
    }
  },

  themeConfig: {
    repo: 'innereq/092918.xyz',
    docsRepo: 'innereq/092918.xyz',
    docsDir: 'site',
    editLinks: true,
    domain: 'https://092918.xyz',
    logo: '/images/favicon.webp',

    locales: {
      '/': {
        label: 'English',
        selectText: 'Language',
        editLinkText: 'Found a mistake? Make a PR!',
        lastUpdated: 'Last updated',
        
        nav: [
          {
            text: 'Services',
            items: [
              {
                text: 'Software',
                items: [
                  { text: 'Instances', link: '/how/' },
                ]
              },
              {
                text: 'Links',
                items: [
                  { text: 'Email', link: 'https://mail.092918.xyz' },
                  { text: 'Git', link: 'https://moonbutt.science' },
                  { text: 'Video', link: 'https://vault.mle.party' },
                  { text: 'Microblog', link: 'https://ministry.moonbutt.science' },
                  { text: 'Blog', link: 'https://gospel.sunbutt.faith' },
                  { text: 'Imageboard', link: 'https://mle.party' }
                ]
              }
            ]
          },
          {
            text: 'Information',
            items: [
              {
                text: 'Know us',
                items: [
                  { text: 'Community', link: '/who/' },
                  { text: 'Status', link: 'https://status.092918.xyz' },
                  { text: 'News', link: 'https://ministry.moonbutt.science/innereq' },
                  { text: 'About', link: '/about/' }
                ]
              },
              {
                text: 'Support us',
                items: [
                  { text: 'Donate', link: '/donate/' }
                ]
              }
            ]
          }
        ]
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Язык',
        editLinkText: 'Нашёл ошибку? Сделай PR!',
        lastUpdated: 'В последний раз изменено',

        nav: [
          {
            text: 'Сервисы',
            items: [
              {
                text: 'Программы',
                items: [
                  { text: 'Серверы', link: '/ru/how/' },
                ]
              },
              {
                text: 'Ссылки',
                items: [
                  { text: 'Почта', link: 'https://mail.092918.xyz' },
                  { text: 'Git', link: 'https://moonbutt.science' },
                  { text: 'Видео', link: 'https://vault.mle.party' },
                  { text: 'Микроблог', link: 'https://ministry.moonbutt.science' },
                  { text: 'Блог', link: 'https://gospel.sunbutt.faith' },
                  { text: 'Имиджборд', link: 'https://mle.party' }
                ]
              }
            ]
          },
          {
            text: 'Информация',
            items: [
              {
                text: 'Знай нас',
                items: [
                  { text: 'Сообщество', link: '/ru/who/' },
                  { text: 'Статус', link: 'https://status.092918.xyz' },
                  { text: 'Новости', link: 'https://ministry.moonbutt.science/innereq' },
                  { text: 'О нас', link: '/ru/about/' }
                ]
              },
              {
                text: 'Поддержи нас',
                items: [
                  { text: 'Донат', link: '/ru/donate/' }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
