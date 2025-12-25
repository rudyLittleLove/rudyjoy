var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript \u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B \u4EE5\u53CA\u83B7\u53D6\u4E0E\u5224\u65AD\u7684\u65B9\u6CD5</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>JavaScript \u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B \u4EE5\u53CA\u83B7\u53D6\u4E0E\u5224\u65AD\u7684\u65B9\u6CD5</h3><ul><li><a href="#_1">\u5F15\u8A00</a></li><li><a href="#_6">\u6570\u636E\u7C7B\u578B</a></li><ul><li><a href="#_8">\u539F\u59CB\u6570\u636E\u7C7B\u578B</a></li><ul><li><a href="#1Boolean__11">1.Boolean \u7C7B\u578B</a></li><li><a href="#2Null__19">2.Null \u7C7B\u578B</a></li><li><a href="#3Undefined__23">3.Undefined \u7C7B\u578B</a></li><li><a href="#4Number__30">4.Number \u7C7B\u578B</a></li><li><a href="#5BigInt__37">5.BigInt \u7C7B\u578B</a></li><li><a href="#6String__44">6.String \u7C7B\u578B</a></li><li><a href="#7Symbol__49">7.Symbol \u7C7B\u578B</a></li></ul><li><a href="#_52">\u5BF9\u8C61</a></li><ul><li><a href="#1__54">1."\u6807\u51C6\u7684" \u5BF9\u8C61</a></li><li><a href="#2_57">2.\u6570\u7EC4</a></li><li><a href="#3_60">3.\u51FD\u6570</a></li></ul></ul><li><a href="#_65">\u83B7\u53D6\u4E0E\u5224\u65AD\u7C7B\u578B</a></li><ul><li><a href="#1typeof_67">1.typeof</a></li><li><a href="#2instanceof_111">2.instanceof</a></li></ul><li><a href="#_138">\u603B\u7ED3</a></li></ul></div><p></p>
<h1><a id="_1"></a>\u5F15\u8A00</h1>
<p>\u2003\u2003\u5BF9\u6211\u6765\u8BF4\u4EC0\u4E48\u65F6\u5019\u5199\u535A\u5BA2\u5462\uFF1F\u65E0\u975E\u5C31\u51E0\u79CD\u60C5\u51B5\uFF0C\u4E00\u79CD\u662F\u5BF9\u67D0\u4E9B\u77E5\u8BC6\u4E86\u89E3\u4E0D\u6E05\u695A\u9700\u8981\u5DE9\u56FA\u3002\u4E00\u79CD\u662F\u9047\u5230\u95EE\u9898\u4E0A\u7F51\u627E\u4E86\u5F88\u4E45\u6CA1\u6709\u5408\u9002\u7684\u7B54\u6848\uFF0C\u6700\u7EC8\u627E\u5230\u4E86\u89E3\u51B3\u65B9\u6848\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u5E7F\u5927\u540C\u884C\u80FD\u5FEB\u901F\u5B9A\u4F4D\u89E3\u51B3\u95EE\u9898\u3002\u6700\u540E\u4E00\u79CD\u5C31\u662F\u6709\u4E9B\u5C0F\u5FC3\u5F97\uFF0C\u5206\u4EAB\u8BB0\u5F55\u4E00\u4E0B\u81EA\u5DF1\u7684\u611F\u53D7\u3002</p>
<p>\u2003\u2003\u672C\u7BC7\u4FE1\u606F\u4E3B\u9898\u5176\u5B9E\u7B97\u662F\u5F88\u57FA\u7840\u5F88\u57FA\u7840\u7684\u4E1C\u897F\uFF0C\u4F46\u662F\u5C31\u662F\u8FD9\u4E9B\u57FA\u7840\u6709\u5F88\u591A\u65F6\u5019\u5374\u88AB\u6211\u5FFD\u7565\u4EE5\u81F3\u4E8E\u5F04\u6DF7\u6DC6\uFF0C\u73B0\u5728\u5C31\u9700\u8981\u603B\u7ED3\u5DE9\u56FA\u4E00\u4E0B\u4E86\u3002</p>
<h1><a id="_6"></a>\u6570\u636E\u7C7B\u578B</h1>
<p>\u4E00\u5171\u516B\u79CD\uFF0C\u4E03\u79CD\u539F\u59CB\u6570\u636E\u7C7B\u578B\u548C\u5BF9\u8C61</p>
<h2><a id="_8"></a>\u539F\u59CB\u6570\u636E\u7C7B\u578B</h2>
<p>\u4E5F\u79F0\u4E3A\u57FA\u672C\u7C7B\u578B\uFF0C\u5206\u522B\u662F <strong><code>Boolean</code>\u3001 <code>Null</code>\u3001 <code>Undefined</code>\u3001 <code>Number</code>\u3001 <code>BigInt</code>\u3001 <code>String</code>\u3001 <code>Symbol</code></strong></p>
<h3><a id="1Boolean__11"></a>1.Boolean \u7C7B\u578B</h3>
<p>\u5E03\u5C14\u7C7B\u578B\uFF0C\u662F\u4E00\u79CD\u53D6\u503C\u4EC5\u80FD\u4E3A <code>\u771F</code> \u6216 <code>\u5047</code> \u7684\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u6709\u4E24\u4E2A\u503C\uFF1A<code>true</code> \u548C <code>false</code>\u3002<br>
\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u4E5F\u88AB\u533A\u5206\u4E3A <code>truthy(\u771F\u503C)</code>\uFF0C<code>falsy (\u865A\u503C)</code>\u3002\u5728 Boolean \u4E0A\u4E0B\u6587\u4E2D\u4F1A\u88AB\u8F6C\u6362\u4E3A <code>true</code> \u6216\u8005 <code>false</code>\u8FDB\u884C\u5224\u65AD\u3002<br>
\u6BD4\u5982\u4E0B\u9762\uFF1A<br>
\u53D6\u53CD\uFF08<code>!</code>\uFF09\u3001\u5F02\u6216\u5224\u65AD\uFF08<code>||</code>,<code>&amp;&amp;</code>\uFF09\u3001<code>Boolean()</code>\u3001<code>if()</code></p>
<p><code>false</code>\u3001<code>undefined</code>\u3001<code>null</code>\u3001<code>\u6B63\u8D1F0</code>\u3001<code>NaN</code>\u3001<code>\u7A7A\u5B57\u7B26\u4E32''</code> \u4EE5\u5916\u7684\u90FD\u662F <code>truthy(\u771F\u503C)</code></p>
<h3><a id="2Null__19"></a>2.Null \u7C7B\u578B</h3>
<p>Null \u7C7B\u578B\u53EA\u6709\u4E00\u4E2A\u503C\uFF1A <code>null</code>\u3002<br>
\u5C31\u662F\u6211\u4EEC\u5E38\u8BF4\u7684\u7A7A\u6307\u9488</p>
<h3><a id="3Undefined__23"></a>3.Undefined \u7C7B\u578B</h3>
<p>\u4E00\u4E2A\u5DF2\u58F0\u660E\u7684\u53D8\u91CF\uFF08\u672A\u8D4B\u503C\uFF09\u7684\u521D\u59CB\u503C\u662F <code>undefined</code>\u3002\u672A\u58F0\u660E\u7684\u4F7F\u7528\u76F4\u63A5\u62A5\u9519 <font color="#b74f58">is not defined</font>\u3002<br>
\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u4E5F\u8FD4\u56DE <code>undefined</code><br>
\u83B7\u53D6\u5BF9\u8C61\u4E0D\u5B58\u5728\uFF08\u539F\u578B\u94FE\u4E0A\u4E5F\u4E0D\u5B58\u5728\uFF09\u7684\u5C5E\u6027\u3001\u8C03\u7528\u6CA1\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u3001typeof\u5224\u65AD\u672A\u58F0\u660E\u6216\u8005\u5DF2\u58F0\u660E\u672A\u8D4B\u503C\u7684\u53D8\u91CF</p>
<p><code>undefined</code>\u4E0D\u5B58\u5728\u5C5E\u6027\uFF0C\u56E0\u6B64\u524D\u7AEF\u6700\u5E38\u89C1\u7684\u62A5\u9519\uFF08\u6CA1\u6709\u4E4B\u4E00\uFF09\u5C31\u662F<font color="#b74f58"> Cannot read property \u2018xxx\u2019 of undefined</font>\u3002</p>
<h3><a id="4Number__30"></a>4.Number \u7C7B\u578B</h3>
<p>\u57FA\u4E8E IEEE 754 \u6807\u51C6\u7684\u53CC\u7CBE\u5EA6 64 \u4F4D\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684\u503C\uFF08-(2<sup>53</sup> -1) \u5230 2<sup>53</sup> -1)\uFF0C\u5728javascript\u4E2D\u79F0\u4E3A\u5B89\u5168\u6574\u6570\uFF0C\u8D85\u8FC7\u8FD9\u4E2A\u9650\u5236\u7684\u6570\u8BA1\u7B97\u4E0D\u7CBE\u786E\u3002<br>
\u6700\u5927\u5B89\u5168\u6574\u6570 <code>Number.MAX_SAFE_INTEGER</code> === 2<sup>53</sup> -1<br>
\u6700\u5C0F\u5B89\u5168\u6574\u6570 <code>Number.MIN_SAFE_INTEGER</code> === -(2<sup>53</sup> -1\uFF09</p>
<p>\u9664\u4E86\u5E38\u89C1\u6570\u503C\u5916\uFF0C <code>+Infinity</code>\uFF0C<code>-Infinity</code> \u548C <code>NaN</code> \u4E5F\u662F<code>Number</code>\u7C7B\u578B</p>
<h3><a id="5BigInt__37"></a>5.BigInt \u7C7B\u578B</h3>
<p><code>BigInt</code>\u7C7B\u578B\u662F JavaScript \u4E2D\u7684\u4E00\u4E2A\u57FA\u7840\u7684\u6570\u503C\u7C7B\u578B\uFF0C\u53EF\u4EE5\u8868\u793A\u4EFB\u610F\u5927\u7684\u6574\u6570\uFF08\u751A\u81F3\u53EF\u4EE5\u8D85\u8FC7\u5B89\u5168\u6574\u6570\u9650\u5236\uFF09<br>
<code>BigInt</code> \u7C7B\u578B\u53EF\u4EE5\u4F7F\u7528\u5E38\u7528\u8FD0\u7B97 <code>+</code>\u3001<code>*</code>\u3001<code>-</code>\u3001<code>**</code>\u3001<code>%</code> \uFF0C\u9664 <code>&gt;&gt;&gt;</code> \uFF08\u65E0\u7B26\u53F7\u53F3\u79FB\uFF09\u4E4B\u5916\u7684 \u4F4D\u64CD\u4F5C \u4E5F\u53EF\u4EE5\u652F\u6301<br>
\u4E0D\u652F\u6301\u5355\u76EE (+) \u8FD0\u7B97\u7B26\uFF08\u5982\uFF1A+2\uFF09<br>
\u4E0D\u80FD\u4E0E<code>Number</code> \u7C7B\u578B\u6DF7\u5408\u8BA1\u7B97<br>
\u4E0D\u80FD\u4F7F\u7528<code>Math</code> \u7684\u65B9\u6CD5</p>
<h3><a id="6String__44"></a>6.String \u7C7B\u578B</h3>
<p>\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0CJavaScript \u5B57\u7B26\u4E32\u662F\u4E0D\u53EF\u66F4\u6539\u7684\uFF0C\u4F46\u662F\uFF0C\u53EF\u4EE5\u57FA\u4E8E\u5BF9\u539F\u59CB\u5B57\u7B26\u4E32\u7684\u64CD\u4F5C\u6765\u521B\u5EFA\u65B0\u7684\u5B57\u7B26\u4E32<br>
\u53EF\u4EE5\u4F7F\u7528<code>String.concat()</code>\u3001<code>\u8FDE\u5B57\u7B26\uFF08+\uFF09</code> \u62FC\u63A5\u5B57\u7B26\u4E32<br>
\u53EF\u4EE5\u4F7F\u7528<code>String</code> \u65B9\u6CD5\uFF0C\u5982\uFF1A<code>replace</code>\u3001<code>substr</code>\u3001<code>slice</code>\u7B49</p>
<h3><a id="7Symbol__49"></a>7.Symbol \u7C7B\u578B</h3>
<p>\u7B26\u53F7\u7C7B\u578B\uFF0C\u7B26\u53F7\u7C7B\u578B\u552F\u4E00\u4E14\u4E0D\u53EF\u4FEE\u6539\uFF0C\u53EF\u4EE5\u4F5C\u4E3A<code>Object</code> \u7684 <code>key</code>\uFF0C\u4F5C\u4E3A<code>key</code> \u7684<code>Symbol</code> \u4E0D\u53EF\u679A\u4E3E\u3002</p>
<h2><a id="_52"></a>\u5BF9\u8C61</h2>
<p>\u5E38\u89C1\u5BF9\u8C61\u5206\u4E3A <code>"\u6807\u51C6\u7684" \u5BF9\u8C61{}</code>\u3001<code>\u6570\u7EC4 []</code>\u3001<code>\u51FD\u6570 function(){}</code> \u7B49</p>
<h3><a id="1__54"></a>1.\u201C\u6807\u51C6\u7684\u201D \u5BF9\u8C61</h3>
<p>\u5C31\u662F <strong>\u952E</strong> \u548C <strong>\u503C</strong> \u4E4B\u95F4\u7684\u6620\u5C04\u96C6\u5408\uFF0C<strong>\u952E</strong> \u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF08\u6216\u8005 Symbol\uFF09 \uFF0C<strong>\u503C</strong> \u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u503C\u3002</p>
<h3><a id="2_57"></a>2.\u6570\u7EC4</h3>
<p>\u6570\u7EC4\u9ED8\u8BA4\u662F\u6709\u5E8F\u6574\u6570\u4F5C\u4E3A <strong>\u952E</strong>\u5C5E\u6027\uFF08\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\uFF0CSymbol\uFF09\uFF0C <strong>\u503C</strong> \u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u7C7B\u4F3C\u4E8E\u5217\u8868\u7684\u9AD8\u9636\u5BF9\u8C61\uFF0C\u8868\u793A\u5217\u8868\u548C\u96C6\u5408\u7684\u6700\u9002\u5408\u65B9\u5F0F\u3002</p>
<h3><a id="3_60"></a>3.\u51FD\u6570</h3>
<p>\u5206\u4E3A\u666E\u901A\u51FD\u6570 <code>function(){}</code> \u548C \u7BAD\u5934\u51FD\u6570\uFF08<code>=&gt;</code>\uFF09\u3002<br>
<code>Date</code>\u3001<code>Object</code>\u3001<code>RegExp</code>\u3001<code>String</code> \u7B49\u7B49\u90FD\u662F\u51FD\u6570\uFF0CJavaScript \u7684\u5185\u7F6E\u51FD\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>new</code> \u5173\u952E\u5B57\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u3002<br>
\u81EA\u5DF1\u521B\u5EFA\u7684\u666E\u901A\u51FD\u6570\u4E5F\u53EF\u4EE5\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u3002</p>
<h1><a id="_65"></a>\u83B7\u53D6\u4E0E\u5224\u65AD\u7C7B\u578B</h1>
<p>\u539F\u751F\u5224\u65AD\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0C\u901A\u8FC7<code>typeof</code>\u8FD4\u56DE\u5224\u65AD\uFF0C\u548C\u901A\u8FC7 <code>instanceof</code> \u67E5\u627E\u539F\u578B\u94FE\u662F\u5426\u5B58\u5728\u7684\u65B9\u5F0F\u5224\u65AD\u3002</p>
<h2><a id="1typeof_67"></a>1.typeof</h2>
<pre><code class="prism language-javascript"><span class="token keyword">typeof</span> <span class="token boolean">true</span>	  		<span class="token comment">// boolean</span>
<span class="token keyword">typeof</span> undefined   	<span class="token comment">// undefined</span>
<span class="token keyword">typeof</span> document<span class="token punctuation">.</span>all <span class="token comment">// undefined</span>
<span class="token keyword">typeof</span> <span class="token number">3</span> 			<span class="token comment">// number</span>
<span class="token keyword">typeof</span> <span class="token number">NaN</span>			<span class="token comment">// number</span>
<span class="token keyword">typeof</span> <span class="token number">3</span>n			<span class="token comment">// bigint</span>
<span class="token keyword">typeof</span> <span class="token string">'abc'</span>		<span class="token comment">// string</span>
<span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>			<span class="token comment">// object</span>
<span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>			<span class="token comment">// object</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span>   		<span class="token comment">// object</span>
<span class="token keyword">typeof</span> <span class="token operator">/</span>\\s<span class="token operator">/</span>			<span class="token comment">// object</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// object</span>
<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>	<span class="token comment">// object</span>
<span class="token keyword">typeof</span> Date			<span class="token comment">// function</span>
</code></pre>
<p>typeof\u628A <code>\u6570\u7EC4</code> \u4E0E <code>null</code> \u3001<code>Map</code>\u3001<code>Set</code> \u90FD\u5224\u65AD\u4E3A object \u4E86\uFF0C\u5176\u4ED6\u7684\u786E\u5B9E\u662F\u5BF9\u8C61\u8FD9\u4E5F\u80FD\u7406\u89E3\u3002\u4F46\u662F <code>null</code> \u5224\u65AD\u4E3A\u5BF9\u8C61\uFF0C\u5C31\u662F<a href="http://www.2ality.com/2013/10/typeof-null.html">javascript \u8BBE\u8BA1\u4E4B\u521D\u5C31\u5B58\u5728\u7684bug\u4E86</a>\u3002</p>
<p>\u5982\u679C\u60F3\u8981\u628A\u7C7B\u4F3C <code>\u6570\u7EC4</code>\u3001<code>Map</code>\u3001<code>Set</code>\u3001<code>null</code> \u7B49\u660E\u786E\u533A\u5206\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u5199\u4E00\u4E2A\u5224\u65AD\u7C7B\u578B\u51FD\u6570\u3002\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex">/(?&lt;=\\s)[a-zA-Z]+/</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u5728\u770B\u4E00\u4E0B\u4E0A\u9762\u7684\u6570\u636E\u7528<code>getType</code> \u5224\u65AD</p>
<pre><code class="prism language-javascript"><span class="token function">getType</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>	  	<span class="token comment">// boolean</span>
<span class="token function">getType</span><span class="token punctuation">(</span>undefined<span class="token punctuation">)</span>  <span class="token comment">// undefined</span>
<span class="token function">getType</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>all<span class="token punctuation">)</span><span class="token comment">// htmlallcollection</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 			<span class="token comment">// number</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>		<span class="token comment">// number</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token number">3</span>n<span class="token punctuation">)</span>			<span class="token comment">// bigint</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span>		<span class="token comment">// string</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>			<span class="token comment">// array</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>			<span class="token comment">// object</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>   	<span class="token comment">// null</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token regex">/\\s/</span><span class="token punctuation">)</span>		<span class="token comment">// regexp</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// map</span>
<span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>	<span class="token comment">// set</span>
<span class="token function">getType</span><span class="token punctuation">(</span>Date<span class="token punctuation">)</span>		<span class="token comment">// function</span>
</code></pre>
<h2><a id="2instanceof_111"></a>2.instanceof</h2>
<p>\u7528\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> 
<span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> 

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a <span class="token keyword">instanceof</span> <span class="token class-name">A</span><span class="token punctuation">;</span> <span class="token comment">// true\uFF0C\u56E0\u4E3A Object.getPrototypeOf(a) === A.prototype</span>
a <span class="token keyword">instanceof</span> <span class="token class-name">B</span><span class="token punctuation">;</span> <span class="token comment">// false\uFF0C\u56E0\u4E3A B.prototype \u4E0D\u5728 a \u7684\u539F\u578B\u94FE\u4E0A</span>

a <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// true\uFF0C\u56E0\u4E3A Object.prototype.isPrototypeOf(a) \u8FD4\u56DE true</span>
</code></pre>
<p>\u6211\u4EEC\u5E38\u7528\u6765\u5224\u65AD\u67D0\u4E2A\u6570\u636E\u662F\u5426\u662F\u67D0\u79CD\u7C7B\u578B\uFF0C\u6BD4\u5982\u8FD9\u91CC\u5224\u65AD\u6570\u7EC4\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">'234'</span>

a <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// true\uFF0C\u56E0\u4E3A Object.getPrototypeOf(a) === Array.prototype</span>
b <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// false\uFF0C\u56E0\u4E3A Array.prototype \u4E0D\u5728 b \u7684\u539F\u578B\u94FE\u4E0A</span>

a <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// true\uFF0C\u56E0\u4E3A Object.prototype.isPrototypeOf(a) \u8FD4\u56DE true</span>
b <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// false\uFF0C\u56E0\u4E3A Object.prototype.isPrototypeOf(b) \u8FD4\u56DE false</span>
</code></pre>
<h1><a id="_138"></a>\u603B\u7ED3</h1>
<p>\u2003\u2003 \u5173\u4E8Ejavascript \u6570\u636E\u7C7B\u578B\u4EE5\u53CA\u83B7\u53D6\u7C7B\u578B\u4EE5\u53CA\u5224\u65AD\u7C7B\u578B\u5C31\u6574\u7406\u8FD9\u4E9B\u4E86\u3002\u66F4\u591A\u4FE1\u606F\u53EF\u4EE5\u53BB<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript">MDN JavaScript</a> \u4E0A\u770B\uFF0C\u4E0A\u9762\u5199\u7684\u5F88\u8BE6\u7EC6\uFF0C\u6BCF\u4E2A\u5C5E\u6027\u4E4B\u95F4\u7684\u5173\u8054\u4E5F\u6574\u7406\u7684\u5F88\u6E05\u695A\u3002</p>
<p>\u4EE5\u4E0A\u4FE1\u606F\u5982\u6709\u758F\u6F0F\u6216\u9519\u8BEF\uFF0C\u6B22\u8FCE\u6307\u6B63\u3002</p>
</div>
</body>

</html>
`;export{n as default};
