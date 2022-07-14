<template><div><h1 id="按钮-button" tabindex="-1"><a class="header-anchor" href="#按钮-button" aria-hidden="true">#</a> 按钮 button</h1>
<p>按钮组件</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<example-button></example-button>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium.text<span class="token punctuation">"</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium.size<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small.text<span class="token punctuation">"</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small.size<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-button</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini.text<span class="token punctuation">"</span></span> <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini.size<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token string">"danger"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">medium</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"medium"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"中等按钮"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"小型按钮"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mini</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"mini"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"迷你按钮"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h2>
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
<td>text</td>
<td>按钮文字</td>
<td>String</td>
<td>default / primary / success / warning / danger</td>
<td>default</td>
</tr>
<tr>
<td>type</td>
<td>按钮类型</td>
<td>String</td>
<td>default / primary / success / warning / danger</td>
<td>default</td>
</tr>
<tr>
<td>size</td>
<td>按钮尺寸</td>
<td>String</td>
<td>default / medium / small / mini</td>
<td>default</td>
</tr>
</tbody>
</table>
</div></template>
