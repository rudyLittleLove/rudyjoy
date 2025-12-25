var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u4F7F\u7528canvas \u5982\u4F55\u7ED8\u5236\u5F62\u72B6\u5E76\u652F\u6301\u62D6\u62FD\u3001\u7F29\u653E\u529F\u80FD</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>\u4F7F\u7528canvas \u5982\u4F55\u7ED8\u5236\u5F62\u72B6\u5E76\u652F\u6301\u62D6\u62FD\u3001\u7F29\u653E\u529F\u80FD</h3><ul><li><a href="#_2">\u5F15\u8A00</a></li><li><a href="#_5">\u5F00\u59CB\u7F16\u5199</a></li><ul><li><a href="#_28">\u9996\u5148\u7ED8\u5236\u4E00\u4E2A\u5F62\u72B6</a></li><li><a href="#_80">\u7ED8\u5236\u591A\u4E2A\u3001\u591A\u79CD\u7C7B\u578B\u5F62\u72B6</a></li><li><a href="#_182">\u6DFB\u52A0\u7F29\u653E\u529F\u80FD</a></li><li><a href="#_397">\u6DFB\u52A0\u62D6\u62FD\u753B\u5E03\u7684\u6548\u679C</a></li><li><a href="#_477">\u62D6\u62FD\u753B\u5E03\u4E2D\u7684\u5F62\u72B6</a></li><ul><li><a href="#_687">\u5224\u65AD\u662F\u5426\u5904\u4E8E\u5F62\u72B6\u5185\u90E8\u65B9\u6CD5\u89E3\u91CA</a></li></ul></ul><li><a href="#_707">\u603B\u7ED3</a></li></ul></div><p></p>
<h1><a id="_2"></a>\u5F15\u8A00</h1>
<p>\u2003\u2003 \u4E4B\u524D\u9047\u5230\u8FC7\u4E00\u4E2A\u9762\u8BD5\u7684\u673A\u8BD5\u9898\uFF0C\u5C31\u662F\u7528\u753B\u5E03\u7ED8\u5236\u5F62\u72B6\uFF0C\u5E76\u4E14\u652F\u6301\u7F29\u653E\u3001\u62D6\u62FD\u529F\u80FD\u3002\u73B0\u5728\u6709\u70B9\u65F6\u95F4\u5C31\u5206\u4EAB\u4E00\u4E0B\u6211\u662F\u5982\u4F55\u4E00\u6B65\u4E00\u6B65\u5B8C\u6210\u8FD9\u4E2A\u529F\u80FD\u7684\u3002\u770B\u8FD9\u7BC7\u4FE1\u606F\u4E4B\u524D\u6700\u597D\u5148\u53BB\u770B\u4E00\u4E0B<code>canvas</code> \u7684 <code>api</code>\uFF0C<a href="https://www.runoob.com/tags/ref-canvas.html">canvas API \u7A7F\u68AD\u673A\u3002</a><br>
<br></p>
<h1><a id="_5"></a>\u5F00\u59CB\u7F16\u5199</h1>
<p>\u5148\u5199\u51FA\u5BB9\u5668Dom\uFF0C\u548C\u6837\u5F0F<br>
html</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chart-wrap<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chart-wrap<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>css</p>
<pre><code class="prism language-css"><span class="token selector">html,body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.chart-wrap</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 40px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<br>
<h2><a id="_28"></a>\u9996\u5148\u7ED8\u5236\u4E00\u4E2A\u5F62\u72B6</h2>
<p>\u8FD9\u91CC\u5199\u4E00\u4E2A \u540D\u53EB <code>chart</code> \u7684\u7C7B\uFF0C\u5728 \u6784\u9020\u5668 <code>constructor</code> \u91CC\u521D\u59CB\u5316\u753B\u5E03\uFF0C\u5199\u597D\u7ED8\u5236\u5F62\u72B6\u7684\u51FD\u6570\u3001\u4EE5\u53CA\u753B\u5E03\u6E32\u67D3\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token keyword">class</span> <span class="token class-name">chart</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u6784\u9020\u5668</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> wrapDomStyle <span class="token operator">=</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>wrapDomStyle<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>wrapDomStyle<span class="token punctuation">.</span>height<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u521B\u5EFAcanvas\u753B\u5E03</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    params<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7ED8\u5236\u5706\u5F62</span>
  <span class="token function">drawCircle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> data<span class="token punctuation">.</span>fillStyle<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>x<span class="token punctuation">,</span> data<span class="token punctuation">.</span>y<span class="token punctuation">,</span> data<span class="token punctuation">.</span>r<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6DFB\u52A0\u5F62\u72B6</span>
  <span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawCircle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6784\u5EFA\u56FE\u8868\u5BF9\u8C61</span>
<span class="token keyword">var</span> chartObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">chart</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> el<span class="token punctuation">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart-wrap'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7ED8\u5236\u5706\u5F62</span>
chartObj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  fillStyle<span class="token punctuation">:</span> <span class="token string">'pink'</span><span class="token punctuation">,</span>
  x<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  y<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  r<span class="token punctuation">:</span> <span class="token number">50</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>\u4E0A\u9762\u4EE3\u7801\u7ED3\u6784\u5F88\u7B80\u5355\uFF0C<code>new</code> \u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F20\u5165\u5BB9\u5668Dom\uFF0C\u5728<code>constructor</code> \u4E2D\u521D\u59CB\u5316\u4E00\u4E2A\u753B\u5E03\u653E\u5165 <code>div#chart-wrap</code> \u8FD9\u4E2A <code>dom</code> \u4E2D\uFF0C\u518D\u628A\u521B\u5EFA\u597D\u7684\u5B9E\u4F8B\u8D4B\u503C\u7ED9 <code>chartObj</code> \u8FD9\u4E2A\u53D8\u91CF\u3002</p>
<p>\u901A\u8FC7\u8C03\u7528\u7C7B\u7684 <code>push</code> \u65B9\u6CD5\uFF0C\u7ED8\u5236\u4E00\u4E2A\u5706\u5F62\u3002</p>
<p><a href="http://jsrun.net/kI2Kp">\u4EE3\u7801\u6548\u679C\u70B9\u51FB\u6B64\u5904\u89C2\u770B</a><br>
<br></p>
<h2><a id="_80"></a>\u7ED8\u5236\u591A\u4E2A\u3001\u591A\u79CD\u7C7B\u578B\u5F62\u72B6</h2>
<p>\u5982\u679C\u60F3\u7ED8\u5236\u5176\u4ED6\u56FE\u5F62\u5C31\u9700\u8981\u52A0 <code>type</code> \u5224\u65AD\uFF0C\u4EE5\u4E0A\u4EE3\u7801\u6539\u9020\u5B8C\u6210\u540E\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token keyword">class</span> <span class="token class-name">chart</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u6784\u9020\u5668</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> wrapDomStyle <span class="token operator">=</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>wrapDomStyle<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>wrapDomStyle<span class="token punctuation">.</span>height<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u521B\u5EFAcanvas\u753B\u5E03</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    params<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7ED8\u5236\u5706\u5F62</span>
  <span class="token function">drawCircle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> data<span class="token punctuation">.</span>fillStyle<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>x<span class="token punctuation">,</span> data<span class="token punctuation">.</span>y<span class="token punctuation">,</span> data<span class="token punctuation">.</span>r<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// _____________ \u6DFB\u52A0\u7ED8\u5236\u7EBF\u6761\u65B9\u6CD5 ____________</span>
  <span class="token function">drawLine</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr <span class="token operator">=</span> data<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> ctx <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">;</span>  

    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> data<span class="token punctuation">.</span>lineWidth <span class="token operator">||</span> <span class="token number">1</span>
    <span class="token keyword">do</span><span class="token punctuation">{</span>
      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// ___________ \u6DFB\u52A0\u7ED8\u5236\u77E9\u5F62\u65B9\u6CD5 ______________</span>
  <span class="token function">drawRect</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> data<span class="token punctuation">.</span>fillStyle<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token operator">...</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ___________ \u6DFB\u52A0\u4E00\u4E2A\u5224\u65AD\u7C7B\u578B\u7ED8\u5236\u7684\u65B9\u6CD5 _____________</span>
  <span class="token function">draw</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">'line'</span><span class="token punctuation">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawLine</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'rect'</span><span class="token punctuation">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawRect</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'circle'</span><span class="token punctuation">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawCircle</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// \u6DFB\u52A0\u5F62\u72B6</span>
  <span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ____________ \u4FEE\u6539\u8C03\u7528\u7ED8\u5236\u65B9\u6CD5 ____________</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6784\u5EFA\u56FE\u8868\u5BF9\u8C61</span>
<span class="token keyword">var</span> chartObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">chart</span><span class="token punctuation">(</span> <span class="token punctuation">{</span> el<span class="token punctuation">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chart-wrap'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7ED8\u5236\u5706\u5F62</span>
chartObj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  type<span class="token punctuation">:</span> <span class="token string">'circle'</span><span class="token punctuation">,</span> <span class="token comment">// ____________ \u8FD9\u91CC\u6DFB\u52A0\u4E86\u4E00\u4E2A\u7C7B\u578B __________________</span>
  fillStyle<span class="token punctuation">:</span> <span class="token string">'pink'</span><span class="token punctuation">,</span>
  x<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  y<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  r<span class="token punctuation">:</span> <span class="token number">50</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ___________ \u6DFB\u52A0\u7ED8\u5236\u7EBF\u6761 __________</span>
chartObj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  type<span class="token punctuation">:</span> <span class="token string">'line'</span><span class="token punctuation">,</span>
  lineWidth<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ___________ \u6DFB\u52A0\u7ED8\u5236\u77E9\u5F62 __________</span>
chartObj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  type<span class="token punctuation">:</span> <span class="token string">'rect'</span><span class="token punctuation">,</span>
  fillStyle<span class="token punctuation">:</span> <span class="token string">"#0f00ff"</span><span class="token punctuation">,</span>
  data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">350</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<p>\u5BF9\u6BD4\u524D\u9762\u8FD9\u91CC\u6DFB\u52A0\u4E86\u4E00\u4E2A\u7ED8\u5236\u77E9\u5F62\uFF08<code>drawRect</code>\uFF09\u3001\u7ED8\u5236\u7EBF\u6761(<code>drawLine</code>)\u7684\u65B9\u6CD5 \u548C \u6570\u636E\uFF0C\u5E76\u4E14\u6DFB\u52A0\u4E86\u5224\u65AD\u6E32\u67D3\u7C7B\u578B\u7684\u51FD\u6570(<code>draw</code>)\u3002</p>
<p><a href="http://jsrun.net/YI2Kp">\u4EE3\u7801\u6548\u679C\u70B9\u51FB\u6B64\u5904\u89C2\u770B</a><br>
<br></p>
<h2><a id="_182"></a>\u6DFB\u52A0\u7F29\u653E\u529F\u80FD</h2>
<p>\u6DFB\u52A0\u7F29\u653E\u9700\u8981\u5148\u7406\u6E05\u4E00\u4E9B\u4E1C\u897F\u3002</p>
<p>\u7F29\u653E <code>canvas</code> \u63D0\u4F9B\u4E86\u4E24\u4E2A\u7C7B\u578B\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u4E00\u4E2A\u662F\u5728\u5F53\u524D\u7F29\u653E\u57FA\u7840\u4E0A\u7F29\u653E\uFF0C\u4E00\u4E2A\u662F\u5728\u57FA\u7840\u753B\u5E03\u4E0A\u7F29\u653E\u3002</p>
<p><strong>\u77E9\u9635\u53D8\u5316\u4E0D\u53EA\u6709\u7F29\u653E\uFF0C\u4F46\u662F\u53EF\u4EE5\u5176\u4ED6\u53C2\u6570\u4E0D\u53D8\u53EA\u66F4\u6539\u7F29\u653E\u503C</strong></p>
<p>\u5F53\u524D\u7F29\u653E\u57FA\u7840\u4E0A\u7F29\u653E\uFF1A<code>scale()</code>\u7F29\u653E\u5F53\u524D\u7ED8\u56FE\u81F3\u66F4\u5927\u6216\u66F4\u5C0F\uFF0C<code>transform()</code>\u66FF\u6362\u7ED8\u56FE\u7684\u5F53\u524D\u8F6C\u6362\u77E9\u9635;<br>
<strong>\u2003\u2003<font size="1">\u610F\u601D\u5C31\u662F\u539F\u672C\u753B\u5E03\u5927\u5C0F\u662F 1\uFF0C\u7B2C\u4E00\u6B21\u653E\u5927 2\u500D\uFF0C\u5C31\u53D8\u62102\uFF0C\u7B2C\u4E8C\u6B21\u653E\u59272\u500D\u5C31\u53D8\u62104</font></strong></p>
<p>\u5728\u57FA\u7840\u753B\u5E03\u4E0A\u7F29\u653E: <code>setTransform()</code>\u5C06\u5F53\u524D\u8F6C\u6362\u91CD\u7F6E\u4E3A\u5355\u4F4D\u77E9\u9635\u3002\u7136\u540E\u8FD0\u884C transform()\u3002<br>
<strong>\u2003\u2003<font size="1">\u610F\u601D\u5C31\u662F\u539F\u672C\u753B\u5E03\u5927\u5C0F\u662F 1\uFF0C\u7B2C\u4E00\u6B21\u653E\u5927 2\u500D\uFF0C\u5C31\u53D8\u62102\uFF0C\u7B2C\u4E8C\u6B21\u653E\u59272\u500D\u8FD8\u662F2\uFF0C\u56E0\u4E3A\u91CD\u7F6E\u56DE\u539F\u6765\u76841\u540E\u518D\u653E\u5927\u7684</font></strong></p>
<p>\u8FD9\u91CC\u6211\u4F7F\u7528 <code>setTransform()</code> \u7F29\u653E\u753B\u5E03</p>
<p><strong>\u7B2C\u4E00\u6B65\u9AA4</strong>\uFF1A.\u56E0\u4E3A\u8981\u7F29\u653E\u6240\u4EE5\u5FC5\u987B\u4FDD\u5B58\u597D\u5F53\u524D\u7684\u7F29\u653E\u503C\uFF0C\u5C31\u5728<code>constructor</code> \u52A0\u4EE5\u4E0B\u53C2\u6570\uFF0C\u4EE5\u53CA\u5728 <code>push()</code> \u65B9\u6CD5\u4E0B\u4FDD\u5B58\u6570\u636E\u3001<code>render()</code> \u91CD\u7ED8\u6240\u6709\u6570\u636E</p>
<pre><code class="prism language-javascript"><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u56E0\u4E3Acanvas\u662F\u57FA\u4E8E\u72B6\u6001\u7ED8\u5236\u7684\uFF0C\u4E5F\u5C31\u662F\u8BBE\u7F6E\u4E86\u7F29\u653E\u503C\uFF0C\u518D\u7ED8\u5236\u7684\u5143\u7D20\u624D\u4F1A\u6839\u636E\u7F29\u653E\u500D\u6570\u7ED8\u5236\uFF0C\u56E0\u6B64\u9700\u8981\u628A\u6BCF\u4E2A\u7ED8\u5236\u7684\u5BF9\u8C61\u4FDD\u5B58\u8D77\u6765\u3002</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
  <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u7F29\u653E\u503C\u662F 1</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0\u5F62\u72B6</span>
<span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// push \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u4FDD\u5B58\u6570\u636E\u64CD\u4F5C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6E32\u67D3\u6574\u4E2A \u56FE\u5F62\u753B\u5E03</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width

  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>\u7B2C\u4E8C\u6B65\u9AA4</strong>\uFF1A.\u56E0\u4E3A\u7F29\u653E\u65F6\u9F20\u6807\u6EDA\u8F6E\u63A7\u5236\uFF0C\u6240\u4EE5\u52A0\u4E0A\u76D1\u542C\u6EDA\u8F6E\u4E8B\u4EF6\uFF0C\u800C\u4E14\u662F\u5728\u9F20\u6807\u79FB\u5165\u753B\u5E03\u4E2D\u65F6\u624D\u6DFB\u52A0\uFF0C\u4E0D\u5728\u753B\u5E03\u4E2D\u5C31\u4E0D\u9700\u8981\u76D1\u542C\u6EDA\u8F6E\u4E8B\u4EF6\u3002</p>
<pre><code class="prism language-javascript"><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6DFB\u52A0\u6EDA\u8F6E\u5224\u65AD\u4E8B\u4EF6</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addScaleFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">// \u6DFB\u52A0\u7F29\u653E\u529F\u80FD\uFF0C\u5224\u65AD\u65F6\u673A\u6CE8\u518C\u79FB\u9664MouseWhell\u4E8B\u4EF6</span>
<span class="token function">addScaleFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseenter'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>addMouseWhell<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseleave'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>removeMouseWhell<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0 mousewhell \u4E8B\u4EF6</span>
<span class="token function-variable function">addMouseWhell</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousewheel'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollFunc<span class="token punctuation">,</span> <span class="token punctuation">{</span>passive<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u79FB\u9664mousewhell \u4E8B\u4EF6</span>
<span class="token function-variable function">removeMouseWhell</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mousewheel'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollFunc<span class="token punctuation">,</span> <span class="token punctuation">{</span>passive<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><strong>\u7B2C\u4E09\u6B65\u9AA4</strong>\uFF1A\u6EDA\u8F6E\u4E8B\u4EF6\u76D1\u542C\u5B8C\u6210\u540E\uFF0C\u5C31\u662F\u8C03\u7528\u5177\u4F53\u7684\u7F29\u653E\u5B9E\u73B0\u4EE3\u7801\u4E86</p>
<pre><code class="prism language-javascript"><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7F29\u653E\u5177\u4F53\u5B9E\u73B0\u4F1A\u7528\u5230\u7684\u6570\u636E</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>maxScale <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u5927\u7F29\u653E\u503C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>minScale <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u5C0F\u7F29\u653E\u503C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>step <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>   <span class="token comment">// \u7F29\u653E\u7387</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// \u753B\u5E03X\u8F74\u504F\u79FB\u503C</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// \u753B\u5E03Y\u8F74\u504F\u79FB\u503C</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7F29\u653E \u5177\u4F53\u8BA1\u7B97</span>
<span class="token function-variable function">scrollFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6 \uFF08\u7F29\u653E\u65F6\u5916\u90E8\u5BB9\u5668\u7981\u6B62\u6EDA\u52A8\uFF09</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>wheelDelta<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX
    <span class="token keyword">var</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY

    <span class="token keyword">var</span> offsetX <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token keyword">var</span> offsetY <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step

    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>wheelDelta <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetX
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetY

      <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetX
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetY

      <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>maxScale<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minScale<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728\u7C7B\u578B\u5224\u65AD\u6E32\u67D3\u65B9\u6CD5\u5185\u6DFB\u52A0\u8BBE\u7F6E\u7F29\u653E</span>
<span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">setTransform</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p><a href="http://jsrun.net/ZI2Kp">\u4EE5\u4E0A\u4EE3\u7801\u6548\u679C\u9884\u89C8</a></p>
<p>\u89E3\u91CA\uFF1A<br>
\u2003\u2003 \u7B2C\u4E00\u6B65\u9AA4\u7B2C\u4E8C\u6B65\u9AA4\u7406\u89E3\u8D77\u6765\u5F88\u5BB9\u6613\uFF0C\u6BD4\u8F83\u9EBB\u70E6\u7684\u662F\u7B2C\u4E09\u6B65\u9AA4\uFF0C\u4E0B\u9762\u5C31\u6765\u8BE6\u7EC6\u89E3\u91CA\u4E00\u4E0B\u7B2C\u4E09\u90E8\u5177\u4F53\u7F29\u653E\u5B9E\u73B0\u3002</p>
<p>\u7F29\u51CF\u4E00\u4E0B\u4EE3\u7801</p>
<pre><code class="prism language-javascript"><span class="token function-variable function">scrollFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6 \uFF08\u7F29\u653E\u65F6\u5916\u90E8\u5BB9\u5668\u7981\u6B62\u6EDA\u52A8\uFF09</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>wheelDelta<span class="token punctuation">)</span><span class="token punctuation">{</span>
  
    e<span class="token punctuation">.</span>wheelDelta <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step <span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u53EA\u9700\u8981\u4E0A\u8FF0\u51E0\u884C\u5C31\u5B9E\u73B0\u4E86\u7F29\u653E\u3002\u5224\u65AD <code>e.wheelDelta</code>  \u662F\u5411\u4E0A\u6EDA\u52A8\u8FD8\u662F\u5411\u4E0B\uFF0C\u4ECE\u800C\u589E\u52A0\u6216\u51CF\u5C11 <code>this.scale</code> \u7684\u5927\u5C0F\uFF0C\u6700\u540E\u8C03\u7528 <code>render()</code> \u91CD\u65B0\u7ED8\u5236\u5F53\u524D\u753B\u5E03\u3002</p>
<p><code>e.preventDefault()</code> \u5C31\u4E0D\u591A\u89E3\u91CA\u4E86\uFF0C\u5927\u5BB6\u90FD\u77E5\u9053\u662F\u89E3\u51B3\u9ED8\u8BA4\u884C\u4E3A\u7684\u3002\u4F46\u662F\u6709\u4E00\u70B9\u8981\u89E3\u91CA\u4E00\u4E0B \u5728\u8C03\u7528 <code>scrollFunc()</code> \u8FD9\u4E2A\u51FD\u6570\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570 <code>{passive: false}</code> \u662F\u5FC5\u987B\u52A0\u7684\uFF08\u9ED8\u8BA4\u5C31\u662F <code>{passive: true}</code>\uFF09\uFF0C\u4E0D\u7136\u65E0\u6CD5\u963B\u6B62\u9ED8\u8BA4\u7684\u6EDA\u52A8\u4E8B\u4EF6\u3002</p>
<p>\u5927\u5BB6\u53EF\u4EE5\u5728\u6F14\u793A\u4F8B\u5B50\u4E2D\u6CE8\u91CA\u6389 <code>scrollFunc</code> \u4E2D\u7684\u5176\u5B83\u4EE3\u7801\u67E5\u770B\u6548\u679C\uFF0C\u53D1\u73B0\u7F29\u653E\u662F\u53EF\u4EE5\u4E86\uFF0C\u4F46\u662F\uFF0C\u5374\u6CA1\u6709\u6839\u636E\u9F20\u6807\u4F4D\u7F6E\u8FDB\u884C\u7F29\u653E\uFF0C\u800C\u662F\u59CB\u7EC8\u4EE5<code>\u753B\u5E03(0,0)</code> \u7684\u4F4D\u7F6E\u7F29\u653E\u3002\u6240\u4EE5\u753B\u5E03\u653E\u5927\u540E\u4F1A\u5411\u53F3\u4E0B\u504F\u79FB\uFF0C\u56E0\u6B64\u9700\u8981\u5411\u5DE6\u548C\u4E0A\u504F\u79FB\u6821\u6B63\uFF0C\u4F7F\u7F29\u653E\u770B\u8D77\u6765\u5C31\u50CF\u5728\u9F20\u6807\u4F4D\u7F6E\u7F29\u653E\u3002</p>
<p>\u5728\u4E0A\u65B9\u4EE3\u7801\u4E0A\u6539\u9020\u4E00\u4E0B \u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token function-variable function">scrollFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6 \uFF08\u7F29\u653E\u65F6\u5916\u90E8\u5BB9\u5668\u7981\u6B62\u6EDA\u52A8\uFF09</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>wheelDelta<span class="token punctuation">)</span><span class="token punctuation">{</span>
  
    <span class="token keyword">var</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX
    <span class="token keyword">var</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY

    <span class="token keyword">var</span> offsetX <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token keyword">var</span> offsetY <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step

    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>wheelDelta <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">-=</span> offsetX
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">-=</span> offsetY

      <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">+=</span> offsetX
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">+=</span> offsetY

      <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token punctuation">}</span>
    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p><code>x\uFF0Cy</code> \u662F\u9F20\u6807\u8DDD\u79BB\u753B\u5E03\u539F\u59CB\u539F\u70B9\u7684\u8DDD\u79BB\uFF0C<code>offsetX\uFF0CoffsetY</code> \u662F\u672C\u6B21\u7F29\u653E\u7684\u504F\u79FB\u91CF\uFF0C\u7136\u540E\u5224\u65AD\u653E\u5927\u6216\u8005\u7F29\u5C0F\u4ECE\u800C\u589E\u51CF\u6574\u4F53\u753B\u5E03\u7684\u504F\u79FB\u91CF\u3002</p>
<p>\u672C\u6B21\u504F\u79FB\u91CF\u8BA1\u7B97\u65B9\u5F0F\uFF1A\u9F20\u6807\u8DDD\u539F\u59CB\u70B9\u8DDD\u79BB<code>(x\uFF0Cy)</code> \u9664\u4EE5 \u7F29\u653E\u503C <code>this.scale</code> \u518D\u4E58\u4EE5 \u7F29\u653E\u7387 <code>this.step</code>\u3002<br>
<strong>\u2003\u2003<font size="2">\u89E3\u91CA\uFF1A\u56E0\u4E3A\u662F\u4F7F\u7528<code>setTransform()</code>\uFF0C\u6240\u4EE5\u6BCF\u6B21\u653E\u5927\u6216\u8005\u7F29\u5C0F\u90FD\u662F\u5728\u539F\u59CB\u753B\u5E03\u5927\u5C0F\u7684\u57FA\u7840\u4E0A\u7F29\u653E\uFF0C\u6240\u4EE5\u9700\u8981\u9664\u4EE5\u7F29\u653E\u503C\uFF0C\u627E\u5230\u5728\u539F\u59CB\u7F29\u653E\u57FA\u7840\u4E0A\u9F20\u6807\u8DDD\u79BB\u539F\u59CB\u70B9\u7684\u8DDD\u79BB\u3002</font></strong><br>
<strong>\u2003\u2003<font size="2">\u89E3\u91CA\uFF1A\u5982\u679C\u4F7F\u7528<code>scale()</code>\uFF0C\u5C31\u4E0D\u9700\u8981\u9664\u4EE5\u7F29\u653E\u503C\uFF0C\u76F4\u63A5\u5F53\u524D\u7F29\u653E\u503C\u4E58\u4EE5\u7F29\u653E\u7387\u5C31\u80FD\u7B49\u4E8E\u73B0\u5728\u5B9E\u9645\u7F29\u653E\u503C</font></strong></p>
<p>\u6700\u540E\u518D\u628A\u7F29\u653E\u529F\u80FD\u5B8C\u5584\uFF0C\u6DFB\u52A0\u6700\u5927\u7F29\u653E\u503C<code>this.maxScale</code> \u548C \u6700\u5C0F\u7F29\u653E\u503C <code>this.minScale</code> \u9650\u5236\uFF0C\u5B8C\u6210\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token comment">// \u7F29\u653E \u5177\u4F53\u8BA1\u7B97</span>
<span class="token function-variable function">scrollFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6 \uFF08\u7F29\u653E\u65F6\u5916\u90E8\u5BB9\u5668\u7981\u6B62\u6EDA\u52A8\uFF09</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>wheelDelta<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX
    <span class="token keyword">var</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY

    <span class="token keyword">var</span> offsetX <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token keyword">var</span> offsetY <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step

    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>wheelDelta <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetX
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetY

      <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetX
      <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minScale <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> offsetY

      <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>step
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>scale <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>maxScale<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>minScale<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u4EE5\u4E0A\u7F29\u653E\u503C\u8BA1\u7B97\u5C31\u5B8C\u6210\u4E86\uFF0C\u6700\u540E\u53EA\u9700\u8C03\u7528 <code>this.render()</code>\uFF0C\u5728<code>this.render</code> \u4E2D\u4F1A\u8C03\u7528 <code>this.draw</code> \u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u91CC\u8C03\u7528<code>setTransform</code> \u65B9\u6CD5\uFF0C\u8FD9\u91CC\u4F1A\u5C06\u66F4\u6539\u540E\u7684\u7F29\u653E\u503C\uFF0C\u4EE5\u53CA\u504F\u79FB\u503C\u8BBE\u7F6E\u5230\u753B\u5E03\u4E2D\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">setTransform</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<br>
<h2><a id="_397"></a>\u6DFB\u52A0\u62D6\u62FD\u753B\u5E03\u7684\u6548\u679C</h2>
<p>\u9996\u5148\u7406\u6E05\u4E00\u4E0B\u62D6\u62FD\u7684\u6B65\u9AA4<br>
\u9F20\u6807\u6309\u4E0B =&gt; \u9F20\u6807\u79FB\u52A8 =&gt; \u9F20\u6807\u653E\u5F00</p>
<p>\u9F20\u6807\u6309\u4E0B\uFF1A\u6211\u4EEC\u7528 <code>mousedown</code> \u4E8B\u4EF6\uFF0C\u7136\u540E\u5728\u6309\u4E0B\u4E8B\u4EF6\u4E2D\u6CE8\u518C <strong>\u9F20\u6807\u79FB\u52A8</strong> \u4E8B\u4EF6<br>
\u9F20\u6807\u79FB\u52A8\uFF1A\u6211\u4EEC\u7528 <code>mousemove</code> \u4E8B\u4EF6\uFF0C\u5728\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6\u4E2D <strong>\u5177\u4F53\u5B9E\u73B0\u753B\u5E03\u79FB\u52A8</strong><br>
\u9F20\u6807\u653E\u5F00\uFF1A\u6211\u4EEC\u7528 <code>mouseup</code> \u4E8B\u4EF6\uFF0C\u5728\u9F20\u6807\u653E\u5F00\u4E8B\u4EF6\u4E2D \u5220\u9664 <strong>\u9F20\u6807\u79FB\u52A8</strong> \u4E8B\u4EF6</p>
<p>\u5177\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token function">constructor</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>wrapDom <span class="token operator">=</span> params<span class="token punctuation">.</span>el<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addDragFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0\u62D6\u62FD\u529F\u80FD\uFF0C\u5224\u65AD\u65F6\u673A\u6CE8\u518C\u79FB\u9664 \u62D6\u62FD \u529F\u80FD</span>
<span class="token function">addDragFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousedown'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>addMouseMove<span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mouseup'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>removeMouseMove<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6DFB\u52A0\u9F20\u6807\u79FB\u52A8 \u529F\u80FD\uFF0C\u83B7\u53D6\u4FDD\u5B58\u5F53\u524D\u70B9\u51FB\u5750\u6807</span>
<span class="token function-variable function">addMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>targetX <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX
  <span class="token keyword">this</span><span class="token punctuation">.</span>targetY <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY

  <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginX <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginY <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">;</span>
  
  <span class="token keyword">this</span><span class="token punctuation">.</span>wrapDom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'grabbing'</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moveCanvasFunc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u79FB\u9664\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6</span>
<span class="token function-variable function">removeMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>wrapDom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">''</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moveCanvasFunc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moveShapeFunc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u79FB\u52A8\u753B\u5E03</span>
<span class="token function-variable function">moveCanvasFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6 \u6700\u5927\u53EF\u79FB\u52A8\u5BBD</span>
  <span class="token keyword">var</span> maxMoveX <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> maxMoveY <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> offsetX <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginX <span class="token operator">+</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>offsetX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetX<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> offsetY <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginY <span class="token operator">+</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetY<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>offsetX<span class="token punctuation">)</span> <span class="token operator">&gt;</span> maxMoveX <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX <span class="token punctuation">:</span> offsetX
  <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>offsetY<span class="token punctuation">)</span> <span class="token operator">&gt;</span> maxMoveY <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY <span class="token punctuation">:</span> offsetY
  
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre>
<p><a href="http://jsrun.net/dI2Kp">\u4EE5\u4E0A\u4EE3\u7801\u6548\u679C\u6F14\u793A</a></p>
<p>\u5176\u5B83\u4EE3\u7801\u90FD\u5F88\u7B80\u5355\uFF0C\u8FD9\u91CC\u5C31\u8BE6\u7EC6\u89E3\u91CA\u4E00\u4E0B <code>addMouseMove()</code> \u548C <code>moveCanvasFunc()</code> \u505A\u4E86\u54EA\u4E9B\u64CD\u4F5C\u3002</p>
<p><code>addMouseMove</code> \u51FD\u6570\u4E2D \u4F7F\u7528 <code>targetX\uFF0CtargetY</code> \u4FDD\u5B58\u4E86\u9F20\u6807\u70B9\u51FB\u65F6\u7684\u5750\u6807\uFF0C<code>mousedownOriginX \uFF0CmousedownOriginX</code> \u4FDD\u5B58\u4E86\u9F20\u6807\u70B9\u51FB\u65F6 \u753B\u5E03\u7684\u6574\u4F53\u504F\u79FB\u91CF\u3002</p>
<p>\u518D\u5728 <code>moveCanvasFunc</code> \u51FD\u6570\u4E2D \u8BA1\u7B97\u51FA\u79FB\u52A8\u540E\u7684\u6574\u4F53\u504F\u79FB\u91CF\uFF0C<code>moveCanvasFunc</code> \u51FD\u6570\u4E2D\u7684\u4EE3\u7801\u53EF\u4EE5\u7B80\u5316\u6210\u8FD9\u6837\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token function-variable function">moveCanvasFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> offsetX <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginX <span class="token operator">+</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>offsetX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetX<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> offsetY <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginY <span class="token operator">+</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u5176\u4ED6\u4EE3\u7801\u662F\u4E3A\u4E86\u9650\u5236\u504F\u79FB\u91CF\u7684\u6700\u5927\u503C\uFF0C\u6700\u540E\u8C03\u7528<code>this.render()</code></p>
<p>\u6574\u4F53\u6765\u8BB2\uFF0C\u62D6\u62FD\u753B\u5E03\u529F\u80FD\u6BD4\u7F29\u653E\u7A0D\u5FAE\u7B80\u5355\u4E00\u4E9B\uFF0C\u540C\u6837\u8FD9\u91CC\u6700\u540E\u4F1A\u8C03\u7528 <code>this.render()</code>\uFF0C\u5728<code>this.render</code> \u4E2D\u4F1A\u8C03\u7528 <code>this.draw</code> \u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u91CC\u8C03\u7528\u4E86<code>setTransform</code> \u65B9\u6CD5\uFF0C\u8FD9\u91CC\u4F1A\u5C06\u66F4\u6539\u540E\u7684\u7F29\u653E\u503C\uFF0C\u4EE5\u53CA\u504F\u79FB\u503C\u8BBE\u7F6E\u5230\u753B\u5E03\u4E2D\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">setTransform</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2><a id="_477"></a>\u62D6\u62FD\u753B\u5E03\u4E2D\u7684\u5F62\u72B6</h2>
<p>\u5982\u679C\u8981\u62D6\u62FD\u753B\u5E03\u4E2D\u7684\u5F62\u72B6\uFF0C\u9700\u8981\u5224\u65AD\u9F20\u6807\u70B9\u51FB\u7684\u4F4D\u7F6E\u662F\u5426\u5904\u4E8E\u5F62\u72B6\u4E2D\uFF0C\u800C\u4E14\u56E0\u4E3A\u5C42\u7EA7\u5173\u7CFB\uFF0C\u53EA\u80FD\u63A7\u5236\u9876\u5C42\u7684\u5F62\u72B6\u3002</p>
<p>\u56E0\u6B64\u9700\u8981\u5199\u9F20\u6807\u6309\u4E0B\u65F6\u662F\u5426\u5904\u4E8E\u5F62\u72B6\u5185\u90E8\u7684\u5224\u65AD\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EA\u5199\u4E86\u77E9\u5F62\u3001\u539F\u578B\u3001\u7EBF\u6BB5\u7684\u5224\u65AD\u65B9\u6CD5\u3002</p>
<p>\u56E0\u4E3A\u4E4B\u524D\u5DF2\u7ECF\u5728\u5B9E\u73B0\u753B\u5E03\u62D6\u62FD\u7684\u65F6\u5019\uFF0C\u5B9E\u73B0\u4E86\u62D6\u62FD\u529F\u80FD\uFF0C\u73B0\u5728\u53EA\u9700\u8981\u8981\u6539\u9020 <code>addMouseMove</code> \u51FD\u6570 \u548C\u6DFB\u52A0 <strong>\u5F62\u72B6\u79FB\u52A8</strong> \u51FD\u6570\uFF0C\u4EE5\u53CA\u4E09\u4E2A\u5224\u65AD\u65B9\u6CD5\u3002</p>
<p>\u6574\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<pre><code class="prism language-javascript"><span class="token comment">// \u6DFB\u52A0\u9F20\u6807\u79FB\u52A8 \u529F\u80FD\uFF0C\u83B7\u53D6\u4FDD\u5B58\u5F53\u524D\u70B9\u51FB\u5750\u6807</span>
<span class="token function-variable function">addMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>targetX <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX
  <span class="token keyword">this</span><span class="token punctuation">.</span>targetY <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY

  <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginX <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>mousedownOriginY <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">;</span>

  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">;</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">'rect'</span><span class="token punctuation">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInnerRect</span><span class="token punctuation">(</span><span class="token operator">...</span>item<span class="token punctuation">.</span>data<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> item<span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'circle'</span><span class="token punctuation">:</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInnerCircle</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>x<span class="token punctuation">,</span> item<span class="token punctuation">.</span>y<span class="token punctuation">,</span> item<span class="token punctuation">.</span>r<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> item<span class="token punctuation">)</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'line'</span><span class="token punctuation">:</span>
        <span class="token keyword">var</span> lineNumber <span class="token operator">=</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lineNumber<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
          flag <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInnerPath</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> item<span class="token punctuation">.</span>lineWidth <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> item
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>wrapDom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'grabbing'</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moveCanvasFunc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>wrapDom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'all-scroll'</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldX <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldY <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moveShapeFunc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u79FB\u52A8\u5F62\u72B6</span>
<span class="token function-variable function">moveShapeFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> moveX <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldX <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetX<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> moveY <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldY <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  moveX <span class="token operator">/=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale
  moveY <span class="token operator">/=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale

  <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'rect'</span><span class="token punctuation">:</span>
      <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>x <span class="token operator">+</span> moveX<span class="token punctuation">,</span> y <span class="token operator">+</span> moveY<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">]</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'circle'</span><span class="token punctuation">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>x <span class="token operator">+=</span> moveX
      <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>y <span class="token operator">+=</span> moveY
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'line'</span><span class="token punctuation">:</span>
      <span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">;</span>
      <span class="token keyword">var</span> lineNumber <span class="token operator">=</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lineNumber<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
        item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+=</span> moveX
        item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> moveY
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldX <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX
  <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldY <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u5728\u77E9\u5F62\u6846\u5185</span>
<span class="token function">isInnerRect</span><span class="token punctuation">(</span>x0<span class="token punctuation">,</span> y0<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x0 <span class="token operator">&lt;=</span> x <span class="token operator">&amp;&amp;</span> y0 <span class="token operator">&lt;=</span> y <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>x0 <span class="token operator">+</span> width<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> x <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>y0 <span class="token operator">+</span> height<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> y
<span class="token punctuation">}</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u5728\u5706\u5F62\u5185</span>
<span class="token function">isInnerCircle</span><span class="token punctuation">(</span>x0<span class="token punctuation">,</span> y0<span class="token punctuation">,</span> r<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>x0 <span class="token operator">-</span> x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>y0 <span class="token operator">-</span> y<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5224\u65AD\u662F\u5426\u5728\u8DEF\u5F84\u4E0A</span>
<span class="token function">isInnerPath</span><span class="token punctuation">(</span>x0<span class="token punctuation">,</span> y0<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> lineWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a1pow <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>x0 <span class="token operator">-</span> x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>y0 <span class="token operator">-</span> y<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> a1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a1pow<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> a2pow <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>x1 <span class="token operator">-</span> x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>y1 <span class="token operator">-</span> y<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> a2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a2pow<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token keyword">var</span> a3pow <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>x1 <span class="token operator">-</span> x0<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>y1 <span class="token operator">-</span> y0<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">var</span> a3 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a3pow<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token keyword">var</span> r <span class="token operator">=</span> lineWidth <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token keyword">var</span> ab <span class="token operator">=</span> <span class="token punctuation">(</span>a1pow <span class="token operator">-</span> a2pow <span class="token operator">+</span> a3pow<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a3<span class="token punctuation">)</span><span class="token keyword">var</span> ab <span class="token operator">=</span> <span class="token punctuation">(</span>a1pow <span class="token operator">-</span> a2pow <span class="token operator">+</span> a3pow<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a3<span class="token punctuation">)</span>
  <span class="token keyword">var</span> h <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>a1pow <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>ab<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

  <span class="token keyword">var</span> ad <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>a3<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> h <span class="token operator">&lt;=</span> r <span class="token operator">&amp;&amp;</span> a1 <span class="token operator">&lt;=</span> ad <span class="token operator">&amp;&amp;</span> a2 <span class="token operator">&lt;=</span> ad
<span class="token punctuation">}</span>
</code></pre>
<p><a href="http://jsrun.net/GI2Kp">\u4EE5\u4E0A\u4EE3\u7801\u6548\u679C\u6F14\u793A</a></p>
<p>\u4EE5\u4E0A\u4EE3\u7801\u5728 <code>addMouseMove</code> \u4E2D\u52A0\u5165\u4E86\u5224\u65AD\u662F\u5426\u5904\u4E8E\u5F62\u72B6\u5185\u90E8\u7684\u64CD\u4F5C\u3002</p>
<pre><code class="prism language-javascript"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetX<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>offsetY<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale<span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'rect'</span><span class="token punctuation">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInnerRect</span><span class="token punctuation">(</span><span class="token operator">...</span>item<span class="token punctuation">.</span>data<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> item<span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'circle'</span><span class="token punctuation">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInnerCircle</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>x<span class="token punctuation">,</span> item<span class="token punctuation">.</span>y<span class="token punctuation">,</span> item<span class="token punctuation">.</span>r<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> item<span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'line'</span><span class="token punctuation">:</span>
      <span class="token keyword">var</span> lineNumber <span class="token operator">=</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lineNumber<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
        flag <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isInnerPath</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> item<span class="token punctuation">.</span>lineWidth <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape <span class="token operator">=</span> item
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<p>\u6839\u636E\u9F20\u6807\u4F4D\u7F6E\u83B7\u53D6\u5230\u57FA\u4E8E\u539F\u59CB\u7F29\u653E\u72B6\u6001\u4E0B\u8DDD\u79BB\u753B\u5E03\u539F\u70B9\u7684<code>x\uFF0Cy</code> \u5750\u6807\uFF0C\u6839\u636E\u4E0D\u540C <code>type</code> \u8C03\u7528\u4E0D\u540C\u65B9\u6CD5\u5224\u65AD\u662F\u5426\u5904\u4E8E\u5F53\u524D\u5F62\u72B6\u4E2D\u3002</p>
<p>\u7136\u540E\u6839\u636E\u662F\u5426\u5904\u4E8E\u5F62\u72B6\u5185\u90E8\u5224\u65AD\u6CE8\u518C <strong>\u62D6\u62FD\u753B\u5E03</strong> \u8FD8\u662F <strong>\u62D6\u62FD\u5F62\u72B6</strong> \u7684\u4E8B\u4EF6</p>
<pre><code class="prism language-javascript"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>wrapDom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'grabbing'</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moveCanvasFunc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>wrapDom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">'all-scroll'</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldX <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldY <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>El<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moveShapeFunc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u5982\u679C\u5904\u4E8E\u5F62\u72B6\u5185\u90E8\uFF0C\u5C31\u4FEE\u6539\u5F62\u72B6\u4F4D\u7F6E\u53C2\u6570\uFF0C\u5E76\u8C03\u7528 <code>this.render()</code>\uFF0C\u91CD\u65B0\u6E32\u67D3\u753B\u5E03</p>
<pre><code class="prism language-javascript"><span class="token comment">// \u79FB\u52A8\u5F62\u72B6</span>
<span class="token function-variable function">moveShapeFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> moveX <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldX <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetX<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> moveY <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldY <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  moveX <span class="token operator">/=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale
  moveY <span class="token operator">/=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scale

  <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'rect'</span><span class="token punctuation">:</span>
      <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span>x <span class="token operator">+</span> moveX<span class="token punctuation">,</span> y <span class="token operator">+</span> moveY<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">]</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'circle'</span><span class="token punctuation">:</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>x <span class="token operator">+=</span> moveX
      <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">.</span>y <span class="token operator">+=</span> moveY
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">'line'</span><span class="token punctuation">:</span>
      <span class="token keyword">var</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>activeShape<span class="token punctuation">;</span>
      <span class="token keyword">var</span> lineNumber <span class="token operator">=</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lineNumber<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
        item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+=</span> moveX
        item<span class="token punctuation">.</span>data<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> moveY
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldX <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetX
  <span class="token keyword">this</span><span class="token punctuation">.</span>shapedOldY <span class="token operator">=</span> e<span class="token punctuation">.</span>offsetY

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>
<p>\u79FB\u52A8\u5F62\u72B6\u540C\u6837\u4E5F\u662F\u8981\u83B7\u53D6\u5230\u57FA\u4E8E\u539F\u59CB\u7F29\u653E\u5927\u5C0F(\u53EF\u4EE5\u770B\u5230\u4E0A\u65B9\u9664\u4E86<code>this.scale</code>)\u7684\u753B\u5E03\u7684\u79FB\u52A8\u91CF <code>moveX\uFF0CmoveY</code>\uFF0C\u518D\u5C06\u79FB\u52A8\u91CF\u589E\u52A0\u81F3 \u9009\u4E2D\u5F62\u72B6\u7684\u4F4D\u7F6E\u5750\u6807\u4E2D\u3002</p>
<p>\u4FDD\u5B58\u597D\u5F53\u524D\u504F\u79FB\u91CF <code>this.shapedOldX\uFF0Cthis.shapedOldY</code>\uFF0C\u4F9B\u4E0B\u6B21\u4E8B\u4EF6\u89E6\u53D1\u4F7F\u7528\u3002</p>
<h3><a id="_687"></a>\u5224\u65AD\u662F\u5426\u5904\u4E8E\u5F62\u72B6\u5185\u90E8\u65B9\u6CD5\u89E3\u91CA</h3>
<p>1.\u5224\u65AD\u662F\u5426\u5904\u4E8E\u77E9\u5F62\u6846\u5185<br>
\u6839\u636E\u5F53\u524D\u8BA1\u7B97\u51FA\u7684 <code>x\uFF0Cy</code> \u5750\u6807\uFF0C\u5224\u65AD\u662F\u5426\u5C0F\u4E8E \u77E9\u5F62\u7684<code>x\uFF0Cy</code> \u5750\u6807\uFF0C\u5E76\u4E14\u5224\u65AD\u662F\u5426\u5927\u4E8E\u77E9\u5F62 <code>(x + width)</code> \u4E0E <code>(y + height)</code> \u7684\u53F3\u4E0B\u89D2\u5750\u6807\u3002</p>
<p>2.\u5224\u65AD\u662F\u5426\u5904\u4E8E\u5706\u5F62\u5185<br>
\u6839\u636E\u5F53\u524D\u8BA1\u7B97\u51FA\u7684 <code>x\uFF0Cy</code> \u5750\u6807\uFF0C\u8BA1\u7B97\u51FA\u8DDD\u79BB\u5706\u5FC3 \u5750\u6807\u7684\u8DDD\u79BB\uFF0C\u5982\u679C\u5C0F\u4E8E\u7B49\u4E8E\u5706\u7684\u534A\u5F84\uFF0C\u5C31\u8BF4\u660E\u5904\u4E8E\u5706\u5F62\u5185\u90E8\u3002</p>
<p>3.\u5224\u65AD\u662F\u5426\u5904\u4E8E\u7EBF\u6BB5\u4E2D<br>
\u5047\u8BBE\u7EBF\u6BB5 AB\uFF0C\u9F20\u6807\u70B9\u51FB\u70B9\u4E3AC\uFF0C\u5224\u65ADAC \u6216 BC \u662F\u5426\u5927\u4E8E AD\uFF0C\u5982\u679C\u5927\u4E8EC\u80AF\u5B9A\u4E0D\u5904\u4E8E\u7EBF\u6BB5\u5185\uFF0C\u5E76\u4E14C\u4E0EAB \u7684\u5782\u76F4\u8DDD\u79BBCH\u5FC5\u987B\u5C0F\u4E8E\u7B49\u4E8E \u7EBF\u6BB5\u5BBD\u5EA6\u7684\u4E00\u534A\u3002</p>
<p><img src="https://img-blog.csdnimg.cn/20200512125433888.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<p>\u8FD9\u91CC\u53EA\u652F\u6301\u5355\u4E2A\u7EBF\u6BB5\u5224\u65AD\uFF0C\u591A\u4E2A\u8FDE\u63A5\u7EBF\u6BB5\u5224\u65AD\u4E0D\u7CBE\u786E\uFF0C\u8FDE\u63A5\u5904\u4F1A\u6709\u591A\u4F59\u90E8\u5206\u65E0\u6CD5\u5224\u65AD\u3002<br>
\u5982\u4E0B\u56FE\uFF1A<br>
<img src="https://img-blog.csdnimg.cn/20200512121911288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3J1ZHlfemhvdQ==,size_16,color_FFFFFF,t_70" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u8FD9\u662F\u5BBD\u5EA6\u4E3A90\u7684\u7EBF\u6BB5\uFF0C\u7EA2\u8272\u533A\u57DF\u4E0A\u8FF0\u65B9\u6CD5\u80FD\u5224\u65AD\uFF0C\u7BAD\u5934\u6307\u5411\u90E8\u5206\u65E0\u6CD5\u5224\u65AD\u3002<br>
\u8FD9\u91CC\u6682\u65F6\u4E0D\u8003\u8651\u4E5F\u662F\u56E0\u4E3A\u5982\u679C \u7EBF\u6BB5\u4E4B\u95F4\u7684\u5939\u89D2\u5C0F\u4E8E <code>90deg</code>\uFF0C\u9ED8\u8BA4\u5F62\u72B6\u4F1A\u662F\uFF1A<br>
<img src="https://img-blog.csdnimg.cn/20200512125001703.png" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"><br>
\u53EF\u4EE5\u770B <a href="https://www.w3school.com.cn/tags/canvas_miterlimit.asp">miterLimit \u5C5E\u6027</a> \u548C <a href="https://www.w3school.com.cn/tags/canvas_linejoin.asp">lineJoin \u5C5E\u6027</a> \u4EE5\u53CA <a href="https://www.w3school.com.cn/tags/canvas_linecap.asp">lineCap \u5C5E\u6027</a>\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u5BF9\u7EBF\u6BB5\u5F71\u54CD\u8F83\u5927\uFF0C\u8FD9\u91CC\u53EA\u505A\u9ED8\u8BA4\u72B6\u6001\u4E0B\u5355\u6761\u7EBF\u6BB5\u5224\u65AD\u6F14\u793A\u3002</p>
<h1><a id="_707"></a>\u603B\u7ED3</h1>
<p>OK\uFF0C\u4EE5\u4E0A\u5C31\u5DF2\u7ECF\u628A\u6700\u5F00\u59CB\u8BB2\u7684\u9700\u6C42\u505A\u5B8C\u4E86\uFF0C\u6709\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u66F4\u6539Demo \u4E2D\u7684\u4F8B\u5B50\u4FEE\u6539\u53C2\u6570\u770B\u770B\u6548\u679C\u3002</p>
<p>\u4EE5\u4E0A\u5982\u6709\u95EE\u9898\u6216\u758F\u6F0F\uFF0C\u6B22\u8FCE\u6307\u6B63\uFF0C\u8C22\u8C22\u3002</p>
</div>
</body>

</html>
`;export{n as default};
