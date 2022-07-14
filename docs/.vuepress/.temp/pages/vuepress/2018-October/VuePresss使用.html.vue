<template><div><h1 id="使用-vuepress" tabindex="-1"><a class="header-anchor" href="#使用-vuepress" aria-hidden="true">#</a> 使用 VuePress</h1>
<p>VuePress是尤大神发布的一个全新的基于vue的文档生成器</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 全局安装VuePress</span>
<span class="token function">npm</span> <span class="token function">install</span> -D vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>本地新建文件夹&gt;vuepress</p>
</li>
<li>
<p>vuepress/新建docs文件夹</p>
</li>
<li>
<p>vuepress/新建package.json文件</p>
</li>
<li>
<p>vuepress/docs/新建README.md文件</p>
</li>
</ul>
<p><img src="https://upload-images.jianshu.io/upload_images/7704547-0ed95fde2aa58e25.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt="新建文件"></p>
<h2 id="添加代码" tabindex="-1"><a class="header-anchor" href="#添加代码" aria-hidden="true">#</a> 添加代码</h2>
<ul>
<li>在docs/README.md中添加代码</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># my first vuepress</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在package.json中添加代码</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h2>
<ul>
<li>在vuepress中启动命令</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>启动成功后打开看到以下页面说明vuepress已经初步配置成功</li>
</ul>
<p><code v-pre>如果本地8080端口被占用请根据命令行中提示点端口进行访问</code></p>
<p><img src="https://upload-images.jianshu.io/upload_images/7704547-40844c80b175f261.png?imageMogr2/auto-orient/strip|imageView2/2/w/247/format/webp" alt="启动项目"></p>
<h2 id="文件配置" tabindex="-1"><a class="header-anchor" href="#文件配置" aria-hidden="true">#</a> 文件配置</h2>
<ul>
<li>docs/文件下新建public/文件下新建img/文件下放入一张图片，用作首页显示图片</li>
</ul>
<p><img src="https://upload-images.jianshu.io/upload_images/7704547-74d923ae5371be77.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt="首页图片"></p>
<ul>
<li>修改首页显示文件 docs/README.md</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">--</span><span class="token operator">-</span> 
<span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token literal-property property">heroImage</span><span class="token operator">:</span> <span class="token operator">/</span>hero<span class="token punctuation">.</span>png
<span class="token literal-property property">actionText</span><span class="token operator">:</span> 快速上手 →
<span class="token literal-property property">actionLink</span><span class="token operator">:</span> <span class="token operator">/</span>zh<span class="token operator">/</span>guide<span class="token operator">/</span>
<span class="token literal-property property">features</span><span class="token operator">:</span>
<span class="token operator">-</span> title<span class="token operator">:</span> 简洁至上
  <span class="token literal-property property">details</span><span class="token operator">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
<span class="token operator">-</span> title<span class="token operator">:</span> Vue驱动
  <span class="token literal-property property">details</span><span class="token operator">:</span> 享受 Vue <span class="token operator">+</span> webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
<span class="token operator">-</span> title<span class="token operator">:</span> 高性能
  <span class="token literal-property property">details</span><span class="token operator">:</span> VuePress 为每个页面预渲染生成静态的 <span class="token constant">HTML</span>，同时在页面被加载的时候，将作为 <span class="token constant">SPA</span> 运行。
<span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token constant">MIT</span> Licensed <span class="token operator">|</span> Copyright © <span class="token number">2018</span><span class="token operator">-</span>present Evan You
<span class="token operator">--</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>docs/文件下新建.vuepress文件夹/新建config.js文件</li>
</ul>
<p><img src="https://upload-images.jianshu.io/upload_images/7704547-f18cac7b36b96bdd.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt="config配置文件"></p>
<ul>
<li>导航栏及侧边栏配置 .vuepress/config.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Guide'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/guide/'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'External'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'https://google.com'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'/'</span><span class="token punctuation">,</span>
      <span class="token string">'/page-a'</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">'/page-b'</span><span class="token punctuation">,</span> <span class="token string">'Explicit link text'</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可配置<a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E6%90%9C%E7%B4%A2%E6%A1%86" target="_blank" rel="noopener noreferrer">搜索框匹配<ExternalLinkIcon/></a>、<a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%B8%8A-%E4%B8%8B%E4%B8%80%E7%AF%87%E9%93%BE%E6%8E%A5" target="_blank" rel="noopener noreferrer">上/下一篇链接<ExternalLinkIcon/></a>、<a href="https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5%E9%9D%A2%E7%B1%BB" target="_blank" rel="noopener noreferrer">自定义页面<ExternalLinkIcon/></a>等，官方文档都写的非常清楚，可根据需要自行配置即可。</p>
<h2 id="打包项目" tabindex="-1"><a class="header-anchor" href="#打包项目" aria-hidden="true">#</a> 打包项目</h2>
<p>全部配置完成后打包项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run build 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打包成功之后找到 docs/.vuepress/dist 文件夹下文件，全部拷贝到刚开始配置的 Github Page代码仓库中，提交代码，等待一分钟后访问 <code v-pre>http://自己的github用户名.github.io</code></p>
<p>到此已经完成了所有配置，至于里面写什么，完全有你自己决定了。</p>
</div></template>
