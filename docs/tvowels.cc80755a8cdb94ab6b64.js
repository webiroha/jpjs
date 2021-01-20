(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class o{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function s(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:r,inherit:i,nodeStream:function(e){const n=[];return function e(t,a){for(let o=t.firstChild;o;o=o.nextSibling)3===o.nodeType?a+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:a,node:o}),a=e(o,a),s(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:o}));return a}(e,0),n},mergeStreams:function(e,n,t){let a=0,o="";const i=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){o+="<"+s(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function u(e){o+="</"+s(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){let n=l();if(o+=r(t.substring(a,n[0].offset)),a=n[0].offset,n===e){i.reverse().forEach(u);do{g(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===a);i.reverse().forEach(c)}else"start"===n[0].event?i.push(n[0].node):i.pop(),g(n.splice(0,1)[0])}return o+r(t.substr(a))}});const c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class g{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{g._collapse(e)})))}}class d extends g{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const p="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",b="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",w={begin:"\\\\[\\s\\S]",relevance:0},y={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[w]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[w]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,t={}){const a=i({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(x),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},N=_("//","$"),k=_("/\\*","\\*/"),R=_("#","$"),A={className:"number",begin:m,relevance:0},S={className:"number",begin:b,relevance:0},O={className:"number",begin:v,relevance:0},j={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},C={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,contains:[w]}]}]},T={className:"title",begin:p,relevance:0},M={className:"title",begin:f,relevance:0};var I=Object.freeze({__proto__:null,IDENT_RE:p,UNDERSCORE_IDENT_RE:f,NUMBER_RE:m,C_NUMBER_RE:b,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),i({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:w,APOS_STRING_MODE:y,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:x,COMMENT:_,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:R,NUMBER_MODE:A,C_NUMBER_MODE:S,BINARY_NUMBER_MODE:O,CSS_NUMBER_MODE:j,REGEXP_MODE:C,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:M,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function B(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,o="";for(let r=0;r<e.length;r++){a+=1;const i=a;let s=h(e[r]);for(r>0&&(o+=n),o+="(";s.length>0;){const e=t.exec(s);if(null==e){o+=s;break}o+=s.substring(0,e.index),s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+i):(o+=e[0],"("===e[0]&&a++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function o(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=i(e.classNameAliases||{}),function t(r,s){const l=r;if(r.compiled)return l;r.compiled=!0,r.__beforeBegin=null,r.keywords=r.keywords||r.beginKeywords;let c=null;if("object"==typeof r.keywords&&(c=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function(e,n){const t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){const a=n.split("|");t[a[0]]=[e,H(a[0],a[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(r.lexemes||c||/\w+/,!0),s&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",r.__beforeBegin=o),r.begin||(r.begin=/\B|\b/),l.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(l.endRe=n(r.end)),l.terminator_end=h(r.end)||"",r.endsWithParent&&s.terminator_end&&(l.terminator_end+=(r.end?"|":"")+s.terminator_end)),r.illegal&&(l.illegalRe=n(r.illegal)),void 0===r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return i(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:D(e)?i(e,{starts:e.starts?i(e.starts):null}):Object.isFrozen(e)?i(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,l)})),r.starts&&t(r.starts,s),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function D(e){return!!e&&(e.endsWithParent||D(e.starts))}function H(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function P(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const K=r,$=i,{nodeStream:U,mergeStreams:V}=l,W=Symbol("nomatch");var z=function(e){const n=[],a=Object.create(null),r=Object.create(null),i=[];let s=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return g.noHighlightRe.test(e)}function p(e,n,t,a){const o={code:n,language:e};_("before:highlight",o);const r=o.result?o.result:f(o.language,o.code,t,a);return r.code=o.code,_("after:highlight",r),r}function f(e,n,t,r){const i=n;function l(e,n){const t=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=N.subLanguage?function(){if(""===A)return;let e=null;if("string"==typeof N.subLanguage){if(!a[N.subLanguage])return void R.addText(A);e=f(N.subLanguage,A,!0,k[N.subLanguage]),k[N.subLanguage]=e.top}else e=m(A,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(S+=e.relevance),R.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void R.addText(A);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(A),t="";for(;n;){t+=A.substring(e,n.index);const a=l(N,n);if(a){const[e,o]=a;R.addText(t),t="",S+=o;const r=E.classNameAliases[e]||e;R.addKeyword(n[0],r)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(A)}t+=A.substr(e),R.addText(t)}(),A=""}function d(e){return e.className&&R.openNode(E.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new o(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function p(e){return 0===N.matcher.regexIndex?(A+=e[0],1):(C=!0,0)}function b(e){const n=e[0],t=i.substr(e.index),a=h(N,e,t);if(!a)return W;const o=N;o.skip?A+=n:(o.returnEnd||o.excludeEnd||(A+=n),u(),o.excludeEnd&&(A=n));do{N.className&&R.closeNode(),N.skip||N.subLanguage||(S+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),d(a.starts)),o.returnEnd?0:n.length}let v={};function w(n,a){const r=a&&a[0];if(A+=n,null==r)return u(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===r){if(A+=i.slice(a.index,a.index+1),!s){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,a=new o(t),r=[t.__beforeBegin,t["on:begin"]];for(const t of r)if(t&&(t(e,a),a.ignore))return p(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?A+=n:(t.excludeBegin&&(A+=n),u(),t.returnBegin||t.excludeBegin||(A=n)),d(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){const e=b(a);if(e!==W)return e}if("illegal"===a.type&&""===r)return 1;if(j>1e5&&j>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return A+=r,r.length}const E=y(e);if(!E)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=B(E);let _="",N=r||x;const k={},R=new g.__emitter(g);!function(){const e=[];for(let n=N;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>R.openNode(e)))}();let A="",S=0,O=0,j=0,C=!1;try{for(N.matcher.considerAll();;){j++,C?C=!1:N.matcher.considerAll(),N.matcher.lastIndex=O;const e=N.matcher.exec(i);if(!e)break;const n=w(i.substring(O,e.index),e);O=e.index+n}return w(i.substr(O)),R.closeAllNodes(),R.finalize(),_=R.toHTML(),{relevance:S,value:_,language:e,illegal:!1,emitter:R,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:i.slice(O-100,O+100),mode:n.mode},sofar:_,relevance:0,value:K(i),emitter:R};if(s)return{illegal:!1,relevance:0,value:K(i),emitter:R,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||g.languages||Object.keys(a);const t=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:K(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),o=n.filter(y).filter(x).map((n=>f(n,e,!1)));o.unshift(t);const r=o.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(y(e.language).supersetOf===n.language)return 1;if(y(n.language).supersetOf===e.language)return-1}return 0})),[i,s]=r,l=i;return l.second_best=s,l}function b(e){return g.tabReplace||g.useBR?e.replace(l,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):e}function v(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){const n=y(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||y(e)))}(e);if(h(t))return;_("before:highlightBlock",{block:e,language:t}),g.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,o=t?p(t,a,!0):m(a),i=U(n);if(i.length){const e=document.createElement("div");e.innerHTML=o.value,o.value=V(i,U(e),a)}o.value=b(o.value),_("after:highlightBlock",{block:e,result:o}),e.innerHTML=o.value,e.className=function(e,n,t){const a=n?r[n]:t,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),e.includes(a)||o.push(a),o.join(" ").trim()}(e.className,t,o.language),e.result={language:o.language,re:o.relevance,relavance:o.relevance},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.relevance,relavance:o.second_best.relevance})}const w=()=>{if(w.called)return;w.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,v)};function y(e){return e=(e||"").toLowerCase(),a[e]||a[r[e]]}function E(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e]=n}))}function x(e){const n=y(e);return n&&!n.disableAutodetect}function _(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:p,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=$(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",w,!1)},registerLanguage:function(n,t){let o=null;try{o=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw e;console.error(e),o=u}o.name||(o.name=n),a[n]=o,o.rawDefinition=t.bind(null,e),o.aliases&&E(o.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:y,registerAliases:E,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=y(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:x,inherit:$,addPlugin:function(e){i.push(e)},vuePlugin:P(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.4.0";for(const e in I)"object"==typeof I[e]&&t(I[e]);return Object.assign(e,I),e}({});e.exports=z},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],o=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function r(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const s=n,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:o.join(" ")},u="\\.([0-9](_?[0-9])*)",g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},b={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,d,e.REGEXP_MODE];h.contains=v.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(v)});const w=[].concat(b,h.contains),y=w.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(w)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:y};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,b,d,{begin:i(/[{,\n]\s*/,r(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,s+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:s+r("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:y}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:s}),E],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[E,e.inherit(e.TITLE_MODE,{begin:s})]},{variants:[{begin:"\\."+s},{begin:"\\$"+s}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:s}),"self",E]},{begin:"(get|set)\\s+(?="+s+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:s}),{begin:/\(\)/},E]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/jpjs/",(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var o=document.createTextNode(t),r=document.createElement("br");n.appendChild(o),e.text.length-1>a&&n.appendChild(r)})):n.textContent=e.text,{tag:n}};var a={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels"]}]};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e,t){var a=n({elem:"li",class:"footer-link__item"}),o="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,r=n({elem:"a",class:"footer-link__link",text:o});return"consonant"===t?"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../../consonants/".concat(e):r.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../consonants/".concat(e):r.tag.href="../".concat(e),a.tag.appendChild(r.tag),a.tag};const i=function(t,i,s){var l={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},c=l.root,u=l.WholeFrag,g=l.Wrapper;g.tag.className="wrapper wrapper_layout_sub";var d=function(e){var t=n({elem:"header",class:"header fade-in"}),a=n({elem:"h1",class:"logo"}),o=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return o.tag.href="consonant"===e?"../../../":"../../",a.tag.appendChild(o.tag),t.tag.appendChild(a.tag),function(){return t.tag}}(s);u().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(t(i)),u().appendChild(h.tag);var p=function(t){var i=n({elem:"footer",class:"footer fade-in"}),s=n({elem:"nav",class:"footer-nav"}),l=n({elem:"ul",class:"footer-link"}),c=e();a.intro.map((function(e){"object"===o(e)?(c().appendChild(r(Object.keys(e).toString(),t)),e.consonants.map((function(e){return c().appendChild(r(e,t))}))):c().appendChild(r(e,t))})),l.tag.appendChild(c()),s.tag.appendChild(l.tag),i.tag.appendChild(s.tag);var u=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});u.tag.href="https://www14.big.or.jp/~amiami/happy/",i.tag.appendChild(u.tag);var g=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return i.tag.appendChild(g.tag),function(){return i.tag}}(s);return u().appendChild(p()),g.tag.appendChild(u()),c.appendChild(g.tag),function(){return c}};var s=t(802),l=t.n(s),c=t(344),u=t.n(c);l().registerLanguage("javascript",u());const g=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),a=n({elem:"pre",class:"pre"}),o=l().highlight("javascript",e).value;return a.tag.innerHTML=o,t.tag.appendChild(a.tag),{Code:t}};var d=function(e,t,a){var o=n({elem:"div",class:"page-nav__item fade-in"}),r=""!==t?t:"sometime later!",i=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:r});return"top"===t?i.tag.href="../../":"one"===a?i.tag.href="../":t&&(i.tag.href="../".concat(t,"/")),o.tag.appendChild(i.tag),o.tag};const h=function(e,t,a,o){var r=n({elem:"div",class:"page-nav fade-in"});return r.tag.appendChild(d("pre",e,a)),r.tag.appendChild(d("next",t,o)),r.tag};function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var f=function(t){var a=e(),o=function(t){var a=e(),o=n({elem:"div",class:t.role}),r=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),i=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text});return a().appendChild(r.tag),a().appendChild(i.tag),o.tag.appendChild(a()),function(){return o.tag}}({role:"explain",element:"h1",title:t.explain.title,text:t.explain.text});a().appendChild(o());var r=g(t.romaji).Code;a().appendChild(r.tag),a().appendChild(function(t){var a=n({elem:"div"}),o=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's hear the sound!"});a.tag.appendChild(o.tag);var r=n({elem:"div",class:"sound-block fade-in"}),i=e();return t.map((function(e){return a="n"!==(t=e)&&1===t.length?new Audio("../../assets/sounds/single/".concat(t,".wav")):new Audio("../../../assets/sounds/single/".concat(t,".wav")),(o=n({elem:"button",class:"sound-button",text:t})).tag.type="button",o.tag.addEventListener("click",(function(){a.currentTime=0,a.play()})),void i().appendChild(o.tag);var t,a,o})),r.tag.appendChild(i()),a.tag.appendChild(r.tag),a.tag}(t.sound));var i=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.jpText});a().appendChild(i.tag);var s=g(t.letters).Code;a().appendChild(s.tag);var l=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.exampleText});a().appendChild(l.tag);var c=g(t.examples).Code;return a().appendChild(c.tag),a().appendChild(h.apply(void 0,function(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.navLink))),a()};function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var v={a:"あ",i:"い",u:"う",e:"え",o:"お"},w="か",y="く",E="こ",x="し",_=function(e,n){return"".concat(e," is ").concat(n," in Hiragana.")},N=function(e,n){return"".concat(e," is ").concat(n," in Kanji.")},k=v.a+w,R=_("Red",k),A=N(k,"赤");console.log(R),console.log(A);var S="き"+v.o+y,O=_("Memory",S),j=N(S,"記憶");console.log(O),console.log(j);var C=v.i+"け",T=_("Pond",C),M=N(C,"池");console.log(T),console.log(M);var I=E+v.e,L=_("Voice",I),B=N(I,"声");console.log(L),console.log(B);var D="さ"+v.i+E+v.u,H=_("Awesome",D),P=N(D,"最高");console.log(H),console.log(P);var K=x+v.a+v.i,$=_("Match",K),U=N(K,"試合");console.log($),console.log(U);var V=_("Hem","すそ"),W=N("すそ","裾");console.log(V),console.log(W);var z="せか"+v.i,F=_("World",z),G=N(z,"世界");console.log(F),console.log(G);var X="た"+v.i+"くつ",Z=_("Boredom",X),q=N(X,"退屈");console.log(Z),console.log(q);var J="ち"+v.e,Q=_("Wisdom",J),Y=N(J,"知恵");console.log(Q),console.log(Y);var ee=_("Vertical","たて"),ne=N("たて","縦");console.log(ee),console.log(ne);var te=_("Outside","そと"),ae=N("そと","外");console.log(te),console.log(ae);var oe=_("Summer","なつ"),re=N("なつ","夏");console.log(oe),console.log(re);var ie=_("Meat","にく"),se=N("にく","肉");console.log(ie),console.log(se);var le=_("Cloth","ぬの"),ce=N("ぬの","布");console.log(le),console.log(ce);var ue=_("Cat","ねこ"),ge=N("ねこ","猫");console.log(ue),console.log(ge);var de=_("Flower","はな"),he=N("はな","花");console.log(de),console.log(he);var pe=_("Skin","ひふ"),fe=N("ひふ","皮膚");console.log(pe),console.log(fe);var me=E+v.u+"へ"+v.i,be=_("Equity",me),ve=N(me,"公平");console.log(be),console.log(ve);var we=_("Star","ほし"),ye=N("ほし","星");console.log(we),console.log(ye);var Ee=_("Bean","まめ"),xe=N("まめ","豆");console.log(Ee),console.log(xe);var _e=_("South","みなみ"),Ne=N("みなみ","南");console.log(_e),console.log(Ne);var ke=_("Bug","むし"),Re=N("むし","虫");console.log(ke),console.log(Re);var Ae=_("String","ひも"),Se=N("ひも","紐");console.log(Ae),console.log(Se);var Oe="やさ"+v.i,je=_("Vegetable",Oe),Ce=N(Oe,"野菜");console.log(je),console.log(Ce);var Te="ゆ"+v.u+E+v.u,Me=_("Valid",Te),Ie=N(Te,"有効");console.log(Me),console.log(Ie);var Le=_("Good morning",v.o+"はよ"+v.u);console.log(Le);var Be=_("Ease","らく"),De=N("らく","楽");console.log(Be),console.log(De);var He="りゆ"+v.u,Pe=_("Reason",He),Ke=N(He,"理由");console.log(Pe),console.log(Ke);var $e=_("Absence","るす"),Ue=N("るす","留守");console.log($e),console.log(Ue);var Ve=_("History","れきし"),We=N("れきし","歴史");console.log(Ve),console.log(We);var ze="ろ"+v.u+w,Fe=_("Corridor",ze),Ge=N(ze,"廊下");console.log(Fe),console.log(Ge);var Xe="わくせ"+v.i,Ze=_("Planet",Xe),qe=N(Xe,"惑星");console.log(Ze),console.log(qe);var Je,Qe,Ye,en="つく"+v.e+"を"+w+v.u,nn=_("BuyDesk",en),tn=(Ye=(Je=en).replace("つくえ",(Qe=["机","買"])[0]).replace("か",Qe[1]),"".concat(Je," is ").concat(Ye," in Kanji."));console.log(nn),console.log(tn);var an=_("Hello","こんにちは");console.log(an);var on=m("kstnhmyrw"),rn=m("hcsf");function sn(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}on.map((function(e){return v.map((function(n){if("s"===e&&"i"===n)return e+rn[0]+n;if("t"===e){if("i"===n)return rn[1]+rn[0]+n;if("u"===n)return e+rn[2]+n}return"h"===e&&"u"===n?rn[3]+n:"y"!==e||"i"!==n&&"e"!==n?"w"===e&&"a"!==n&&"o"!==n?"  ":e+n:"  "}))})).concat([["n"]]),t.p,t.p,t.p,t.p,t.p,i(f,{explain:{title:"Consonant T",text:["Let's try to learn consonant t + vowels!","","There are two ways to write in consonant t + vowels.","We will use Hepburn-shiki Romaji here."]},romaji:"const consonantT = 't';\nconst vowels = [...'aiueo'];\nconst hepburnElem = ['ch', 's'];\n\n// Kunrei-shiki and Nihon-shiki Romaji\nconst tVowelsByRomaji = vowels.map(\n  (vowel) => consonantT + vowel\n);\nconsole.log(tVowelsByRomaji.toString());\n// ta, ti, tu, te, to\n\n// Hepburn-shiki Romaji(We will use this here.)\nconst tVowelsByRomajiHepburn = vowels.map(\n  (vowel) => {\n    if (vowel === 'i') {\n      return hepburnElem[0] + vowel;\n    } else if (vowel === 'u') {\n      return consonantT + hepburnElem[1] + vowel;\n    } else {\n      return consonantT + vowel;\n    }\n});\nconsole.log(tVowelsByRomajiHepburn.toString());\n// ta, chi, tsu, te, to\n",sound:["ta","chi","tsu","te","to"],jpText:"The consonant t + vowels spelt by hiragana and katakana.",letters:"const tVowelLetters = [\n  { ta: { hiragana: 'た', katakana: 'タ' } },\n  { chi: { hiragana: 'ち', katakana: 'チ' } },\n  { tsu: { hiragana: 'つ', katakana: 'ツ' } },\n  { te: { hiragana: 'て', katakana: 'テ' } },\n  { to: { hiragana: 'と', katakana: 'ト' } },\n];",exampleText:"Let's use consonant s + vowels in practice!",examples:"// Base code\nconst vowels =\n  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };\n\nconst kVowels =\n  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };\n\nconst sVowels =\n  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };\n\nconst tVowels =\n  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };\n\nconst englishHiragana = (\n  english,\n  hiragana\n) =>\n  `${english} is ${hiragana} in Hiragana.`;\n\nconst hiraganaKanji = (\n  hiragana,\n  kanji\n) =>\n  `${hiragana} is ${kanji} in Kanji.`;\n\n\n// boredom・たいくつ・退屈\nconst boredom =\n  tVowels.ta + vowels.i + kVowels.ku + tVowels.tsu;\nconst boredomHiragana = englishHiragana('Boredom', boredom);\nconst boredomKanji = hiraganaKanji(boredom, '退屈');\n\nconsole.log(boredomHiragana);\n// Boredom is たいくつ in Hiragana.\nconsole.log(boredomKanji);\n// たいくつ is 退屈 in Kanji.\n\n\n// wisdom・ちえ・知恵\nconst wisdom = tVowels.chi + vowels.e;\nconst wisdomHiragana = englishHiragana('Wisdom', wisdom);\nconst wisdomKanji = hiraganaKanji(wisdom, '知恵');\n\nconsole.log(wisdomHiragana);\n// Wisdom is ちえ in Hiragana.\nconsole.log(wisdomKanji);\n// ちえ is 知恵 in Kanji.\n\n// vertical・たて・縦\nconst vertical = tVowels.ta + tVowels.te;\nconst verticalHiragana = englishHiragana('Vertical', vertical);\nconst verticalKanji = hiraganaKanji(vertical, '縦');\n\nconsole.log(verticalHiragana);\n// Vertical is たて in Hiragana.\nconsole.log(verticalKanji);\n// たて is 縦 in Kanji.\n",navLink:["svowels","","",""]},"consonant");var ln,cn,un=function(e){if(Array.isArray(e))return sn(e)}(ln="aiueo")||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(ln)||sn(ln,cn)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),gn=["ch","s"],dn=un.map((function(e){return"t"+e}));console.log(dn.toString());var hn=un.map((function(e){return"i"===e?gn[0]+e:"u"===e?"t"+gn[1]+e:"t"+e}));console.log(hn.toString())})()})();