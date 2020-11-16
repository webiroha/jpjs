(()=>{var e={802:e=>{function n(e){Object.freeze(e);var t="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(a){!Object.hasOwnProperty.call(e,a)||null===e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||t&&("caller"===a||"callee"===a||"arguments"===a)||Object.isFrozen(e[a])||n(e[a])})),e}class t{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(e,...n){var t={};for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function i(e){return e.nodeName.toLowerCase()}var s=Object.freeze({__proto__:null,escapeHTML:a,inherit:r,nodeStream:function(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),i(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n},mergeStreams:function(e,n,t){var r=0,s="",o=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){s+="<"+i(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+a(e.value)+'"'})).join("")+">"}function u(e){s+="</"+i(e)+">"}function d(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){var g=l();if(s+=a(t.substring(r,g[0].offset)),r=g[0].offset,g===e){o.reverse().forEach(u);do{d(g.splice(0,1)[0]),g=l()}while(g===e&&g.length&&g[0].offset===r);o.reverse().forEach(c)}else"start"===g[0].event?o.push(g[0].node):o.pop(),d(g.splice(0,1)[0])}return s+a(t.substr(r))}});const o=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!o(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function d(e){return e?"string"==typeof e?e:e.source:null}const g="[a-zA-Z]\\w*",h="[a-zA-Z_]\\w*",f="\\b\\d+(\\.\\d+)?",p="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",m={begin:"\\\\[\\s\\S]",relevance:0},v={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[m]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[m]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,t={}){var a=r({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(x),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},y=_("//","$"),w=_("/\\*","\\*/"),N=_("#","$"),R={className:"number",begin:f,relevance:0},O={className:"number",begin:p,relevance:0},k={className:"number",begin:b,relevance:0},M={className:"number",begin:f+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},A={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,relevance:0,contains:[m]}]}]},S={className:"title",begin:g,relevance:0},T={className:"title",begin:h,relevance:0};var I=Object.freeze({__proto__:null,IDENT_RE:g,UNDERSCORE_IDENT_RE:h,NUMBER_RE:f,C_NUMBER_RE:p,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>d(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:v,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:x,COMMENT:_,C_LINE_COMMENT_MODE:y,C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:N,NUMBER_MODE:R,C_NUMBER_MODE:O,BINARY_NUMBER_MODE:k,CSS_NUMBER_MODE:M,REGEXP_MODE:A,TITLE_MODE:S,UNDERSCORE_TITLE_MODE:T,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}}),C="of and for in not or if then".split(" ");function L(e){function n(n,t){return new RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,r="",i=0;i<e.length;i++){var s=a+=1,o=d(e[i]);for(i>0&&(r+=n),r+="(";o.length>0;){var l=t.exec(o);if(null==l){r+=o;break}r+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),"\\"===l[0][0]&&l[1]?r+="\\"+String(Number(l[1])+s):(r+=l[0],"("===l[0]&&a++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function i(e,n){const t=e.input[e.index-1],a=e.input[e.index+e[0].length];"."!==t&&"."!==a||n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return function t(s,o){const l=s;if(s.compiled)return l;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let c=null;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){var t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){var a=n.split("|");t[a[0]]=[e,D(a[0],a[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",s.__beforeBegin=i),s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(l.endRe=n(s.end)),l.terminator_end=d(s.end)||"",s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),s.illegal&&(l.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:j(e)?r(e,{starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,l)})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function j(e){return!!e&&(e.endsWithParent||j(e.starts))}function D(e,n){return n?Number(n):function(e){return C.includes(e.toLowerCase())}(e)?0:1}const B={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,a(this.code);let e;return this.autoDetect?(e=hljs.highlightAuto(this.code),this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),this.detectectLanguage=this.language),e.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},P={install(e){e.component("highlightjs",B)}},U=a,H=r,{nodeStream:$,mergeStreams:z}=s,K=Symbol("nomatch");var F=function(e){var a=[],r=Object.create(null),i=Object.create(null),s=[],o=!0,l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?";const d={disableAutodetect:!0,name:"Plain text",contains:[]};var g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function h(e){return g.noHighlightRe.test(e)}function f(e,n,t,a){var r={code:n,language:e};w("before:highlight",r);var i=r.result?r.result:p(r.language,r.code,t,a);return i.code=r.code,w("after:highlight",i),i}function p(e,n,a,i){var s=n;function l(e,n){var t=_.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=N.subLanguage?function(){if(""!==k){var e=null;if("string"==typeof N.subLanguage){if(!r[N.subLanguage])return void O.addText(k);e=p(N.subLanguage,k,!0,R[N.subLanguage]),R[N.subLanguage]=e.top}else e=b(k,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(M+=e.relevance),O.addSublanguage(e.emitter,e.language)}}():function(){if(!N.keywords)return void O.addText(k);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(k),t="";for(;n;){t+=k.substring(e,n.index);const a=l(N,n);if(a){const[e,r]=a;O.addText(t),t="",M+=r,O.addKeyword(n[0],e)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(k)}t+=k.substr(e),O.addText(t)}(),k=""}function d(e){return e.className&&O.openNode(e.className),N=Object.create(e,{parent:{value:N}})}function h(e,n,a){let r=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(e.endRe,a);if(r){if(e["on:end"]){const a=new t(e);e["on:end"](n,a),a.ignore&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,a)}function f(e){return 0===N.matcher.regexIndex?(k+=e[0],1):(T=!0,0)}function m(e){var n=e[0],t=s.substr(e.index),a=h(N,e,t);if(!a)return K;var r=N;r.skip?k+=n:(r.returnEnd||r.excludeEnd||(k+=n),u(),r.excludeEnd&&(k=n));do{N.className&&O.closeNode(),N.skip||N.subLanguage||(M+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),d(a.starts)),r.returnEnd?0:n.length}var v={};function E(n,r){var i=r&&r[0];if(k+=n,null==i)return u(),0;if("begin"===v.type&&"end"===r.type&&v.index===r.index&&""===i){if(k+=s.slice(r.index,r.index+1),!o){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=r,"begin"===r.type)return function(e){var n=e[0],a=e.rule;const r=new t(a),i=[a.__beforeBegin,a["on:begin"]];for(const t of i)if(t&&(t(e,r),r.ignore))return f(n);return a&&a.endSameAsBegin&&(a.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),a.skip?k+=n:(a.excludeBegin&&(k+=n),u(),a.returnBegin||a.excludeBegin||(k=n)),d(a),a.returnBegin?0:n.length}(r);if("illegal"===r.type&&!a){const e=new Error('Illegal lexeme "'+i+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===r.type){var l=m(r);if(l!==K)return l}if("illegal"===r.type&&""===i)return 1;if(S>1e5&&S>3*r.index)throw new Error("potential infinite loop, way more iterations than matches");return k+=i,i.length}var _=x(e);if(!_)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');var y=L(_),w="",N=i||y,R={},O=new g.__emitter(g);!function(){for(var e=[],n=N;n!==_;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>O.openNode(e)))}();var k="",M=0,A=0,S=0,T=!1;try{for(N.matcher.considerAll();;){S++,T?T=!1:N.matcher.considerAll(),N.matcher.lastIndex=A;const e=N.matcher.exec(s);if(!e)break;const n=E(s.substring(A,e.index),e);A=e.index+n}return E(s.substr(A)),O.closeAllNodes(),O.finalize(),w=O.toHTML(),{relevance:M,value:w,language:e,illegal:!1,emitter:O,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:s.slice(A-100,A+100),mode:n.mode},sofar:w,relevance:0,value:U(s),emitter:O};if(o)return{illegal:!1,relevance:0,value:U(s),emitter:O,language:e,top:N,errorRaised:n};throw n}}function b(e,n){n=n||g.languages||Object.keys(r);var t=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:U(e),illegal:!1,top:d};return n.emitter.addText(e),n}(e),a=t;return n.filter(x).filter(y).forEach((function(n){var r=p(n,e,!1);r.language=n,r.relevance>a.relevance&&(a=r),r.relevance>t.relevance&&(a=t,t=r)})),a.language&&(t.second_best=a),t}function m(e){return g.tabReplace||g.useBR?e.replace(l,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):e}function v(e){let n=null;const t=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){var a=x(t[1]);return a||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),a?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||x(e)))}(e);if(h(t))return;w("before:highlightBlock",{block:e,language:t}),g.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,r=t?f(t,a,!0):b(a),s=$(n);if(s.length){const e=document.createElement("div");e.innerHTML=r.value,r.value=z(s,$(e),a)}r.value=m(r.value),w("after:highlightBlock",{block:e,result:r}),e.innerHTML=r.value,e.className=function(e,n,t){var a=n?i[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),e.includes(a)||r.push(a),r.join(" ").trim()}(e.className,t,r.language),e.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const E=()=>{if(!E.called){E.called=!0;var e=document.querySelectorAll("pre code");a.forEach.call(e,v)}};function x(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function _(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e]=n}))}function y(e){var n=x(e);return n&&!n.disableAutodetect}function w(e,n){var t=e;s.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:f,highlightAuto:b,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),m(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=H(g,e)},initHighlighting:E,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",E,!1)},registerLanguage:function(n,t){var a=null;try{a=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw e;console.error(e),a=d}a.name||(a.name=n),r[n]=a,a.rawDefinition=t.bind(null,e),a.aliases&&_(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(r)},getLanguage:x,registerAliases:_,requireLanguage:function(e){var n=x(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:y,inherit:H,addPlugin:function(e){s.push(e)},vuePlugin:P}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.3.1";for(const e in I)"object"==typeof I[e]&&n(I[e]);return Object.assign(e,I),e}({});e.exports=F},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function i(e){return o("(?=",e,")")}function s(e){return o("(",e,")?")}function o(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const l=n,c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t=e[0].replace("<","</");return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},u={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:r.join(" ")},d=(e,n)=>`\\b0[${e}][${n}]([${n}_]*[${n}])?n?`,g=/[1-9]([0-9_]*\d)?/,h=/\d([0-9_]*\d)?/,f=o(/[eE][+-]?/,h),p={className:"number",variants:[{begin:d("bB","01")},{begin:d("oO","0-7")},{begin:d("xX","0-9a-fA-F")},{begin:o(/\b/,g,"n")},{begin:o(/(\b0)?\./,h,s(f))},{begin:o(/\b/,g,s(o(/\./,s(h))),s(f))},{begin:/\b0[\.n]?/}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:u,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},v={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},E={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},x={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:l+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,v,E,p,e.REGEXP_MODE];b.contains=_.concat({begin:/{/,end:/}/,keywords:u,contains:["self"].concat(_)});const y=[].concat(x,b.contains),w=y.concat([{begin:/\(/,end:/\)/,keywords:u,contains:["self"].concat(y)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:w};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:u,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,v,E,x,p,{begin:o(/[{,\n]\s*/,i(o(/(\/\/.*$)*/,/(\/\*(.|\n)*\*\/)*/,/\s*/,l+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:l+i("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[x,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:u,contains:["self",e.inherit(e.TITLE_MODE,{begin:l}),N],illegal:/%/},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",returnBegin:!0,contains:[N,e.inherit(e.TITLE_MODE,{begin:l})]},{variants:[{begin:"\\."+l},{begin:"\\$"+l}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[\{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:l}),"self",N]},{begin:"(get|set)\\s+(?="+l+"\\()",end:/{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:l}),{begin:/\(\)/},N]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var r=document.createTextNode(t),i=document.createElement("br");n.appendChild(r),e.text.length-1>a&&n.appendChild(i)})):n.textContent=e.text,{tag:n}};var a=t(802),r=t.n(a),i=t(344),s=t.n(i);r().registerLanguage("javascript",s());!function(t){var a={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},r=a.root,i=a.WholeFrag,s=a.Wrapper;s.tag.className="wrapper wrapper_layout_sub";var o=function(){var e=n({elem:"header",class:"header fade-in"}),t=n({elem:"h1",class:"logo"}),a=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return a.tag.href="../../",t.tag.appendChild(a.tag),e.tag.appendChild(t.tag),function(){return e.tag}}();i().appendChild(o()),i().appendChild(t());var l=function(){var e=n({elem:"footer",class:"footer fade-in"}),t=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return e.tag.appendChild(t.tag),function(){return e.tag}}();i().appendChild(l()),s.tag.appendChild(i()),r.appendChild(s.tag)}((function(){var t,a,i,s,o,l=e(),c=(t={title:"Preparation",text:["You will type Japanese by changing keyboard mode","if you want🙂"]},a=e(),i=n({elem:"div",class:"explain"}),s=n({elem:"h1",class:"explain__title slide-in-upper__0",text:t.title}),o=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text}),a().appendChild(s.tag),a().appendChild(o.tag),i.tag.appendChild(a()),function(){return i.tag});l().appendChild(c());var u,d,g,h=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),a=n({elem:"pre",class:"pre"}),i=r().highlight("javascript",e).value;return a.tag.innerHTML=i,t.tag.appendChild(a.tag),{Code:t}}("const Windows = [\n    { click: 'Windows menu' },\n    { open: 'Settings' },\n    { select: 'Time & language' },\n    { open: 'Region & language' },\n    { click: 'Add a language' },\n    { select: '日本語 – Japanese' }\n  ];\n\n  const Mac = [\n    { click: 'Apple menu' },\n    { select: 'System Preferences' },\n    { open: 'Keyboard' },\n    { click: 'Input Sources' },\n    { click: 'Add button' },\n    { select: 'Japanese' }\n  ];").Code;return l().appendChild(h.tag),l().appendChild((u="../intro/characters",d=n({elem:"div",class:"next-link fade-in"}),(g=n({elem:"a",class:"next-link__item",text:u?"Next":"coming soon!"})).tag.href=u,d.tag.appendChild(g.tag),d.tag)),l()}))})()})();