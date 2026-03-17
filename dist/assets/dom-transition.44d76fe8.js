var n=`\uFEFF<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>\u5220\u9664\u5217\u8868\u4E2D\u4E00\u4E2ADOM\uFF0C\u5176\u4F59DOM\u52A8\u6001\u8FC7\u6E21\u7684\u65B9\u6CD5</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><p></p><div class="toc"><h3>\u5220\u9664\u5217\u8868\u4E2D\u4E00\u4E2ADOM\uFF0C\u5176\u4F59DOM\u52A8\u6001\u8FC7\u6E21\u7684\u65B9\u6CD5</h3><ul><li><a href="#_1">\u6548\u679C\u56FE</a></li><li><a href="#DEMO_3">\u6548\u679CDEMO</a></li><li><a href="#_6">\u5168\u90E8\u4EE3\u7801</a></li><li><a href="#_90">\u65B9\u6CD5\u539F\u7406\u89E3\u91CA</a></li><li><a href="#_103">\u7ED3\u8BED</a></li></ul></div><p></p>
<h1><a id="_1"></a>\u6548\u679C\u56FE</h1>
<p><img src="https://img-blog.csdnimg.cn/20200606131905395.gif" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p>
<h1><a id="DEMO_3"></a>\u6548\u679CDEMO</h1>
<p><a href="http://jsrun.net/ru2Kp">\u7B80\u6613\u7684DOM \u8FC7\u6E21\u6548\u679C</a></p>
<h1><a id="_6"></a>\u5168\u90E8\u4EE3\u7801</h1>
<p>HTML</p>
<pre><code class="prism language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>01<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>02<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>03<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>04<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>04<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>05<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>05<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4E00\u517136\u4E2A\u4E3A\u4E86\u51CF\u5C11\u7BC7\u5E45\u53EA\u5199\u51E0\u4E2A\u4E2A --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>CSS</p>
<pre><code class="prism language-css"><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 336px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 336px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px pink<span class="token punctuation">;</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.rect</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 3px orange inset<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>JavaScript</p>
<pre><code class="prism language-javascript"><span class="token keyword">var</span> rectArr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'rect'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> delay <span class="token operator">=</span> <span class="token number">300</span>
box<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// \u5982\u679C\u70B9\u51FB\u7684box\u672C\u8EAB\u5C31\u4E0D\u5F80\u4E0B\u6267\u884C</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token operator">===</span> box<span class="token punctuation">)</span> <span class="token keyword">return</span>
	
	<span class="token comment">// \u83B7\u53D6\u5F53\u524Ddom index, \u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u901A\u8FC7data-index \u4FDD\u5B58\u7684\u65B9\u5F0F\u83B7\u53D6\uFF0C\u4E0D\u8FC7\u4E0B\u9762\u7684\u65B9\u6CD5\u5C31\u8981\u7A0D\u5FAE\u8C03\u6574\u4E00\u4E0B</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-index'</span><span class="token punctuation">)</span>

	<span class="token comment">// \u53D6\u51FA\u8981\u79FB\u52A8\u7684DOM</span>
    <span class="token keyword">var</span> moveArr <span class="token operator">=</span> rectArr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> rectArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

    <span class="token comment">// \u4FDD\u5B58\u8981\u79FB\u52A8\u7684DOM \u672A\u79FB\u52A8\u524D\u7684\u4F4D\u7F6E</span>
    moveArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>preLeft <span class="token operator">=</span> item<span class="token punctuation">.</span>offsetLeft
        item<span class="token punctuation">.</span>preTop <span class="token operator">=</span> item<span class="token punctuation">.</span>offsetTop
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// \u5220\u9664dom \u5220\u9664\u540E\u540E\u7EEDDOM \u4F4D\u7F6E\u7ACB\u5373\u53D8\u5316</span>
    box<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span>

	<span class="token comment">// \u7ED9\u79FB\u52A8\u540E\u7684DOM \u4F4D\u79FB\u7F6E\u4E4B\u524D\u7684\u4F4D\u7F6E</span>
    moveArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>preLeft <span class="token operator">-</span> item<span class="token punctuation">.</span>offsetLeft<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>preTop <span class="token operator">-</span> item<span class="token punctuation">.</span>offsetTop<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
	
	<span class="token comment">// \u8BBE\u7F6E\u4E00\u70B9\u5EF6\u8FDF\u7ED9DOM \u6E32\u67D3\u53CD\u5E94\u65F6\u95F4\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u81EA\u884C\u8BD5\u8BD5\u4F1A\u51FA\u73B0\u4EC0\u4E48\u95EE\u9898\u5427</span>
	<span class="token comment">// \u6DFB\u52A0\u8FC7\u6E21\uFF0C\u5E76\u4F4D\u79FB\u56DEdom \u65B0\u4F4D\u7F6E</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        moveArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`transform </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>delay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms ease\`</span></span>
            item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`translate(0, 0)\`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

	<span class="token comment">// \u4F4D\u79FB\u5B8C \u5220\u9664\u8FC7\u6E21\u4EE5\u53CA\u4F4D\u79FB\u53C2\u6570\uFF0C \u5220\u9664\u4E86\u4E0B\u6B21\u624D\u80FD\u6B63\u5E38\u4F4D\u79FB</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      moveArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`\`</span></span>
        item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

	<span class="token comment">// \u524D\u9762\u901A\u8FC7 splice \u5220\u9664\u6389\u4E86\u539F\u6709\u6570\u7EC4\u4E2D\u5C06\u8981\u79FB\u52A8\u7684 dom\uFF0C\u73B0\u5728\u8FD8\u539F\u3002</span>
    <span class="token comment">// \u6709\u4E2A\u95EE\u9898\u5C31\u662F\u867D\u7136\u5220\u9664\u4E86DOM\uFF0C\u4F46\u662F\u8FD8\u4FDD\u5B58\u518D\u6765\u6570\u7EC4\u4E2D\uFF0C\u6BCF\u6B21\u5FAA\u73AF\u8BA1\u7B97\u90FD\u662F\u4EE536\u7684\u6570\u91CF\u8BA1\u7B97</span>
    rectArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>rectArr<span class="token punctuation">,</span> <span class="token operator">...</span>moveArr<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<h1><a id="_90"></a>\u65B9\u6CD5\u539F\u7406\u89E3\u91CA</h1>
<p>\u5220\u9664DOM \u540E\uFF0C\u540E\u7EEDDOM \u7ACB\u9A6C\u51FA\u73B0\u5728\u65B0\u7684\u4F4D\u7F6E\u4E0D\u4F1A\u51FA\u73B0\u8FC7\u6E21\uFF0C\u56E0\u6B64\u6211\u4EEC\u624B\u52A8\u52A0\u8FC7\u6E21\u3002</p>
<p>1  \u5220\u9664\u4E4B\u524D\u4FDD\u5B58\u597D\u672A\u79FB\u52A8\u4E4B\u524D\u7684\u4F4D\u7F6E</p>
<p>2 \u5220\u9664\u4E4B\u540E\u628A\u4F4D\u7F6E\u91CD\u65B0\u8D4B\u503C\u7ED9\u79FB\u52A8\u7684\u5143\u7D20\uFF08\u8FD9\u91CC\u901A\u8FC7\u4F4D\u79FB\u7684\u65B9\u5F0F\uFF0C\u7B80\u5355\u8BA1\u7B97\u4E00\u4E0B\u5C31\u884C\uFF09</p>
<p>3 \u8D4B\u503C\u5B8C\u6210\u540E \u518D \u6DFB\u52A0\u8FC7\u6E21\u5C5E\u6027 \u4EE5\u53CA\u91CD\u65B0\u8D4B\u503C \u4F4D\u79FB\uFF08\u56E0\u4E3A\u53EA\u6709\u8FD9\u91CC\u6DFB\u52A0\u4E86\u8FC7\u6E21\u5C5E\u6027\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u4F4D\u79FB\u624D\u4F1A\u8FC7\u6E21\uFF0C\u5176\u4ED6\u7684\u770B\u4E0D\u51FA\u6548\u679C\uFF09</p>
<p>4 \u4F4D\u79FB\u5B8C\u6210\u5220\u9664\u8FC7\u6E21\u5C5E\u6027</p>
<p><strong>\u6240\u4EE5\u7ED3\u8BBA\u5C31\u662F\uFF0C\u5176\u5B9E\u8FD9\u91CC\u8FC7\u6E21\u5C31\u662F\uFF0C\u4ECE\u5F53\u524D\u4F4D\u7F6E\u79FB\u52A8\u5230\u76EE\u6807\u4F4D\u7F6E\uFF08\u6CA1\u8FC7\u6E21\u6548\u679C\uFF09\uFF0C\u518D\u4ECE\u76EE\u6807\u4F4D\u7F6E\u79FB\u56DE\u6765\uFF08\u6CA1\u8FC7\u6E21\u6548\u679C\uFF09\uFF0C\u6700\u540E\u518D\u79FB\u56DE\u76EE\u6807\u4F4D\u7F6E\uFF08\u6709\u8FC7\u6E21\u6548\u679C\uFF0C\u5C31\u662F\u9875\u9762\u4E2D\u770B\u5230\u7684\u6548\u679C\uFF09\u3002</strong></p>
<h1><a id="_103"></a>\u7ED3\u8BED</h1>
<p>\u53D1\u8FD9\u7BC7\u6587\u7AE0\u7684\u8D77\u56E0\u5176\u5B9E\u662F\u5728 <a href="https://stackoverflow.com/questions/62143275/css-transition-when-moved/62143739#62143739">Stack Overflow</a> \u4E0A\u9762\u56DE\u7B54\u522B\u4EBA\u7684\u95EE\u9898\uFF0C\u8BF4\u5B9E\u8BDD\uFF0C\u6211\u6BD4\u8F83\u5E38\u7528 Vue \u3002\u800C\u5B83\u91CC\u9762\u6709\u8FC7\u6E21\u7EC4\u4EF6\uFF0C\u4E5F\u6709<a href="https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E7%9A%84%E6%8E%92%E5%BA%8F%E8%BF%87%E6%B8%A1">\u4F8B\u5B50</a>\uFF0C\u57FA\u672C\u4E0A\u4E0D\u9700\u8981\u6211\u8003\u8651\u5177\u4F53\u7684\u8FC7\u6E21\u5B9E\u73B0\uFF0C\u770B\u5230\u8FD9\u4E2A\u540C\u884C\u95EE\u7684\u95EE\u9898\uFF0C\u5E76\u4E14\u4ED6\u8981\u539F\u751F\u4EE3\u7801\u5199\u7684\uFF0C\u521A\u5F00\u59CB\u6211\u901A\u8FC7\u5BA1\u67E5\u5143\u7D20\u7684\u65B9\u5F0F\u67E5\u770BDOM \u662F\u5982\u679C\u53D8\u5316\u7684\uFF0C\u6700\u540E\u627E\u4E86\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u6252\u4E86\u4E00\u4E0B\u6E90\u7801\u624D\u53D1\u73B0\u5177\u4F53\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u4E5F\u603B\u7B97\u77E5\u9053\u4E3A\u5565\u6211\u5BA1\u67E5\u5143\u7D20\u6253\u65AD\u70B9\u770B\u4E0D\u5230\u4E86\uFF0C\u56E0\u4E3A\u4ED6\u524D\u4E24\u4E2A\u4F4D\u79FB\u6CA1\u8FC7\u6E21\uFF0C\u6700\u540E\u4E00\u4E2A\u4F4D\u79FB\u624D\u6709\uFF0C\u800C\u6253\u65AD\u70B9\u53EA\u80FD\u770B\u5230\u6700\u540E\u4E00\u4E2A\u3002\u57FA\u672C\u4E0A\u8FD9\u79CD\u64CD\u4F5C\u7684\u8FC7\u6E21\u90FD\u662F\u8FD9\u79CD\u601D\u8DEF\uFF0C\u5E0C\u671B\u5927\u5BB6\u80FD\u591F\u5F88\u597D\u7684\u7406\u89E3\uFF0C\u597D\u4E86\u5C31\u8FD9\u6837\u5566\u3002</p>
<p>\u4EE5\u4E0A\u4FE1\u606F\u5982\u6709\u758F\u6F0F\u6216\u9519\u8BEF\uFF0C\u6B22\u8FCE\u6307\u6B63</p>
</div>
</body>

</html>
`;export{n as default};
