module.exports = {
  title: `Inner Equestria`,
  description: `A kirin place!`,
  evergreen: true,

  head: [
    [ `link`, { rel: `icon`, href: `/images/favicon.webp` } ]
  ],

  plugins: [ 
    `vuepress-plugin-seo`
  ],

  themeConfig: {
    lastUpdated: `Last updated`,
    repo: `https://github.com/commagray/092918.xyz`,
    editLinks: true,
    editLinkText: `Found a mistake? Make a PR!`,
    domain: `https://092918.xyz`,
    author = {
      name: `Coma Grayce`,
      twitter: ``
    },

    nav: [
      { text: `Services`, link: `/how/` },
      { text: `Community`, link: `/who/` },
      { text: `Donate`, link: `/donate/` },
    ]
  }

}