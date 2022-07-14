<template><div><h1 id="分页-pagination" tabindex="-1"><a class="header-anchor" href="#分页-pagination" aria-hidden="true">#</a> 分页 pagination</h1>
<p>当数据量过多时，使用分页分解数据。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<example-pagination></example-pagination>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>20px 0<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-pagination</span> <span class="token attr-name">:prev</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>prev<span class="token punctuation">'</span><span class="token punctuation">"</span></span> <span class="token attr-name">:next</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>next<span class="token punctuation">'</span><span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changePage<span class="token punctuation">"</span></span> <span class="token attr-name">:currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currPage1<span class="token punctuation">"</span></span> <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-pagination</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin</span><span class="token punctuation">:</span>20px 0<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span><span class="token property">align-items</span><span class="token punctuation">:</span>center</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rty-pagination</span> <span class="token attr-name">:pagerNum</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changePage2<span class="token punctuation">"</span></span> <span class="token attr-name">:currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currPage2<span class="token punctuation">"</span></span> <span class="token attr-name">:pageCount</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1000<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rty-pagination</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">currPage1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currPage2</span><span class="token operator">:</span> <span class="token number">99</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changePage</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currPage1<span class="token operator">=</span>val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">changePage2</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currPage2<span class="token operator">=</span>val
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h2>
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
<td>currentPage</td>
<td>当前页</td>
<td>Number</td>
<td>-</td>
<td>1</td>
</tr>
<tr>
<td>pageCount</td>
<td>分页总页数</td>
<td>Number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>pagerNum</td>
<td>页码显示数量，超过此数量会省略</td>
<td>Number</td>
<td>大于等于 5 且小于等于 21 的奇数</td>
<td>7</td>
</tr>
<tr>
<td>prev</td>
<td>上一页文本</td>
<td>String</td>
<td>-</td>
<td>上一页</td>
</tr>
<tr>
<td>next</td>
<td>下一页文本</td>
<td>String</td>
<td>-</td>
<td>下一页</td>
</tr>
</tbody>
</table>
</div></template>
