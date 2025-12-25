var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u6DF1\u5165\u7406\u89E3CSS\u4E4B \u5982\u4F55\u4F7F\u5B50\u5143\u7D20\u6491\u5BBD \u8BBE\u7F6E\u4E86 block \u7684\u7236\u5143\u7D20</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>\u6DF1\u5165\u7406\u89E3CSS\u4E4B \u5982\u4F55\u4F7F\u5B50\u5143\u7D20\u6491\u5BBD \u8BBE\u7F6E\u4E86display: block; \u7684\u7236\u5143\u7D20</h3><ul><li><a href="#_2">\u5148\u5199\u4E00\u4E2A\u6A21\u677F\uFF0C\u665A\u70B9\u518D\u5410\u69FD</a></li><li><a href="#_36">\u5410\u69FD</a></li><li><a href="#___68">\u5B9E\u73B0\u539F\u7406 \u4E0E \u66F4\u591A\u652F\u6301\u7684\u5C5E\u6027</a></li><li><a href="#___86">\u4E0D\u60F3\u4F7F\u7236\u7EA7\u7684 \u5757 \u5C5E\u6027\u6D88\u5931\u600E\u4E48\u529E</a></li><li><a href="#_104">\u8FD9\u79CD\u5C5E\u6027\u89C4\u5219\u6709\u4EC0\u4E48\u4F5C\u7528\u5462</a></li></ul></div><p></p>
<h1><a id="_2"></a>\u5148\u5199\u4E00\u4E2A\u6A21\u677F\uFF0C\u665A\u70B9\u518D\u5410\u69FD</h1>
<p>HTML</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>wrap<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grandpa<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>father<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u4E00\u4E2A\u5B50\u5143\u7D20\uFF0C\u6211\u8981\u5199\u5F88\u591A\u5B57\u628A\u5BBD\u5EA6\u6491\u5F00\uFF0C\u6211\u8981\u5199\u5F88\u591A\u5B57\u628A\u5BBD\u5EA6\u6491\u5F00\uFF0C\u6211\u8981\u5199\u5F88\u591A\u5B57\u628A\u5BBD\u5EA6\u6491\u5F00\uFF0C\u6211\u8981\u5199\u5F88\u591A\u5B57\u628A\u5BBD\u5EA6\u6491\u5F00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>CSS</p>
<pre><code class="prism language-css"><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px 1px #000000<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.grandpa</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px 1px peru<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px 1px royalblue<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u6548\u679C\u56FE<br>
<img src="https://img-blog.csdnimg.cn/20200605111015899.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<h1><a id="_36"></a>\u5410\u69FD</h1>
<p>\u53EF\u80FD\u770B\u5230\u8FD9\u4E2A\u6807\u9898\u7684\u5E76\u4E14\u61C2\u4E00\u70B9 <code>css</code> \u7684\u5C0F\u4F19\u4F34\u5C31\u8981\u7B11\u4E86\uFF0C\u5B50\u5143\u7D20\u79F0\u5BBD\u7236\u5143\u7D20\u4E0D\u662F\u5F88\u7B80\u5355\u5417\u3002</p>
<p>\u53EA\u9700\u8981\u8BBE\u7F6E\u7236\u5143\u7D20 <code>display</code> \u4E3A <code>inline-block</code>, \u6216\u8005 \u8BBE\u7F6E <code>float: left</code> \u5E76\u6E05\u9664\u4E00\u4E0B\u6D6E\u52A8\u5F71\u54CD\u5C31\u884C\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u3002</p>
<pre><code class="prism language-css"><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><img src="https://img-blog.csdnimg.cn/20200605111338826.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<pre><code class="prism language-css"><span class="token selector">.father</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span> <span class="token comment">/* \u672A\u6E05\u9664\u6D6E\u52A8 */</span>
<span class="token punctuation">}</span>
</code></pre>
<p><img src="https://img-blog.csdnimg.cn/20200605111443487.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<p>\u6216\u8005\u5BF9 <code>css</code> \u7406\u89E3\u66F4\u6DF1\u5165\u7684\u5C0F\u4F19\u4F34\u4E5F\u4F1A\u60F3</p>
<p>\u4E5F\u53EF\u4EE5\u8BBE\u7F6E \u7237\u7237\uFF08\u7236\u5143\u7D20\u7684\u7236\u5143\u7D20\uFF09 \u5143\u7D20 <code>display</code> \u4E3A <code>flex</code> \u6216\u8005 <code>grid</code>\uFF0C\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u3002</p>
<pre><code class="prism language-css"><span class="token selector">.grandpa</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<pre><code class="prism language-css"><span class="token selector">.grandpa</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><img src="https://img-blog.csdnimg.cn/20200605112014991.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<h1><a id="___68"></a>\u5B9E\u73B0\u539F\u7406 \u4E0E \u66F4\u591A\u652F\u6301\u7684\u5C5E\u6027</h1>
<p>\u4E0A\u9762\u7684\u5C5E\u6027\u4E0D\u7BA1\u662F<code>.father</code> \u8BBE\u7F6E <code>display: inline-block</code> \u6216 <code>float: left;</code> \uFF0C</p>
<p>\u8FD8\u662F <code>.grandpa</code> \u8BBE\u7F6E <code>display: flex;</code> \u6216 <code>display: grid;</code></p>
<p>\u90FD\u662F\u4F7F <code>.father</code> \u8FD9\u4E2A<code>DOM</code> \u6700\u5927\u5BBD\u5EA6\u4E0D\u53D7 <code>.grandpa</code> \u9650\u5236\uFF0C</p>
<p>\u552F\u4E00\u7684\u533A\u522B\u662F\u6BCF\u4E2A\u5C5E\u6027\u8FD8\u5E26\u6709\u5176\u4ED6\u4E2A\u6027\u7684\u6837\u5F0F\uFF0C</p>
<p>\u6BD4\u5982 \u8BBE\u7F6E\u4E86 <code>float</code> \u9ED8\u8BA4\u5C31\u65E0\u6CD5\u6491\u5F00\u9AD8\u5EA6</p>
<p>\u8BBE\u7F6E\u4E86 <code>display: grid</code> \u5373\u4F7F\u6587\u672C\u8FC7\u5C11\uFF0C<code>.father</code> \u7684\u5BBD\u5EA6\u9ED8\u8BA4\u4E0E<code>.grandpa</code> \u76F8\u540C</p>
<p>\u53EA\u8981\u6EE1\u8DB3 <code>.father</code> \u81EA\u52A8\u5BBD\u5EA6 \u4E0D\u53D7 <code>.grandpa</code> \u6700\u5927\u5BBD\u5EA6\u9650\u5236\u5C31\u80FD\u5B9E\u73B0\u8FD9\u4E2A\u6548\u679C\u7684\u8BDD\uFF0C<code>display</code> \u7684\u5F88\u591A\u5C5E\u6027\u90FD\u80FD\u5B9E\u73B0\u3002</p>
<p>\u6BD4\u5982\uFF1A <code>inline-flex</code>, <code>inline-table</code>, <code>inline-grid</code>, <code>table</code>, <code>table-captioin</code>, <code>table-cell</code> \u2026\uFF0C\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u3002<br>
<img src="https://img-blog.csdnimg.cn/20200605114815430.gif" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<h1><a id="___86"></a>\u4E0D\u60F3\u4F7F\u7236\u7EA7\u7684 \u5757 \u5C5E\u6027\u6D88\u5931\u600E\u4E48\u529E</h1>
<p>\u6709\u65F6\u5019\u6211\u4EEC\u770B\u6587\u6863\u7684\u65F6\u5019\uFF0C\u53EA\u4ECE\u63CF\u8FF0\u4E2D\u65E0\u6CD5\u6DF1\u5165\u7684\u4E86\u89E3\u5C5E\u6027\u3002\u6BD4\u5982\u8FD9\u91CC\u7684\u5B50\u5143\u7D20\u6491\u5F00\u7236\u5143\u7D20\uFF0C\u6211\u4EEC\u7B2C\u4E00\u53CD\u5E94\u5C31\u662F\u66F4\u6539\u7236\u5143\u7D20\u7684\u5757\u5C5E\u6027\u3002</p>
<p>\u9690\u85CF\u5C5E\u6027\u5C31\u662F\uFF0C\u7236\u5143\u7D20\u662F\u5757\uFF0C\u4F46\u662F\u672A\u8BBE\u7F6E\u8FC7 <code>width</code> \u548C <code>max-width</code> , \u5B50\u5143\u7D20\u80FD\u6491\u5F00\u7684\u6700\u5927\u5BBD\u5EA6\u5C31\u662F\u6700\u8FD1\u4E00\u4E2A\u8BBE\u7F6E\u8FC7\u5BBD\u5EA6\u7684\u7956\u5148\u5143\u7D20\uFF0C\u800C\u4E0D\u662F\u53EA\u662F\u7236\u5143\u7D20\u3002\u8FD8\u7528\u4E0A\u9762\u7684\u6A21\u677F\u4E3E\u4E2A\u4F8B\u5B50</p>
<pre><code class="prism language-css"><span class="token selector">.grandpa</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><img src="https://img-blog.csdnimg.cn/20200605115730354.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C31\u53EF\u4EE5\u770B\u5230\uFF0C\u7237\u7237\u5143\u7D20\u8BBE\u7F6E\u4E86 <code>display: inline-block</code> \uFF0C\u7236\u4EB2\u5143\u7D20 \u8FD8\u662F \u5757 \u5143\u7D20\u3002\u4F46\u662F\u5B50\u5143\u7D20\u4F1A\u8FDE\u5E26\u7236\u5143\u7D20\u548C\u7237\u7237\u5143\u7D20\u4E00\u8D77\u6491\u5BBD\u3002</p>
<p>\u5982\u679C\u662F\u5728 <code>.wrap</code> \u8FD9\u4E2A<code>DOM</code> \u4E0A\u8BBE\u7F6E <code>display: inline-block</code> \uFF0C\u7236\u5143\u7D20\u548C\u7237\u7237\u5143\u7D20\u8FD8\u662F\u4E0D\u8FC7\u8D85\u8FC7 <code>.wrap</code> \u7684\u5BBD\u5EA6\u3002</p>
<p>\u8FD9\u5C31\u662F\u4E0A\u9762\u8BF4\u5230\u7684 \u5B50\u5143\u7D20\u80FD\u6491\u5F00\u7684\u6700\u5927\u5BBD\u5EA6\u5C31\u662F\u6700\u8FD1\u4E00\u4E2A\u8BBE\u7F6E\u8FC7\u5BBD\u5EA6\uFF08\u6700\u5927\u5BBD\u5EA6\uFF09\u7684\u7956\u5148\u5143\u7D20\u3002</p>
<h1><a id="_104"></a>\u8FD9\u79CD\u5C5E\u6027\u89C4\u5219\u6709\u4EC0\u4E48\u4F5C\u7528\u5462</h1>
<p>\u5982\u679C\u662F\u5199\u4E00\u4E2A\u6811\uFF0C\u5B50\u5143\u7D20\u90FD\u9700\u8981\u5757\u5360\u636E\u4E00\u884C\uFF0C\u4F46\u662F\u5B50\u8981\u6491\u5F00\u7236\u5143\u7D20\uFF0C\u53EA\u9700\u8981\u4E2D\u95F4\u7684\u5757\u5143\u7D20\u4E0D\u8BBE\u7F6E\u5BBD\u5EA6\u3002</p>
<p>\u6700\u4E0A\u5C42\u5143\u7D20\u8BBE\u7F6E\u4E0A\u9762\u63D0\u5230\u7684\u4EFB\u610F\u4E0D\u53D7\u7236\u6700\u5927\u5BBD\u5EA6\u9650\u5236\u7684\u5C5E\u6027\uFF0C\u90FD\u53EF\u4EE5\u6491\u5BBD\u6811\u6574\u4F53\u5BBD\u5EA6\u3002\u4ECE\u800C\u51FA\u73B0\u6A2A\u5411\u6EDA\u52A8\u6761\u3002</p>
<p>\u6709\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u770B\u770B <a href="https://zdy1988.github.io/vue-jstree/">v-jstree demo</a> \u5C31\u662F\u8BBE\u7F6E\u9876\u5C42\u5143\u7D20 <code>display: inline-block</code>\uFF0C\u4F7F\u6A2A\u5411\u6EDA\u52A8\u6761\u51FA\u73B0\u7684\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u63D2\u4EF6\u9876\u5C42\u5143\u7D20 \u9ED8\u8BA4\u5E76\u4E0D\u662F<code>display: inline-block</code> \uFF0C\u4E0D\u8981\u5FD8\u4E86\u624B\u52A8\u8BBE\u7F6E\u3002</p>
<p>css \u9690\u85CF\u89C4\u5219\u6709\u5F88\u591A\uFF0C\u5927\u5BB6\u4F19\u591A\u7528\u7528\u5C31\u77E5\u9053\u4E86\uFF0C\u6BD4\u5982\u524D\u51E0\u5929 \u5F20\u946B\u65ED \u53D1\u7684\u4E00\u7BC7\u535A\u5BA2 \u4F7F\u7528 <code>columns</code> \u5C5E\u6027\uFF0C\u4E0D\u5355\u80FD\u76F4\u63A5\u5206\u5272\u6587\u672C\uFF0C\u8FD8\u80FD\u5206\u5272\u6807\u7B7E\uFF08\u867D\u7136\u6709\u8F83\u591A\u9650\u5236\uFF09\u3002</p>
<p>\u4EE5\u4E0A\u5206\u4EAB\u5982\u679C\u758F\u6F0F\u6216\u9519\u8BEF\u6B22\u8FCE\u6307\u6B63\u3002</p>
</div>
</body>

</html>
`;export{n as default};
