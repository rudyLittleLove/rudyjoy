var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vue\u4E2D iframe \u5F15\u5165 \u672C\u5730\u9759\u6001html\u6587\u4EF6\uFF0Cvue-cli2\u4E0Evue-cli3\u5F15\u7528\u7684\u5DEE\u5F02</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>vue\u4E2D iframe \u5F15\u5165 \u672C\u5730\u9759\u6001html\u6587\u4EF6\uFF0Cvue-cli2\u4E0Evue-cli3\u5F15\u7528\u7684\u5DEE\u5F02\u3002</h3><ul><li><a href="#_1">\u5F15\u8A00</a></li><li><a href="#Vuecli_20__3">Vue-cli 2.0 \u6784\u5EFA\u7684\u9879\u76EE\u5F15\u7528</a></li><li><a href="#Vuecli_30__16">Vue-cli 3.0 \u6784\u5EFA\u7684\u9879\u76EE\u5F15\u7528</a></li><li><a href="#_29">\u4E0D\u8003\u8651\u9879\u76EE\u6784\u5EFA\u7248\u672C\u7684\u65B9\u6CD5</a></li><ul><li><a href="#1webpack_30">1.\u5982\u679C\u4F60\u662Fwebpack\u5DE5\u7A0B\u5E08\uFF0C\u4F60\u5C31\u81EA\u5DF1\u914D\u7F6E\u6253\u5305\u65B9\u5F0F\u3002</a></li><li><a href="#2require__33">2.\u4F7F\u7528require() \u5F15\u5165</a></li></ul><li><a href="#_107">\u603B\u7ED3</a></li></ul></div><p></p>
<h1><a id="_1"></a>\u5F15\u8A00</h1>
<p>\u2003\u2003\u5728\u5199\u4E2A\u4EBA\u7F51\u7AD9\u7684\u65F6\u5019\uFF0C\u9700\u8981\u7528\u5230 <code>iframe</code> \u5F15\u7528\u672C\u5730\u9759\u6001\u7684 <code>html</code> \u6587\u4EF6\uFF0C\u53D1\u73B0\u5F15\u7528\u65B9\u5F0F\u7684\u4E00\u4E9B\u5DEE\u5F02\uFF0C\u5728\u6B64\u5206\u4EAB\u4E00\u4E0B\u3002</p>
<h1><a id="Vuecli_20__3"></a>Vue-cli 2.0 \u6784\u5EFA\u7684\u9879\u76EE\u5F15\u7528</h1>
<p>\u5728vue-cli 2.0 \u6784\u5EFA\u7684\u9879\u76EE\u4E2D\uFF0C\u5982\u679C\u8981\u4F7F\u7528 <code>iframe</code> \u5F15\u7528\u672C\u5730\u7684\u9759\u6001 <code>html</code> \u6587\u4EF6\uFF0C\u9759\u6001\u6587\u4EF6\u9700\u8981\u653E\u7F6E\u5728\u548C <code>src</code> \u540C\u7EA7\u7684\u6587\u4EF6\u52A0\u5939 <code>static</code> \u4E2D\u3002<br>
\u5982\u4E0B\u56FE\uFF1A<br>
<img src="https://img-blog.csdnimg.cn/20200508171508313.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u5728\u4F7F\u7528 <code>iframe</code> \u7684\u5730\u65B9\u76F4\u63A5\u5199 <strong>\u201C\u76F8\u5BF9\u8DEF\u5F84\u201D</strong> \u5C31\u884C\uFF0C\u5982\u4E0B\u56FE\uFF1A<br>
<img src="https://img-blog.csdnimg.cn/20200508172317775.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u8FD9\u91CC\u8FD8\u662F\u9700\u8981\u89E3\u91CA\u4E00\u4E0B\uFF0C\u8FD9\u91CC\u7684\u8DEF\u5F84\uFF0C\u5728\u6253\u5305\u540E\u4E0D\u4F1A\u53D8\u5316\u3002\u90FD\u662F\u6839\u636E\u6253\u5305\u540E\u7684\u8DEF\u5F84\u67E5\u627E\u9759\u6001\u6587\u4EF6\uFF0C\u56E0\u6B64\u4E0A\u65B9\u7528 <strong>\u201C\u76F8\u5BF9\u8DEF\u5F84\u201D</strong> \u63CF\u8FF0\u5E76\u4E0D\u51C6\u786E\uFF0C\u800C\u662F\u6253\u5305\u540E\u7684 <strong>\u201C\u76F8\u5BF9\u8DEF\u5F84\u201D</strong>\uFF0C\u770B\u4E0B\u56FE\u5C31\u660E\u767D\u4E86\u3002</p>
<p>\u8FD9\u662F \u6253\u5305\u540E\u7684\u6587\u4EF6\u5C42\u7EA7\u5173\u7CFB<br>
<img src="https://img-blog.csdnimg.cn/20200508172952787.png" alt="\u6253\u5305\u540E\u7684\u6587\u4EF6\u5C42\u7EA7\u5173\u7CFB"><br>
\u8FD9\u91CC\u6211\u5199\u4E86\u5F88\u591A <code>../../../</code>\uFF0C\u6700\u540E\u53D1\u73B0\u771F\u5B9E\u7684\u5F15\u7528\u8DEF\u5F84\u8FD8\u662F <code>http://localhost:8080/static/blog.html</code>\uFF0C\u56E0\u4E3A\u5411\u4E0A\u67E5\u627E\u5DF2\u7ECF\u5230\u6839\u76EE\u5F55\u4E86\uFF0C\u6240\u4EE5\u4E0D\u7BA1\u5199\u591A\u5C11\u4E2A<code>../</code>\uFF0C\u5B9E\u9645\u8DEF\u5F84\u8FD8\u662F<code>http://localhost:8080/static/blog.html</code>\uFF0C\u56E0\u6B64 \u4E0B\u65B9\u8DEF\u5F84\u76F4\u63A5\u5199 <code>./static/blog.html</code> \u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u6839\u636E\u4E0A\u65B9\u6253\u5305\u540E\u7684\u5C42\u7EA7\u5173\u7CFB\u5BF9\u7167\u4E00\u4E0B\u5C31\u660E\u767D\u4E86\u3002<br>
<img src="https://img-blog.csdnimg.cn/20200508173105393.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<h1><a id="Vuecli_30__16"></a>Vue-cli 3.0 \u6784\u5EFA\u7684\u9879\u76EE\u5F15\u7528</h1>
<p>\u5728Vue-cli 3.0 \u6784\u5EFA\u7684\u9879\u76EE\u4E2D\u4F7F\u7528 <code>iframe</code> \u5F15\u7528\u672C\u5730\u9759\u6001 <code>html</code> \u6587\u4EF6\uFF0C\u548C 2.0\u57FA\u672C\u4E00\u6837\uFF0C\u552F\u4E00\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u9759\u6001<code>html</code> \u6587\u4EF6\u4E0D\u662F\u653E\u7F6E\u5728 <code>src</code> \u540C\u7EA7\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u800C\u662F\u653E\u5728 <code>public</code> \u6587\u4EF6\u5939\u4E0B\u3002<br>
\u5982\u4E0B\u56FE\uFF1A<br>
<img src="https://img-blog.csdnimg.cn/20200508174245283.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u7528\u653E\u5728 <code>static</code> \u6587\u4EF6\u5939\u4E0B\u3002<code>public</code> \u6587\u4EF6\u4E0B\u7684\u6587\u4EF6\uFF08\u5305\u62EC\u6587\u4EF6\u5939\uFF09\uFF0C\u6253\u5305\u540E\u7684\u5C42\u7EA7\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u56E0\u6B64\u53EF\u4EE5\u81EA\u5B9A\u4E49\u540D\u79F0\u3002<br>
\u4E0D\u80FD\u6539\u53D8\u7684\u662F\uFF0C\u53EA\u80FD\u653E\u5728<code>public</code> \u6587\u4EF6\u5939\u4E0B\u3002</p>
<p>\u5176\u5B83\u6CE8\u610F\u70B9\u4E0EVue-cli 2.0 \u6784\u5EFA\u7684\u9879\u76EE\u76F8\u540C\uFF0C\u5C31\u4E0D\u4E00\u4E00\u8D58\u8FF0\u3002</p>
<p>\u90A3\u6709\u6CA1\u6709\u968F\u610F\u653E\u5728\u5176\u5B83\u5C42\u7EA7\u8FD8\u80FD\u4F7F\u7528\u7684\u65B9\u6CD5\uFF0C\u800C\u4E14\u4E0D\u9700\u8981\u8003\u8651Vue-cli 2.0 \u8FD8\u662F 3.0 \u6784\u5EFA\u7684\u9879\u76EE\uFF0C\u5176\u5B9E\u4E5F\u662F\u6709\u7684\u3002</p>
<br>
<h1><a id="_29"></a>\u4E0D\u8003\u8651\u9879\u76EE\u6784\u5EFA\u7248\u672C\u7684\u65B9\u6CD5</h1>
<h2><a id="1webpack_30"></a>1.\u5982\u679C\u4F60\u662Fwebpack\u5DE5\u7A0B\u5E08\uFF0C\u4F60\u5C31\u81EA\u5DF1\u914D\u7F6E\u6253\u5305\u65B9\u5F0F\u3002</h2>
<p>\u597D\u5427\uFF0C\u8FD9\u662F\u5E9F\u8BDD</p>
<h2><a id="2require__33"></a>2.\u4F7F\u7528require() \u5F15\u5165</h2>
<p><code>html</code> \u6587\u4EF6\u6211\u653E\u5728\u548C <code>vue</code> \u6587\u4EF6\u540C\u7EA7\uFF0C\u5982\u4E0B\uFF1A<br>
<img src="https://img-blog.csdnimg.cn/20200508180542790.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
<code>Home.vue</code> \u4E2D\u8FD9\u6837\u5199</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>clickHandle<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>switch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>iframe<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ifIframe<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<pre><code class="prism language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      ifIframe<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      iframeData<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./blog.html"</span><span class="token punctuation">)</span>
      <span class="token comment">// src: "./static/blog.html"</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>iframe<span class="token punctuation">.</span>contentDocument<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>iframeData<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token function">clickHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1.\u901A\u8FC7DOM\u64CD\u4F5C\u5207\u6362\u6570\u636E\u6E90\u4FE1\u606F</span>
      <span class="token comment">// \u56E0\u53EF\u80FD\u5728iframe\u5185\u90E8\u70B9\u51FB\u4E86\u5916\u94FE\u4FE1\u606F\uFF0Csrc\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u53EF\u80FD\u5C31\u4E0D\u5C5E\u4E8E\u540C\u6E90\u3002\u4E0D\u540C\u6E90\u5916\u90E8\u5C31\u65E0\u6CD5\u64CD\u4F5Ciframe\u5185\u90E8DOM\uFF0C\u56E0\u6B64\u4F7F\u7528v-if \u5220\u9664DOM\u540E\u518D\u663E\u793A\u6E05\u7A7Asrc\u4FE1\u606F</span>
      <span class="token comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u6E05\u9664\uFF0C\u6BD4\u5982\u7528v-bind \u7ED1\u5B9Asrc</span>
      <span class="token comment">// this.ifIframe = false;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>iframe<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">"src"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// this.ifIframe = true;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>iframe<span class="token punctuation">.</span>contentDocument<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./second.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 2.\u5207\u6362\u8DEF\u5F84\u4FC3\u4F7F\u5207\u6362\u6570\u636E</span>
      <span class="token comment">// this.src = "./static/second.html";</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p>\u4E0A\u9762\u5C31\u662F\u901A\u8FC7 <code>require()</code> \u83B7\u53D6\u5230\u6587\u4EF6\uFF0C\u518D\u7ED9 <code>iframe</code> \u7684 <code>contentDocument.documentElement.innerHTML</code> \u8D4B\u503C\u3002</p>
<p>\u8FD9\u79CD\u65B9\u5F0F\u6709\u4E00\u70B9\u95EE\u9898\u5C31\u662F\uFF0C\u4E0D\u540C\u6E90\u7684 <code>iframe</code> \u65E0\u6CD5\u64CD\u4F5C\u5185\u90E8 <code>Dom</code> \u4FE1\u606F\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528 <code>removeAttribute</code> \u5220\u9664 <code>src</code> \u518D\u8D4B\u503C\uFF0C\u4E0A\u65B9<code>code</code> \u4E2D\u4E5F\u6709\u63CF\u8FF0\u3002</p>
<p>\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u8FD8\u9700\u8981\u5B89\u88C5<code>html-loader</code> \u63D2\u4EF6\uFF0C\u4E0D\u7136<code>require()</code> \u5F15\u5165\u7684\u6587\u4EF6\u65E0\u6CD5\u89E3\u6790\u3002</p>
<p>\u4F7F\u7528\u547D\u4EE4\u5B89\u88C5\uFF1A</p>
<pre><code class="prism language-bash"><span class="token function">npm</span> i html-loader --save-dev
</code></pre>
<p>\u518D\u5728 <code>vue.config.js</code> \u914D\u7F6E\uFF0C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\u7684\u5C31\u81EA\u5DF1\u65B0\u5EFA\u4E00\u4E2A\uFF0C\u653E\u5728\u6700\u5916\u5C42\u3002</p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>module
      <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">"html"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex">/\\.html$/</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"html-loader"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">"html-loader"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<h1><a id="_107"></a>\u603B\u7ED3</h1>
<p>\u597D\u4E86\uFF0C\u4EE5\u4E0A\u5C31\u662F\u5728vue \u9879\u76EE\u4F7F\u7528iframe \u5F15\u7528 \u672C\u5730\u9759\u6001 <code>html</code> \u6587\u4EF6\u7684\u65B9\u6CD5\u3002</p>
<p>\u4E3A\u4E86\u5927\u5BB6\u66F4\u52A0\u5B9E\u9645\u7684\u4F53\u4F1A\uFF0C\u4E0A\u65B9\u7684\u4E24\u4E2A\u4F8B\u5B50\u5199\u4E86\u4E00\u4E2Ademo \u4E0A\u4F20\u5230github\u4E0A\u4E86\uFF0C\u4E0A\u9762\u770B\u4E0D\u61C2\u7684\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u4F8B\u5B50\u53C2\u8003\u3002</p>
<p><a href="https://github.com/rudyLittleLove/vue-cli2.0-iframe-loadhtml">vue-cli2.0 \u6784\u5EFA\u7684\u9879\u76EE\u4F7F\u7528iframe \u5F15\u7528\u672C\u5730\u9759\u6001html\u6587\u4EF6\u7684demo</a><br>
<a href="https://github.com/rudyLittleLove/vue-cli3.0-iframe-loadhtml">vue-cli3.0 \u6784\u5EFA\u7684\u9879\u76EE\u4F7F\u7528iframe \u5F15\u7528\u672C\u5730\u9759\u6001html\u6587\u4EF6\u7684demo</a></p>
</div>
</body>

</html>
`;export{n as default};
