var s=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS \u9884\u7F16\u8BD1\u8BED\u8A00 \u53D8\u91CF\u5168\u5C40\u5F15\u7528\u65B9\u5F0F vue-cli@3.0  stylus/sass/less \u4F7F\u7528\u65B9\u6CD5</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>CSS \u9884\u7F16\u8BD1\u8BED\u8A00 \u53D8\u91CF\u5168\u5C40\u5F15\u7528\u65B9\u5F0F vue-cli@3.0  stylus/sass/less \u4F7F\u7528\u65B9\u6CD5</h3><ul><li><a href="#_2">\u5F15\u8A00</a></li><li><a href="#stylus_7">stylus\u7BC7</a></li><ul><li><a href="#stylusvue_8">stylus\u6587\u4EF6\u4E0Evue\u7EC4\u4EF6\u6837\u5F0F\u4EE3\u7801</a></li><li><a href="#stylus__23">stylus \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E00</a></li><li><a href="#stylus__38">stylus \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E8C</a></li><li><a href="#stylus__61">stylus \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E09</a></li></ul><li><a href="#sassscss_80">sass/scss\u7BC7</a></li><ul><li><a href="#sassscssvue_81">sass/scss\u6587\u4EF6\u4E0Evue\u7EC4\u4EF6\u6837\u5F0F\u4EE3\u7801</a></li><li><a href="#sass__96">sass \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E00</a></li><li><a href="#sass__119">sass \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E8C</a></li><li><a href="#sass__159">sass \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E09</a></li></ul><li><a href="#less_178">less\u7BC7</a></li><ul><li><a href="#lessvue_179">less\u6587\u4EF6\u4E0Evue\u7EC4\u4EF6\u6837\u5F0F\u4EE3\u7801</a></li><li><a href="#less__197">less \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E00</a></li><li><a href="#less__214">less \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E8C</a></li><li><a href="#less__237">less \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E09</a></li></ul><li><a href="#_254">\u603B\u7ED3</a></li><ul><li><a href="#_255">\u95EE\u9898</a></li></ul></ul></div><p></p>
<h1><a id="_2"></a>\u5F15\u8A00</h1>
<p>\u7F51\u4E0A\u76F8\u5173\u535A\u5BA2\u4E0E\u6559\u7A0B\u5F88\u591A\uFF0C\u4F46\u662F\u89E3\u51B3\u65B9\u5F0F\u6709\u4E9B\u4E0D\u660E\u786E\uFF0C\u5728\u6B64\u7EDF\u4E00\u603B\u7ED3\u4E00\u4E0Bsass\u3001stylus\u3001less\u9884\u7F16\u8BD1css\u5168\u5C40\u5F15\u7528\u65B9\u6CD5\uFF0C\u6BCF\u4E2A\u5747\u4ECB\u7ECD\u4E09\u79CD\u65B9\u6848\uFF0C\u7686\u4E3A\u672C\u4EBA\u5B9E\u6D4B\uFF0C\u4EE5\u4E0B\u65B9\u6848\u4E3Avue-cli@3.0\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4F7F\u7528\u8F83\u4F4E\u7248\u672C\u7684\u524D\u7AEF\u670B\u53CB\u53EF\u4EE5\u53C2\u8003\uFF0C\u672C\u4EBA\u7CBE\u529B\u6709\u9650\uFF0C\u6682\u65F6\u5C31\u53EA\u63D0\u4F9B3.0\u7248\u672C\u89E3\u51B3\u65B9\u6848\u3002</p>
<p><strong>\u56E0\u4E3A\u6709\u7684\u5C0F\u4F19\u4F34\u6709\u4E00\u79CD\u6216\u591A\u79CD\u65B9\u6CD5\u4E0D\u751F\u6548\uFF0C\u56E0\u6B64\u5199\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u53EF\u4EE5\u901A\u8FC7github\u4E0B\u8F7D\uFF0Csass\u3001less\u3001stylus\u7684\u4E09\u79CD\u65B9\u6848\u90FD\u6709</strong><br>
\u4EE3\u7801\u5730\u5740\uFF1A<a href="https://github.com/rudyLittleLove/global-variable">https://github.com/rudyLittleLove/global-variable</a></p>
<h1><a id="stylus_7"></a>stylus\u7BC7</h1>
<h2><a id="stylusvue_8"></a>stylus\u6587\u4EF6\u4E0Evue\u7EC4\u4EF6\u6837\u5F0F\u4EE3\u7801</h2>
<pre><code class="prism language-css"><span class="token comment">/* variable.styl*/</span>
$color = #00ffff
</code></pre>
<pre><code class="prism language-javascript"><span class="token comment">// vue\u7EC4\u4EF6\u5185\u7684style\u6807\u7B7E\uFF0C\u5C06\u8981\u4F7F\u7528\u4E0A\u8FF0\u53D8\u91CF\u7684\u5730\u65B9</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"stylus"</span><span class="token operator">&gt;</span>
<span class="token punctuation">.</span>stylus
  <span class="token operator">&gt;</span> div
    color $color
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre>
<h2><a id="stylus__23"></a>stylus \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E00</h2>
<p>\u4F7F\u7528<strong>css.loaderOptions</strong></p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  css<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    loaderOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      stylus<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">import</span><span class="token punctuation">:</span> <span class="token string">"~@/assets/variable.styl"</span>
        <span class="token comment">// import: ["~@/assets/variable.styl", "~@/assets/variable2.styl"]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="stylus__38"></a>stylus \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E8C</h2>
<p>\u4F7F\u7528<strong>chainWebpack</strong><br>
\u9700\u8981\u5B89\u88C5 <strong>style-resources-loader</strong> \u63D2\u4EF6</p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> oneOfsMap <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">"stylus"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>oneOfs<span class="token punctuation">.</span>store<span class="token punctuation">;</span>
    oneOfsMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      item
        <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"style-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">"style-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84</span>
          patterns<span class="token punctuation">:</span> <span class="token string">"./src/assets/variable.styl"</span>
          <span class="token comment">// \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84\u6570\u7EC4</span>
          <span class="token comment">// patterns: ["./path/to/vars.styl", "./path/to/mixins.styl"]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="stylus__61"></a>stylus \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E09</h2>
<p>\u4F7F\u7528<strong>pluginOptions</strong><br>
\u9700\u8981\u6267\u884C <strong>vue add style-resources-loader</strong>\u547D\u4EE4<br>
\u547D\u4EE4\u6267\u884C\u4F1A\u81EA\u52A8\u5B89\u88C5 <strong>vue-cli-plugin-style-resources-loader</strong>\u4F1A\u81EA\u52A8\u63D0\u793A\u4F7F\u7528\u4EC0\u4E48\u9884\u7F16\u8BD1\u8BED\u8A00\u3001\u4F1A\u6839\u636E\u4F60\u9009\u62E9\u7684\u81EA\u52A8\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u586B\u5199 \u5F15\u7528\u6587\u4EF6\u7684\u8DEF\u5F84<br>
\u53CB\u60C5\u63D0\u793A\uFF1A\u5982\u679C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5B89\u88C5\u4E86\u4EE5\u4E0A\u63D2\u4EF6\uFF0C\u800C\u53C8\u653E\u5F03\u8FD9\u79CD\u65B9\u6848\uFF0C\u7F16\u8BD1\u65F6\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u53EF\u4EE5<strong>npm uninstall vue-cli-plugin-style-resources-loader</strong> \u5378\u8F7D\u6B64\u63D2\u4EF6\u3002</p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  pluginOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"style-resources-loader"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      preProcessor<span class="token punctuation">:</span> <span class="token string">"stylus"</span><span class="token punctuation">,</span>
      patterns<span class="token punctuation">:</span> <span class="token string">"./src/assets/variable.styl"</span>
      <span class="token comment">// patterns: ["./src/assets/variable.styl"]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p><img src="https://img-blog.csdnimg.cn/20191226163935137.gif" alt="stylue \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5"></p>
<h1><a id="sassscss_80"></a>sass/scss\u7BC7</h1>
<h2><a id="sassscssvue_81"></a>sass/scss\u6587\u4EF6\u4E0Evue\u7EC4\u4EF6\u6837\u5F0F\u4EE3\u7801</h2>
<pre><code class="prism language-css"><span class="token comment">/* variable.scss */</span>
$<span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
</code></pre>
<pre><code class="prism language-javascript"><span class="token comment">// vue\u7EC4\u4EF6\u5185\u7684style\u6807\u7B7E\uFF0C\u5C06\u8981\u4F7F\u7528\u4E0A\u8FF0\u53D8\u91CF\u7684\u5730\u65B9</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">&gt;</span>
<span class="token punctuation">.</span>scss div <span class="token punctuation">{</span>
  color<span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre>
<h2><a id="sass__96"></a>sass \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E00</h2>
<p>\u4F7F\u7528<strong>css.loaderOptions</strong><br>
\u6B64\u5904\u53CB\u60C5\u63D0\u793A sass-loader v7 \u4E4B\u524D\u4F7F\u7528 data\uFF1A\u2019\u2019 \u4E4B\u540E\u4F7F\u7528prependData\uFF1A\u2018\u2019\u8BF7\u6839\u636E\u9879\u76EEsass-loader\u7248\u672C\u9009\u62E9<br>
<strong>\u91CD\u70B9\u63D0\u793A\uFF01\uFF01\uFF01\uFF01 \u5F15\u7528\u5904\u5206\u53F7\u201C\uFF1B\u201D\u4E0D\u80FD\u7F3A\u5C11</strong>\uFF0C\u7F3A\u5C11\u76F4\u63A5\u62A5\u9519\uFF0C\u56E0\u4E3A\u6B64\u65B9\u6CD5\u662F\u76F4\u63A5\u63D2\u5165\u8BED\u53E5\u5757\u81F3\u9879\u76EE\u4E2D\u4F7F\u7528sass\u8BED\u6CD5\u7684\u6807\u7B7E\u5185\uFF0Csass\u8BED\u6CD5\u5F3A\u5236\u5FC5\u987B\u4F7F\u7528\u5206\u53F7\u201C\uFF1B\u201D\u7ED3\u5C3E\uFF0C\u66F4\u8BE6\u7EC6\u8BB2\u89E3\u8BF7\u53C2\u8003vue-cli\u5B98\u65B9\u6587\u6863\u3002<br>
<a href="https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9">vue-cli\u5411\u9884\u5904\u7406\u5668 Loader \u4F20\u9012\u9009\u9879</a><br>
sass\u4E0Escss\u533A\u522B\u8BF7\u522B\u5904\u5B66\u4E60<br>
<a href="http://sass.bootcss.com/docs/scss-for-sass-users/">SCSS \u4E0E Sass \u5F02\u540C</a></p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  css<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    loaderOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      sass<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// data\uFF1A\`@import "~@/assets/variable.scss";\` v7\u4E4B\u524D\u4F7F\u7528 \u7684\u662Fdata\uFF0C\u73B0\u5728\u6539\u6210\u4E86prependData</span>
        prependData<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`@import "~@/assets/variable.scss";\`</span></span>
        <span class="token comment">/* prependData: \`
              @import "~@/assets/variable.scss";
              @import "~@/assets/variable2.scss";
          \` */</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="sass__119"></a>sass \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E8C</h2>
<p>\u4F7F\u7528<strong>chainWebpack</strong><br>
\u6839\u636E\u4F7F\u7528\u65B9\u6CD5\u9009\u62E9\u5B89\u88C5\u63D2\u4EF6 <strong>style-resources-loader</strong>\u6216\u8005<strong>sass-resource-loader</strong><br>
\u53CB\u60C5\u63D0\u9192\uFF1A**patterns: \u201C./src/assets/variable.scss\u201D**\u5F15\u7528\u7684scss\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u5185\u8BED\u6CD5\u5B58\u5728\u95EE\u9898\uFF0C\u4E5F\u4F1A\u76F4\u63A5\u62A5\u9519\uFF0C\u6B64\u5904\u4E0D\u9700\u8981\u5728\u5F15\u7528\u5904\u6700\u540E\u6DFB\u52A0\u5206\u53F7\u201C\uFF1B\u201D\uFF0C\u6587\u4EF6\u5185\u8BF7\u6839\u636Esass\u4E0Escss\u8BED\u6CD5\u89C4\u5219\u7F16\u8F91\uFF0C\u5982\u679C\u6211\u6CA1\u6709\u6599\u9519\uFF0C\u6B64\u65B9\u6CD5\u5E94\u8BE5\u662F\u628A\u5F15\u7528\u6587\u4EF6\u7684\u5185\u5BB9\u63D2\u5165\u76EE\u6807\u6587\u4EF6\uFF0C\u800C\u975E\u4E0A\u6587\u65B9\u6CD5\u63D0\u5230\u7684\u63D2\u5165\u4E00\u4E2Aimport<br>
\u4F7F\u7528\u65B9\u6CD5\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u9700\u8981\u5B89\u88C5 style-resources-loader \u63D2\u4EF6</span>
    <span class="token keyword">const</span> oneOfsMap <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">"scss"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>oneOfs<span class="token punctuation">.</span>store<span class="token punctuation">;</span>
    oneOfsMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      item
        <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"style-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">"style-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84</span>
          patterns<span class="token punctuation">:</span> <span class="token string">"./src/assets/variable.scss"</span>
          <span class="token comment">// \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84\u6570\u7EC4</span>
          <span class="token comment">// patterns: ["./path/to/vars.styl", "./path/to/mixins.styl"]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528 sass-resource-loader \u63D2\u4EF6</span>
    <span class="token comment">// const oneOfsMap = config.module.rule("scss").oneOfs.store;</span>
    <span class="token comment">// oneOfsMap.forEach(item =&gt; {</span>
    <span class="token comment">//   item</span>
    <span class="token comment">//     .use("sass-resources-loader")</span>
    <span class="token comment">//     .loader("sass-resources-loader")</span>
    <span class="token comment">//     .options({</span>
    <span class="token comment">//       // \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84</span>
    <span class="token comment">//       resources: "./src/assets/variable.scss"</span>
    <span class="token comment">//       // \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84\u6570\u7EC4</span>
    <span class="token comment">//       // resources: ["./path/to/vars.scss", "./path/to/mixins.scss"]</span>
    <span class="token comment">//     })</span>
     <span class="token comment">//    .end();</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="sass__159"></a>sass \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E09</h2>
<p>\u4F7F\u7528<strong>pluginOptions</strong><br>
\u9700\u8981\u6267\u884C <strong>vue add style-resources-loader</strong>\u547D\u4EE4<br>
\u547D\u4EE4\u6267\u884C\u4F1A\u81EA\u52A8\u5B89\u88C5 <strong>vue-cli-plugin-style-resources-loader</strong>\u4F1A\u81EA\u52A8\u63D0\u793A\u4F7F\u7528\u4EC0\u4E48\u9884\u7F16\u8BD1\u8BED\u8A00\u3001\u4F1A\u6839\u636E\u4F60\u9009\u62E9\u7684\u81EA\u52A8\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u586B\u5199 \u5F15\u7528\u6587\u4EF6\u7684\u8DEF\u5F84<br>
\u53CB\u60C5\u63D0\u793A\uFF1A\u5982\u679C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5B89\u88C5\u4E86\u4EE5\u4E0A\u63D2\u4EF6\uFF0C\u800C\u53C8\u653E\u5F03\u8FD9\u79CD\u65B9\u6848\uFF0C\u7F16\u8BD1\u65F6\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u53EF\u4EE5<strong>npm uninstall vue-cli-plugin-style-resources-loader</strong> \u5378\u8F7D\u6B64\u63D2\u4EF6\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  pluginOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"style-resources-loader"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      preProcessor<span class="token punctuation">:</span> <span class="token string">"scss"</span><span class="token punctuation">,</span>
	<span class="token comment">//  patterns: "./src/assets/variable.scss",</span>
      patterns<span class="token punctuation">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./src/assets/variable.scss"</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p><img src="https://img-blog.csdnimg.cn/20191226164007976.gif" alt="stylus \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5"></p>
<h1><a id="less_178"></a>less\u7BC7</h1>
<h2><a id="lessvue_179"></a>less\u6587\u4EF6\u4E0Evue\u7EC4\u4EF6\u6837\u5F0F\u4EE3\u7801</h2>
<pre><code class="prism language-css"><span class="token comment">/* variable.less */</span>
<span class="token atrule"><span class="token rule">@color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span></span>
</code></pre>
<pre><code class="prism language-javascript"><span class="token comment">// vue\u7EC4\u4EF6\u5185\u7684style\u6807\u7B7E\uFF0C\u5C06\u8981\u4F7F\u7528\u4E0A\u8FF0\u53D8\u91CF\u7684\u5730\u65B9</span>
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"less"</span><span class="token operator">&gt;</span>
<span class="token punctuation">.</span>less <span class="token punctuation">{</span>
  <span class="token operator">&gt;</span> div <span class="token punctuation">{</span>
    color<span class="token punctuation">:</span> @color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre>
<h2><a id="less__197"></a>less \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E00</h2>
<p>\u4F7F\u7528<strong>css.loaderOptions</strong><br>
less\u6B64\u65B9\u6CD5\u53EA\u652F\u6301\u53D8\u91CFkey:value\u8D4B\u503C\uFF0C\u82E5\u8981\u4F7F\u7528less\u6587\u4EF6\u4E2D\u53D8\u91CF\uFF0C\u8BF7\u4F7F\u7528\u4EE5\u4E0B\u4E24\u79CD\u65B9\u6848</p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  css<span class="token punctuation">:</span> <span class="token punctuation">{</span>
  	loaderOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
	  less<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        globalVars<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token string">"@color"</span><span class="token punctuation">:</span> <span class="token string">"#f00"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="less__214"></a>less \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E8C</h2>
<p>\u4F7F\u7528<strong>chainWebpack</strong><br>
\u9700\u8981\u5B89\u88C5 <strong>style-resources-loader</strong> \u63D2\u4EF6</p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u9700\u8981\u5B89\u88C5 style-resources-loader \u4E0Estylus\u4E00\u81F4</span>
    <span class="token keyword">const</span> oneOfsMap <span class="token operator">=</span> config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">"less"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>oneOfs<span class="token punctuation">.</span>store<span class="token punctuation">;</span>
    oneOfsMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      item
        <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"style-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">"style-resources-loader"</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84</span>
          patterns<span class="token punctuation">:</span> <span class="token string">"./src/assets/variable.less"</span>
          <span class="token comment">// \u9700\u8981\u63D2\u5165\u7684\u6587\u4EF6\u8DEF\u5F84\u6570\u7EC4</span>
          <span class="token comment">// patterns: ["./path/to/vars.less", "./path/to/mixins.less"]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="less__237"></a>less \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5\u4E09</h2>
<p>\u4F7F\u7528<strong>pluginOptions</strong><br>
\u9700\u8981\u6267\u884C <strong>vue add style-resources-loader</strong>\u547D\u4EE4<br>
\u547D\u4EE4\u6267\u884C\u4F1A\u81EA\u52A8\u5B89\u88C5 <strong>vue-cli-plugin-style-resources-loader</strong>\u4F1A\u81EA\u52A8\u63D0\u793A\u4F7F\u7528\u4EC0\u4E48\u9884\u7F16\u8BD1\u8BED\u8A00\u3001\u4F1A\u6839\u636E\u4F60\u9009\u62E9\u7684\u81EA\u52A8\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u586B\u5199 \u5F15\u7528\u6587\u4EF6\u7684\u8DEF\u5F84<br>
\u53CB\u60C5\u63D0\u793A\uFF1A\u5982\u679C\u4F7F\u7528\u6B64\u65B9\u6CD5\u5B89\u88C5\u4E86\u4EE5\u4E0A\u63D2\u4EF6\uFF0C\u800C\u53C8\u653E\u5F03\u8FD9\u79CD\u65B9\u6848\uFF0C\u7F16\u8BD1\u65F6\u53EF\u80FD\u4F1A\u62A5\u9519\uFF0C\u53EF\u4EE5<strong>npm uninstall vue-cli-plugin-style-resources-loader</strong> \u5378\u8F7D\u6B64\u63D2\u4EF6\u3002</p>
<pre><code class="prism language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  pluginOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
  	<span class="token string">"style-resources-loader"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      preProcessor<span class="token punctuation">:</span> <span class="token string">"less"</span><span class="token punctuation">,</span>
      patterns<span class="token punctuation">:</span> <span class="token string">"./src/assets/variable.less"</span>
      <span class="token comment">// patterns: ["./src/assets/variable.less"]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p><img src="https://img-blog.csdnimg.cn/20191226164041747.gif" alt="less \u5168\u5C40\u53D8\u91CF\u5F15\u5165\u65B9\u6CD5"></p>
<h1><a id="_254"></a>\u603B\u7ED3</h1>
<h2><a id="_255"></a>\u95EE\u9898</h2>
<p>\u4F7F\u7528<strong>path</strong>\u4E0E\u4E0D\u4F7F\u7528\u533A\u522B\u8BF7\u81EA\u884C\u5B66\u4E60\uFF0C\u672C\u6587\u4E43\u5404\u79CD\u7528\u6CD5\u6F14\u793A<br>
<a href="http://nodejs.cn/api/path.html">http://nodejs.cn/api/path.html</a></p>
<p>\u4EE5\u4E0A\u89E3\u51B3\u65B9\u6848\u5E26\u6765\u7684\u5B9E\u9645\u6548\u679C\u662F\u53D8\u91CF\u63D2\u5165\u5230\u4E86\u76EE\u6807\u6587\u4EF6\uFF0C\u4F46\u4E0D\u5355\u5355\u662F\u53D8\u91CF\u4F1A\u63D2\u5165\uFF0C\u94FE\u63A5\u6587\u4EF6\u6240\u6709\u6570\u636E\u90FD\u4F1A\u63D2\u5165\u5230\u76EE\u6807\u6587\u4EF6\u4E2D\uFF0C\u6BD4\u5982css \u51FD\u6570\u3001mixin \u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u501F\u7528\u6B64\u65B9\u5F0F\u53EF\u4EE5\u5B8C\u6210\u66F4\u591A\u529F\u80FD\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u884C\u601D\u8003\u3002</p>
<p>\u518D\u8D34\u4E00\u904D\u4EE5\u4E0A\u4F8B\u5B50\u7684github\u4ED3\u5E93\u5730\u5740<br>
<a href="https://github.com/rudyLittleLove/global-variable">https://github.com/rudyLittleLove/global-variable</a></p>
<p>\u5982\u6709\u9519\u8BEF\uFF0C\u6B22\u8FCE\u6307\u6B63\uFF0C\u8C22\u8C22</p>
</div>
</body>

</html>
`;export{s as default};
