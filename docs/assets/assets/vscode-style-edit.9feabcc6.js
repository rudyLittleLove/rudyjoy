var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vscode \u81EA\u5B9A\u4E49\u7F16\u8F91\u5668\u6837\u5F0F css\u4FEE\u6539</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>vscode \u81EA\u5B9A\u4E49\u7F16\u8F91\u5668\u6837\u5F0F CSS\u4FEE\u6539</h3><ul><li><a href="#_2">\u770B\u770B\u522B\u4EBA\u63D2\u4EF6</a></li><ul><li><a href="#background_10">background</a></li><li><a href="#backgroundcover_43">background-cover</a></li></ul><li><a href="#_62">\u81EA\u5DF1\u4FEE\u6539\u6837\u5F0F</a></li><ul><li><a href="#1vscode__settingjson_76">1.\u6253\u5F00vscode \u914D\u7F6E\u6587\u4EF6 setting.json</a></li><li><a href="#2_wokbenchdesktopmaincss_92">2.\u4FEE\u6539\u4E0A\u9762\u63D0\u5230\u7684 wokbench.desktop.main.css\u6587\u4EF6</a></li></ul><li><a href="#_191">\u603B\u7ED3</a></li></ul></div><p></p>
<h1><a id="_2"></a>\u770B\u770B\u522B\u4EBA\u63D2\u4EF6</h1>
<p>\u9996\u5148\u8BB2\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u4F1A\u5199\u8FD9\u4E2A\uFF0C\u5728\u67D0\u5E74\u67D0\u6708\u67D0\u5929\uFF0C\u7A81\u7136\u89C9\u5F97vscode\u7F16\u8F91\u5668\u6837\u5F0F\u2018\u201C\u770B\u817B\u4E86\u201D\uFF0C\u5C31\u60F3\u7740\u6539\u6539\u6837\u5F0F\uFF0C\u6BD4\u5982\u80CC\u666F\u5565\u7684\u3002\u5148\u627E\u4E86\u4E00\u4E0B\u63D2\u4EF6\uFF0Cvscodel\u91CC\u7684 background\u3001background-cover \u63D2\u4EF6\u90FD\u4E0B\u8FC7\uFF0C\u5148\u603B\u7ED3\u4E00\u4E0B\u5B83\u4EEC\u66F4\u6539\u7684\u65B9\u6CD5\u3002</p>
<p><strong><font color="red">\u7B2C\u4E00\u6B21\u5F3A\u8C03*\u8981\u66F4\u6539vscode\u6837\u5F0F\uFF0C\u9700\u8981\u4FEE\u6539vscode\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u56E0\u6B64\u9700\u8981\u6743\u9650\uFF0C\u6240\u4EE5\u8BF7\u4F7F\u7528\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C\u4FEE\u6539\u6837\u5F0F\u6587\u4EF6\u7684\u8F6F\u4EF6\uFF0C\u4EE5\u53CAvscode\uFF0C\u4FEE\u6539\u540E\u4F1A\u63D0\u793A\u8F6F\u4EF6\u53EF\u80FD\u635F\u574F\uFF0C\u8BF7\u70B9\u51FB\u63D0\u793A\u6846\u4E0A\u7684\u8BBE\u7F6E\uFF08\u9F7F\u8F6E\uFF09\u9009\u62E9\u5FFD\u7565\u3002</font></strong><br>
vscode\u7684css\u6587\u4EF6\u5730\u5740\uFF1A</p>
<pre><code class="prism language-bash">C:\\Program Files\\Microsoft VS Code\\resources\\app\\out\\vs\\workbench\\workbench.desktop.main.css
</code></pre>
<h2><a id="background_10"></a>background</h2>
<p>background\u63D2\u4EF6\u6539\u7684\u662F\u5206\u680F\uFF08 split-view \uFF09\u7684\u80CC\u666F\uFF0C\u7528\u7684css\u4F2A\u5143\u7D20:after\u8BBE\u7F6E\u80CC\u666F\u5E76\u5B9A\u4F4D\uFF0C\u603B\u5171\u7528\u4E86\u4E09\u5F20\u56FE\u7247\u6765\u91CD\u590D\u5C55\u793A\u591A\u4E2A\u5206\u680F\u80CC\u666F \u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-css"><span class="token selector">[id="workbench.parts.editor"] .split-view-view:nth-child(1) .editor-container .editor-instance&gt;.monaco-editor .overflow-guard&gt;.monaco-scrollable-element::after</span><span class="token punctuation">{</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url('')</span><span class="token punctuation">;</span>
	<span class="token property">content</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">;</span>
	<span class="token property">pointer-events</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
	<span class="token property">z-index</span><span class="token punctuation">:</span>99999<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
	<span class="token property">background-position</span><span class="token punctuation">:</span>100% 100%<span class="token punctuation">;</span>
	<span class="token property">background-repeat</span><span class="token punctuation">:</span>no-repeat<span class="token punctuation">;</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 	\u540E\u9762\u4E24\u4E2A\u9009\u62E9\u5668\u5185\u7684\u6837\u5F0F\u9664\u4E86url\u5185\u5BB9\u4E0D\u4E00\u6837\uFF0C\u5176\u4F59\u4E0E\u4E0A\u9762\u4E00\u6837\uFF0C\u5C31\u4E0D\u683C\u5F0F\u5316\u5360\u7BC7\u5E45\u4E86\uFF0C
	\u539F\u672Curl\u5185\u6709base64\u683C\u5F0F\u7684\u56FE\u7247\uFF0C\u5185\u5BB9\u8F83\u591A\u5C31\u5220\u6389\u4E86*/</span>

<span class="token selector">[id="workbench.parts.editor"] .split-view-view:nth-child(2) .editor-container .editor-instance&gt;.monaco-editor .overflow-guard&gt;.monaco-scrollable-element::after</span><span class="token punctuation">{</span><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url('')</span><span class="token punctuation">;</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">;</span><span class="token property">pointer-events</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span><span class="token property">z-index</span><span class="token punctuation">:</span>99999<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">background-position</span><span class="token punctuation">:</span>100% 100%<span class="token punctuation">;</span><span class="token property">background-repeat</span><span class="token punctuation">:</span>no-repeat<span class="token punctuation">;</span><span class="token property">opacity</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token selector">[id="workbench.parts.editor"] .split-view-view:nth-child(3) .editor-container .editor-instance&gt;.monaco-editor .overflow-guard&gt;.monaco-scrollable-element::after</span><span class="token punctuation">{</span><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url('')</span><span class="token punctuation">;</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">;</span><span class="token property">pointer-events</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span><span class="token property">z-index</span><span class="token punctuation">:</span>99999<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span><span class="token property">background-position</span><span class="token punctuation">:</span>100% 100%<span class="token punctuation">;</span><span class="token property">background-repeat</span><span class="token punctuation">:</span>no-repeat<span class="token punctuation">;</span><span class="token property">opacity</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token selector">[id="workbench.parts.editor"] .split-view-view .editor-container .editor-instance&gt;.monaco-editor .overflow-guard&gt;.monaco-scrollable-element&gt;.monaco-editor-background</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u81F3\u4E8E\u63D2\u4EF6\u7684\u8BBE\u7F6E\u662F\u5426\u542F\u7528\u3001\u662F\u5426\u4F7F\u7528\u9ED8\u8BA4\u56FE\u7247\u3001\u81EA\u5B9A\u4E49\u56FE\u7247\u3001\u81EA\u5B9A\u4E49\u6837\u5F0F\u7B49\u6709\u5174\u8DA3\u81EA\u5DF1\u5199\u63D2\u4EF6\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u53C2\u8003\u6B64\u63D2\u4EF6\u7ED9\u7684\u6E90\u4EE3\u7801\u5728\u6B64\u6211\u4E5F\u8D34\u51FA\u6765\uFF1A</p>
<p><a href="https://github.com/shalldie/vscode-background">https://github.com/shalldie/vscode-background</a></p>
<h2><a id="backgroundcover_43"></a>background-cover</h2>
<p>\u800Cbackground-cover \u63D2\u4EF6\uFF0C\u76F4\u63A5\u66F4\u6539body \u6807\u7B7E\u7684\u80CC\u666F\u8272\uFF0C\u56E0\u4E3A\u6709\u4E3B\u9898\u989C\u8272\uFF0C\u6240\u4EE5\u5B83\u5F88\u66B4\u529B\u7684\u628Abody\u7684opacity\u6837\u5F0F\u7ED9\u6539\u4E86\uFF0C\u9020\u6210\u6587\u5B57\u4E5F\u4F1A\u53D8\u6210\u534A\u900F\u660E\u72B6\uFF0C\u89C6\u89C9\u6548\u679C\u5E76\u4E0D\u662F\u5F88\u597D\u3002\u5B83\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-css"><span class="token selector">body</span><span class="token punctuation">{</span>
	<span class="token property">background-size</span><span class="token punctuation">:</span>cover<span class="token punctuation">;</span>
	<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span>0.9500000000000001<span class="token punctuation">;</span>
	<span class="token comment">/* \u56FE\u7247\u94FE\u63A5\u662F\u901A\u8FC7\u63D2\u4EF6\u7684\u529F\u80FD\u9009\u62E9\u7684\u7535\u8111\u5185\u7684\u56FE\u7247 */</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url">url('c:/Users/rudy/Pictures/77bc20a09dfc23f98236be7c5d709509.jpg')</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u8FD9\u4E2A\u63D2\u4EF6\u7684\u6E90\u4EE3\u7801\u6211\u4E5F\u8D34\u51FA\u6765\uFF1A<br>
<a href="https://github.com/vscode-extension/vscode-background-cover">https://github.com/vscode-extension/vscode-background-cover</a></p>
<p>\u60F3\u5C1D\u8BD5\u4EE5\u4E0A\u4E24\u4E2A\u63D2\u4EF6\uFF0C\u76F4\u63A5\u9009\u62E9vscode\u7684 extensions\uFF0C\u6216\u8005\u76F4\u63A5\u6309\u5FEB\u6377\u952E <kbd>ctrl</kbd> +<kbd> shift </kbd> + <kbd>x</kbd>\uFF0C\u641C\u7D22\u4EE5\u4E0A\u4E24\u4E2A\u63D2\u4EF6\u540D\u79F0\u5373\u53EF\u3002</p>
<p><strong><font color="red">\u7B2C\u4E8C\u6B21\u63D0\u9192\uFF0C\u60F3\u8981\u66F4\u6539vscode\u6837\u5F0F\u6587\u4EF6\uFF0C\u9700\u8981\u7528\u7BA1\u7406\u5458\u6743\u9650\u8FD0\u884C\u4FEE\u6539\u6837\u5F0F\u6587\u4EF6\u7684\u8F6F\u4EF6\uFF0C\u4EE5\u53CAvscode\u3002\u56E0\u4E3A\u7F16\u8F91\u6587\u4EF6\u9700\u8981\u6743\u9650\uFF0C\u5E94\u7528\u6837\u5F0F\u540C\u6837\u9700\u8981\u6743\u9650\uFF0C\u53EA\u9700\u5728\u4FEE\u6539\u6587\u4EF6\u540E\u7528\u7BA1\u7406\u5458\u6743\u9650\u8FD0\u884C\u3002\u6837\u5F0F\u5C55\u793A\u6CA1\u95EE\u9898\u540E\u5C31\u4E0D\u9700\u8981\u7528\u7BA1\u7406\u5458\u6743\u9650\u8FD0\u884C\u8F6F\u4EF6\u4E86\u3002</font></strong></p>
<h1><a id="_62"></a>\u81EA\u5DF1\u4FEE\u6539\u6837\u5F0F</h1>
<p>\u8BF4\u4E86\u534A\u5929\u522B\u4EBA\u63D2\u4EF6\u5982\u4F55\u6539\u7684\u6837\u5F0F\uFF0C\u90A3\u4E48\u73B0\u5728\u7740\u624B\u81EA\u5DF1\u4FEE\u6539\u8F6F\u4EF6\u6837\u5F0F\uFF0C\u4F5C\u4E3A\u524D\u7AEF\uFF0C\u8981\u4FEE\u6539\u6837\u5F0F\u80AF\u5B9A\u9700\u8981\u9884\u89C8\u6837\u5F0F\uFF0C\u5728\u67E5\u627E\u5982\u4F55\u4FEE\u6539\u7F16\u8F91\u5668\u6837\u5F0F\u65F6\u4E86\u89E3\u5230vscode\u662F\u57FA\u4E8E Electron (\u539F\u6765\u53EB Atom Shell) \u8FDB\u884C\u5F00\u53D1\u7684\u3002\u6240\u4EE5\uFF0C\u754C\u9762\u7684\u6837\u5F0F\u53EF\u4EE5\u50CF\u6D4F\u89C8\u5668\u4E00\u6837\u968F\u610F\u4FEE\u6539\uFF08\u5F53\u7136\uFF0C\u4E5F\u53EF\u80FD\u88AB\u6539\u70B8 0_0!!\uFF09\u3002</p>
<p>\u70B9\u51FB\u83DC\u5355 \u5E2E\u52A9 =&gt; \u5207\u6362\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177<br>
\u6216\u8005\u6309\u5FEB\u6377\u952E <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd> i </kbd> \uFF08\u53EF\u80FD\u5B58\u5728\u5FEB\u6377\u952E\u51B2\u7A81\uFF09<br>
<img src="https://img-blog.csdnimg.cn/20191223151310128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="vscode \u5F00\u53D1\u5DE5\u5177"><br>
\u662F\u4E0D\u662F\u5F88\u719F\u6089 \u0669(\u0E51&gt;\u25E1&lt;\u0E51)\u06F6\uFF0C\u5F88\u6FC0\u52A8\uFF1F\uFF1F\uFF1F\uFF0C\u6709\u4E86DOM\u548CCSS\uFF0C\u6709\u4EC0\u4E48\u6837\u5F0F\u662F\u4F60\u60F3\u8981\u8FD8\u505A\u4E0D\u5230\u7684\u5462\uFF1F</p>
<p>\u53D1\u4E00\u4E0B\u6211\u968F\u4FBF\u6539\u7684\u80CC\u666F<br>
<img src="https://img-blog.csdnimg.cn/20191223151451818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u5728\u5B8C\u5168\u4E0D\u7528\u628A\u6587\u5B57\u53D8\u900F\u660E\u7684\u60C5\u51B5\u4E0B\uFF0C\u63D2\u5165\u4E86\u80CC\u666F\u56FE\uFF0C\u987A\u4FBF\u628A\u4E00\u4E9B\u5C42\u7EA7\u8F83\u9AD8\uFF0C\u5E76\u6709\u80CC\u666F\u8272\u7684DOM\u989C\u8272\u91CD\u7F6E\u4E3A\u900F\u660E\u8272\uFF0C\u80CC\u666F\u5168\u90E8\u4F7F\u7528\u80CC\u666F\u56FE\u3002\u4E00\u8FB9\u7801\u7740\u4EE3\u7801\uFF0C\u4E00\u8FB9\u6B23\u8D4F\u7740\u52A8\u6F2B\u5C0F\u59D0\u59D0(\xAF\uFE43\xAF)\u3002<br>
\u7136\u800C\u8FD8\u6CA1\u5B8C\uFF0C\u56E0\u4E3Avscode\u6709\u4E3B\u9898\uFF0C\u4E3B\u9898\u53EF\u4EE5\u8BBE\u7F6E\u5404\u4E2A\u6A21\u5757\u7684\u80CC\u666F\u8272\uFF0C\u5982\u679C\u901A\u8FC7\u6837\u5F0F\u8986\u76D6\u6240\u6709\u80CC\u666F\u8272\u4F1A\u5F97\u4E0D\u507F\u5931\uFF0C\u4EE3\u4EF7\u592A\u5927\uFF0C<strong>\u6700\u597D\u7684\u65B9\u5F0F\u662F\uFF0C\u6DFB\u52A0\u914D\u7F6E\u8986\u76D6\u539F\u4E3B\u9898\u989C\u8272</strong></p>
<p>\u4FEE\u6539\u5B8C\u6574\u6D41\u7A0B\u5982\u4E0B</p>
<h2><a id="1vscode__settingjson_76"></a>1.\u6253\u5F00vscode \u914D\u7F6E\u6587\u4EF6 setting.json</h2>
<p>\u6309\u5FEB\u6377\u952E <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> \u8F93\u5165 setting \u9009\u62E9<br>
<img src="https://img-blog.csdnimg.cn/20191223153722332.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="setting.json"><br>
\u6DFB\u52A0\u81EA\u5B9A\u4E49\u989C\u8272\u914D\u7F6E<br>
\u80CC\u666F\u8272\u989C\u8272\u503C\u4E3A\u516B\u4F4D\uFF0C\u540E\u9762\u4E24\u4F4D\u4E3A\u900F\u660E\u5EA600\u5C31\u662F\u5B8C\u5168\u900F\u660E\uFF0CFF\u4E3A\u5B8C\u5168\u4E0D\u900F\u660E\uFF0C\u8FD9\u91CC\u4E0D\u9700\u8981\u8003\u8651\u517C\u5BB9\u3002</p>
<pre><code class="prism language-javascript"><span class="token punctuation">{</span>
  <span class="token comment">// \u4EE5\u4E0A\u539F\u672C\u914D\u7F6E\u7701\u7565\u4E0D\u5199...</span>
  <span class="token comment">// \u4EE5\u4E0B\u4E3A\u65B0\u6DFB\u52A0\u914D\u7F6E</span>
  <span class="token comment">// \u80CC\u666F\u8272\u989C\u8272\u503C\u4E3A\u516B\u4F4D\uFF0C\u540E\u9762\u4E24\u4F4D\u4E3A\u900F\u660E\u5EA600\u5C31\u662F\u5B8C\u5168\u900F\u660E\uFF0CFF\u4E3A\u5B8C\u5168\u4E0D\u900F\u660E\uFF0C\u8FD9\u91CC\u4E0D\u9700\u8981\u8003\u8651\u517C\u5BB9</span>
  <span class="token string">"workbench.colorCustomizations"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">"editor.background"</span><span class="token punctuation">:</span> <span class="token string">"#00000000"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h2><a id="2_wokbenchdesktopmaincss_92"></a>2.\u4FEE\u6539\u4E0A\u9762\u63D0\u5230\u7684 wokbench.desktop.main.css\u6587\u4EF6</h2>
<pre><code>\u518D\u5199\u4E00\u904D\u6587\u4EF6\u8DEF\u5F84\uFF08C:\\Program Files\\Microsoft VS Code\\resources\\app\\out\\vs\\workbench\\wokbench.desktop.main.css\uFF09
</code></pre>
<p>\u56E0\u4E3A\u6211\u7684vscode\u662F\u5B89\u88C5\u5230C\u76D8\u4E0B\uFF0C\u6240\u4EE5\u8DEF\u5F84\u5982\u4E0A\uFF0C\u8BF7\u9488\u5BF9\u4E2A\u4EBA\u5B89\u88C5\u8DEF\u5F84\u627E\u6587\u4EF6\uFF0C\u6B64\u6587\u4EF6\u662F\u538B\u7F29\u540E\u7684css\uFF0C\u4E0D\u7528\u7BA1\u5B83\uFF0C\u76F4\u63A5\u5728\u6700\u540E\u6DFB\u52A0\u65B0\u7684css\u4EE3\u7801\u5373\u53EF\u3002\u6700\u5F00\u59CB\u63D0\u5230\u7684\u4E24\u4E2A\u63D2\u4EF6\uFF0C\u4E5F\u662F\u4FEE\u6539\u7684\u6B64\u6587\u4EF6\u3002<br>
\u5177\u4F53\u6837\u5F0F\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-css">	<span class="token selector">body</span><span class="token punctuation">{</span>
		<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
		<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url">url('c:/Users/rudy/Pictures/vscode \u81EA\u5B9A\u4E49\u80CC\u666F\u6837\u5F0F/blackhairgirl.png')</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre>
<p>\u5C31\u5728body\u6807\u7B7E\u4E0A\u6DFB\u52A0\u4E86\u80CC\u666F\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u6839\u636E\u4E2A\u4EBA\u559C\u597D\u5728\u5176\u4ED6DOM\u4E0A\u6DFB\u52A0\u6837\u5F0F\u3002</p>
<p>\u6700\u540E\u53D1\u73B0\u6DFB\u52A0\u7684\u80CC\u666F\u8FD8\u672A\u663E\u793A\u51FA\u6765\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u6253\u5F00 \u5E2E\u52A9\u4E0B\u7684<strong>\u5207\u6362\u5F00\u53D1\u4EBA\u5458\u5DE5\u5177</strong>\uFF0C\u7528\u5BA1\u67E5\u5143\u7D20\u7684\u65B9\u5F0F\u67E5\u770B\u54EA\u4E00\u5C42DOM\u989C\u8272\u672A\u88AB\u91CD\u7F6E\uFF0C\u52A0\u4E0A\u65B0\u6837\u5F0F\u8986\u76D6\u5C31\u597D\uFF0C\u6211\u627E\u5230\u7684\u662F\u5728.monaco-workbench\u8FD9\u4E2Aclass\u4E0A\u8FD8\u5B58\u5728\u80CC\u666F\u8272\uFF0C\u5C31\u6DFB\u52A0\u4E86\u5982\u4E0B\u4EE3\u7801\uFF1A</p>
<pre><code class="prism language-css">	<span class="token selector">body</span><span class="token punctuation">{</span>
		<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
		<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url">url('c:/Users/rudy/Pictures/vscode \u81EA\u5B9A\u4E49\u80CC\u666F\u6837\u5F0F/blackhairgirl.png')</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* \u65B0\u6DFB\u52A0\u7684\u8986\u76D6\u80CC\u666F\u8272css\u6837\u5F0F */</span>
	<span class="token selector">.monaco-workbench</span><span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> transparent!important<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre>
<p>\u4EE5\u4E0A\u5C31\u662F\u4FEE\u6539\u6837\u5F0F\u7684\u5168\u90E8\u6D41\u7A0B\uFF0C\u56E0\u4E3A\u6211\u4FEE\u6539\u4E86\u4E00\u4E9B\u770B\u8D77\u6765\u5F71\u54CD\u80CC\u666F\u663E\u793A\u6548\u679C\u7684\u6837\u5F0F\uFF0C\u6240\u4EE5css\u52A0\u4E86\u4E00\u4E9B\uFF0C\u6700\u540E\u8D34\u4E0A\u6211\u6240\u6709\u7684\u4FEE\u6539\u6837\u5F0F\uFF0C\u4E0E\u914D\u7F6E\u3002<br>
workbench.desktop.main.css \u6DFB\u52A0\u7684\u6837\u5F0F</p>
<pre><code class="prism language-css">	<span class="token selector">body</span><span class="token punctuation">{</span>
		<span class="token property">background-position</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 1px<span class="token punctuation">)</span> 1px<span class="token punctuation">;</span>
		<span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
		<span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url">url('c:/Users/rudy/Pictures/vscode \u81EA\u5B9A\u4E49\u80CC\u666F\u6837\u5F0F/blackhairgirl.png')</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/* \u8F6F\u4EF6\u5934\u90E8\u80CC\u666F\u4E5F\u91CD\u7F6E */</span>
	<span class="token selector">.monaco-workbench .part.editor&gt;.content .editor-group-container&gt;.title,
	[id="workbench.parts.titlebar"],
	.monaco-workbench</span><span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> transparent!important<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">.monaco-editor .scroll-decoration</span> <span class="token punctuation">{</span>
		<span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255, 255, 255, .2<span class="token punctuation">)</span> 0 6px 6px -6px inset!important<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/* \u6587\u672C\u7F16\u8F91\u7126\u70B9\u884C\u8FB9\u6846\u989C\u8272\u4FEE\u6539\u4E3A\u534A\u900F\u660E */</span>
	<span class="token selector">.monaco-editor .view-overlays .current-line</span> <span class="token punctuation">{</span>
		<span class="token property">border</span><span class="token punctuation">:</span> 2px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255, 255, 255, .2<span class="token punctuation">)</span><span class="token important">!important</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/* \u4E00\u6253\u5F00\u6587\u4EF6\u5217\u8868tabs\u7684\u6837\u5F0F */</span>
	<span class="token selector">.tabs-and-actions-container::before</span><span class="token punctuation">{</span>
		<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
		<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
		<span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255, 255, 255, .2<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
		<span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/* \u7EC8\u7AEF\u4E0E\u5C0F\u5730\u56FE\u6837\u5F0F\uFF0C\u56E0\u4E3A\u662Fcanvas\u7ED8\u5236\u7684\uFF0C\u76EE\u524D\u53EA\u80FD\u901A\u8FC7\u66F4\u6539\u900F\u660E\u5EA6\u4FEE\u6539\u989C\u8272\uFF0C\u4E00\u4E2A\u5C0F\u5C0F\u7684\u9057\u61BE\u3002 */</span>
	<span class="token selector">.minimap canvas,
	.monaco-workbench .panel.integrated-terminal canvas</span> <span class="token punctuation">{</span>
		<span class="token property">opacity</span><span class="token punctuation">:</span> 0.75<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token selector">.monaco-workbench .part&gt;.content</span> <span class="token punctuation">{</span>
		<span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 0 1px #000000<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">/* \u56E0\u4E3A\u4F7F\u7528\u56FE\u7247\u7684\u7F18\u6545\uFF0C\u5728\u4EE3\u7801\u6BD4\u5BF9\u548C\u5206\u680F\u60C5\u51B5 \u5927\u4E8E1\u680F\u90FD\u8BBE\u7F6E\u80CC\u666F\u8272\uFF0C\u4EE5\u514D\u80CC\u666F\u4E0E\u6587\u5B57\u91CD\u53E0\u4E0D\u6613\u8BC6\u522B */</span>
	<span class="token selector">[id="workbench.parts.editor"] .split-view-view + .split-view-view</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #141007!important<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* \u5E95\u90E8\u72B6\u6001\u680F\u989C\u8272\u4E5F\u88AB\u6211\u6539\u5566 */</span>
	<span class="token selector">[id="workbench.parts.statusbar"]</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> transparent!important<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* \u4E0B\u9762\u662F\u8C03\u8BD5\u63A7\u5236\u53F0\u67D0\u4E9B\u6837\u5F0F\u4E5F\u88AB\u6211\u6539\u4E86*/</span>
	<span class="token selector">[data-editor-id="workbench.editors.textDiffEditor"] .editor + .editor</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #141007!important<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">[id="workbench.panel.repl"] .monaco-list-row:hover</span> <span class="token punctuation">{</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> #2a2d2e00!important<span class="token punctuation">;</span>
		<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px #ffffff inset<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre>
<p>setting.json\u6587\u4EF6\u6DFB\u52A0\u7684\u914D\u7F6E</p>
<pre><code class="prism language-javascript"> <span class="token punctuation">{</span> 
	 <span class="token string">"workbench.colorCustomizations"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
	    <span class="token string">"editor.background"</span><span class="token punctuation">:</span> <span class="token string">"#00000000"</span>
	 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<h1><a id="_191"></a>\u603B\u7ED3</h1>
<p>\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u4E5F\u5C31\u6539\u4E86\u4E24\u4E2A\u6587\u4EF6\u800C\u5DF2\uFF0C\u4E00\u4E2Avscode \u7684setting.json \u914D\u7F6E\u6587\u4EF6\uFF0C\u4E00\u4E2Aworkbench.desktop.main.css\u7684\u6837\u5F0F\u6587\u4EF6\u3002</p>
<p><strong><font color="red">\u6700\u540E\u5F3A\u8C03\uFF0C\u4E00\u5B9A\u8981\u7528\u7BA1\u7406\u5458\u6743\u9650\u8FD0\u884C\u8F6F\u4EF6\u3002\u5E76\u4E14vscode\u66F4\u65B0\u540Eworkbench.desktop.main.css \u6587\u4EF6\u4F1A\u88AB\u91CD\u7F6E\uFF0C\u81EA\u5DF1\u6539\u7684\u6837\u5F0F\u6700\u597D\u4FDD\u5B58\u597D\uFF0C\u4EE5\u514D\u66F4\u65B0vscode\u540E\u6837\u5F0F\u6D88\u5931\u3002<font></font></font></strong></p>
<p>\u7528\u7684\u80CC\u666F\u56FE\u732E\u4E0A<img src="https://img-blog.csdnimg.cn/2019122316540079.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="vscode \u81EA\u5B9A\u4E49\u80CC\u666F\u56FE"><br>
<img src="https://img-blog.csdnimg.cn/20191223165435661.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="vscode \u80CC\u666F\u56FE\u7247"><br>
<img src="https://img-blog.csdnimg.cn/20191223165500266.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="vscdoe \u80CC\u666F\u56FE\u7247"></p>
</div>
</body>

</html>
`;export{n as default};
