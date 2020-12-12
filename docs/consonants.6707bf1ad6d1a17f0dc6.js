(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function o(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:s,inherit:i,nodeStream:function(e){const n=[];return function e(t,a){for(let r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),o(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n},mergeStreams:function(e,n,t){let a=0,r="";const i=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){r+="<"+o(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+s(e.value)+'"'})).join("")+">"}function u(e){r+="</"+o(e)+">"}function d(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){let n=l();if(r+=s(t.substring(a,n[0].offset)),a=n[0].offset,n===e){i.reverse().forEach(u);do{d(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===a);i.reverse().forEach(c)}else"start"===n[0].event?i.push(n[0].node):i.pop(),d(n.splice(0,1)[0])}return r+s(t.substr(a))}});const c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class d{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{d._collapse(e)})))}}class g extends d{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const p="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",b="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",y={begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y]},_={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},w=function(e,n,t={}){const a=i({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(x),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},N=w("//","$"),R=w("/\\*","\\*/"),O=w("#","$"),k={className:"number",begin:m,relevance:0},A={className:"number",begin:b,relevance:0},C={className:"number",begin:v,relevance:0},S={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},M={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,contains:[y]}]}]},T={className:"title",begin:p,relevance:0},I={className:"title",begin:f,relevance:0};var j=Object.freeze({__proto__:null,IDENT_RE:p,UNDERSCORE_IDENT_RE:f,NUMBER_RE:m,C_NUMBER_RE:b,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),i({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:y,APOS_STRING_MODE:E,QUOTE_STRING_MODE:_,PHRASAL_WORDS_MODE:x,COMMENT:w,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:O,NUMBER_MODE:k,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:C,CSS_NUMBER_MODE:S,REGEXP_MODE:M,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function D(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,r="";for(let s=0;s<e.length;s++){a+=1;const i=a;let o=h(e[s]);for(s>0&&(r+=n),r+="(";o.length>0;){const e=t.exec(o);if(null==e){r+=o;break}r+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+i):(r+=e[0],"("===e[0]&&a++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function r(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=i(e.classNameAliases||{}),function t(s,o){const l=s;if(s.compiled)return l;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let c=null;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){const t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){const a=n.split("|");t[a[0]]=[e,P(a[0],a[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=r),s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(l.endRe=n(s.end)),l.terminator_end=h(s.end)||"",s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),s.illegal&&(l.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return i(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:B(e)?i(e,{starts:e.starts?i(e.starts):null}):Object.isFrozen(e)?i(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,l)})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function B(e){return!!e&&(e.endsWithParent||B(e.starts))}function P(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function U(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,s(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const $=s,H=i,{nodeStream:z,mergeStreams:K}=l,F=Symbol("nomatch");var G=function(e){const n=[],a=Object.create(null),s=Object.create(null),i=[];let o=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let d={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:g};function h(e){return d.noHighlightRe.test(e)}function p(e,n,t,a){const r={code:n,language:e};w("before:highlight",r);const s=r.result?r.result:f(r.language,r.code,t,a);return s.code=r.code,w("after:highlight",s),s}function f(e,n,t,s){const i=n;function l(e,n){const t=_.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=N.subLanguage?function(){if(""===k)return;let e=null;if("string"==typeof N.subLanguage){if(!a[N.subLanguage])return void O.addText(k);e=f(N.subLanguage,k,!0,R[N.subLanguage]),R[N.subLanguage]=e.top}else e=m(k,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(A+=e.relevance),O.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void O.addText(k);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(k),t="";for(;n;){t+=k.substring(e,n.index);const a=l(N,n);if(a){const[e,r]=a;O.addText(t),t="",A+=r;const s=_.classNameAliases[e]||e;O.addKeyword(n[0],s)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(k)}t+=k.substr(e),O.addText(t)}(),k=""}function g(e){return e.className&&O.openNode(_.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function p(e){return 0===N.matcher.regexIndex?(k+=e[0],1):(M=!0,0)}function b(e){const n=e[0],t=i.substr(e.index),a=h(N,e,t);if(!a)return F;const r=N;r.skip?k+=n:(r.returnEnd||r.excludeEnd||(k+=n),u(),r.excludeEnd&&(k=n));do{N.className&&O.closeNode(),N.skip||N.subLanguage||(A+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),g(a.starts)),r.returnEnd?0:n.length}let v={};function y(n,a){const s=a&&a[0];if(k+=n,null==s)return u(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===s){if(k+=i.slice(a.index,a.index+1),!o){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,a=new r(t),s=[t.__beforeBegin,t["on:begin"]];for(const t of s)if(t&&(t(e,a),a.ignore))return p(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?k+=n:(t.excludeBegin&&(k+=n),u(),t.returnBegin||t.excludeBegin||(k=n)),g(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){const e=b(a);if(e!==F)return e}if("illegal"===a.type&&""===s)return 1;if(S>1e5&&S>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return k+=s,s.length}const _=E(e);if(!_)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=D(_);let w="",N=s||x;const R={},O=new d.__emitter(d);!function(){const e=[];for(let n=N;n!==_;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>O.openNode(e)))}();let k="",A=0,C=0,S=0,M=!1;try{for(N.matcher.considerAll();;){S++,M?M=!1:N.matcher.considerAll(),N.matcher.lastIndex=C;const e=N.matcher.exec(i);if(!e)break;const n=y(i.substring(C,e.index),e);C=e.index+n}return y(i.substr(C)),O.closeAllNodes(),O.finalize(),w=O.toHTML(),{relevance:A,value:w,language:e,illegal:!1,emitter:O,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:i.slice(C-100,C+100),mode:n.mode},sofar:w,relevance:0,value:$(i),emitter:O};if(o)return{illegal:!1,relevance:0,value:$(i),emitter:O,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||d.languages||Object.keys(a);const t=function(e){const n={relevance:0,emitter:new d.__emitter(d),value:$(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),r=n.filter(E).filter(x).map((n=>f(n,e,!1)));r.unshift(t);const s=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(E(e.language).supersetOf===n.language)return 1;if(E(n.language).supersetOf===e.language)return-1}return 0})),[i,o]=s,l=i;return l.second_best=o,l}function b(e){return d.tabReplace||d.useBR?e.replace(l,(e=>"\n"===e?d.useBR?"<br>":e:d.tabReplace?e.replace(/\t/g,d.tabReplace):e)):e}function v(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n);if(t){const n=E(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||E(e)))}(e);if(h(t))return;w("before:highlightBlock",{block:e,language:t}),d.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,r=t?p(t,a,!0):m(a),i=z(n);if(i.length){const e=document.createElement("div");e.innerHTML=r.value,r.value=K(i,z(e),a)}r.value=b(r.value),w("after:highlightBlock",{block:e,result:r}),e.innerHTML=r.value,e.className=function(e,n,t){const a=n?s[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),e.includes(a)||r.push(a),r.join(" ").trim()}(e.className,t,r.language),e.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const y=()=>{if(y.called)return;y.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,v)};function E(e){return e=(e||"").toLowerCase(),a[e]||a[s[e]]}function _(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{s[e]=n}))}function x(e){const n=E(e);return n&&!n.disableAutodetect}function w(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:p,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),d=H(d,e)},initHighlighting:y,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",y,!1)},registerLanguage:function(n,t){let r=null;try{r=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw e;console.error(e),r=u}r.name||(r.name=n),a[n]=r,r.rawDefinition=t.bind(null,e),r.aliases&&_(r.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:E,registerAliases:_,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=E(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:x,inherit:H,addPlugin:function(e){i.push(e)},vuePlugin:U(e).VuePlugin}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.4.0";for(const e in j)"object"==typeof j[e]&&t(j[e]);return Object.assign(e,j),e}({});e.exports=G},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function s(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const o=n,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:r.join(" ")},u="\\.([0-9](_?[0-9])*)",d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},b={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,g,e.REGEXP_MODE];h.contains=v.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(v)});const y=[].concat(b,h.contains),E=y.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(y)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:E};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:E},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,b,g,{begin:i(/[{,\n]\s*/,s(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,o+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:o+s("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:E}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:o}),_],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[_,e.inherit(e.TITLE_MODE,{begin:o})]},{variants:[{begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:o}),"self",_]},{begin:"(get|set)\\s+(?="+o+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:o}),{begin:/\(\)/},_]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var r=document.createTextNode(t),s=document.createElement("br");n.appendChild(r),e.text.length-1>a&&n.appendChild(s)})):n.textContent=e.text,{tag:n}};var a={intro:["preparation","characters","vowels",{consonants:["consonantvowelk"]}]};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e,t){var a=n({elem:"li",class:"footer-link__item"}),r=n({elem:"a",class:"footer-link__link",text:e});return r.tag.href="consonant"===t?"../../".concat(e):"../".concat(e),a.tag.appendChild(r.tag),a.tag};const i=function(t){var a=e(),r=n({elem:"div",class:t.role}),s=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),i=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text});return a().appendChild(s.tag),a().appendChild(i.tag),r.tag.appendChild(a()),function(){return r.tag}};var o=t(802),l=t.n(o),c=t(344),u=t.n(c);l().registerLanguage("javascript",u());const d=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),a=n({elem:"pre",class:"pre"}),r=l().highlight("javascript",e).value;return a.tag.innerHTML=r,t.tag.appendChild(a.tag),{Code:t}};var g=function(e,t,a){var r=n({elem:"div",class:"page-nav__item fade-in"}),s=""!==t?t:"sometime later!",i=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:s});return"top"===t?i.tag.href="../../":"one"===a?i.tag.href="../":t&&(i.tag.href="../".concat(t,"/")),r.tag.appendChild(i.tag),r.tag};var h;function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}!function(t,i,o){var l={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},c=l.root,u=l.WholeFrag,d=l.Wrapper;d.tag.className="wrapper wrapper_layout_sub";var g=function(e){var t=n({elem:"header",class:"header fade-in"}),a=n({elem:"h1",class:"logo"}),r=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return r.tag.href="consonant"===e?"../../../":"../../",a.tag.appendChild(r.tag),t.tag.appendChild(a.tag),function(){return t.tag}}(o);u().appendChild(g());var h=n({elem:"main",class:"main"});h.tag.appendChild(t(i)),u().appendChild(h.tag);var p=function(){var t=n({elem:"footer",class:"footer fade-in"}),i=n({elem:"nav",class:"footer-nav"}),o=n({elem:"ul",class:"footer-link"}),l=e();a.intro.map((function(e){"object"===r(e)?l().appendChild(s(Object.keys(e).toString())):l().appendChild(s(e))})),o.tag.appendChild(l()),i.tag.appendChild(o.tag),t.tag.appendChild(i.tag);var c=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});c.tag.href="https://www14.big.or.jp/~amiami/happy/",t.tag.appendChild(c.tag);var u=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return t.tag.appendChild(u.tag),function(){return t.tag}}();u().appendChild(p()),d.tag.appendChild(u()),c.appendChild(d.tag)}((function(){var t=e(),a=n({elem:"small",class:"small slide-in-upper__1",text:"*The way to write Romaji depends on the person."}),r=i({role:"explain",element:"h1",title:"Consonants",text:"Around 14 - 17 consonant elements are used by Romaji."});t().appendChild(r()),t().appendChild(a.tag);var s=d("const consonantElements = [...'kstcnhfmyrwgzjdbp'];").Code;t().appendChild(s.tag);var o=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:['Roughly, the main system is "consonant + vowel".',"*Let me show you the exact one later."]});t().appendChild(o.tag);var l=d("  const consonants = [...'kstcnhfmyrwgzjdbp'];\n  const vowels = [...'aiueo'];\n  const roughMainSystem = consonants.map((consonant) =>\n    vowels.map((vowel) => consonant + vowel)\n  );\n\n  console.log(...roughMainSystem);\n  // ...roughMainSystem !== Romaji").Code;t().appendChild(l.tag);var c=n({elem:"div",class:"consonants-details slide-in-upper__1"}),u=i({role:"sub",element:"h2",title:"Each element",text:"Let's learn each element deeply!"});c.tag.appendChild(u());var h,p,f,m,b,v,y,E=i({role:"sub-s",element:"h3",title:"Basic",text:['The part of "Fifty Sounds Table".',"coming soon!"]});return c.tag.appendChild(E()),c.tag.appendChild((v=n({elem:"ul",class:"consonant-link fade-in"}),y=e(),["k","sh","tchs","n","hf","m","y","r","wn"].map((function(e){return y().appendChild(function(e){var t=n({elem:"li",class:"consonant-link__item"}),a=e.length>1?e.split("").join("/"):e,r=n({elem:"a",class:"consonant-link__link",text:"".concat(a," + vowels")});return t.tag.appendChild(r.tag),t.tag}(e))})),v.tag.appendChild(y()),v.tag)),t().appendChild(c.tag),t().appendChild((h="vowels",p="",(b=n({elem:"div",class:"page-nav fade-in"})).tag.appendChild(g("pre",h,f)),b.tag.appendChild(g("next",p,m)),b.tag)),t()}));var m=p("kstcnhfmyrwgzjdbp"),b=p("aiueo"),v=m.map((function(e){return b.map((function(n){return e+n}))}));(h=console).log.apply(h,p(v))})()})();