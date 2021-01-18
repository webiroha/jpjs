(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class o{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function i(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:r,inherit:s,nodeStream:function(e){const n=[];return function e(t,a){for(let o=t.firstChild;o;o=o.nextSibling)3===o.nodeType?a+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:a,node:o}),a=e(o,a),i(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:o}));return a}(e,0),n},mergeStreams:function(e,n,t){let a=0,o="";const s=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){o+="<"+i(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function g(e){o+="</"+i(e)+">"}function u(e){("start"===e.event?c:g)(e.node)}for(;e.length||n.length;){let n=l();if(o+=r(t.substring(a,n[0].offset)),a=n[0].offset,n===e){s.reverse().forEach(g);do{u(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===a);s.reverse().forEach(c)}else"start"===n[0].event?s.push(n[0].node):s.pop(),u(n.splice(0,1)[0])}return o+r(t.substr(a))}});const c=e=>!!e.kind;class g{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{u._collapse(e)})))}}class d extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new g(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const p="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",b="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",x={begin:"\\\\[\\s\\S]",relevance:0},w={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[x]},y={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[x]},E={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,t={}){const a=s({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(E),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},N=_("//","$"),R=_("/\\*","\\*/"),k=_("#","$"),O={className:"number",begin:m,relevance:0},C={className:"number",begin:b,relevance:0},A={className:"number",begin:v,relevance:0},S={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},M={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[x,{begin:/\[/,end:/\]/,relevance:0,contains:[x]}]}]},T={className:"title",begin:p,relevance:0},j={className:"title",begin:f,relevance:0};var I=Object.freeze({__proto__:null,IDENT_RE:p,UNDERSCORE_IDENT_RE:f,NUMBER_RE:m,C_NUMBER_RE:b,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:x,APOS_STRING_MODE:w,QUOTE_STRING_MODE:y,PHRASAL_WORDS_MODE:E,COMMENT:_,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:k,NUMBER_MODE:O,C_NUMBER_MODE:C,BINARY_NUMBER_MODE:A,CSS_NUMBER_MODE:S,REGEXP_MODE:M,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:j,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function B(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,o="";for(let r=0;r<e.length;r++){a+=1;const s=a;let i=h(e[r]);for(r>0&&(o+=n),o+="(";i.length>0;){const e=t.exec(i);if(null==e){o+=i;break}o+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+s):(o+=e[0],"("===e[0]&&a++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function o(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,i){const l=r;if(r.compiled)return l;r.compiled=!0,r.__beforeBegin=null,r.keywords=r.keywords||r.beginKeywords;let c=null;if("object"==typeof r.keywords&&(c=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function(e,n){const t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){const a=n.split("|");t[a[0]]=[e,P(a[0],a[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(r.lexemes||c||/\w+/,!0),i&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",r.__beforeBegin=o),r.begin||(r.begin=/\B|\b/),l.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(l.endRe=n(r.end)),l.terminator_end=h(r.end)||"",r.endsWithParent&&i.terminator_end&&(l.terminator_end+=(r.end?"|":"")+i.terminator_end)),r.illegal&&(l.illegalRe=n(r.illegal)),void 0===r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return s(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:D(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,l)})),r.starts&&t(r.starts,i),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function D(e){return!!e&&(e.endsWithParent||D(e.starts))}function P(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function H(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const $=r,U=s,{nodeStream:K,mergeStreams:z}=l,V=Symbol("nomatch");var F=function(e){const n=[],a=Object.create(null),r=Object.create(null),s=[];let i=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let u={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return u.noHighlightRe.test(e)}function p(e,n,t,a){const o={code:n,language:e};_("before:highlight",o);const r=o.result?o.result:f(o.language,o.code,t,a);return r.code=o.code,_("after:highlight",r),r}function f(e,n,t,r){const s=n;function l(e,n){const t=y.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function g(){null!=N.subLanguage?function(){if(""===O)return;let e=null;if("string"==typeof N.subLanguage){if(!a[N.subLanguage])return void k.addText(O);e=f(N.subLanguage,O,!0,R[N.subLanguage]),R[N.subLanguage]=e.top}else e=m(O,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(C+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void k.addText(O);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(O),t="";for(;n;){t+=O.substring(e,n.index);const a=l(N,n);if(a){const[e,o]=a;k.addText(t),t="",C+=o;const r=y.classNameAliases[e]||e;k.addKeyword(n[0],r)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(O)}t+=O.substr(e),k.addText(t)}(),O=""}function d(e){return e.className&&k.openNode(y.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new o(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function p(e){return 0===N.matcher.regexIndex?(O+=e[0],1):(M=!0,0)}function b(e){const n=e[0],t=s.substr(e.index),a=h(N,e,t);if(!a)return V;const o=N;o.skip?O+=n:(o.returnEnd||o.excludeEnd||(O+=n),g(),o.excludeEnd&&(O=n));do{N.className&&k.closeNode(),N.skip||N.subLanguage||(C+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),d(a.starts)),o.returnEnd?0:n.length}let v={};function x(n,a){const r=a&&a[0];if(O+=n,null==r)return g(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===r){if(O+=s.slice(a.index,a.index+1),!i){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,a=new o(t),r=[t.__beforeBegin,t["on:begin"]];for(const t of r)if(t&&(t(e,a),a.ignore))return p(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?O+=n:(t.excludeBegin&&(O+=n),g(),t.returnBegin||t.excludeBegin||(O=n)),d(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){const e=b(a);if(e!==V)return e}if("illegal"===a.type&&""===r)return 1;if(S>1e5&&S>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return O+=r,r.length}const y=w(e);if(!y)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const E=B(y);let _="",N=r||E;const R={},k=new u.__emitter(u);!function(){const e=[];for(let n=N;n!==y;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>k.openNode(e)))}();let O="",C=0,A=0,S=0,M=!1;try{for(N.matcher.considerAll();;){S++,M?M=!1:N.matcher.considerAll(),N.matcher.lastIndex=A;const e=N.matcher.exec(s);if(!e)break;const n=x(s.substring(A,e.index),e);A=e.index+n}return x(s.substr(A)),k.closeAllNodes(),k.finalize(),_=k.toHTML(),{relevance:C,value:_,language:e,illegal:!1,emitter:k,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:s.slice(A-100,A+100),mode:n.mode},sofar:_,relevance:0,value:$(s),emitter:k};if(i)return{illegal:!1,relevance:0,value:$(s),emitter:k,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||u.languages||Object.keys(a);const t=function(e){const n={relevance:0,emitter:new u.__emitter(u),value:$(e),illegal:!1,top:g};return n.emitter.addText(e),n}(e),o=n.filter(w).filter(E).map((n=>f(n,e,!1)));o.unshift(t);const r=o.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(w(e.language).supersetOf===n.language)return 1;if(w(n.language).supersetOf===e.language)return-1}return 0})),[s,i]=r,l=s;return l.second_best=i,l}function b(e){return u.tabReplace||u.useBR?e.replace(l,(e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e)):e}function v(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=u.languageDetectRe.exec(n);if(t){const n=w(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||w(e)))}(e);if(h(t))return;_("before:highlightBlock",{block:e,language:t}),u.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,o=t?p(t,a,!0):m(a),s=K(n);if(s.length){const e=document.createElement("div");e.innerHTML=o.value,o.value=z(s,K(e),a)}o.value=b(o.value),_("after:highlightBlock",{block:e,result:o}),e.innerHTML=o.value,e.className=function(e,n,t){const a=n?r[n]:t,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),e.includes(a)||o.push(a),o.join(" ").trim()}(e.className,t,o.language),e.result={language:o.language,re:o.relevance,relavance:o.relevance},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.relevance,relavance:o.second_best.relevance})}const x=()=>{if(x.called)return;x.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,v)};function w(e){return e=(e||"").toLowerCase(),a[e]||a[r[e]]}function y(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e]=n}))}function E(e){const n=w(e);return n&&!n.disableAutodetect}function _(e,n){const t=e;s.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:p,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),u=U(u,e)},initHighlighting:x,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",x,!1)},registerLanguage:function(n,t){let o=null;try{o=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw e;console.error(e),o=g}o.name||(o.name=n),a[n]=o,o.rawDefinition=t.bind(null,e),o.aliases&&y(o.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:w,registerAliases:y,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=w(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:E,inherit:U,addPlugin:function(e){s.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString="10.4.0";for(const e in I)"object"==typeof I[e]&&t(I[e]);return Object.assign(e,I),e}({});e.exports=F},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],o=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function r(e){return s("(?=",e,")")}function s(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const i=n,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:o.join(" ")},g="\\.([0-9](_?[0-9])*)",u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${u})((${g})|\\.)?|(${g}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${u})\\b((${g})\\b|\\.)?|(${g})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},b={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,d,e.REGEXP_MODE];h.contains=v.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(v)});const x=[].concat(b,h.contains),w=x.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(x)}]),y={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:w};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,b,d,{begin:s(/[{,\n]\s*/,r(s(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,i+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:i+r("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:i}),y],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[y,e.inherit(e.TITLE_MODE,{begin:i})]},{variants:[{begin:"\\."+i},{begin:"\\$"+i}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:i}),"self",y]},{begin:"(get|set)\\s+(?="+i+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:i}),{begin:/\(\)/},y]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/jpjs/",(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var o=document.createTextNode(t),r=document.createElement("br");n.appendChild(o),e.text.length-1>a&&n.appendChild(r)})):n.textContent=e.text,{tag:n}};var a={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels"]}]};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e,t){var a=n({elem:"li",class:"footer-link__item"}),o="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,r=n({elem:"a",class:"footer-link__link",text:o});return"consonant"===t?"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../../consonants/".concat(e):r.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../consonants/".concat(e):r.tag.href="../".concat(e),a.tag.appendChild(r.tag),a.tag};const s=function(t,s,i){var l={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},c=l.root,g=l.WholeFrag,u=l.Wrapper;u.tag.className="wrapper wrapper_layout_sub";var d=function(e){var t=n({elem:"header",class:"header fade-in"}),a=n({elem:"h1",class:"logo"}),o=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return o.tag.href="consonant"===e?"../../../":"../../",a.tag.appendChild(o.tag),t.tag.appendChild(a.tag),function(){return t.tag}}(i);g().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(t(s)),g().appendChild(h.tag);var p=function(t){var s=n({elem:"footer",class:"footer fade-in"}),i=n({elem:"nav",class:"footer-nav"}),l=n({elem:"ul",class:"footer-link"}),c=e();a.intro.map((function(e){"object"===o(e)?(c().appendChild(r(Object.keys(e).toString(),t)),e.consonants.map((function(e){return c().appendChild(r(e,t))}))):c().appendChild(r(e,t))})),l.tag.appendChild(c()),i.tag.appendChild(l.tag),s.tag.appendChild(i.tag);var g=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});g.tag.href="https://www14.big.or.jp/~amiami/happy/",s.tag.appendChild(g.tag);var u=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return s.tag.appendChild(u.tag),function(){return s.tag}}(i);return g().appendChild(p()),u.tag.appendChild(g()),c.appendChild(u.tag),function(){return c}};var i=t(802),l=t.n(i),c=t(344),g=t.n(c);l().registerLanguage("javascript",g());const u=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),a=n({elem:"pre",class:"pre"}),o=l().highlight("javascript",e).value;return a.tag.innerHTML=o,t.tag.appendChild(a.tag),{Code:t}};var d=function(e,t,a){var o=n({elem:"div",class:"page-nav__item fade-in"}),r=""!==t?t:"sometime later!",s=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:r});return"top"===t?s.tag.href="../../":"one"===a?s.tag.href="../":t&&(s.tag.href="../".concat(t,"/")),o.tag.appendChild(s.tag),o.tag};const h=function(e,t,a,o){var r=n({elem:"div",class:"page-nav fade-in"});return r.tag.appendChild(d("pre",e,a)),r.tag.appendChild(d("next",t,o)),r.tag};function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var f=function(t){var a=e(),o=function(t){var a=e(),o=n({elem:"div",class:t.role}),r=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),s=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text});return a().appendChild(r.tag),a().appendChild(s.tag),o.tag.appendChild(a()),function(){return o.tag}}({role:"explain",element:"h1",title:t.explain.title,text:t.explain.text});a().appendChild(o());var r=u(t.romaji).Code;a().appendChild(r.tag),a().appendChild(function(t){var a=n({elem:"div"}),o=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's hear the sound!"});a.tag.appendChild(o.tag);var r=n({elem:"div",class:"sound-block fade-in"}),s=e();return t.map((function(e){return a="n"!==(t=e)&&1===t.length?new Audio("../../assets/sounds/single/".concat(t,".wav")):new Audio("../../../assets/sounds/single/".concat(t,".wav")),(o=n({elem:"button",class:"sound-button",text:t})).tag.type="button",o.tag.addEventListener("click",(function(){a.currentTime=0,a.play()})),void s().appendChild(o.tag);var t,a,o})),r.tag.appendChild(s()),a.tag.appendChild(r.tag),a.tag}(t.sound));var s=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.jpText});a().appendChild(s.tag);var i=u(t.letters).Code;a().appendChild(i.tag);var l=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.exampleText});a().appendChild(l.tag);var c,g=u(t.examples).Code;return a().appendChild(g.tag),a().appendChild(h.apply(void 0,function(e){if(Array.isArray(e))return p(e)}(c=t.navLink)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(e,n){if(e){if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,n):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),a()};var m=function(e,n){return"".concat(e," is ").concat(n," in Hiragana.")},b=function(e,n){return"".concat(e," is ").concat(n," in Kanji.")},v=m("Red","あか"),x=b("あか","赤");console.log(v),console.log(x);var w=m("Memory","きおく"),y=b("きおく","記憶");console.log(w),console.log(y);var E=m("Pond","いけ"),_=b("いけ","池");console.log(E),console.log(_);var N=m("Voice","こえ"),R=b("こえ","声");console.log(N),console.log(R);var k="さいこう",O=m("Awesome",k),C=b(k,"最高");console.log(O),console.log(C);var A=m("Match","しあい"),S=b("しあい","試合");console.log(A),console.log(S);var M=m("Hem","すそ"),T=b("すそ","裾");console.log(M),console.log(T);var j=m("World","せかい"),I=b("せかい","世界");console.log(j),console.log(I);var L="たいくつ",B=m("Boredom",L),D=b(L,"退屈");console.log(B),console.log(D);var P=m("Wisdom","ちえ"),H=b("ちえ","知恵");console.log(P),console.log(H);var $=m("Vertical","たて"),U=b("たて","縦");console.log($),console.log(U);var K=m("Outside","そと"),z=b("そと","外");console.log(K),console.log(z);var V=m("Summer","なつ"),F=b("なつ","夏");console.log(V),console.log(F);var W=m("Meat","にく"),G=b("にく","肉");console.log(W),console.log(G);var X=m("Cloth","ぬの"),Z=b("ぬの","布");console.log(X),console.log(Z);var q=m("Cat","ねこ"),J=b("ねこ","猫");console.log(q),console.log(J);var Q=m("Flower","はな"),Y=b("はな","花");console.log(Q),console.log(Y);var ee=m("Skin","ひふ"),ne=b("ひふ","皮膚");console.log(ee),console.log(ne);var te="こうへい",ae=m("Equity",te),oe=b(te,"公平");console.log(ae),console.log(oe);var re=m("Star","ほし"),se=b("ほし","星");console.log(re),console.log(se);var ie=m("Bean","まめ"),le=b("まめ","豆");console.log(ie),console.log(le);var ce=m("South","みなみ"),ge=b("みなみ","南");console.log(ce),console.log(ge);var ue=m("Bug","むし"),de=b("むし","虫");console.log(ue),console.log(de);var he=m("String","ひも"),pe=b("ひも","紐");console.log(he),console.log(pe);var fe=m("Vegetable","やさい"),me=b("やさい","野菜");console.log(fe),console.log(me);var be="ゆうこう",ve=m("Valid",be),xe=b(be,"有効");console.log(ve),console.log(xe);var we=m("Good morning","おはよう");console.log(we);var ye=m("Ease","らく"),Ee=b("らく","楽");console.log(ye),console.log(Ee);var _e=m("Reason","りゆう"),Ne=b("りゆう","理由");console.log(_e),console.log(Ne);var Re=m("Absence","るす"),ke=b("るす","留守");console.log(Re),console.log(ke);var Oe=m("History","れきし"),Ce=b("れきし","歴史");console.log(Oe),console.log(Ce);var Ae=m("Corridor","ろうか"),Se=b("ろうか","廊下");console.log(Ae),console.log(Se);var Me="わくせい",Te=m("Planet",Me),je=b(Me,"惑星");console.log(Te),console.log(je);var Ie,Le,Be,De="つくえをかう",Pe=m("BuyDesk",De),He=(Be=(Ie=De).replace("つくえ",(Le=["机","買"])[0]).replace("か",Le[1]),"".concat(Ie," is ").concat(Be," in Kanji."));console.log(Pe),console.log(He);var $e=m("Hello","こんにちは");console.log($e),t.p,s(f,{explain:{title:"Consonant N",text:["The exceptional pattern, N","","This is a single sound unlike others.","This letter is included with the other letters","as basic Japanese letters."]},romaji:"const nByRomaji = 'n';\nconsole.log(nByRomaji);",sound:["n"],jpText:"The consonant N spelt by hiragana and katakana.",letters:"const nLetter = [\n  { n: { hiragana: 'ん', katakana: 'ン' } },\n];\n// We type 'ん/ン' with doubling n(nn).\n",exampleText:"Let's use consonant n in practice!",examples:"// Base code\nconst vowels =\n  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };\n\nconst kVowels =\n  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };\n\nconst sVowels =\n  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };\n\nconst tVowels =\n  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };\n\nconst nVowels =\n  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };\n\nconst hVowels =\n  { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };\n\nconst mVowels =\n  { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' };\n\nconst yVowels =\n  { ya: 'や', yu: 'ゆ', yo: 'よ' };\n\nconst rVowels =\n  { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' };\n\nconst wVowels =\n  { wa: 'わ', o: 'を' };\n\nconst wVowelsParticle = { wa: 'は' };\n\nconst n = 'ん';\n\nconst englishHiragana = (\n  english,\n  hiragana\n) =>\n  `${english} is ${hiragana} in Hiragana.`;\n\nconst hiraganaKanji = (\n  hiragana,\n  kanji\n) =>\n  `${hiragana} is ${kanji} in Kanji.`;\n\n\n",navLink:["nvowels","","",""]},"consonant"),console.log("n")})()})();