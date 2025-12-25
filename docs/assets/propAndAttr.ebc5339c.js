var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM property \u548C attribute \u7684\u533A\u522B\u8BE6\u89E3</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>DOM property \u548C attribute \u7684\u533A\u522B\u8BE6\u89E3</h3><ul><li><a href="#_1">\u5F15\u8A00</a></li><li><a href="#_4">\u660E\u786E\u6982\u5FF5</a></li><li><a href="#_20">\u8BA8\u8BBA\u539F\u56E0</a></li><li><a href="#_23">\u8BE6\u7EC6\u89E3\u91CA</a></li><li><a href="#_118">\u603B\u7ED3</a></li><li><a href="#_123">\u53C2\u8003\u6587\u6863</a></li></ul></div><p></p>
<h1><a id="_1"></a>\u5F15\u8A00</h1>
<p>\u4E4B\u524D\u5728\u9605\u8BFB<code>vue</code> \u7684<code>api</code>\u7684\u65F6\u5019\uFF0C\u5728\u89E3\u91CA\u6307\u4EE4<code>v-bind</code>\u65F6\uFF0C\u5176\u4E2D\u5173\u4E8E\u4FEE\u9970\u7B26 <code>.prop</code> \u7684\u89E3\u91CA\u662F- <strong>\u4F5C\u4E3A\u4E00\u4E2A DOM property \u7ED1\u5B9A\u800C\u4E0D\u662F\u4F5C\u4E3A attribute \u7ED1\u5B9A\u3002</strong> \u4EE4\u6211\u633A\u597D\u5947\u7684\uFF0C\u867D\u7136\u5E72\u4E86\u8FD9\u4E48\u4E45\u524D\u7AEF\u8FD8\u672A\u8BE6\u7EC6\u63A2\u7A76\u8FC7\u4E24\u8005\u4E4B\u524D\u7684\u5177\u4F53\u533A\u522B\u3002\u4E8E\u662F\u5C31\u8DDF\u7740\u94FE\u63A5\u8FDB\u5165\u4E86<a href="https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028">Stack Overflow</a>\u4E2D\uFF0C\u770B\u4E0E\u8FD9\u76F8\u5173\u7684\u4E00\u4E2A<strong>\u95EE\u9898\u4E0E\u8BA8\u8BBA</strong>\u3002\u8BA8\u8BBA\u7684\u5185\u5BB9\u4E5F\u7ECF\u591A\u4F4D\u725B\u4EBA\u7F16\u8F91\uFF0C\u603B\u7ED3\u5F97\u5F88\u8BE6\u7EC6\uFF0C\u5C31\u60F3\u7740\u628A\u8FD9\u91CC\u9762\u7684\u5185\u5BB9\u5728\u535A\u5BA2\u4E2D\u5206\u4EAB\u8BB0\u5F55\u4E00\u4E0B\u3002\u5948\u4F55\u65F6\u95F4\u5173\u7CFB\uFF0C\u4E00\u76F4\u5728\u535A\u5BA2\u7684\u8349\u7A3F\u7BB1\u91CC\uFF0C\u5E74\u5E95\u4E86\u4E0D\u600E\u4E48\u5FD9\uFF0C\u8D81\u6709\u65F6\u95F4\u5C31\u603B\u7ED3\u7FFB\u8BD1\u4E00\u4E0B\u3002</p>
<h1><a id="_4"></a>\u660E\u786E\u6982\u5FF5</h1>
<p>\u9996\u5148\u56E0\u4E3A\u4E24\u4E2A\u5355\u8BCD\u5728\u4E2D\u6587\u4E2D\u90FD\u7FFB\u8BD1\u6210<strong>\u5C5E\u6027</strong>\uFF0C\u6240\u4EE5\u4F1A\u9020\u6210\u8F83\u591A\u6DF7\u6DC6\u3002\u5728\u6B64\u4E5F\u5148\u660E\u786E\u4E00\u4E0B\u5176\u5B83\u4E00\u4E9B\u57FA\u7840\u6982\u5FF5\u3002<br>
\u8EAB\u4E3A\u524D\u7AEF\u4EBA\u5458\u6211\u4EEC\u7ECF\u5E38\u4F1A\u7528<code>\u6807\u7B7E</code>\uFF0C<code>\u5143\u7D20</code>\uFF0C<code>DOM</code>\u6765\u5F62\u5BB9<code>HTML</code> \u5185\u5BB9\uFF0C\u5BF9\u6B64\u5176\u5B9E\u6709\u660E\u786E\u5212\u5206\u7684\u3002\u5982\u4E0B<code>HTML code</code>\uFF08\u80FD\u660E\u786E\u533A\u5206\u7684\u53EF\u4EE5\u8DF3\u8FC7\uFF09</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>\u6807\u7B7E\u6307\u7684\u662F <code>div</code>\uFF0C\u4E5F\u6709\u5176\u4ED6\u6807\u7B7E\u5982\uFF1A<code>a</code>\uFF0C<code>p</code>\uFF0C<code>input</code>\u7B49\u7B49\u3002<br>
\u591A\u6570\u6807\u7B7E\u5206\u4E3A<code>&lt;div&gt;</code> \u5F00\u59CB\u6807\u7B7E(opening tag)\uFF0C\u4EE5\u53CA<code>&lt;/div&gt;</code>\u7ED3\u675F\u6807\u7B7E(closing tag)\u3002<br>
\u5F53\u7136\u6709\u7684\u4E5F\u4E0D\u533A\u5206\u5982: <code>&lt;input&gt;</code>\uFF0C<code>&lt;hr&gt;</code>\uFF0C<code>&lt;br&gt;</code>\u7B49\u3002<br>
\u6807\u7B7E\u4E0A\u6709\u9644\u52A0\u4FE1\u606F\u6211\u4EEC\u79F0\u4E4B\u4E3A <code>HTML \u5C5E\u6027</code>\uFF0C\u5982 <code>id</code>\uFF0C<code>class</code><br>
\u4EE5\u4E0A\u5408\u8D77\u6765\uFF0C\u6211\u4EEC\u7EDF\u79F0\u4E3A<code>HTML \u5143\u7D20</code>\uFF0C\u800C\u4E00\u4E2A<code>HTML\u6587\u6863</code>\u5C31\u662F\u591A\u4E2A<code>HTML\u5143\u7D20</code>\u6784\u6210\u7684\u3002</p>
<p>\u800C<code>HTML DOM</code>\u662F HTML \u7684\u6807\u51C6\u5BF9\u8C61\u6A21\u578B\uFF0C<code>DOM(Document Object Model)</code>\uFF0C\u76F4\u8BD1\u5C31\u662F<strong>\u6587\u6863\u5BF9\u8C61\u6A21\u578B</strong><br>
<code>HTML DOM</code> \u5B9A\u4E49\u4E86\u6240\u6709 HTML \u5143\u7D20\u7684<strong>\u5BF9\u8C61</strong>\u548C<strong>\u5C5E\u6027</strong>\uFF0C\u4EE5\u53CA\u8BBF\u95EE\u5B83\u4EEC\u7684<strong>\u65B9\u6CD5</strong>\u3002<br>
\u800CDOM\u5BF9\u8C61\u4E0A\u7684<strong>\u5C5E\u6027</strong>\u6211\u4EEC\u79F0\u4E4B\u4E3A<code>property</code>\u3002</p>
<h1><a id="_20"></a>\u8BA8\u8BBA\u539F\u56E0</h1>
<p>\u5F15\u53D1<a href="https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028"><strong>\u6B64\u6B21</strong></a>\u8BA8\u8BBA\u7684\u4E3B\u8981\u539F\u56E0\u5C31\u662F\u56E0\u4E3A<code>jQuery v1.6.1</code>\u7684\u53D1\u5E03\uFF0C\u6B64\u7248\u672C\u4E4B\u524D\u76F4\u63A5\u7528<code>attr()</code>\u65B9\u6CD5\u5904\u7406\u4E86<code>property</code>\u548C<code>attribute</code>\uFF0C\u4E3A\u4E86\u6D88\u9664<code>property</code>\u548C<code>attribute</code>\u7684\u6B67\u4E49\uFF0C\u4EE5\u53CA\u4E00\u4E9B<code>attr()</code>\u7684bug\u548C\u7EF4\u62A4\u56F0\u96BE\u7684\u95EE\u9898\uFF0C\u4E8E\u662F\u65B0\u6DFB\u52A0\u4E86<code>prop()</code>\u65B9\u6CD5\uFF0C<code>jQuery v1.6.1</code>\u53D1\u5E03\u65E5\u5FD7\u53EF\u4EE5\u5728<a href="http://blog.jquery.com/2011/05/12/jquery-1-6-1-released/"><strong>\u8FD9\u91CC</strong></a>\u770B\u3002</p>
<h1><a id="_23"></a>\u8BE6\u7EC6\u89E3\u91CA</h1>
<p>\u7F16\u5199HTML\u6E90\u4EE3\u7801\u65F6\uFF0C\u53EF\u4EE5\u5728HTML\u5143\u7D20\u4E0A\u5B9A\u4E49\u5C5E\u6027(attribute) \u3002 \u7136\u540E\uFF0C\u4E00\u65E6\u6D4F\u89C8\u5668\u89E3\u6790\u4E86\u60A8\u7684\u4EE3\u7801\uFF0C\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u7684DOM\u8282\u70B9\u3002 \u8BE5\u8282\u70B9\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u56E0\u6B64\u5177\u6709\u5C5E\u6027 (property)\u3002<br>
\u4F8B\u5982\uFF1A</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p><code>input</code>\u5143\u7D20\u6709\u4E24\u4E2A\u5C5E\u6027(attribute)\uFF0C<code>type</code>\u548C<code>value</code>\u3002<br>
\u6D4F\u89C8\u5668\u89E3\u6790\u8FD9\u6BB5\u4EE3\u7801\u540E\uFF0C\u5C06\u521B\u5EFA\u4E00\u4E2A<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement"><strong>HTMLInputElement</strong></a>\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5C06\u5305\u542B\u8BB8\u591A\u5C5E\u6027\u3002<br>
\u4F8B\u5982\uFF1A<code>accept</code>\uFF0C<code>accessKey</code>\uFF0C<code>align</code>\uFF0C<code>alt</code>\uFF0C<code>attributes</code>\uFF0C<code>autofocus</code>\uFF0C<code>baseURI</code>\uFF0C<code>checked</code>\uFF0C<code>childElementCount</code>\uFF0C<code>childNodes</code>\uFF0C<code>childNodes</code>\uFF0C<code>classList</code>\uFF0C<code>className</code>\uFF0C<code>clientHeight</code>\u7B49</p>
<p>\u89E3\u6790\u521B\u5EFA\u540E\u7684\u8FD9\u4E2A<strong>DOM\u8282\u70B9\u5BF9\u8C61</strong>\uFF0C<code>property</code>\u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u800C<code>attribute</code>\u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684<code>attributes</code>\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027<br>
<font size="2" color="#aaa">\uFF08\u7B80\u5355\u8BB2\u5C31\u662F\u8FD9\u6837 <code>domObj.attibutes.attribute</code> \uFF09\u3002<font></font></font></p>
<p>\u56E0\u4E3A\u662F\u6839\u636EHTML \u5143\u7D20\u521B\u5EFA\u7684<strong>DOM\u8282\u70B9\u5BF9\u8C61</strong>\uFF0C\u6240\u4EE5\u4F1A\u6709\u8BB8\u591A\u5C5E\u6027(property)\u90FD\u4E0E<strong>\u5177\u6709\u76F8\u540C\u6216\u76F8\u4F3C\u540D\u79F0</strong>\u7684\u5C5E\u6027(attribute)\u76F8\u5173\uFF0C\u4F46\u8FD9\u4E0D\u5E76\u662F\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB\u3002<br>
\u6BD4\u5982\uFF1A</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inputId<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>\u6B64\u5143\u7D20\u521B\u5EFA\u7684<strong>DOM\u8282\u70B9\u5BF9\u8C61</strong>\u6709\uFF0C<code>id</code>\uFF0C<code>type</code>\uFF0C<code>value</code> \u7B49\u5C5E\u6027(property)<br>
DOM\u8282\u70B9\u5BF9\u8C61\u4E0A\u7684<code>id</code> \u5C5E\u6027(property)\u662F\u6620\u5C04\u7684<code>id</code>\u5C5E\u6027(attribute)\u3002\u83B7\u53D6<code>id</code>\u7684<code>property</code>\u5C31\u662F\u83B7\u53D6<code>attribute</code>\u503C\uFF0C\u8BBE\u7F6E\u4E5F\u662F\u4E00\u6837\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">var</span> inputDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#inputId'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token comment">// "inputId"</span>
<span class="token comment">// "inputId"</span>

inputDom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span><span class="token string">'inputId2'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token comment">// "inputId2"</span>
<span class="token comment">// "inputId2"</span>

inputDom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">'inputId'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token comment">// "inputId"</span>
<span class="token comment">// "inputId"</span>
</code></pre>
<p>DOM\u8282\u70B9\u5BF9\u8C61\u4E0A\u7684<code>type</code>\u5C5E\u6027(property)\u662F\u6620\u5C04 <code>type</code>\u7684\u5C5E\u6027(attribute)\uFF0C\u83B7\u53D6<code>property</code>\u8BFB\u53D6\u7684\u662F<code>attribute</code>\u503C\uFF0C\u5E76\u4E14\u8BBE\u7F6E<code>property</code>\u5199\u5165\u7684\u662F<code>attribute</code>\u503C\u3002<code>type</code>\u4E0D\u662F\u7EAF\u7CB9\u7684\u6620\u5C04\u5C5E\u6027\uFF0C\u56E0\u4E3A\u5B83\u7684\u503C\u53EA\u80FD\u4E3A <strong>\u5DF2\u77E5\u503C</strong> \uFF08\u4F8B\u5982:<code>text</code>\uFF0C<code>submit</code>\uFF0C<code>button</code>\uFF0C<code>checkbox</code>\u7B49\u7B49\uFF09\u3002\u4EE5\u4E0B\u53EF\u4EE5\u770B\u5230\uFF0C\u8BBE\u7F6E<code>type</code>\u4E3A<strong>\u672A\u77E5\u503C</strong> \u65F6 <code>property</code>\u59CB\u7EC8\u4E3Atext\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">var</span> inputDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#inputId'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
<span class="token comment">// text</span>
<span class="token comment">// text</span>

inputDom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">,</span><span class="token string">'007'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
<span class="token comment">// 007</span>
<span class="token comment">// text</span>

inputDom<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'008'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'type'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
<span class="token comment">// 008</span>
<span class="token comment">// text</span>
</code></pre>
<p><code>value</code>\u5C5E\u6027(property)\u4E0D\u662F\u5B8C\u5168\u6620\u5C04<code>value</code>\u5C5E\u6027(attribute)\u3002 \u521D\u59CB\u72B6\u6001<code>value</code>\u5C5E\u6027(property)\u6620\u5C04\u7684<code>value</code>\u5C5E\u6027(attribute)\uFF0C \u5F53\u7528\u6237\u624B\u52A8\u66F4\u6539\u8F93\u5165\u6846\u7684\u5185\u5BB9\u65F6 \uFF0C <code>value</code>\u5C5E\u6027(property)\u5C06\u66F4\u6539\u4E3A\u7528\u6237\u8F93\u5165\u7684\u4FE1\u606F\u3002</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inputId<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
</code></pre>
<pre><code class="prism language-javascript"><span class="token keyword">var</span> inputDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#inputId'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token comment">// name</span>
<span class="token comment">// name</span>

inputDom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">,</span><span class="token string">'007'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token comment">// 007</span>
<span class="token comment">// 007</span>

inputDom<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'008'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputDom<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token comment">// 007</span>
<span class="token comment">// 008</span>
</code></pre>
<p>\u7531\u4EE5\u4E0A\u53EF\u4EE5\u5F97\u77E5\uFF0C<code>input</code>\u7684<code>value</code>\u5C5E\u6027(property)\u5728\u7528\u6237\u672A\u8F93\u5165\u6570\u636E\uFF0C\u6216\u8BBE\u7F6E<code>property</code>\u7684\u503C\u65F6\uFF0C\u53D6\u7684\u503C\u662F<code>attribute</code>\u7684\u503C\u3002\u5F53\u7528\u6237\u8F93\u5165\u503C\u6216\u8005\u8BBE\u7F6E\u4E86<code>property</code>\u7684\u503C\u540E\uFF0C<code>property</code>\u7684\u503C\u5C31\u4E0D\u53D7<code>attribute</code>\u5F71\u54CD\u4E86\uFF0C<code>property</code>\u7684\u503C\u5C31\u662F\u9875\u9762\u8F93\u5165\u6846\u5185\u5C55\u793A\u7684\u5185\u5BB9\uFF08\u5982\u4E0B\u56FE\uFF09<br>
<img src="https://img-blog.csdnimg.cn/2020011820011235.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
<code>attribute</code>\u7684\u503C\u662FHTML\u6E90\u4EE3\u7801\u5C5E\u6027\uFF08\u5982\u4E0B\u56FE\uFF09<br>
<img src="https://img-blog.csdnimg.cn/20200118195847768.png" alt="attribute \u7684\u503C"><br>
\u4ECE\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C31\u80FD\u5F88\u660E\u663E\u770B\u51FA\u6765<code>property</code>\u548C<code>attribute</code>\u7684\u533A\u522B\u4E86\uFF0C\u5F53\u7136\u8FD8\u6709\u5F88\u591A\u5C5E\u6027<code>property</code>\u4E0E<code>attribute</code>\u4E4B\u95F4\u7684\u6620\u5C04\u5173\u7CFB\u5E76\u4E0D\u76F8\u540C\uFF0C\u6BD4\u5982<code>class attribute</code> \u548C <code>className property</code>\u3001<code>classList property</code> \u4E4B\u95F4\u7684\u5173\u7CFB\u7B49\u7B49\u3002</p>
<p>\u8FD9\u91CC\u6709\u7BC7 <a href="https://angular.cn/guide/template-syntax#html-attribute-vs-dom-property"><strong>Angular \u7684\u6587\u6863</strong></a>\uFF0C\u5176\u4E2D\u4E5F\u63CF\u8FF0\u4E86html\u5C5E\u6027\u548CDOM\u5C5E\u6027\u7684\u4E00\u4E9B\u5185\u5BB9\uFF0C\u6709\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u4EEC\u53EF\u4EE5\u8FDB\u53BB\u770B\u770B\u3002<br>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API#%E6%8E%A5%E5%8F%A3">Web API \u63A5\u53E3\u53C2\u8003</a></p>
<h1><a id="_118"></a>\u603B\u7ED3</h1>
<p>\u6700\u540E\u603B\u7684\u6765\u8BB2\u5C31\u662F  <strong>HTML\u5C5E\u6027</strong> (attribute)\u548C <strong>DOM\u5C5E\u6027</strong>(property)\uFF0C\u662F\u76F8\u4E92\u5173\u8054\u7684\u3002\u591A\u6570\u60C5\u51B5<code>attribute</code>\u503C\u4EC5\u7528\u4F5C\u521D\u59CBDOM\u8282\u70B9\u5BF9\u8C61\u4F7F\u7528\uFF0C\u800C<code>property</code>\u66F4\u591A\u7528\u4E8E\u9875\u9762\u4EA4\u4E92\uFF0C\u5F88\u591A\u6846\u67B6\u90FD\u662F\u5728\u4E0E\u5143\u7D20\u548C\u6307\u4EE4\u7684 <code>property</code>\u548C\u4E8B\u4EF6\u6253\u4EA4\u9053\u3002</p>
<p>\u4EE5\u4E0A\u63CF\u8FF0\u5982\u6709\u9519\u8BEF\u6B22\u8FCE\u6307\u6B63\uFF0C\u8C22\u8C22</p>
<h1><a id="_123"></a>\u53C2\u8003\u6587\u6863</h1>
<p>\u4EE5\u4E0A\u6240\u5F15\u7528\u6587\u6863\u90FD\u5C3D\u91CF\u66F4\u6362\u4E3A\u4E2D\u6587\u6587\u6863\uFF0C\u539F\u82F1\u6587\u6587\u6863\u53C2\u8003\u4E0B\u65B9\u3002</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement">HTMLInputElement</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/API#Interfaces">Web APIs</a><br>
<a href="https://angular.io/guide/template-syntax#html-attribute-vs-dom-property">HTML attribute vs. DOM property</a><br>
<a href="https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html#answer-6004028">Stack Overflow</a></p>
</div>
</body>

</html>
`;export{n as default};
