const path = require('path');
const fs = require('fs');
module.exports = {
  title: "rty-docs",
  description: "Welcome to my docs",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/logo.ico"
      }
    ]
  ],
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '组件',
        link: '/components/introduction'
      },
      {
        text: '英文阅读',
        link: '/english/introduction'
      },
      {
        text: 'VuePress',
        link: '/vuepress/introduction'
      },
      {
        text: '了解更多',
        items: [
          { text: 'Github', link: 'https://github.com/jgsrty' },
          { text: '码云', link: 'https://gitee.com/RtyXmd' },
          { text: '简书', link: 'https://www.jianshu.com/u/0f735486a824' },
          { text: '移动端Music', link: 'http://47.100.53.108/#/index' },
          { text: '管理后台模板', link: 'http://47.100.53.108:9527/#/charts/pieChart' },
        ]
      }
      // {
      //   text: 'Github',
      //   link: 'https://github.com/jgsrty'
      // }
    ],
    sidebar: {
      "/english/": [
        "introduction",
        {
          title: "2019年一月(January)",
          collapsable: false,
          children: genSidebarConfig("english/2019-January", true)
        },
        {
          title: "2018年十二月(December)",
          collapsable: true,
          children: genSidebarConfig("english/2018-December", true)
        },
        {
          title: "2018年十一月(November)",
          collapsable: true,
          children: genSidebarConfig("english/2018-November", true)
        },
        {
          title: "2018年十月(October)",
          collapsable: true,
          children: genSidebarConfig("english/2018-October", true)
        },
      ],
      "/vuepress/": [
        "introduction",
        {
          title: "配置步骤",
          collapsable: false,
          children: genSidebarConfig("vuepress/2018-October", true)
        },
      ],
      "/components/": [
        "introduction",
        {
          title: "UI组件",
          collapsable: false,
          children: genSidebarConfig("components/UI", true)
        },
        // "进度条",
        // {
        //   title: '123',
        //   children: genSidebarConfig("components/rtyProgress", true)
        // }
      ],
    }
  },
  sass: { indentedSyntax: true },
};

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}