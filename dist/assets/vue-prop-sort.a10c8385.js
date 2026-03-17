var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vue \u7EC4\u4EF6\u9009\u9879\u7684\u63A8\u8350\u987A\u5E8F \u4E0E \u81EA\u52A8\u6392\u5E8F</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>vue \u7EC4\u4EF6\u9009\u9879\u7684\u63A8\u8350\u987A\u5E8F \u4E0E \u81EA\u52A8\u6392\u5E8F</h3><ul><li><a href="#vue_2">\u8F6C\u8F7D\u4E00\u4E0Bvue\u63A8\u8350\u987A\u5E8F</a></li><li><a href="#_eslint__93">\u4F7F\u7528 eslint \u81EA\u52A8\u6392\u5E8F</a></li></ul></div><br>
\u4E00\u76F4\u4EE5\u6765\u4F7F\u7528vue\u5F00\u53D1\uFF0C\u9664\u4E86\u77E5\u9053\u751F\u547D\u5468\u671F\u7684 hook \u51FD\u6570\u987A\u5E8F\uFF0C\u5176\u4ED6\u9009\u9879\u7684\u987A\u5E8F\u4E0D\u77E5\u9053\u662F\u5426\u6709\u89C4\u8303\u3002\u540E\u6765\u770B\u4E86vue\u7684\u98CE\u683C\u6307\u5357\uFF0C\u91CC\u9762\u7684\u9009\u9879\u662F\u6709\u63A8\u8350\u987A\u5E8F\u7684\uFF0C\u4E5F\u627E\u4E86\u4E00\u4E0B\u5982\u4F55\u81EA\u52A8\u6392\u5E8F\uFF0C\u4ECA\u5929\u5C31\u5206\u4EAB\u4E00\u4E0B\u3002<p></p>
<h1><a id="vue_2"></a>\u8F6C\u8F7D\u4E00\u4E0Bvue\u63A8\u8350\u987A\u5E8F</h1>
<p>\u5148\u53D1\u4E2A <a href="https://cn.vuejs.org/v2/style-guide/index.html#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%80%89%E9%A1%B9%E7%9A%84%E9%A1%BA%E5%BA%8F%E6%8E%A8%E8%8D%90">Vue \u98CE\u683C\u6307\u5357 \u9009\u9879\u63A8\u8350\u987A\u5E8F \u5730\u5740</a></p>
<h4>\u7EC4\u4EF6/\u5B9E\u4F8B\u7684\u9009\u9879\u5E94\u8BE5\u6709\u7EDF\u4E00\u7684\u987A\u5E8F\u3002</h4><h4>
</h4><p><font size="4">\u8FD9\u662F\u6211\u4EEC\u63A8\u8350\u7684\u7EC4\u4EF6\u9009\u9879\u9ED8\u8BA4\u987A\u5E8F\u3002\u5B83\u4EEC\u88AB\u5212\u5206\u4E3A<strong>\u51E0\u5927\u7C7B</strong>\uFF0C\u6240\u4EE5\u4F60\u4E5F\u80FD\u77E5\u9053\u4ECE\u63D2\u4EF6\u91CC\u6DFB\u52A0\u7684\u65B0 property \u5E94\u8BE5\u653E\u5230\u54EA\u91CC\u3002</font></p>
<p><strong>\u526F\u4F5C\u7528</strong> (\u89E6\u53D1\u7EC4\u4EF6\u5916\u7684\u5F71\u54CD)</p>
<p><font color="orange">\u2605</font> <code>el</code></p>
<p><strong>\u5168\u5C40\u611F\u77E5</strong> (\u8981\u6C42\u7EC4\u4EF6\u4EE5\u5916\u7684\u77E5\u8BC6)</p>
<p><font color="orange">\u2605</font> <code>name</code></p>
<p><font color="orange">\u2605</font> <code>parent</code></p>
<p><strong>\u7EC4\u4EF6\u7C7B\u578B</strong> (\u66F4\u6539<strong>\u7EC4\u4EF6\u7684\u7C7B\u578B</strong>)</p>
<p><font color="orange">\u2605</font> <code>functional</code></p>
<p><strong>\u6A21\u677F\u4FEE\u6539\u5668</strong> (\u6539\u53D8\u6A21\u677F\u7684\u7F16\u8BD1\u65B9\u5F0F)</p>
<p><font color="orange">\u2605</font> <code>delimiters</code></p>
<p><font color="orange">\u2605</font> <code>comments</code></p>
<p><strong>\u6A21\u677F\u4F9D\u8D56</strong> (\u6A21\u677F\u5185\u4F7F\u7528\u7684\u8D44\u6E90)</p>
<p><font color="orange">\u2605</font> <code>components</code></p>
<p><font color="orange">\u2605</font> <code>directives</code></p>
<p><font color="orange">\u2605</font> <code>filters</code></p>
<p><strong>\u7EC4\u5408</strong> (\u5411\u9009\u9879\u91CC\u5408\u5E76 property)</p>
<p><font color="orange">\u2605</font> <code>extends</code></p>
<p><font color="orange">\u2605</font> <code>mixins</code></p>
<p><strong>\u63A5\u53E3</strong> (\u7EC4\u4EF6\u7684\u63A5\u53E3)</p>
<p><font color="orange">\u2605</font> <code>inheritAttrs</code></p>
<p><font color="orange">\u2605</font> <code>model</code></p>
<p><font color="orange">\u2605</font> <code>props</code> / <code>propsData</code></p>
<p><strong>\u672C\u5730\u72B6\u6001</strong> (\u672C\u5730\u7684\u54CD\u5E94\u5F0F property)</p>
<p><font color="orange">\u2605</font> <code>data</code></p>
<p><font color="orange">\u2605</font> <code>computed</code></p>
<p><strong>\u4E8B\u4EF6</strong> (\u901A\u8FC7\u54CD\u5E94\u5F0F\u4E8B\u4EF6\u89E6\u53D1\u7684\u56DE\u8C03)</p>
<p>\u2003<font color="orange">\u2605</font> <code>watch</code></p>
<p>\u2003<strong>\u751F\u547D\u5468\u671F\u94A9\u5B50</strong> (\u6309\u7167\u5B83\u4EEC\u88AB\u8C03\u7528\u7684\u987A\u5E8F)</p>
<p>\u2003<font color="orange">\u2605</font> <code>beforeCreate</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>created</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>beforeMount</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>mounted</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>beforeUpdate</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>updated</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>activated</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>deactivated</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>beforeDestroy</code></p>
<p>\u2003<font color="orange">\u2605</font> <code>destroyed</code></p>
<p><strong>\u975E\u54CD\u5E94\u5F0F\u7684 property</strong> (\u4E0D\u4F9D\u8D56\u54CD\u5E94\u7CFB\u7EDF\u7684\u5B9E\u4F8B property)</p>
<p><font color="orange">\u2605</font> <code>methods</code></p>
<p><strong>\u6E32\u67D3</strong> (\u7EC4\u4EF6\u8F93\u51FA\u7684\u58F0\u660E\u5F0F\u63CF\u8FF0)</p>
<p><font color="orange">\u2605</font> <code>template</code> / <code>render</code></p>
<p><font color="orange">\u2605</font> <code>renderError</code></p>
<h1><a id="_eslint__93"></a>\u4F7F\u7528 eslint \u81EA\u52A8\u6392\u5E8F</h1>
<p>\u5982\u679C\u662F\u7528 <code>vue-cli3.0</code> \u6784\u5EFA\u7684\u9879\u76EE\uFF0C\u9009\u62E9\u4F7F\u7528eslint \u7684\u8BDD\u4F1A\u9ED8\u8BA4\u5B89\u88C5 <code>eslint-plugin-vue</code> \u8FD9\u4E2A\u4F9D\u8D56\u9879</p>
<p>\u5982\u679C\u6CA1\u6709\u5C31\u5B89\u88C5\u4E00\u4E0B</p>
<pre><code class="prism language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-vue --save-dev
</code></pre>
<p>\u63A5\u7740\u5C31\u662F\u5728 <code>.eslintrc.js</code> \u4E2D\u914D\u7F6E\uFF0C\u5982\u679C\u7528 <code>vue-cli3.0</code> \u6784\u5EFA\u9879\u76EE\u9009\u62E9\u4E86 <code>In dedicated config files</code> \uFF0C\u5C31\u4F1A\u751F\u6210 <code>.eslintrc.js</code>\uFF0C\u9009\u62E9 <code>In package.json</code> \u89C4\u5219\u5C31\u5728<code>package.json</code> \u4E2D\u7684 <code>eslintConfig</code> \u8FD9\u4E2A\u5C5E\u6027\u4E0A\u914D\u7F6E</p>
<p>\u5728\u4EE5\u4E0A\u8BF4\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 <code>extends</code> \u8FD9\u4E2A\u6570\u7EC4\u4E2D\u52A0\u5165 <code>plugin:vue/recommended</code></p>
<pre><code class="prism language-javascript"><span class="token string">"extends"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
  <span class="token string">"plugin:vue/essential"</span><span class="token punctuation">,</span>
  <span class="token string">"plugin:vue/recommended"</span><span class="token punctuation">,</span> <span class="token comment">// \u6DFB\u52A0\u4E86\u8FD9\u4E00\u9879</span>
  <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
  <span class="token string">"@vue/prettier"</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre>
<p>\u597D\u4E86\uFF0C\u5C31\u8FD9\u4E48\u7B80\u5355\uFF0C\u4FDD\u5B58\u65F6\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u6709\u4E86\u81EA\u52A8\u683C\u5F0F\u5316\u6392\u5E8F\u7684\u529F\u80FD\u4E86</p>
<p>\u4E0D\u60F3\u4F7F\u7528\u63D2\u4EF6\u63A8\u8350\u7684\u987A\u5E8F\uFF0C\u60F3\u81EA\u5DF1\u5B9A\u987A\u5E8F\uFF0C\u4E5F\u53EF\u4EE5</p>
<p>\u5728 <code>eslint</code> \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 <code>rules</code> \u5C5E\u6027\u4E0B\u6DFB\u52A0</p>
<pre><code class="prism language-javascript">rules<span class="token punctuation">:</span> <span class="token punctuation">{</span>
 <span class="token string">"vue/order-in-components"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
   <span class="token string">"error"</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
     <span class="token string">"order"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
       <span class="token string">"el"</span><span class="token punctuation">,</span>
       <span class="token string">"name"</span><span class="token punctuation">,</span>
       <span class="token string">"key"</span><span class="token punctuation">,</span>
       <span class="token string">"parent"</span><span class="token punctuation">,</span>
       <span class="token string">"functional"</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token string">"delimiters"</span><span class="token punctuation">,</span> <span class="token string">"comments"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token string">"components"</span><span class="token punctuation">,</span> <span class="token string">"directives"</span><span class="token punctuation">,</span> <span class="token string">"filters"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token string">"extends"</span><span class="token punctuation">,</span>
       <span class="token string">"mixins"</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token string">"provide"</span><span class="token punctuation">,</span> <span class="token string">"inject"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token string">"ROUTER_GUARDS"</span><span class="token punctuation">,</span>
       <span class="token string">"layout"</span><span class="token punctuation">,</span>
       <span class="token string">"middleware"</span><span class="token punctuation">,</span>
       <span class="token string">"validate"</span><span class="token punctuation">,</span>
       <span class="token string">"scrollToTop"</span><span class="token punctuation">,</span>
       <span class="token string">"transition"</span><span class="token punctuation">,</span>
       <span class="token string">"loading"</span><span class="token punctuation">,</span>
       <span class="token string">"inheritAttrs"</span><span class="token punctuation">,</span>
       <span class="token string">"model"</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token string">"props"</span><span class="token punctuation">,</span> <span class="token string">"propsData"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token string">"emits"</span><span class="token punctuation">,</span>
       <span class="token string">"setup"</span><span class="token punctuation">,</span>
       <span class="token string">"fetch"</span><span class="token punctuation">,</span>
       <span class="token string">"asyncData"</span><span class="token punctuation">,</span>
       <span class="token string">"data"</span><span class="token punctuation">,</span>
       <span class="token string">"head"</span><span class="token punctuation">,</span>
       <span class="token string">"computed"</span><span class="token punctuation">,</span>
       <span class="token string">"watch"</span><span class="token punctuation">,</span>
       <span class="token string">"watchQuery"</span><span class="token punctuation">,</span>
       <span class="token string">"LIFECYCLE_HOOKS"</span><span class="token punctuation">,</span>
       <span class="token string">"methods"</span><span class="token punctuation">,</span>
       <span class="token punctuation">[</span><span class="token string">"template"</span><span class="token punctuation">,</span> <span class="token string">"render"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token string">"renderError"</span>
     <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u4FEE\u6539 <code>order</code> \u6570\u7EC4\u91CC\u9762\u9009\u9879\u987A\u5E8F\uFF0C\u683C\u5F0F\u5316\u7684\u65F6\u5019\uFF0C\u5C31\u81EA\u52A8\u6309\u7167\u4F60\u4E66\u5199\u7684\u987A\u5E8F\u683C\u5F0F\u5316</p>
<p>\u7528\u56FE\u4E3E\u4E2A\u4F8B\u5B50<br>
<img src="https://img-blog.csdnimg.cn/20200610145717834.gif" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4FEE\u6539\u4E86 <code>watch</code> \u7684\u987A\u5E8F \u5728 <code>data</code>  \u7684\u4E0A\u65B9\u548C\u4E0B\u65B9\uFF0C\u5728 <code>vue</code> \u6587\u4EF6\u4E2D\u4FDD\u5B58\u65F6\uFF0C\u81EA\u52A8\u683C\u5F0F\u5316\u4E86\u987A\u5E8F\u3002</p>
<p>\u5BF9\u4E8E <code>vue</code> \u7EC4\u4EF6\u9009\u9879\u63A8\u8350\u987A\u5E8F\u4E0E\u81EA\u52A8\u6392\u5E8F\u5C31\u5206\u4EAB\u5230\u8FD9\u91CC\uFF0C\u60F3\u4E86\u89E3\u914D\u7F6E\u66F4\u591A\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u70B9\u8FD9\u4E2A \u94FE\u63A5 <a href="https://eslint.vuejs.org/rules/">eslint-plugin-vue</a> \uFF0C\u5B66\u4E60\u914D\u7F6E\u66F4\u591A\u529F\u80FD\u3002</p>
<p>\u4EE5\u4E0A\u4FE1\u606F\u5982\u6709\u758F\u6F0F\u6216\u9519\u8BEF\uFF0C\u6B22\u8FCE\u6307\u6B63\u54C8</p>
</div>
</body>

</html>
`;export{n as default};
