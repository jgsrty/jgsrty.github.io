const path = require('path');
const fs = require('fs');
module.exports = {
  title: "rty-docs",
  description: "随笔文档",
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
        text: '英文阅读',
        link: '/english/introduction'
      },
      {
        text: 'VuePress',
        link: '/vuepress/introduction'
      },
      {
        text: 'Github',
        link: 'https://github.com/jgsrty'
      }
    ],
    sidebar: {
      "/english/": [
        "introduction",
        // {
        //   title: "2018年十一月(November)",
        //   collapsable: true,
        //   children: genSidebarConfig("english/2018-November", true)
        // },
        {
          title: "2018年十月(October)",
          collapsable: false,
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
      ]
    }
  }
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