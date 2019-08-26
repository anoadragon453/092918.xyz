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
      title: 'Внутренняя Эквестрия',
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
            text: 'Content',
            items: [
              {
                text: 'Friendship is Magic',
                items: [
                  { text: 'Season 1', link: 'https://vault.mle.party/videos/watch/playlist/7eca0ac8-6a2f-4024-890d-6f4df99ec646' },
                  { text: 'Season 2', link: 'https://vault.mle.party/videos/watch/playlist/c31f48c5-ee9a-4ff7-82a7-9b13182be6a2' },
                  { text: 'Season 3', link: 'https://vault.mle.party/videos/watch/playlist/ea3b3a4a-685b-4f1c-b132-adfc6679330d' },
                  { text: 'Season 4', link: 'https://vault.mle.party/videos/watch/playlist/d20b708c-378b-4dcc-b96d-62c9ed5be6a5' },
                  { text: 'Season 5', link: 'https://vault.mle.party/videos/watch/playlist/71dfa7aa-45e9-40bd-b212-8ebb886009e0' },
                  { text: 'Season 6', link: 'https://vault.mle.party/videos/watch/playlist/5ec7c9d3-b208-4394-8675-be69c35f0135' },
                  { text: 'Season 7', link: 'https://vault.mle.party/videos/watch/playlist/2ea5a3b4-5896-40b1-835e-c1d28a39d9b7' },
                  { text: 'Season 8', link: 'https://vault.mle.party/videos/watch/playlist/44cbaaca-9af1-46a6-a13f-45bf46ab56a0' },
                  { text: 'Season 9', link: 'https://vault.mle.party/videos/watch/playlist/10c80bba-3a4f-42b1-a845-b1671dd47a2d' },
                  { text: 'Specials', link: 'https://vault.mle.party/videos/watch/playlist/806c8887-85b7-4728-b215-c37bfd524f3a' },
                  { text: 'Full-lengths', link: 'https://vault.mle.party/videos/watch/playlist/020714b5-d221-4ff8-8fa4-80cf2368e23f' }
                ]
              }
            ]
          },
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
              { text: 'Community', link: '/who/' },
              { text: 'Status', link: 'https://status.092918.xyz' },
              { text: 'News', link: 'https://ministry.moonbutt.science/innereq' },
              { text: 'About', link: '/about/' }
            ] 
          },
          {
            text: 'Donate',
            link: '/donate/'
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
            text: 'Материалы',
            items: [
              {
                text: 'Friendship is Magic',
                items: [
                  { text: 'Сезон 1', link: 'https://vault.mle.party/videos/watch/playlist/7eca0ac8-6a2f-4024-890d-6f4df99ec646' },
                  { text: 'Сезон 2', link: 'https://vault.mle.party/videos/watch/playlist/c31f48c5-ee9a-4ff7-82a7-9b13182be6a2' },
                  { text: 'Сезон 3', link: 'https://vault.mle.party/videos/watch/playlist/ea3b3a4a-685b-4f1c-b132-adfc6679330d' },
                  { text: 'Сезон 4', link: 'https://vault.mle.party/videos/watch/playlist/d20b708c-378b-4dcc-b96d-62c9ed5be6a5' },
                  { text: 'Сезон 5', link: 'https://vault.mle.party/videos/watch/playlist/71dfa7aa-45e9-40bd-b212-8ebb886009e0' },
                  { text: 'Сезон 6', link: 'https://vault.mle.party/videos/watch/playlist/5ec7c9d3-b208-4394-8675-be69c35f0135' },
                  { text: 'Сезон 7', link: 'https://vault.mle.party/videos/watch/playlist/2ea5a3b4-5896-40b1-835e-c1d28a39d9b7' },
                  { text: 'Сезон 8', link: 'https://vault.mle.party/videos/watch/playlist/44cbaaca-9af1-46a6-a13f-45bf46ab56a0' },
                  { text: 'Сезон 9', link: 'https://vault.mle.party/videos/watch/playlist/10c80bba-3a4f-42b1-a845-b1671dd47a2d' },
                  { text: 'Специальные выпуски', link: 'https://vault.mle.party/videos/watch/playlist/806c8887-85b7-4728-b215-c37bfd524f3a' },
                  { text: 'Полнометражки', link: 'https://vault.mle.party/videos/watch/playlist/020714b5-d221-4ff8-8fa4-80cf2368e23f' }
                ]
              }
            ]
          },
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
              { text: 'Сообщество', link: '/ru/who/' },
              { text: 'Статус', link: 'https://status.092918.xyz' },
              { text: 'Новости', link: 'https://ministry.moonbutt.science/innereq' },
              { text: 'О нас', link: '/ru/about/' }
            ]
          },
          {
            text: 'Донат',
            link: '/ru/donate/'
          }
        ]
      }
    }
  }
}
