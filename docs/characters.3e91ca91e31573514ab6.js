(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function o(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:s,inherit:i,nodeStream:function(e){const n=[];return function e(t,a){for(let r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),o(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n},mergeStreams:function(e,n,t){let a=0,r="";const i=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){r+="<"+o(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+s(e.value)+'"'})).join("")+">"}function u(e){r+="</"+o(e)+">"}function d(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){let n=l();if(r+=s(t.substring(a,n[0].offset)),a=n[0].offset,n===e){i.reverse().forEach(u);do{d(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===a);i.reverse().forEach(c)}else"start"===n[0].event?i.push(n[0].node):i.pop(),d(n.splice(0,1)[0])}return r+s(t.substr(a))}});const c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class d{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{d._collapse(e)})))}}class g extends d{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const f="[a-zA-Z]\\w*",p="[a-zA-Z_]\\w*",b="\\b\\d+(\\.\\d+)?",m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",E="\\b(0b[01]+)",_={begin:"\\\\[\\s\\S]",relevance:0},x={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},v={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},w={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},N=function(e,n,t={}){const a=i({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(w),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},y=N("//","$"),R=N("/\\*","\\*/"),O=N("#","$"),M={className:"number",begin:b,relevance:0},A={className:"number",begin:m,relevance:0},k={className:"number",begin:E,relevance:0},S={className:"number",begin:b+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},T={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]}]},C={className:"title",begin:f,relevance:0},I={className:"title",begin:p,relevance:0};var L=Object.freeze({__proto__:null,IDENT_RE:f,UNDERSCORE_IDENT_RE:p,NUMBER_RE:b,C_NUMBER_RE:m,BINARY_NUMBER_RE:E,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),i({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:_,APOS_STRING_MODE:x,QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:w,COMMENT:N,C_LINE_COMMENT_MODE:y,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:O,NUMBER_MODE:M,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:k,CSS_NUMBER_MODE:S,REGEXP_MODE:T,TITLE_MODE:C,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const j=["of","and","for","in","not","or","if","then","parent","list","value"];function D(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,r="";for(let s=0;s<e.length;s++){a+=1;const i=a;let o=h(e[s]);for(s>0&&(r+=n),r+="(";o.length>0;){const e=t.exec(o);if(null==e){r+=o;break}r+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+i):(r+=e[0],"("===e[0]&&a++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function r(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=i(e.classNameAliases||{}),function t(s,o){const l=s;if(s.compiled)return l;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let c=null;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){const t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){const a=n.split("|");t[a[0]]=[e,P(a[0],a[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=r),s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(l.endRe=n(s.end)),l.terminator_end=h(s.end)||"",s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),s.illegal&&(l.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return i(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:B(e)?i(e,{starts:e.starts?i(e.starts):null}):Object.isFrozen(e)?i(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,l)})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function B(e){return!!e&&(e.endsWithParent||B(e.starts))}function P(e,n){return n?Number(n):function(e){return j.includes(e.toLowerCase())}(e)?0:1}function H(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,s(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const U=s,$=i,{nodeStream:K,mergeStreams:z}=l,F=Symbol("nomatch");var G=function(e){const n=[],a=Object.create(null),s=Object.create(null),i=[];let o=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let d={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:g};function h(e){return d.noHighlightRe.test(e)}function f(e,n,t,a){const r={code:n,language:e};N("before:highlight",r);const s=r.result?r.result:p(r.language,r.code,t,a);return s.code=r.code,N("after:highlight",s),s}function p(e,n,t,s){const i=n;function l(e,n){const t=v.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=y.subLanguage?function(){if(""===M)return;let e=null;if("string"==typeof y.subLanguage){if(!a[y.subLanguage])return void O.addText(M);e=p(y.subLanguage,M,!0,R[y.subLanguage]),R[y.subLanguage]=e.top}else e=b(M,y.subLanguage.length?y.subLanguage:null);y.relevance>0&&(A+=e.relevance),O.addSublanguage(e.emitter,e.language)}():function(){if(!y.keywords)return void O.addText(M);let e=0;y.keywordPatternRe.lastIndex=0;let n=y.keywordPatternRe.exec(M),t="";for(;n;){t+=M.substring(e,n.index);const a=l(y,n);if(a){const[e,r]=a;O.addText(t),t="",A+=r;const s=v.classNameAliases[e]||e;O.addKeyword(n[0],s)}else t+=n[0];e=y.keywordPatternRe.lastIndex,n=y.keywordPatternRe.exec(M)}t+=M.substr(e),O.addText(t)}(),M=""}function g(e){return e.className&&O.openNode(v.classNameAliases[e.className]||e.className),y=Object.create(e,{parent:{value:y}}),y}function h(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function f(e){return 0===y.matcher.regexIndex?(M+=e[0],1):(T=!0,0)}function m(e){const n=e[0],t=i.substr(e.index),a=h(y,e,t);if(!a)return F;const r=y;r.skip?M+=n:(r.returnEnd||r.excludeEnd||(M+=n),u(),r.excludeEnd&&(M=n));do{y.className&&O.closeNode(),y.skip||y.subLanguage||(A+=y.relevance),y=y.parent}while(y!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),g(a.starts)),r.returnEnd?0:n.length}let E={};function _(n,a){const s=a&&a[0];if(M+=n,null==s)return u(),0;if("begin"===E.type&&"end"===a.type&&E.index===a.index&&""===s){if(M+=i.slice(a.index,a.index+1),!o){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=E.rule,n}return 1}if(E=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,a=new r(t),s=[t.__beforeBegin,t["on:begin"]];for(const t of s)if(t&&(t(e,a),a.ignore))return f(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?M+=n:(t.excludeBegin&&(M+=n),u(),t.returnBegin||t.excludeBegin||(M=n)),g(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(y.className||"<unnamed>")+'"');throw e.mode=y,e}if("end"===a.type){const e=m(a);if(e!==F)return e}if("illegal"===a.type&&""===s)return 1;if(S>1e5&&S>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return M+=s,s.length}const v=x(e);if(!v)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const w=D(v);let N="",y=s||w;const R={},O=new d.__emitter(d);!function(){const e=[];for(let n=y;n!==v;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>O.openNode(e)))}();let M="",A=0,k=0,S=0,T=!1;try{for(y.matcher.considerAll();;){S++,T?T=!1:y.matcher.considerAll(),y.matcher.lastIndex=k;const e=y.matcher.exec(i);if(!e)break;const n=_(i.substring(k,e.index),e);k=e.index+n}return _(i.substr(k)),O.closeAllNodes(),O.finalize(),N=O.toHTML(),{relevance:A,value:N,language:e,illegal:!1,emitter:O,top:y}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:i.slice(k-100,k+100),mode:n.mode},sofar:N,relevance:0,value:U(i),emitter:O};if(o)return{illegal:!1,relevance:0,value:U(i),emitter:O,language:e,top:y,errorRaised:n};throw n}}function b(e,n){n=n||d.languages||Object.keys(a);const t=function(e){const n={relevance:0,emitter:new d.__emitter(d),value:U(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),r=n.filter(x).filter(w).map((n=>p(n,e,!1)));r.unshift(t);const s=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(x(e.language).supersetOf===n.language)return 1;if(x(n.language).supersetOf===e.language)return-1}return 0})),[i,o]=s,l=i;return l.second_best=o,l}function m(e){return d.tabReplace||d.useBR?e.replace(l,(e=>"\n"===e?d.useBR?"<br>":e:d.tabReplace?e.replace(/\t/g,d.tabReplace):e)):e}function E(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n);if(t){const n=x(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||x(e)))}(e);if(h(t))return;N("before:highlightBlock",{block:e,language:t}),d.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,r=t?f(t,a,!0):b(a),i=K(n);if(i.length){const e=document.createElement("div");e.innerHTML=r.value,r.value=z(i,K(e),a)}r.value=m(r.value),N("after:highlightBlock",{block:e,result:r}),e.innerHTML=r.value,e.className=function(e,n,t){const a=n?s[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),e.includes(a)||r.push(a),r.join(" ").trim()}(e.className,t,r.language),e.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const _=()=>{if(_.called)return;_.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,E)};function x(e){return e=(e||"").toLowerCase(),a[e]||a[s[e]]}function v(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{s[e]=n}))}function w(e){const n=x(e);return n&&!n.disableAutodetect}function N(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:f,highlightAuto:b,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),m(e)},highlightBlock:E,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),d=$(d,e)},initHighlighting:_,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",_,!1)},registerLanguage:function(n,t){let r=null;try{r=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw e;console.error(e),r=u}r.name||(r.name=n),a[n]=r,r.rawDefinition=t.bind(null,e),r.aliases&&v(r.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:x,registerAliases:v,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=x(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:w,inherit:$,addPlugin:function(e){i.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.4.0";for(const e in L)"object"==typeof L[e]&&t(L[e]);return Object.assign(e,L),e}({});e.exports=G},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function s(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const o=n,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:r.join(" ")},u="\\.([0-9](_?[0-9])*)",d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},p={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},b={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},m={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},E=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,b,g,e.REGEXP_MODE];h.contains=E.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(E)});const _=[].concat(m,h.contains),x=_.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(_)}]),v={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:x};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:x},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,b,m,g,{begin:i(/[{,\n]\s*/,s(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,o+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:o+s("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[m,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:x}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:o}),v],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[v,e.inherit(e.TITLE_MODE,{begin:o})]},{variants:[{begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:o}),"self",v]},{begin:"(get|set)\\s+(?="+o+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:o}),{begin:/\(\)/},v]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var r=document.createTextNode(t),s=document.createElement("br");n.appendChild(r),e.text.length-1>a&&n.appendChild(s)})):n.textContent=e.text,{tag:n}};var a=t(802),r=t.n(a),s=t(344),i=t.n(s);r().registerLanguage("javascript",i());const o=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),a=n({elem:"pre",class:"pre"}),s=r().highlight("javascript",e).value;return a.tag.innerHTML=s,t.tag.appendChild(a.tag),{Code:t}};var l=function(e,t,a){var r=n({elem:"div",class:"page-nav__item fade-in"}),s=""!==t?t:"sometime later!",i=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:s});return"top"===t?i.tag.href="../../":"one"===a?i.tag.href="../":t&&(i.tag.href="../".concat(t,"/")),r.tag.appendChild(i.tag),r.tag};!function(t,a,r){var s={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},i=s.root,o=s.WholeFrag,l=s.Wrapper;l.tag.className="wrapper wrapper_layout_sub";var c=function(e){var t=n({elem:"header",class:"header fade-in"}),a=n({elem:"h1",class:"logo"}),r=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return r.tag.href="consonant"===e?"../../../":"../../",a.tag.appendChild(r.tag),t.tag.appendChild(a.tag),function(){return t.tag}}(r);o().appendChild(c()),o().appendChild(t(a));var u=function(){var e=n({elem:"footer",class:"footer fade-in"}),t=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return e.tag.appendChild(t.tag),function(){return e.tag}}();o().appendChild(u()),l.tag.appendChild(o()),i.appendChild(l.tag)}((function(){var t,a,r,s,i,c=e(),u=(t={role:"explain",element:"h1",title:"Japanese characters",text:"Japanese has three kinds of characters."},a=e(),r=n({elem:"div",class:t.role}),s=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),i=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text}),a().appendChild(s.tag),a().appendChild(i.tag),r.tag.appendChild(a()),function(){return r.tag});c().appendChild(u());var d=o("const JapaneseCharacters = [\n  { Hiragana: 'ひらがな' },\n  { Katakana: 'カタカナ' },\n  { Kanji: '漢字' },\n];").Code;c().appendChild(d.tag);var g=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Japanese sounds are expressed by the Roman alphabet."});c().appendChild(g.tag);var h,f,p,b,m,E=o("const SoundCharacter = [\n  { Rōmaji: 'ローマ字' }\n];").Code;return c().appendChild(E.tag),c().appendChild((h="preparation",f="vowels",(m=n({elem:"div",class:"page-nav fade-in"})).tag.appendChild(l("pre",h,p)),m.tag.appendChild(l("next",f,b)),m.tag)),c()}))})()})();