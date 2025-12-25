var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue-router \u4E0D\u5141\u8BB8\u5BFC\u822A\u5230\u5F53\u524D\u4F4D\u7F6E\uFF08&quot;/path&quot;\uFF09\u9519\u8BEF\u539F\u56E0\u4EE5\u53CA\u4FEE\u590D\u65B9\u5F0F</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>Vue-router \u4E0D\u5141\u8BB8\u5BFC\u822A\u5230\u5F53\u524D\u4F4D\u7F6E\uFF08/path\uFF09</h3><ul><li><a href="#_1">\u62A5\u9519\u63D0\u793A</a></li><li><a href="#_4">\u9519\u8BEF\u539F\u56E0</a></li><li><a href="#_7">\u9519\u8BEF\u6F14\u793A</a></li><li><a href="#_37">\u89E3\u51B3\u65B9\u6CD5</a></li><ul><li><a href="#_38">\u65B9\u6CD5\u4E00</a></li><li><a href="#_55">\u65B9\u6CD5\u4E8C</a></li><li><a href="#_70">\u65B9\u6CD5\u4E09</a></li></ul></ul></div><p></p>
<h1><a id="_1"></a>\u62A5\u9519\u63D0\u793A</h1>
<p><font size="5" color="#d2413e">Navigating to current location ("/path") is not allowed</font><br>
<img src="https://img-blog.csdnimg.cn/2020022415225595.png" alt="Navigating to current location (&quot;/path&quot;) is not allowed"></p>
<h1><a id="_4"></a>\u9519\u8BEF\u539F\u56E0</h1>
<p>\u63A7\u5236\u53F0\u51FA\u73B0\u4EE5\u4E0A\u8FD9\u79CD <code>Navigating to current location ("/path") is not allowed</code> \u65F6\uFF0C\u662F\u56E0\u4E3A\u91CD\u590D\u8FDB\u5165\u4E86\u76F8\u540C\u8DEF\u7531\u3002</p>
<h1><a id="_7"></a>\u9519\u8BEF\u6F14\u793A</h1>
<p>\u4E3A\u4E86\u6F14\u793A\u62A5\u9519\uFF0C\u7528<code>vue-cli</code>\u91CD\u65B0\u6784\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684\u9879\u76EE\uFF0C\u53EA\u7F16\u5199\u4E86\u4E00\u4E2A<code>\u6309\u94AE</code>\u4E00\u4E2A<code>input</code>\u3002<br>
code\uFF1A</p>
<pre><code class="prism language-html"><span class="token comment">&lt;!-- vue\u6A21\u677F\u4EE3\u7801 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>gotoHandle<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5\u8DEF\u7531\u8DF3\u8F6C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>routeName<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<pre><code class="prism language-javascript"><span class="token comment">// \u8DEF\u7531\u8DF3\u8F6C\u4EE3\u7801</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      routeName<span class="token punctuation">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token function">gotoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routeName<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u52A8\u56FE\u6F14\u793A<br>
<img src="https://img-blog.csdnimg.cn/20200224153003425.gif" alt="Navigating to current location (&quot;/path&quot;) is not allowed"><br>
\u5728\u91CD\u590D\u8FDB\u5165\u76F8\u540C\u8DEF\u7531\u65F6\uFF08\u4E0D\u8BBA\u662F\u901A\u8FC7\u8DEF\u5F84\uFF0C\u8FD8\u662F\u8DEF\u7531\u540D\u79F0\u8FDB\u5165\uFF09\uFF0C\u4F1A\u63D0\u793A\u4E0D\u5141\u8BB8\u5BFC\u822A\u5230\u5F53\u524D\u4F4D\u7F6E\uFF08<code>path</code>\uFF09\uFF0C \u5C31\u50CF\u4E0A\u9762\u7684\u4F8B\u5B50\u8FDB\u5165\u8DEF\u7531\u540D\u4E3A<code>About</code>\u7684\u8DEF\u7531\u65F6\uFF0C\u63D0\u793A\u7684\u662F<code>path: "/about"</code>\uFF0C<font size="2" color="#d2413e">Navigating to current location ("/about") is not allowed</font>\u3002\u8FD9\u662F\u56E0\u4E3A\u8DF3\u8F6C\u7684\u65B9\u6CD5\u9519\u8BEF\u65F6\uFF0C\u672A\u6355\u83B7\u9519\u8BEF\u5904\u7406\uFF0C\u56E0\u6B64\u76F4\u63A5\u8F93\u51FA\u4E86\u9519\u8BEF\u4FE1\u606F\u3002</p>
<h1><a id="_37"></a>\u89E3\u51B3\u65B9\u6CD5</h1>
<h2><a id="_38"></a>\u65B9\u6CD5\u4E00</h2>
<p>\u76F4\u63A5\u5728\u8DF3\u8F6C\u62A5\u9519\u7684\u90A3\u4E2A\u5730\u65B9\u52A0\u4E0A<code>.catch(error =&gt; error)</code></p>
<pre><code class="prism language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      routeName<span class="token punctuation">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token function">gotoHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>routeName<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=&gt;</span> error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="_55"></a>\u65B9\u6CD5\u4E8C</h2>
<p>\u4E3A\u8DF3\u8F6C\u9519\u8BEF\u7684\u65B9\u6CD5\u5168\u5C40\u52A0\u4E0A\u9519\u8BEF\u6355\u83B7\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> routerPush <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>push
VueRouter<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>location<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> routerPush<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error <span class="token operator">=&gt;</span> error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u4EE5\u4E0A\u4EE3\u7801\u5728<code>main.js</code>\uFF0C\u6216\u8005<code>router/index.js</code> \u4E0B\u6267\u884C\uFF0C\u4EE5\u53CA<code>new VueRouter</code>\u4E4B\u524D\u4E4B\u540E\u90FD\u4E00\u6837\u3002\u56E0\u4E3A\u662F\u91CD\u7F6E\u7684<code>VueRouter</code>\u539F\u578B\u5BF9\u8C61\u4E0A\u7684<code>push</code>\u4E8B\u4EF6\uFF0C\u7ED9\u539F\u578B\u5BF9\u8C61\u7684<code>push</code>\u4E8B\u4EF6\u6DFB\u52A0\u4E0A\u4E86\u6355\u83B7\u5F02\u5E38\uFF0C\u6240\u4EE5\u4F1A\u901A\u8FC7\u539F\u578B\u94FE\u6539\u53D8\u6240\u6709\u76F8\u5173\u5BF9\u8C61\u3002</p>
<p><code>replace</code> \u65B9\u6CD5\u91CD\u590D\u8DF3\u8F6C\u9519\u8BEF\u4E0E\u4E0A\u65B9\u7C7B\u4F3C\uFF0C\u628A<code>push</code>\u6539\u6210<code>replace</code>\u5C31\u597D\u3002</p>
<h2><a id="_70"></a>\u65B9\u6CD5\u4E09</h2>
<p>\u6B64\u65B9\u6CD5\u4E3A\u5EFA\u8BAE\u65B9\u6CD5\uFF0C\u5EFA\u8BAE\u4F18\u5316\u8DF3\u8F6C\u903B\u8F91\uFF0C\u907F\u514D\u91CD\u590D\u8DF3\u8F6C\u76F8\u540C\u8DEF\u7531\u3002</p>
<p>\u4EE5\u4E0A\u5982\u679C\u9519\u8BEF\u6216\u758F\u6F0F\uFF0C\u6B22\u8FCE\u6307\u6B63\u3002</p>
</div>
</body>

</html>
`;export{n as default};
