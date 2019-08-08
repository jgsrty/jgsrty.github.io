const path = require('path')
const fs = require('fs')
module.exports = {
  title: 'rty-docs',
  description: 'Welcome to my docs',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/img/rty-docs.ico'
      }
    ],
    // [
    //   'link',
    //   {
    //     rel: 'stylesheet',
    //     href: '//at.alicdn.com/t/font_842333_6hawconwwqp.css'
    //   }
    // ]
    //Google Analytics
    [
      'script',
      {
        async: 'async',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-145250139-1'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-145250139-1');`
    ],
    //百度统计
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?96bef00c01d8ee7ee249abc380b9e5ab";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
    // googleAdSense
    // [
    //   "script",
    //   {
    //     async: "async",
    //     src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    //   }
    // ],
    // [
    //   "script",
    //   {},
    //   `(adsbygoogle = window.adsbygoogle || []).push({
    //     google_ad_client: "ca-pub-4354974357850752",
    //     enable_page_level_ads: true
    //   });`
    // ],
    // [
    //   "script",
    //   {},
    //   `setTimeout(function(){
    //     window.location.reload()
    //   },Math.floor(Math.random() * (3000 - 300) +100)*1000)`
    // ]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    //编辑
    repo: 'jgsrty/jgsrty.github.docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    //编辑
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
        text: 'Music',
        link: '/music/introduction'
      },
      // {
      //   text: 'VuePress',
      //   link: '/vuepress/introduction'
      // },
      {
        text: '前端开发',
        link: 'https://rtyxmd.github.io/'
      },
      {
        text: '了解更多',
        items: [
          { text: 'Github', link: 'https://github.com/jgsrty' },
          { text: '码云', link: 'https://gitee.com/RtyXmd' },
          { text: '简书', link: 'https://www.jianshu.com/u/0f735486a824' },
          { text: '移动端Music', link: 'http://47.100.53.108/#/index' },
          {
            text: '管理后台模板',
            link: 'http://47.100.53.108:9527/#/charts/pieChart'
          }
        ]
      }
      // {
      //   text: 'Github',
      //   link: 'https://github.com/jgsrty'
      // }
    ],
    sidebar: {
      '/english/': [
        'introduction',
        {
          title: '2019八月(August)',
          collapsable: false,
          children: genSidebarConfig('english/2019/2019-August', false)
        },
        {
          title: '2019七月(July)',
          collapsable: true,
          children: genSidebarConfig('english/2019/2019-July', false)
        },
        {
          title: '2019六月(June)',
          collapsable: true,
          children: genSidebarConfig('english/2019/2019-June', false)
        },
        {
          title: '2019年五月(May)',
          collapsable: true,
          children: genSidebarConfig('english/2019/2019-May', false)
        },
        {
          title: '2019年四月(April)',
          collapsable: true,
          children: genSidebarConfig('english/2019/2019-April', false)
        },
        {
          title: '2019年三月(March)',
          collapsable: true,
          children: genSidebarConfig('english/2019/2019-March', false)
        },
        {
          title: '2019年二月(Feburary)',
          collapsable: true,
          children: genSidebarConfig('english/2019/2019-Feburary', false)
        },
        {
          title: '2019年一月(January)',
          collapsable: true,
          children: genSidebarConfig('english/2019/2019-January', false)
        },
        {
          title: '2018年十二月(December)',
          collapsable: true,
          children: genSidebarConfig('english/2018/2018-December', false)
        },
        {
          title: '2018年十一月(November)',
          collapsable: true,
          children: genSidebarConfig('english/2018/2018-November', false)
        },
        {
          title: '2018年十月(October)',
          collapsable: true,
          children: genSidebarConfig('english/2018/2018-October', false)
        }
      ],
      '/music/': [
        'introduction',
        {
          title: 'Coldplay',
          collapsable: false,
          children: genSidebarConfig('music/Coldplay', true)
        }
      ],
      '/vuepress/': [
        'introduction',
        {
          title: '配置步骤',
          collapsable: false,
          children: genSidebarConfig('vuepress/2018-October', true)
        }
      ],
      '/components/': [
        'introduction',
        {
          title: 'UI组件',
          collapsable: false,
          children: genSidebarConfig('components/UI', true)
        }
        // "进度条",
        // {
        //   title: '123',
        //   children: genSidebarConfig("components/rtyProgress", true)
        // }
      ]
    }
  },
  sass: { indentedSyntax: true }
}

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir)
  let files = fs.readdirSync(p)
  let subDir = hasSub
    ? dir.split('/')[1]
    : dir.split('/')[1] + '/' + dir.split('/')[2]
  files = files.map(item => {
    item = subDir
      ? subDir + '/' + path.basename(item, '.md')
      : path.basename(item, '.md')
    return item
  })
  return files
}
