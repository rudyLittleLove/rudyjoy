var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>iView DatePicker \u7EC4\u4EF6 \u9009\u62E9\u5E74/\u6708 \u4E0B\u62C9\u6846\u5F02\u5E38\u6536\u7F29</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>iView DatePicker \u7EC4\u4EF6 \u9009\u62E9\u5E74/\u6708 \u4E0B\u62C9\u6846\u5F02\u5E38\u6536\u7F29</h3><ul><li><a href="#_1">\u5F15\u8A00</a></li><li><a href="#bug__4">bug \u8BE6\u7EC6\u4FE1\u606F</a></li><li><a href="#bug__7">bug \u51FA\u73B0\u539F\u56E0</a></li><li><a href="#_43">\u7ED3\u8BED</a></li></ul></div><p></p>
<h1><a id="_1"></a>\u5F15\u8A00</h1>
<p>\u4E0A\u5934\u65B0\u5206\u7ED9\u6211\u4E00\u4E2A\u4E4B\u524D\u5EF6\u671F\u5904\u7406\u7684 <code>bug</code>\uFF0C\u5C31\u662F\u6807\u9898\u63CF\u8FF0\u7684 <code>bug</code>\uFF0C<code>iView</code> \u7684 <code>DatePicker</code> \u7EC4\u4EF6\uFF0C\u5728\u9009\u62E9\u5E74\u6216\u8005\u6708\u7684\u60C5\u51B5\u4F1A\u5F02\u5E38\u6536\u7F29\u8D77\u6765\u3002\u6B63\u5E38\u4E0D\u5E94\u8BE5\u6536\u7F29\u8D77\u6765\uFF0C\u56E0\u4E3A\u9009\u62E9\u5E74\u540E\u8FD8\u8981\u9009\u62E9\u6708\u4EFD\uFF0C\u9009\u62E9\u6708\u4EFD\u540E\u8FD8\u8981\u9009\u62E9\u5929\u6570\u3002\u53C2\u7167 <code>iView</code> \u7684 <code>demo</code> \u53D1\u73B0\u7528\u6CD5\u5E76\u65E0\u95EE\u9898\uFF0C\u7B2C\u4E00\u60F3\u5230\u7684\u5C31\u662F\u5F53\u524D\u8FD9\u4E2A\u9879\u76EE\u6709 <code>iView</code> \u7684\u5168\u5C40\u914D\u7F6E \u6216\u8005 \u67D0\u4E9B\u63D2\u4EF6\u529F\u80FD\u51B2\u7A81\uFF08\u9879\u76EE\u662F\u524D\u540C\u4E8B\u5199\u7684\uFF0C\u6211\u4E0D\u77E5\u9053\u6709\u54EA\u4E9B\u5168\u5C40\u914D\u7F6E\uFF09\uFF0C\u6700\u540E\u53D1\u73B0\u662F\u4E00\u4E2A\u5168\u5C40\u914D\u7F6E\u5F71\u54CD\u7684\uFF0C\u800C\u4E14\u8FD9\u7B97\u662F<code>iView</code> \u7684\u4E00\u4E2Abug\uFF0C\u4E0B\u9762\u7528\u56FE\u8BF4\u660E\u4E00\u4E0B\u3002</p>
<h1><a id="bug__4"></a>bug \u8BE6\u7EC6\u4FE1\u606F</h1>
<p><img src="https://img-blog.csdnimg.cn/20200721100116894.gif" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u4ECE\u52A8\u56FE\u5F88\u660E\u663E\u80FD\u770B\u5230bug\u3002</p>
<h1><a id="bug__7"></a>bug \u51FA\u73B0\u539F\u56E0</h1>
<p>\u89E3\u91CA\u4E00\u4E2A <code>:capture="false"</code> \u8FD9\u4E2A<code>capture</code> \u662F <code>iView</code> 4.x \u65B0\u52A0\u7684\u5168\u5C40\u914D\u7F6E\u5C5E\u6027\uFF0C\u539F\u8BDD\u662F<br>
<img src="https://img-blog.csdnimg.cn/20200721100320894.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u9ED8\u8BA4\u503C\u662F <code>true</code> \uFF0C\u6240\u4EE5\u5B98\u65B9 <code>Demo</code> \u5E76\u65E0\u95EE\u9898\uFF0C\u800C\u662F\u5728\u9879\u76EE\u4E2D\uFF08\u4E00\u822C\u662F\u5728<code>main.js</code>\uFF09\u914D\u7F6E\u4E86 <code>iView</code> \u7684\u5168\u5C40\u914D\u7F6E</p>
<pre><code class="prism language-javascript">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>iView<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	capture<span class="token punctuation">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<p>\u8FD9\u7B97\u662F\u4E00\u4E2A <code>iView</code> \u7684bug\uFF0C\u89E3\u51B3\u65B9\u6848\u662F \u5168\u5C40\u7684\u5220\u9664\uFF08\u56E0\u4E3A\u9ED8\u8BA4\u5C31\u662F<code>true</code>\uFF09\uFF0C\u6216\u8005\u5728\u6BCF\u4E2A<code>DatePicker</code>  \u4F7F\u7528\u5904\u6DFB\u52A0 <code>:capture="false"</code></p>
<pre><code class="prism language-javascript"><span class="token operator">&lt;</span>DatePicker type<span class="token operator">=</span><span class="token string">"date"</span> <span class="token punctuation">:</span>capture<span class="token operator">=</span><span class="token string">"trie"</span> placeholder<span class="token operator">=</span><span class="token string">"Select date"</span> style<span class="token operator">=</span><span class="token string">"width: 200px"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>DatePicker<span class="token operator">&gt;</span>
</code></pre>
<p><code>DatePicker</code> \u6E90\u7801\u662F\u8FD9\u6837\u7684\u6700\u5916\u5C42\u6807\u7B7E\u6DFB\u52A0\u4E86\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u867D\u7136\u5176\u4ED6\u4E0B\u62C9\u4E5F\u7528\u5230\u4E86\uFF0C\u4F46\u662F\u6211\u5E76\u6CA1\u6709\u6D4B\u51FA\u95EE\u9898\uFF08\u6709\u5174\u8DA3\u53EF\u4EE5\u53BB\u770B\uFF09\u3002</p>
<pre><code class="prism language-javascript"><span class="token operator">&lt;</span>div
	v<span class="token operator">-</span>click<span class="token operator">-</span>outside<span class="token punctuation">:</span><span class="token punctuation">[</span>capture<span class="token punctuation">]</span><span class="token punctuation">.</span>mousedown<span class="token operator">=</span><span class="token string">"handleClose"</span>
	v<span class="token operator">-</span>click<span class="token operator">-</span>outside<span class="token punctuation">:</span><span class="token punctuation">[</span>capture<span class="token punctuation">]</span><span class="token punctuation">.</span>touchstart<span class="token operator">=</span><span class="token string">"handleClose"</span>
	v<span class="token operator">-</span>click<span class="token operator">-</span>outside<span class="token punctuation">:</span><span class="token punctuation">[</span>capture<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"handleClose"</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre>
<p><code>DatePicker</code> \u7684 <code>props</code> \u6DFB\u52A0\u4E86</p>
<pre><code class="prism language-javascript"> <span class="token comment">// 4.0.0</span>
 capture<span class="token punctuation">:</span> <span class="token punctuation">{</span>
     type<span class="token punctuation">:</span> Boolean<span class="token punctuation">,</span>
     <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">IVIEW</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token constant">IVIEW</span><span class="token punctuation">.</span>capture<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre>
<h1><a id="_43"></a>\u7ED3\u8BED</h1>
<p>\u597D\u4E86\u4EE5\u4E0A\u5C31\u8FD9\u4E48\u591A\uFF0C\u5C0F\u4F19\u4F34\u4EEC\u5728\u4F7F\u7528\u63D2\u4EF6\u65F6\u5B9A\u4F4D\u4E0D\u5230\u95EE\u9898\uFF0C\u53EF\u4EE5\u53BB\u770B\u6E90\u7801\uFF0C\u5176\u5B9E\u6E90\u7801\u5E76\u4E0D\u590D\u6742\uFF0C\u8DDF\u4F60\u81EA\u5DF1\u5199\u7684\u4EE3\u7801\u4E00\u6837\u3002\u89E3\u51B3bug\u5C31\u662F\u8981\u4E86\u89E3\u4ED6\u51FA\u95EE\u9898\u7684\u5730\u65B9\uFF0C\u7B49\u6211\u6709\u7A7A\u5C31\u53BB <code>iView</code> \u4E0A\u63D0 <code>issuse</code>\uFF0C\u4ECA\u5929\u5DE5\u4F5C\u8BB0\u5F55\u5C31\u5206\u4EAB\u5230\u8FD9\u91CC\uFF0C\u6709\u95EE\u9898\uFF0C\u6B22\u8FCE\u7559\u8A00\u8BE2\u95EE\u3002\u563F\u563F</p>
</div>
</body>

</html>
`;export{n as default};
