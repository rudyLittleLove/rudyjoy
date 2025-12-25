var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u53EA\u9700\u4E00\u4E2ADOM\uFF0C\u7EAFCSS\u5B9E\u73B0\u7EBF\u6027\u8DD1\u9A6C\u706F\u7279\u6548</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>\u53EA\u9700\u4E00\u4E2ADOM\uFF0C\u7EAFCSS\u5B9E\u73B0\u8DD1\u9A6C\u706F\u7EBF\u6027\u7279\u6548</h3><ul><li><a href="#_1">\u5F15\u8A00</a></li><li><a href="#Demo_4">\u8DD1\u9A6C\u706F\u6548\u679C\u56FE&amp;Demo</a></li><li><a href="#_8">\u8DD1\u9A6C\u706F\u4EE3\u7801</a></li><li><a href="#_66">\u6837\u5F0F\u5206\u6790\u89E3\u91CA</a></li></ul></div><p></p>
<h1><a id="_1"></a>\u5F15\u8A00</h1>
<p>\u4E4B\u524D\u770B\u5230\u4E00\u4E2A\u6548\u679C\uFF0C\u4E00\u6761\u5C0F\u7EC6\u7EBF\uFF0C\u56F4\u7ED5\u7740\u8FB9\u6846\u4E00\u76F4\u7ED5\u5708\uFF0C\u4E0D\u8FC7\u5B83\u7684\u5B9E\u73B0\u65B9\u5F0F\u4F7F\u7528\u4E86JavaScript\u3002\u4E8E\u662F\u5C31\u5C1D\u8BD5\u7740\u5199\u4E86\u4E00\u4E2A\u53EA\u9700\u8981CSS\u5C31\u80FD\u56F4\u7ED5\u8FB9\u6846\u8DD1\u7684\u6548\u679C\uFF0C\u5E9F\u8BDD\u4E0D\u591A\u8BF4\uFF0C\u76F4\u63A5\u4E0A\u6548\u679C\u56FE\u548C\u4EE3\u7801\u3002</p>
<h1><a id="Demo_4"></a>\u8DD1\u9A6C\u706F\u6548\u679C\u56FE&amp;Demo</h1>
<p><a href="http://jsrun.net/PEfKp"><img src="https://img-blog.csdnimg.cn/20200328112829123.gif" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></a><br>
\u5F88\u7B80\u6D01\u7684\u4E00\u4E2A\u6548\u679C</p>
<h1><a id="_8"></a>\u8DD1\u9A6C\u706F\u4EE3\u7801</h1>
<p><strong>HTML</strong></p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box marquee-line<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u8DD1\u9A6C\u706F\u554A^_^\uFF0C\u70B9\u51FB\u6211\u4E5F\u53EF\u4EE5\u67E5\u770BDemo\u54E6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p><strong>CSS</strong></p>
<pre><code class="prism language-css"><span class="token atrule"><span class="token rule">@keyframes</span> moveLine</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> -100px 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> -100px, <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">5%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> 0px 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> -100px, <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px -100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">30%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> 100% 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> -100px, <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px -100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">35%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> 0px, <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px -100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> 100%, <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, -100px -100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">55%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span>, 100% <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, -100px <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">80%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span>, 0px <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">85%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span>, -100px <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span>, -100px <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px 0px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.marquee-line</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg, <span class="token function">rgba</span><span class="token punctuation">(</span>0,0,0,0<span class="token punctuation">)</span> 0%, #000 100%<span class="token punctuation">)</span>, <span class="token function">linear-gradient</span><span class="token punctuation">(</span>0deg, #000 0%, <span class="token function">rgba</span><span class="token punctuation">(</span>0,0,0,0<span class="token punctuation">)</span> 100%<span class="token punctuation">)</span>, <span class="token function">linear-gradient</span><span class="token punctuation">(</span>-90deg, <span class="token function">rgba</span><span class="token punctuation">(</span>0,0,0,0<span class="token punctuation">)</span> 0%, #000 100%<span class="token punctuation">)</span>, <span class="token function">linear-gradient</span><span class="token punctuation">(</span>0deg, <span class="token function">rgba</span><span class="token punctuation">(</span>0,0,0,0<span class="token punctuation">)</span> 0%, #000 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat, no-repeat, no-repeat, no-repeat<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 100px 4px, 4px 100px, 100px 4px, 4px 100px<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> -100px 1px, <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> -100px, <span class="token function">calc</span><span class="token punctuation">(</span>100% + 100px<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span>, 1px 0px<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> moveLine 8s infinite linear<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px orange<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 280px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u4F60\u6728\u6709\u770B\u9519\uFF0C\u53EA\u6709\u4E00\u4E2ADOM\uFF0C\u5916\u52A0\u4E00\u4E9BCSS\uFF0C\u5C31\u5B9E\u73B0\u4E86\u4E0A\u56FE\u7684\u6548\u679C\u3002</p>
<h1><a id="_66"></a>\u6837\u5F0F\u5206\u6790\u89E3\u91CA</h1>
<p>\u4ECE\u4EE5\u4E0ACSS\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u7684\u6548\u679C\u5229\u7528\u4E86<code>background</code>\u53EF\u4EE5\u8BBE\u7F6E\u591A\u5C42\u80CC\u666F\u7684\u7279\u6027\uFF0C\u8BBE\u7F6E\u56DB\u4E2A\u6E10\u53D8\u7684\u80CC\u666F\uFF0C\u5206\u522B\u5728\u56DB\u4E2A\u89D2\u4E0A\uFF0C\u7136\u540E\u5C31\u662F\u63A7\u5236\u56DB\u6761\u6E10\u53D8\u7EBF\u80CC\u666F\u51FA\u73B0\u7684\u65F6\u673A\u3002\u8FD9\u91CC\u53EA\u9700\u8981\u5199\u4E00\u6B21\uFF0C\u5728\u60F3\u8981\u6709\u8FD9\u4E2A\u6548\u679C\u7684\u5730\u65B9\u4F7F\u7528<code>.marquee-line</code>\u8FD9\u4E2AclassName\u5C31\u884C\u4E86\uFF0C\u4E0D\u8FC7\u4E00\u822C\u4E5F\u5C31\u7528\u5728\u7F51\u7AD9\u7684body\u6807\u7B7E\u4E0A\uFF0C\u56E0\u4E3A\u662F\u4F7F\u7528\u80CC\u666F\u7684\u65B9\u5F0F\uFF0C\u5B83\u4E0D\u4F1A\u906E\u6321\u4EFB\u4F55\u7ECF\u8FC7\u7684\u5143\u7D20\u3002\u552F\u4E00\u4E0D\u8DB3\u7684\u5730\u65B9\u662F\uFF0C\u56E0\u4E3A\u662F\u4F7F\u7528\u7EAFCSS\uFF0C\u5BBD\u9AD8\u7684\u79FB\u52A8\u901F\u7387\u5168\u9760\u5728<code>@keyframes moveLine</code>\u5185\u90E8\u901A\u8FC7\u767E\u5206\u6BD4\u5199\u3002\u6240\u4EE5\u5C31\u4F1A\u9020\u6210\u5728\u4E0D\u540C\u7684\u5BBD\u9AD8\u60C5\u51B5\u4E0B\uFF0C\u901F\u7387\u662F\u4E0D\u4E00\u6837\u7684\u3002\u6574\u4F53\u901F\u5EA6\u662F\u901A\u8FC7\u8BBE\u7F6E<code>animation-duration</code>\uFF0C\u6211\u8FD9\u91CC\u5199\u7684 <code>8s</code>\u3002</p>
<p><strong>\u6700\u540E\u60F3\u8BF4\u7684\u662F\uFF0CCSS\u5F88\u5F3A\u5927\uFF0C\u563F\u563F</strong></p>
<p>\u4EE5\u4E0A\u4EE3\u7801\u5982\u6709\u7591\u95EE\uFF0C\u6B22\u8FCE\u4E0B\u65B9\u8BC4\u8BBA\uFF0C\u8C22\u8C22\u3002</p>
</div>
</body>

</html>
`;export{n as default};
