<template><div><h1 id="使用-github-pages" tabindex="-1"><a class="header-anchor" href="#使用-github-pages" aria-hidden="true">#</a> 使用 Github Pages</h1>
<p>由 GitHub 网站服务，为众多 GitHub 用户提供了良好的服务器部署环境以及域名的好工具</p>
<h2 id="开发准备" tabindex="-1"><a class="header-anchor" href="#开发准备" aria-hidden="true">#</a> 开发准备</h2>
<ul>
<li>一个github账号，没有的要自己注册一个 <a href="https://github.com/" target="_blank" rel="noopener noreferrer">注册地址<ExternalLinkIcon/></a></li>
<li>会使用git工具，克隆及提交代码等简单操作，git学习请自行 <a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">百度<ExternalLinkIcon/></a></li>
<li>Markdown语法参考地址 <a href="https://www.jianshu.com/p/191d1e21f7ed" target="_blank" rel="noopener noreferrer">Markdown<ExternalLinkIcon/></a></li>
</ul>
<p>只需要满足上述三个要求，任何人就都可以写出来一套属于自己的文档网站~</p>
<h2 id="新建github代码仓库" tabindex="-1"><a class="header-anchor" href="#新建github代码仓库" aria-hidden="true">#</a> 新建github代码仓库</h2>
<p><img src="https://upload-images.jianshu.io/upload_images/7704547-eb33dff4a8eeb625.png?imageMogr2/auto-orient/strip|imageView2/2/w/749/format/webp" alt="新建github代码仓库"></p>
<h2 id="克隆代码到本地" tabindex="-1"><a class="header-anchor" href="#克隆代码到本地" aria-hidden="true">#</a> 克隆代码到本地</h2>
<p><img src="https://upload-images.jianshu.io/upload_images/7704547-37f1cc2aa4ce2421.png?imageMogr2/auto-orient/strip|imageView2/2/w/951/format/webp" alt="克隆代码到本地"></p>
<h2 id="创建入口文件" tabindex="-1"><a class="header-anchor" href="#创建入口文件" aria-hidden="true">#</a> 创建入口文件</h2>
<p>在当前文件下新建index.html</p>
<p><img src="https://upload-images.jianshu.io/upload_images/7704547-de206dbc65d90f09.png?imageMogr2/auto-orient/strip|imageView2/2/w/467/format/webp" alt="创建入口文件"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>hello github<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问-github-pages" tabindex="-1"><a class="header-anchor" href="#访问-github-pages" aria-hidden="true">#</a> 访问 Github Pages</h2>
<p>保存并提交代码至github，提交代码后等待1分钟</p>
<p>浏览器访问 <code v-pre>http://自己的github用户名.github.io</code> 看到 <code v-pre>hello github</code> 到这一步 Github Page已经可以正常使用</p>
<p>如果不想用VuePress写文档，可以随便写点东西提交代码即可更新。</p>
</div></template>
