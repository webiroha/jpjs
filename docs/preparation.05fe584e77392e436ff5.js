!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/jpjs/",t(t.s=11)}([function(e,n,t){"use strict";n.a=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var r=document.createTextNode(t),i=document.createElement("br");n.appendChild(r),e.text.length-1>a&&n.appendChild(i)})):n.textContent=e.text,{tag:n}}},function(e,n,t){"use strict";n.a=function(){var e=document.createDocumentFragment();return function(){return e}}},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t(3),t(2);var a=t(1),r=t(0);n.a=function(){return{root:document.getElementById("root"),WholeFrag:Object(a.a)(),Wrapper:Object(r.a)({elem:"div",class:"wrapper"}),CenterFrag:Object(a.a)()}}},function(e,n){function t(e){Object.freeze(e);var n="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(a){!Object.hasOwnProperty.call(e,a)||null===e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||n&&("caller"===a||"callee"===a||"arguments"===a)||Object.isFrozen(e[a])||t(e[a])})),e}class a{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...n){var t={};for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function s(e){return e.nodeName.toLowerCase()}var o=Object.freeze({__proto__:null,escapeHTML:r,inherit:i,nodeStream:function(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),s(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n},mergeStreams:function(e,n,t){var a=0,i="",o=[];function c(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){i+="<"+s(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function u(e){i+="</"+s(e)+">"}function d(e){("start"===e.event?l:u)(e.node)}for(;e.length||n.length;){var g=c();if(i+=r(t.substring(a,g[0].offset)),a=g[0].offset,g===e){o.reverse().forEach(u);do{d(g.splice(0,1)[0]),g=c()}while(g===e&&g.length&&g[0].offset===a);o.reverse().forEach(l)}else"start"===g[0].event?o.push(g[0].node):o.pop(),d(g.splice(0,1)[0])}return i+r(t.substr(a))}});const c=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{u._collapse(e)}))}}class d extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const h="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",f={begin:"\\\\[\\s\\S]",relevance:0},p={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[f]},b={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[f]},m={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},v=function(e,n,t={}){var a=i({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(m),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},E=v("//","$"),x=v("/\\*","\\*/"),_=v("#","$"),y={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},w={className:"number",begin:h,relevance:0},N={className:"number",begin:"\\b(0b[01]+)",relevance:0},O={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},R={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[f,{begin:/\[/,end:/\]/,relevance:0,contains:[f]}]}]},M={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},k={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},A={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var j=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:h,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>g(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),i({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:f,APOS_STRING_MODE:p,QUOTE_STRING_MODE:b,PHRASAL_WORDS_MODE:m,COMMENT:v,C_LINE_COMMENT_MODE:E,C_BLOCK_COMMENT_MODE:x,HASH_COMMENT_MODE:_,NUMBER_MODE:y,C_NUMBER_MODE:w,BINARY_NUMBER_MODE:N,CSS_NUMBER_MODE:O,REGEXP_MODE:R,TITLE_MODE:M,UNDERSCORE_TITLE_MODE:k,METHOD_GUARD:A,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),S="of and for in not or if then".split(" ");function T(e){function n(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,r="",i=0;i<e.length;i++){var s=a+=1,o=g(e[i]);for(i>0&&(r+=n),r+="(";o.length>0;){var c=t.exec(o);if(null==c){r+=o;break}r+=o.substring(0,c.index),o=o.substring(c.index+c[0].length),"\\"===c[0][0]&&c[1]?r+="\\"+String(Number(c[1])+s):(r+=c[0],"("===c[0]&&a++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function r(e,n){const t=e.input[e.index-1],a=e.input[e.index+e[0].length];"."!==t&&"."!==a||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(s,o){const c=s;if(s.compiled)return c;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let l=null;if("object"==typeof s.keywords&&(l=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){var t={};"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])}));return t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){var a=n.split("|");t[a[0]]=[e,I(a[0],a[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return c.keywordPatternRe=n(s.lexemes||l||/\w+/,!0),o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",s.__beforeBegin=r),s.begin||(s.begin=/\B|\b/),c.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(c.endRe=n(s.end)),c.terminator_end=g(s.end)||"",s.endsWithParent&&o.terminator_end&&(c.terminator_end+=(s.end?"|":"")+o.terminator_end)),s.illegal&&(c.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return i(e,{variants:null},n)})));if(e.cached_variants)return e.cached_variants;if(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e))return i(e,{starts:e.starts?i(e.starts):null});if(Object.isFrozen(e))return i(e);return e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,c)})),s.starts&&t(s.starts,o),c.matcher=function(e){const n=new a;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(c),c}(e)}function I(e,n){return n?Number(n):function(e){return S.includes(e.toLowerCase())}(e)?0:1}const C={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let e;return this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},L={install(e){e.component("highlightjs",C)}},D=r,B=i,{nodeStream:P,mergeStreams:U}=o,$=Symbol("nomatch");var H=function(e){var n=[],r=Object.create(null),i=Object.create(null),s=[],o=!0,c=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?";const u={disableAutodetect:!0,name:"Plain text",contains:[]};var g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return g.noHighlightRe.test(e)}function f(e,n,t,a){var r={code:n,language:e};w("before:highlight",r);var i=r.result?r.result:p(r.language,r.code,t,a);return i.code=r.code,w("after:highlight",i),i}function p(e,n,t,i){var s=n;function c(e,n){var t=_.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=N.subLanguage?function(){if(""!==M){var e=null;if("string"==typeof N.subLanguage){if(!r[N.subLanguage])return void R.addText(M);e=p(N.subLanguage,M,!0,O[N.subLanguage]),O[N.subLanguage]=e.top}else e=b(M,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(k+=e.relevance),R.addSublanguage(e.emitter,e.language)}}():function(){if(!N.keywords)return void R.addText(M);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(M),t="";for(;n;){t+=M.substring(e,n.index);const a=c(N,n);if(a){const[e,r]=a;R.addText(t),t="",k+=r,R.addKeyword(n[0],e)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(M)}t+=M.substr(e),R.addText(t)}(),M=""}function d(e){return e.className&&R.openNode(e.className),N=Object.create(e,{parent:{value:N}})}function h(e){return 0===N.matcher.regexIndex?(M+=e[0],1):(S=!0,0)}function f(e){var n=e[0],t=e.rule;const r=new a(t),i=[t.__beforeBegin,t["on:begin"]];for(const t of i)if(t&&(t(e,r),r.ignore))return h(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?M+=n:(t.excludeBegin&&(M+=n),u(),t.returnBegin||t.excludeBegin||(M=n)),d(t),t.returnBegin?0:n.length}function m(e){var n=e[0],t=s.substr(e.index),r=function e(n,t,r){let i=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(n.endRe,r);if(i){if(n["on:end"]){const e=new a(n);n["on:end"](t,e),e.ignore&&(i=!1)}if(i){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,r)}(N,e,t);if(!r)return $;var i=N;i.skip?M+=n:(i.returnEnd||i.excludeEnd||(M+=n),u(),i.excludeEnd&&(M=n));do{N.className&&R.closeNode(),N.skip||N.subLanguage||(k+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),d(r.starts)),i.returnEnd?0:n.length}var v={};function E(n,a){var r=a&&a[0];if(M+=n,null==r)return u(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===r){if(M+=s.slice(a.index,a.index+1),!o){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=a,"begin"===a.type)return f(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){var i=m(a);if(i!==$)return i}if("illegal"===a.type&&""===r)return 1;if(j>1e5&&j>3*a.index){throw new Error("potential infinite loop, way more iterations than matches")}return M+=r,r.length}var _=x(e);if(!_)throw console.error(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');var y=T(_),w="",N=i||y,O={},R=new g.__emitter(g);!function(){for(var e=[],n=N;n!==_;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>R.openNode(e))}();var M="",k=0,A=0,j=0,S=!1;try{for(N.matcher.considerAll();;){j++,S?S=!1:N.matcher.considerAll(),N.matcher.lastIndex=A;const e=N.matcher.exec(s);if(!e)break;const n=E(s.substring(A,e.index),e);A=e.index+n}return E(s.substr(A)),R.closeAllNodes(),R.finalize(),w=R.toHTML(),{relevance:k,value:w,language:e,illegal:!1,emitter:R,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:s.slice(A-100,A+100),mode:n.mode},sofar:w,relevance:0,value:D(s),emitter:R};if(o)return{illegal:!1,relevance:0,value:D(s),emitter:R,language:e,top:N,errorRaised:n};throw n}}function b(e,n){n=n||g.languages||Object.keys(r);var t=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:D(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),a=t;return n.filter(x).filter(y).forEach((function(n){var r=p(n,e,!1);r.language=n,r.relevance>a.relevance&&(a=r),r.relevance>t.relevance&&(a=t,t=r)})),a.language&&(t.second_best=a),t}function m(e){return g.tabReplace||g.useBR?e.replace(c,e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e):e}function v(e){let n=null;const t=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){var a=x(t[1]);return a||(console.warn(l.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),a?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>h(e)||x(e))}(e);if(h(t))return;w("before:highlightBlock",{block:e,language:t}),g.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,r=t?f(t,a,!0):b(a),s=P(n);if(s.length){const e=document.createElement("div");e.innerHTML=r.value,r.value=U(s,P(e),a)}r.value=m(r.value),w("after:highlightBlock",{block:e,result:r}),e.innerHTML=r.value,e.className=function(e,n,t){var a=n?i[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),e.includes(a)||r.push(a),r.join(" ").trim()}(e.className,t,r.language),e.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const E=()=>{if(!E.called){E.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,v)}};function x(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function _(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{i[e]=n})}function y(e){var n=x(e);return n&&!n.disableAutodetect}function w(e,n){var t=e;s.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:f,highlightAuto:b,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),m(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=B(g,e)},initHighlighting:E,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",E,!1)},registerLanguage:function(n,t){var a=null;try{a=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw e;console.error(e),a=u}a.name||(a.name=n),r[n]=a,a.rawDefinition=t.bind(null,e),a.aliases&&_(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(r)},getLanguage:x,registerAliases:_,requireLanguage:function(e){var n=x(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:y,inherit:B,addPlugin:function(e){s.push(e)},vuePlugin:L}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.3.1";for(const e in j)"object"==typeof j[e]&&t(j[e]);return Object.assign(e,j),e}({});e.exports=H},function(e,n,t){"use strict";t(2);var a=t(5),r=t.n(a),i=t(8),s=t.n(i),o=t(0);r.a.registerLanguage("javascript",s.a);n.a=function(e){var n=Object(o.a)({elem:"code",class:"code fade-in gruvbox-dark hljs"}),t=Object(o.a)({elem:"pre",class:"pre"}),a=r.a.highlight("javascript",e).value;return t.tag.innerHTML=a,n.tag.appendChild(t.tag),{Code:n}}},function(e,n,t){"use strict";var a=t(1),r=t(0);n.a=function(e){var n=Object(a.a)(),t=Object(r.a)({elem:"div",class:"explain"}),i=Object(r.a)({elem:"h1",class:"explain__title slide-in-upper__0",text:e.title}),s=Object(r.a)({elem:"p",class:"text opacity_0 slide-in-upper__1",text:e.text});return n().appendChild(i.tag),n().appendChild(s.tag),t.tag.appendChild(n()),function(){return t.tag}}},function(e,n){const t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function i(e){return o("(?=",e,")")}function s(e){return o("(",e,")?")}function o(...e){return e.map(e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n}).join("")}e.exports=function(e){const n="[A-Za-z$_][0-9A-Za-z$_]*",c="<>",l="</>",u={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t=e[0].replace("<","</");return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},d={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:t.join(" "),literal:a.join(" "),built_in:r.join(" ")},g=(e,n)=>`\\b0[${e}][${n}]([${n}_]*[${n}])?n?`,h=/[1-9]([0-9_]*\d)?/,f=/\d([0-9_]*\d)?/,p=o(/[eE][+-]?/,f),b={className:"number",variants:[{begin:g("bB","01")},{begin:g("oO","0-7")},{begin:g("xX","0-9a-fA-F")},{begin:o(/\b/,h,"n")},{begin:o(/(\b0)?\./,f,s(p))},{begin:o(/\b/,h,s(o(/\./,s(f))),s(p))},{begin:/\b0[\.n]?/}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},v={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},E={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"css"}},x={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,m]},_={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},y=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,E,x,b,e.REGEXP_MODE];m.contains=y.concat({begin:/{/,end:/}/,keywords:d,contains:["self"].concat(y)});const w=[].concat(_,m.contains),N=w.concat([{begin:/\(/,end:/\)/,keywords:d,contains:["self"].concat(w)}]),O={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:N};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:N},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,v,E,x,_,b,{begin:o(/[{,\n]\s*/,i(o(/(\/\/.*$)*/,/(\/\*(.|\n)*\*\/)*/,/\s*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+i("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[_,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:N}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:c,end:l},{begin:u.begin,"on:begin":u.isTrulyOpeningTag,end:u.end}],subLanguage:"xml",contains:[{begin:u.begin,end:u.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:d,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),O],illegal:/%/},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",returnBegin:!0,contains:[O,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[\{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",O]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},O]},{begin:/\$[(.]/}]}}},function(e,n,t){"use strict";t(2);var a=t(0);n.a=function(e){var n=Object(a.a)({elem:"div",class:"next-link fade-in"}),t=e?"Next":"coming soon!",r=Object(a.a)({elem:"a",class:"next-link__item",text:t});return r.tag.href=e,n.tag.appendChild(r.tag),n.tag}},function(e,n,t){"use strict";t(3),t(2);var a=t(4),r=t(0),i=function(){var e=Object(r.a)({elem:"header",class:"header fade-in"}),n=Object(r.a)({elem:"h1",class:"logo"}),t=Object(r.a)({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return t.tag.href="../../",n.tag.appendChild(t.tag),e.tag.appendChild(n.tag),function(){return e.tag}},s=function(){var e=Object(r.a)({elem:"footer",class:"footer fade-in"}),n=Object(r.a)({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return e.tag.appendChild(n.tag),function(){return e.tag}};n.a=function(e){var n=Object(a.a)(),t=n.root,r=n.WholeFrag,o=n.Wrapper;o.tag.className="wrapper wrapper_layout_sub";var c=i();r().appendChild(c()),r().appendChild(e());var l=s();return r().appendChild(l()),o.tag.appendChild(r()),t.appendChild(o.tag),function(){return t}}},function(e,n,t){"use strict";t.r(n);var a=t(10),r=t(1),i=t(7),s=t(6),o=t(9);Object(a.a)((function(){var e=Object(r.a)(),n=Object(i.a)({title:"Preparation",text:["You will type Japanese by changing keyboard mode","if you want🙂"]});e().appendChild(n());var t=Object(s.a)("const Windows = [\n    { click: 'Windows menu' },\n    { open: 'Settings' },\n    { select: 'Time & language' },\n    { open: 'Region & language' },\n    { click: 'Add a language' },\n    { select: '日本語 – Japanese' }\n  ];\n\n  const Mac = [\n    { click: 'Apple menu' },\n    { select: 'System Preferences' },\n    { open: 'Keyboard' },\n    { click: 'Input Sources' },\n    { click: 'Add button' },\n    { select: 'Japanese' }\n  ];").Code;return e().appendChild(t.tag),e().appendChild(Object(o.a)("../characters/")),e()}))}]);