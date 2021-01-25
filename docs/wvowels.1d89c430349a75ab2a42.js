(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class o{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function i(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:r,inherit:s,nodeStream:function(e){const n=[];return function e(t,a){for(let o=t.firstChild;o;o=o.nextSibling)3===o.nodeType?a+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:a,node:o}),a=e(o,a),i(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:o}));return a}(e,0),n},mergeStreams:function(e,n,t){let a=0,o="";const s=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){o+="<"+i(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function u(e){o+="</"+i(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){let n=l();if(o+=r(t.substring(a,n[0].offset)),a=n[0].offset,n===e){s.reverse().forEach(u);do{g(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===a);s.reverse().forEach(c)}else"start"===n[0].event?s.push(n[0].node):s.pop(),g(n.splice(0,1)[0])}return o+r(t.substr(a))}});const c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class g{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{g._collapse(e)})))}}class d extends g{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const f="[a-zA-Z]\\w*",p="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",b="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",w={begin:"\\\\[\\s\\S]",relevance:0},y={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[w]},x={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[w]},E={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,t={}){const a=s({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(E),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},N=_("//","$"),k=_("/\\*","\\*/"),R=_("#","$"),S={className:"number",begin:m,relevance:0},A={className:"number",begin:b,relevance:0},O={className:"number",begin:v,relevance:0},C={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},j={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,contains:[w]}]}]},T={className:"title",begin:f,relevance:0},M={className:"title",begin:p,relevance:0};var I=Object.freeze({__proto__:null,IDENT_RE:f,UNDERSCORE_IDENT_RE:p,NUMBER_RE:m,C_NUMBER_RE:b,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:w,APOS_STRING_MODE:y,QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:E,COMMENT:_,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:R,NUMBER_MODE:S,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:O,CSS_NUMBER_MODE:C,REGEXP_MODE:j,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:M,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function B(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,o="";for(let r=0;r<e.length;r++){a+=1;const s=a;let i=h(e[r]);for(r>0&&(o+=n),o+="(";i.length>0;){const e=t.exec(i);if(null==e){o+=i;break}o+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+s):(o+=e[0],"("===e[0]&&a++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function o(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,i){const l=r;if(r.compiled)return l;r.compiled=!0,r.__beforeBegin=null,r.keywords=r.keywords||r.beginKeywords;let c=null;if("object"==typeof r.keywords&&(c=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function(e,n){const t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){const a=n.split("|");t[a[0]]=[e,P(a[0],a[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(r.lexemes||c||/\w+/,!0),i&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",r.__beforeBegin=o),r.begin||(r.begin=/\B|\b/),l.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(l.endRe=n(r.end)),l.terminator_end=h(r.end)||"",r.endsWithParent&&i.terminator_end&&(l.terminator_end+=(r.end?"|":"")+i.terminator_end)),r.illegal&&(l.illegalRe=n(r.illegal)),void 0===r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return s(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:D(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,l)})),r.starts&&t(r.starts,i),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function D(e){return!!e&&(e.endsWithParent||D(e.starts))}function P(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function H(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const $=r,U=s,{nodeStream:K,mergeStreams:V}=l,W=Symbol("nomatch");var z=function(e){const n=[],a=Object.create(null),r=Object.create(null),s=[];let i=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return g.noHighlightRe.test(e)}function f(e,n,t,a){const o={code:n,language:e};_("before:highlight",o);const r=o.result?o.result:p(o.language,o.code,t,a);return r.code=o.code,_("after:highlight",r),r}function p(e,n,t,r){const s=n;function l(e,n){const t=x.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=N.subLanguage?function(){if(""===S)return;let e=null;if("string"==typeof N.subLanguage){if(!a[N.subLanguage])return void R.addText(S);e=p(N.subLanguage,S,!0,k[N.subLanguage]),k[N.subLanguage]=e.top}else e=m(S,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(A+=e.relevance),R.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void R.addText(S);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(S),t="";for(;n;){t+=S.substring(e,n.index);const a=l(N,n);if(a){const[e,o]=a;R.addText(t),t="",A+=o;const r=x.classNameAliases[e]||e;R.addKeyword(n[0],r)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(S)}t+=S.substr(e),R.addText(t)}(),S=""}function d(e){return e.className&&R.openNode(x.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new o(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function f(e){return 0===N.matcher.regexIndex?(S+=e[0],1):(j=!0,0)}function b(e){const n=e[0],t=s.substr(e.index),a=h(N,e,t);if(!a)return W;const o=N;o.skip?S+=n:(o.returnEnd||o.excludeEnd||(S+=n),u(),o.excludeEnd&&(S=n));do{N.className&&R.closeNode(),N.skip||N.subLanguage||(A+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),d(a.starts)),o.returnEnd?0:n.length}let v={};function w(n,a){const r=a&&a[0];if(S+=n,null==r)return u(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===r){if(S+=s.slice(a.index,a.index+1),!i){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,a=new o(t),r=[t.__beforeBegin,t["on:begin"]];for(const t of r)if(t&&(t(e,a),a.ignore))return f(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?S+=n:(t.excludeBegin&&(S+=n),u(),t.returnBegin||t.excludeBegin||(S=n)),d(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){const e=b(a);if(e!==W)return e}if("illegal"===a.type&&""===r)return 1;if(C>1e5&&C>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return S+=r,r.length}const x=y(e);if(!x)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const E=B(x);let _="",N=r||E;const k={},R=new g.__emitter(g);!function(){const e=[];for(let n=N;n!==x;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>R.openNode(e)))}();let S="",A=0,O=0,C=0,j=!1;try{for(N.matcher.considerAll();;){C++,j?j=!1:N.matcher.considerAll(),N.matcher.lastIndex=O;const e=N.matcher.exec(s);if(!e)break;const n=w(s.substring(O,e.index),e);O=e.index+n}return w(s.substr(O)),R.closeAllNodes(),R.finalize(),_=R.toHTML(),{relevance:A,value:_,language:e,illegal:!1,emitter:R,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:s.slice(O-100,O+100),mode:n.mode},sofar:_,relevance:0,value:$(s),emitter:R};if(i)return{illegal:!1,relevance:0,value:$(s),emitter:R,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||g.languages||Object.keys(a);const t=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:$(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),o=n.filter(y).filter(E).map((n=>p(n,e,!1)));o.unshift(t);const r=o.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(y(e.language).supersetOf===n.language)return 1;if(y(n.language).supersetOf===e.language)return-1}return 0})),[s,i]=r,l=s;return l.second_best=i,l}function b(e){return g.tabReplace||g.useBR?e.replace(l,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):e}function v(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){const n=y(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||y(e)))}(e);if(h(t))return;_("before:highlightBlock",{block:e,language:t}),g.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,o=t?f(t,a,!0):m(a),s=K(n);if(s.length){const e=document.createElement("div");e.innerHTML=o.value,o.value=V(s,K(e),a)}o.value=b(o.value),_("after:highlightBlock",{block:e,result:o}),e.innerHTML=o.value,e.className=function(e,n,t){const a=n?r[n]:t,o=[e.trim()];return e.match(/\bhljs\b/)||o.push("hljs"),e.includes(a)||o.push(a),o.join(" ").trim()}(e.className,t,o.language),e.result={language:o.language,re:o.relevance,relavance:o.relevance},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.relevance,relavance:o.second_best.relevance})}const w=()=>{if(w.called)return;w.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,v)};function y(e){return e=(e||"").toLowerCase(),a[e]||a[r[e]]}function x(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e]=n}))}function E(e){const n=y(e);return n&&!n.disableAutodetect}function _(e,n){const t=e;s.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:f,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=U(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",w,!1)},registerLanguage:function(n,t){let o=null;try{o=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw e;console.error(e),o=u}o.name||(o.name=n),a[n]=o,o.rawDefinition=t.bind(null,e),o.aliases&&x(o.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:y,registerAliases:x,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=y(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:E,inherit:U,addPlugin:function(e){s.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString="10.4.0";for(const e in I)"object"==typeof I[e]&&t(I[e]);return Object.assign(e,I),e}({});e.exports=z},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],o=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function r(e){return s("(?=",e,")")}function s(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const i=n,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:o.join(" ")},u="\\.([0-9](_?[0-9])*)",g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},p={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},b={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:i+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,m,d,e.REGEXP_MODE];h.contains=v.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(v)});const w=[].concat(b,h.contains),y=w.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(w)}]),x={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:y};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,m,b,d,{begin:s(/[{,\n]\s*/,r(s(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,i+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:i+r("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:y}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:i}),x],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[x,e.inherit(e.TITLE_MODE,{begin:i})]},{variants:[{begin:"\\."+i},{begin:"\\$"+i}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:i}),"self",x]},{begin:"(get|set)\\s+(?="+i+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:i}),{begin:/\(\)/},x]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/jpjs/",(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var o=document.createTextNode(t),r=document.createElement("br");n.appendChild(o),e.text.length-1>a&&n.appendChild(r)})):n.textContent=e.text,{tag:n}};var a={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels"]}]};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e,t){var a=n({elem:"li",class:"footer-link__item"}),o="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,r=n({elem:"a",class:"footer-link__link",text:o});return"consonant"===t?"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../../consonants/".concat(e):r.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../consonants/".concat(e):r.tag.href="../".concat(e),a.tag.appendChild(r.tag),a.tag};const s=function(t,s,i){var l={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},c=l.root,u=l.WholeFrag,g=l.Wrapper;g.tag.className="wrapper wrapper_layout_sub";var d=function(e){var t=n({elem:"header",class:"header fade-in"}),a=n({elem:"h1",class:"logo"}),o=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return o.tag.href="consonant"===e?"../../../":"../../",a.tag.appendChild(o.tag),t.tag.appendChild(a.tag),function(){return t.tag}}(i);u().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(t(s)),u().appendChild(h.tag);var f=function(t){var s=n({elem:"footer",class:"footer fade-in"}),i=n({elem:"nav",class:"footer-nav"}),l=n({elem:"ul",class:"footer-link"}),c=e();a.intro.map((function(e){"object"===o(e)?(c().appendChild(r(Object.keys(e).toString(),t)),e.consonants.map((function(e){return c().appendChild(r(e,t))}))):c().appendChild(r(e,t))})),l.tag.appendChild(c()),i.tag.appendChild(l.tag),s.tag.appendChild(i.tag);var u=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});u.tag.href="https://www14.big.or.jp/~amiami/happy/",s.tag.appendChild(u.tag);var g=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return s.tag.appendChild(g.tag),function(){return s.tag}}(i);return u().appendChild(f()),g.tag.appendChild(u()),c.appendChild(g.tag),function(){return c}};var i=t(802),l=t.n(i),c=t(344),u=t.n(c);l().registerLanguage("javascript",u());const g=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),a=n({elem:"pre",class:"pre"}),o=l().highlight("javascript",e).value;return a.tag.innerHTML=o,t.tag.appendChild(a.tag),{Code:t}};var d=function(e,t,a){var o=n({elem:"div",class:"page-nav__item fade-in"}),r=""!==t?t:"sometime later!",s=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:r});return"top"===t?s.tag.href="../../":"one"===a?s.tag.href="../":t&&(s.tag.href="../".concat(t,"/")),o.tag.appendChild(s.tag),o.tag};const h=function(e,t,a,o){var r=n({elem:"div",class:"page-nav fade-in"});return r.tag.appendChild(d("pre",e,a)),r.tag.appendChild(d("next",t,o)),r.tag};function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var p=function(t){var a=n({elem:"section",class:"section"}),o=e(),r=function(t){var a=e(),o=n({elem:"div",class:t.role}),r=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),s=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text});return a().appendChild(r.tag),a().appendChild(s.tag),o.tag.appendChild(a()),function(){return o.tag}}({role:"explain",element:"h1",title:t.explain.title,text:t.explain.text});o().appendChild(r());var s=g(t.romaji).Code;o().appendChild(s.tag),o().appendChild(function(t){var a=n({elem:"div"}),o=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's hear the sound!"});a.tag.appendChild(o.tag);var r=n({elem:"div",class:"sound-block fade-in"}),s=e();return t.map((function(e){return a="n"!==(t=e)&&1===t.length?new Audio("../../assets/sounds/single/".concat(t,".wav")):new Audio("../../../assets/sounds/single/".concat(t,".wav")),(o=n({elem:"button",class:"sound-button",text:t})).tag.type="button",o.tag.addEventListener("click",(function(){a.currentTime=0,a.play()})),void s().appendChild(o.tag);var t,a,o})),r.tag.appendChild(s()),a.tag.appendChild(r.tag),a.tag}(t.sound));var i=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.jpText});o().appendChild(i.tag);var l=g(t.letters).Code;o().appendChild(l.tag);var c=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.exampleText});o().appendChild(c.tag);var u=g(t.examples).Code;return o().appendChild(u.tag),o().appendChild(h.apply(void 0,function(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.navLink))),a.tag.appendChild(o()),a.tag};function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var v=function(e,n){return"".concat(e," is ").concat(n," in Hiragana.")},w=function(e,n){return"".concat(e," is ").concat(n," in Kanji.")},y=v("Red","あか"),x=w("あか","赤");console.log(y),console.log(x);var E=v("Memory","きおく"),_=w("きおく","記憶");console.log(E),console.log(_);var N=v("Pond","いけ"),k=w("いけ","池");console.log(N),console.log(k);var R=v("Voice","こえ"),S=w("こえ","声");console.log(R),console.log(S);var A="さいこう",O=v("Awesome",A),C=w(A,"最高");console.log(O),console.log(C);var j=v("Match","しあい"),T=w("しあい","試合");console.log(j),console.log(T);var M=v("Hem","すそ"),I=w("すそ","裾");console.log(M),console.log(I);var L=v("World","せかい"),B=w("せかい","世界");console.log(L),console.log(B);var D="たいくつ",P=v("Boredom",D),H=w(D,"退屈");console.log(P),console.log(H);var $=v("Wisdom","ちえ"),U=w("ちえ","知恵");console.log($),console.log(U);var K=v("Vertical","たて"),V=w("たて","縦");console.log(K),console.log(V);var W=v("Outside","そと"),z=w("そと","外");console.log(W),console.log(z);var F=v("Summer","なつ"),G=w("なつ","夏");console.log(F),console.log(G);var X=v("Meat","にく"),Z=w("にく","肉");console.log(X),console.log(Z);var q=v("Cloth","ぬの"),J=w("ぬの","布");console.log(q),console.log(J);var Q=v("Cat","ねこ"),Y=w("ねこ","猫");console.log(Q),console.log(Y);var ee=v("Flower","はな"),ne=w("はな","花");console.log(ee),console.log(ne);var te=v("Skin","ひふ"),ae=w("ひふ","皮膚");console.log(te),console.log(ae);var oe="こうへい",re=v("Equity",oe),se=w(oe,"公平");console.log(re),console.log(se);var ie=v("Star","ほし"),le=w("ほし","星");console.log(ie),console.log(le);var ce=v("Bean","まめ"),ue=w("まめ","豆");console.log(ce),console.log(ue);var ge=v("South","みなみ"),de=w("みなみ","南");console.log(ge),console.log(de);var he=v("Bug","むし"),fe=w("むし","虫");console.log(he),console.log(fe);var pe=v("String","ひも"),me=w("ひも","紐");console.log(pe),console.log(me);var be=v("Vegetable","やさい"),ve=w("やさい","野菜");console.log(be),console.log(ve);var we="ゆうこう",ye=v("Valid",we),xe=w(we,"有効");console.log(ye),console.log(xe);var Ee=v("Good morning","おはよう");console.log(Ee);var _e=v("Ease","らく"),Ne=w("らく","楽");console.log(_e),console.log(Ne);var ke=v("Reason","りゆう"),Re=w("りゆう","理由");console.log(ke),console.log(Re);var Se=v("Absence","るす"),Ae=w("るす","留守");console.log(Se),console.log(Ae);var Oe=v("History","れきし"),Ce=w("れきし","歴史");console.log(Oe),console.log(Ce);var je=v("Corridor","ろうか"),Te=w("ろうか","廊下");console.log(je),console.log(Te);var Me="わくせい",Ie=v("Planet",Me),Le=w(Me,"惑星");console.log(Ie),console.log(Le);var Be="つくえをかう",De=v("BuyDesk",Be),Pe=function(e,n){var t=e.replace("つくえ",n[0]).replace("か",n[1]);return"".concat(e," is ").concat(t," in Kanji.")}(Be,["机","買"]);console.log(De),console.log(Pe);var He=v("Hello","こんにちは");console.log(He);for(var $e=m("aiueo"),Ue=m("kstnhmyrw"),Ke=m("hcsf"),Ve=[$e].concat(Ue.map((function(e){return"y"===e?$e.filter((function(e,n){return n%2==0})).map((function(n){return e+n})):"w"===e?$e.filter((function(e,n){return 0===n||4===n})).map((function(n){return e+n})):$e.map((function(n){if("s"===e&&"i"===n)return e+Ke[0]+n;if("t"===e){if("i"===n)return Ke[1]+Ke[0]+n;if("u"===n)return e+Ke[2]+n}return"h"===e&&"u"===n?Ke[3]+n:"y"!==e||"i"!==n&&"e"!==n?"w"===e&&"a"!==n&&"o"!==n?"  ":e+n:"  "}))})).concat([["n"]])),We=[],ze=12354;ze<12436;ze++)(ze<=12362&&ze%2==0||ze>12362&&ze<=12385&&ze%2!=0||ze>12386&&ze<=12392&&ze%2==0||ze>12393&&ze<=12398||ze>12397&&ze<=12412&&ze%3==0||ze>12413&&ze<=12418||ze>12418&&ze<=12424&&ze%2==0||ze>12424&&ze<=12429||12431===ze||ze>12433&&ze<=12435)&&We.push(String.fromCharCode(ze));function Fe(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}Ve.map((function(e,n){return Object.assign.apply(Object,[{}].concat(m(e.map((function(e,t){var a,o,r,s,i=(a=5*n-5+3,("r"===e[0]||"w"===e[0]?a:Ve.length-1===n?a-5+2:5*n)+t);return o={},r=e,s=We[i],r in o?Object.defineProperty(o,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[r]=s,o})))))})),t.p,t.p,s(p,{explain:{title:"Consonant W",text:["Let's try to learn consonant w + vowels!","","This combination is fewer than the others.","There are two ways to write in consonant w + vowels.","","We will use Kunrei-shiki and Hepburn-shiki Romaji here.","(Unless there is a need to make a distinction.)"]},romaji:"const consonantW = 'w';\nconst vowels = [...'aiueo'];\n\n// Nihon-shiki Romaji\nconst wVowelsByRomajiNihon = vowels\n  .filter((vowel) => vowel === 'a' || vowel === 'o')\n  .map((vowel) => consonantW + vowel);\n\nconsole.log(wVowelsByRomajiNihon.toString());\n// wa, wo\n\n// Kunrei-shiki and Hepburn-shiki Romaji\n// (We will use this here.)\nconst wVowelsByRomajiHepburn =\n  [consonantW + vowels[0], vowels[4]];\nconsole.log(wVowelsByRomajiHepburn.toString());\n// wa, o\n\n// There might be a time you see\n// such the ways to be written.\n// seldom way - 1\nconst wVowelsByRomajiNihonPast = vowels\n  .map((vowel) => consonantW + vowel);\nconsole.log(wVowelsByRomajiNihonPast.toString());\n// wa, wi, wu, we, wo\n\n// seldom way - 2\nconst wVowelsByRomajiKunreiPast = vowels.map((vowel) => {\n  if (vowel === 'a') return consonantW + vowel;\n  else return vowel;\n});\nconsole.log(wVowelsByRomajiKunreiPast.toString());\n// wa, i, u, e, o\n\n// The sound of 'wa' is sometimes used as 'は/ハ' sound.\n// The sounds of 'i','u','e','o','wi','wu','we','wo' are\n// the same as vowels'\n",sound:["wa","wo"],jpText:"The consonant w + vowels spelt by hiragana and katakana.",letters:"const wVowelLetters = [\n  { wa: { hiragana: 'わ', katakana: 'ワ' } },\n  { o: { hiragana: 'を', katakana: 'ヲ' } },\n];\n\n// The patterns of old letters of Hiragana/Katakana.\n// *'u' is the same as vowels'.\n// Seldom use so just a note.\nconst wVowelLetters = [\n  { wa: { hiragana: 'わ', katakana: 'ワ' } },\n  { i: { hiragana: 'ゐ', katakana: 'ヰ' } },\n  { u: { hiragana: 'う', katakana: 'ウ' } },\n  { e: { hiragana: 'ゑ', katakana: 'ヱ' } },\n  { o: { hiragana: 'を', katakana: 'ヲ' } },\n];\n",exampleText:"Let's use consonant w + vowels in practice!",examples:"// Base code\nconst vowels =\n  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };\n\nconst kVowels =\n  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };\n\nconst sVowels =\n  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };\n\nconst tVowels =\n  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };\n\nconst nVowels =\n  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };\n\nconst hVowels =\n  { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };\n\nconst mVowels =\n  { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' };\n\nconst yVowels =\n  { ya: 'や', yu: 'ゆ', yo: 'よ' };\n\nconst rVowels =\n  { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' };\n\nconst wVowels =\n  { wa: 'わ', o: 'を' };\n\nconst englishHiragana = (\n  english,\n  hiragana\n) =>\n  `${english} is ${hiragana} in Hiragana.`;\n\nconst hiraganaKanji = (\n  hiragana,\n  kanji\n) =>\n  `${hiragana} is ${kanji} in Kanji.`;\n\n\n",navLink:["nvowels","","",""]},"consonant");var Ge,Xe,Ze="w",qe=function(e){if(Array.isArray(e))return Fe(e)}(Ge="aiueo")||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(Ge)||Fe(Ge,Xe)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),Je=qe.filter((function(e){return"a"===e||"o"===e})).map((function(e){return Ze+e}));console.log(Je.toString());var Qe=[Ze+qe[0],qe[4]];console.log(Qe.toString());var Ye=qe.map((function(e){return Ze+e}));console.log(Ye.toString());var en=qe.map((function(e){return"a"===e?Ze+e:e}));console.log(en.toString())})()})();