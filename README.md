# 使用 Github Pages

由 GitHub 网站服务，为众多 GitHub 用户提供了良好的服务器部署环境以及域名的好工具

## 开发准备

* 一个github账号，没有的要自己注册一个 [注册地址](https://github.com/)
* 会使用git工具，克隆及提交代码等简单操作，git学习请自行 [百度](https://www.baidu.com/)
* Markdown语法参考地址 [Markdown](https://www.jianshu.com/p/191d1e21f7ed)

只需要满足上述三个要求，任何人就都可以写出来一套属于自己的文档网站~

## 新建github代码仓库

![新建github代码仓库](https://upload-images.jianshu.io/upload_images/7704547-eb33dff4a8eeb625.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/749/format/webp)

## 克隆代码到本地

![克隆代码到本地](https://upload-images.jianshu.io/upload_images/7704547-37f1cc2aa4ce2421.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/951/format/webp)

## 创建入口文件

在当前文件下新建index.html

![创建入口文件](https://upload-images.jianshu.io/upload_images/7704547-de206dbc65d90f09.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/467/format/webp)

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="">
</head>
<body>
    <h1>hello github</h1>
</body>
</html>
```

## 访问 Github Pages

保存并提交代码至github，提交代码后等待1分钟

浏览器访问 `http://自己的github用户名.github.io` 看到 `hello github` 到这一步 Github Page已经可以正常使用

如果不想用VuePress写文档，可以随便写点东西提交代码即可更新。

# 使用 VuePress

VuePress是尤大神发布的一个全新的基于vue的文档生成器

## 安装

```
# 全局安装VuePress
npm install -D vuepress
```
* 本地新建文件夹>vuepress

* vuepress/新建docs文件夹

* vuepress/新建package.json文件

* vuepress/docs/新建README.md文件

![新建文件](https://upload-images.jianshu.io/upload_images/7704547-0ed95fde2aa58e25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)

## 添加代码

* 在docs/README.md中添加代码
```
# my first vuepress
```
* 在package.json中添加代码
```
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

## 启动项目

* 在vuepress中启动命令
```
npm run dev
```
* 启动成功后打开看到以下页面说明vuepress已经初步配置成功

`如果本地8080端口被占用请根据命令行中提示点端口进行访问`

![启动项目](https://upload-images.jianshu.io/upload_images/7704547-40844c80b175f261.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/247/format/webp)

## 文件配置

* docs/文件下新建public/文件下新建img/文件下放入一张图片，用作首页显示图片

![首页图片](https://upload-images.jianshu.io/upload_images/7704547-74d923ae5371be77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)

* 修改首页显示文件 docs/README.md
```
---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

* docs/文件下新建.vuepress文件夹/新建config.js文件

![config配置文件](https://upload-images.jianshu.io/upload_images/7704547-f18cac7b36b96bdd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)

* 导航栏及侧边栏配置 .vuepress/config.js

```
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
```

还可配置[搜索框匹配](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%90%9C%E7%B4%A2%E6%A1%86)、[上/下一篇链接](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5)、[自定义页面](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5%E9%9D%A2%E7%B1%BB)等，官方文档都写的非常清楚，可根据需要自行配置即可。

## 打包项目

全部配置完成后打包项目
```
npm run build 
```
打包成功之后找到 docs/.vuepress/dist 文件夹下文件，全部拷贝到刚开始配置的 Github Page代码仓库中，提交代码，等待一分钟后访问 `http://自己的github用户名.github.io`

到此已经完成了所有配置，至于里面写什么，完全有你自己决定了。