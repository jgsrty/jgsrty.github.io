const { webpackBundler } = require("@vuepress/bundler-webpack");
const path = require("path");
const fs = require("fs");
const route2018 = require("./routes/2018.js");
const route2019 = require("./routes/2019.js");
const route2020 = require("./routes/2020.js");
const route2021 = require("./routes/2021.js");
const SelfStudy = require("./routes/SelfStudy.js");
const { defaultTheme } = require("vuepress-webpack");
let englishFiles = ["/english/introduction.md"];
englishFiles = englishFiles.concat(SelfStudy, route2021, route2020, route2019, route2018);
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
module.exports = {
  title: "rty-docs",
  description: "Welcome to my docs",
  plugins: [
    docsearchPlugin({
      appId: "PFAMZDC9Z4",
      apiKey: 'b528d6541463420ac954f7fca1565180',
      indexName: 'jgsrty',
    }),
  ],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/rty-docs.ico",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "rty,荣天阳,rtyxmd,英文阅读,英语学习,vue组件,vue,英文歌曲,bruno",
      },
    ],
  ],
  theme: defaultTheme({
    repo: "https://github.com/jgsrty",
    docsRepo: "https://github.com/jgsrty/jgsrty.github.io",
    docsBranch: "master",
    contributorsText: "贡献者",
    editLinkText: "在GitHub上编辑此页",
    editLinkPattern: ":repo/edit/:branch/docs/:path",
    lastUpdatedText: "上次更新",
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "汉语言文学",
        link: "/english/SelfStudy/ChineseLiterature/红楼梦回目(八十回).html",
        activeMatch: "^/english/SelfStudy",
      },
      {
        text: "英文阅读",
        link: "/english/introduction",
        activeMatch: "^/english/[2018,2019,2020,2021]",
      },
      {
        text: "Music",
        link: "/music/introduction",
        activeMatch: "^/music/",
      },
      // {
      //   text: "组件",
      //   link: "/components/introduction",
      //   activeMatch: "^/components/",
      // },
      {
        text: "口语短文",
        link: "/oral/introduction",
        activeMatch: "^/oral/",
      },
      {
        text: "了解更多",
        children: [
          { text: "掘金", link: "https://juejin.cn/user/2154698520407687" },
          { text: "码云Gitee", link: "https://gitee.com/RtyXmd" },
          { text: "简书", link: "https://www.jianshu.com/u/0f735486a824" },
          { text: "移动端Music", link: "http://47.100.53.108:7300/#/index" },
          {
            text: "管理后台模板",
            link: "http://47.100.53.108:9527/#/charts/pieChart",
          },
        ],
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/english/": englishFiles,
      "/music/": [
        "/music/introduction.md",
        {
          text: "Music Collection",
          collapsible: false,
          children: genSidebarConfig("music/collection", true),
        },
      ],
      // "/components/": [
      //   "/components/introduction.md",
      //   {
      //     text: "UI组件",
      //     collapsible: false,
      //     children: genSidebarConfig("components/UI", true),
      //   },
      // ],
      "/oral/": [
        "/oral/introduction.md",
        {
          text: "英语口语短文",
          collapsible: false,
          children: genSidebarConfig("oral/essay", true),
        },
      ],
    },
  }),
  // themeConfig: {
  //   lastUpdated: "Last Updated",
  //   //编辑
  //   repo: "jgsrty/jgsrty.github.docs",
  //   docsDir: "docs",
  //   docsBranch: "master",
  //   editLinks: true,
  //   //编辑
  //   sidebarDepth: 3,
  //
  // },
  bundler: webpackBundler({
    sass: { indentedSyntax: true },
  }),
};

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, "../", dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split("/")[1] : dir.split("/")[1] + "/" + dir.split("/")[2];
  files = files.map((item) => {
    item = subDir ? subDir + "/" + path.basename(item, ".md") : path.basename(item, ".md");
    return `/${dir.split("/")[0]}/${item}`;
  });
  return files;
}
