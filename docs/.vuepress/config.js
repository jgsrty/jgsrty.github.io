module.exports = {
  title: 'rty-docs',
  description: '随笔文档',
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/logo.ico'
    }]
  ],
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '目录',
        items: [{
            text: 'English',
            link: '/english/'
          },
          {
            text: '博客',
            link: '/blog/'
          }
        ]
      },
      // 链接到网站
      {
        text: 'Github',
        link: 'https://github.com/jgsrty'
      },
    ],
    sidebar: [{
        title: '英文阅读', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          ['/english/','简介'],
          ['/english/2018-10-24','善良比聪慧更重要'],
        ]
      },
      {
        title: '工作笔记',
        collapsable: true,
        children: [
          ['/blog/','简介'],
          ['/blog/2018-10-24','第一篇笔记'],
        ]
      }
    ]
  }
}