<template><div><h1 id="进度条-progress" tabindex="-1"><a class="header-anchor" href="#进度条-progress" aria-hidden="true">#</a> 进度条 progress</h1>
<p>用于展示操作进度，告知用户当前状态和预期</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<example-progress></example-progress>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-progress</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-progress</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-progress</span> <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>percent[0]<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-progress</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-progress</span> <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>percent[1]<span class="token punctuation">'</span></span> <span class="token attr-name">:innerColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>innerColor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-progress</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-progress</span> <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>percent[2]<span class="token punctuation">'</span></span> <span class="token attr-name">:showText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showText<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-progress</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-progress</span> <span class="token attr-name">:percent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>percent[3]<span class="token punctuation">'</span></span> <span class="token attr-name">:innerColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>innerColor<span class="token punctuation">"</span></span> <span class="token attr-name">:barWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>barWidth<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-progress</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">percent</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">68</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">innerColor</span><span class="token operator">:</span> <span class="token string">"#F56C6C"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">showText</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">barWidth</span><span class="token operator">:</span> <span class="token number">500</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>barWidth</td>
<td>进度条整体宽度</td>
<td>Number</td>
<td>-</td>
<td>330</td>
</tr>
<tr>
<td>innerColor</td>
<td>进度条颜色</td>
<td>String</td>
<td>-</td>
<td>#409eff</td>
</tr>
<tr>
<td>percent</td>
<td>百分比</td>
<td>Number</td>
<td>0-100</td>
<td>0</td>
</tr>
<tr>
<td>showText</td>
<td>是否显示进度条文字</td>
<td>Boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
</div></template>
