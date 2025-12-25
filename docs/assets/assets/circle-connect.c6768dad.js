var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas \u7ED8\u5236\u7279\u6548 \u5C0F\u7403\u8FDE\u63A5\u7EBF\u52A8\u753B</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>canvas \u7ED8\u5236\u7279\u6548 \u5C0F\u7403\u8FDE\u63A5\u7EBF\u52A8\u753B</h3><ul><li><a href="#_2">\u5F15\u8A00</a></li><li><a href="#_6">\u8BE6\u7EC6\u4EE3\u7801</a></li><li><a href="#demo_118">demo\u6F14\u793A</a></li><li><a href="#_121">\u89E3\u91CA</a></li><li><a href="#_130">\u7ED3\u8BED</a></li></ul></div><p></p>
<h1><a id="_2"></a>\u5F15\u8A00</h1>
<p>\u2003\u2003 \u4E00\u4E2A\u5F88\u7ECF\u5178\u7684\u7279\u6548\uFF0C\u82B1\u4E86\u4E00\u70B9\u65F6\u95F4\u81EA\u5DF1\u624B\u52A8\u5199\u4E86\u4E00\u4E2A\uFF0C\u5148\u4E0A\u56FE\uFF1A</p>
<p><img src="https://img-blog.csdnimg.cn/20200511123339354.gif" alt="\u5C0F\u7403\u8FDE\u63A5\u7EBF\u52A8\u753B"></p>
<h1><a id="_6"></a>\u8BE6\u7EC6\u4EE3\u7801</h1>
<p>html</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>canvas_bg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>css</p>
<pre><code class="prism language-css"><span class="token selector">html, body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#canvas_bg</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>javascript</p>
<pre><code class="prism language-javascript"><span class="token keyword">class</span> <span class="token class-name">circle</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas_bg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// \u521B\u5EFA\u968F\u673A\u72B6\u6001\u5C0F\u7403</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
     x<span class="token punctuation">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
     y<span class="token punctuation">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
     speed<span class="token punctuation">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1.5</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
     xDir<span class="token punctuation">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
     yDir<span class="token punctuation">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span>
     r<span class="token punctuation">:</span> <span class="token number">2</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
   <span class="token comment">// \u5C0F\u7403\u8FDE\u7EBF\u8DDD\u79BB</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>dist <span class="token operator">=</span> <span class="token number">100</span>

   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

   window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token comment">// \u8BA1\u7B97\u5C0F\u7403\u4F4D\u7F6E\u5E76\u5224\u65AD\u65B9\u5411\u4E0E\u7ED8\u5236</span>
 <span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     item<span class="token punctuation">.</span>x <span class="token operator">+=</span> item<span class="token punctuation">.</span>xDir <span class="token operator">*</span> item<span class="token punctuation">.</span>speed
     item<span class="token punctuation">.</span>y <span class="token operator">+=</span> item<span class="token punctuation">.</span>yDir <span class="token operator">*</span> item<span class="token punctuation">.</span>speed

     item<span class="token punctuation">.</span>x <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>xDir <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> 
     item<span class="token punctuation">.</span>x <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>xDir <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

     item<span class="token punctuation">.</span>y <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>yDir <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> 
     item<span class="token punctuation">.</span>y <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>yDir <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> item<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>height <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>

     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>x<span class="token punctuation">,</span> item<span class="token punctuation">.</span>y<span class="token punctuation">,</span> item<span class="token punctuation">.</span>r<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// \u8BA1\u7B97\u8FDE\u7EBF\u8DDD\u79BB\u5185\u7684\u5C0F\u7403</span>
 <span class="token function">calcLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>lineArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
   <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> y <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> y <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">let</span> val <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">-</span> arr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token operator">-</span> arr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dist<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>lineArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
           start<span class="token punctuation">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
           end<span class="token punctuation">:</span> arr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">,</span>
           val<span class="token punctuation">:</span> val<span class="token punctuation">,</span>
           ratio<span class="token punctuation">:</span> <span class="token punctuation">(</span>val <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dist<span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED8\u5236\u94FE\u63A5\u7EBF\u6761</span>
 <span class="token function">drawLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lineArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
     <span class="token keyword">let</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lineArr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">255</span> <span class="token operator">*</span> item<span class="token punctuation">.</span>ratio

     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`rgb(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)\`</span></span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>start<span class="token punctuation">.</span>x<span class="token punctuation">,</span> item<span class="token punctuation">.</span>start<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>end<span class="token punctuation">.</span>x<span class="token punctuation">,</span> item<span class="token punctuation">.</span>end<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// \u52A8\u753B\u8FC7\u6E21</span>
 <span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>width
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">calcLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> circleObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">circle</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h1><a id="demo_118"></a>demo\u6F14\u793A</h1>
<p><a href="http://jsrun.net/yw2Kp">\u70B9\u51FB\u8FDB\u5165\u5C0F\u7403\u52A8\u753B\u6F14\u793ADemo</a></p>
<h1><a id="_121"></a>\u89E3\u91CA</h1>
<p><strong>\u8FD9\u4E2A\u52A8\u753B\u6574\u4F53\u6548\u679C\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u753B\u5E03\u521D\u59CB\u5316\u4EC0\u4E48\u7684\u5C31\u4E0D\u8BF4\u4E86\u3002</strong></p>
<p>1.\u9996\u5148\u521B\u5EFA\u4E00\u4E9B\u968F\u673A\u72B6\u6001\u7684\u5C0F\u7403\uFF0C\u6709\u4F4D\u7F6E\u3001\u79FB\u52A8\u65B9\u5411\u3001\u79FB\u52A8\u901F\u7387\u7B49</p>
<p>2.\u901A\u8FC7\u53CC\u5C42\u5FAA\u73AF\u5224\u65AD\u6BCF\u4E2A\u5C0F\u7403\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF08\u5C31\u7528\u521D\u4E2D\u5B66\u7684\u52FE\u80A1\u5B9A\u7406\uFF0C\u76F4\u89D2\u4E09\u89D2\u5F62\u4E24\u8FB9\u7684\u5E73\u65B9\u548C\u7B49\u4E8E\u659C\u8FB9\u7684\u5E73\u65B9\uFF0C\u659C\u8FB9\u5C31\u662F\u5C0F\u7403\u8DDD\u79BB\uFF09\uFF0C\u7B26\u5408\u6761\u4EF6\u7684\uFF08\u6211\u8BBE\u7F6E\u7684\u5C0F\u4E8E100\uFF09\u90FD\u5B58\u8D77\u6765</p>
<p>3.\u6700\u540E\u7ED8\u5236\u5C0F\u7403\u4E0E\u7EBF\u6761\uFF0C\u52A0\u4E0A\u52A8\u753B\u6E32\u67D3\uFF08\u6211\u8FD9\u91CC\u6BCF\u969430\u6BEB\u79D2\u6E32\u67D3\u4E00\u6B21\uFF0C\u6BCF\u6B21\u6E32\u67D3\u90FD\u8981\u91CD\u65B0\u8BA1\u7B97\u4E0A\u9762\u63D0\u5230\u7684\u53C2\u6570\uFF09</p>
<h1><a id="_130"></a>\u7ED3\u8BED</h1>
<p>\u8BE6\u7EC6\u770B\u770B\u4E0A\u65B9\u7684demo\u4E2D\u6F14\u793A\u4E0E\u4EE3\u7801\uFF0C\u4EE3\u7801\u91CF\u5F88\u5C11\uFF0C\u7406\u89E3\u8D77\u6765\u4E5F\u4E0D\u96BE\uFF0C\u53EA\u8981\u4F60\u6709\u521D\u4E2D\u77E5\u8BC6\u5C31\u80FD\u7406\u89E3\u3002</p>
<p>\u4EE5\u4E0A\u5982\u6709\u95EE\u9898\u6216\u758F\u6F0F\uFF0C\u6B22\u8FCE\u6307\u6B63</p>
</div>
</body>

</html>
`;export{n as default};
