(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function s(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:i,inherit:o,nodeStream:function(e){const n=[];return function e(t,a){for(let r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),s(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n},mergeStreams:function(e,n,t){let a=0,r="";const o=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){r+="<"+s(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+i(e.value)+'"'})).join("")+">"}function u(e){r+="</"+s(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){let n=l();if(r+=i(t.substring(a,n[0].offset)),a=n[0].offset,n===e){o.reverse().forEach(u);do{g(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===a);o.reverse().forEach(c)}else"start"===n[0].event?o.push(n[0].node):o.pop(),g(n.splice(0,1)[0])}return r+i(t.substr(a))}});const c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class g{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{g._collapse(e)})))}}class d extends g{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const f="[a-zA-Z]\\w*",p="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",b="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",y={begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y]},w={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y]},_={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},x=function(e,n,t={}){const a=o({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(_),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},N=x("//","$"),R=x("/\\*","\\*/"),O=x("#","$"),A={className:"number",begin:m,relevance:0},k={className:"number",begin:b,relevance:0},S={className:"number",begin:v,relevance:0},C={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},M={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,contains:[y]}]}]},T={className:"title",begin:f,relevance:0},I={className:"title",begin:p,relevance:0};var j=Object.freeze({__proto__:null,IDENT_RE:f,UNDERSCORE_IDENT_RE:p,NUMBER_RE:m,C_NUMBER_RE:b,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),o({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:y,APOS_STRING_MODE:E,QUOTE_STRING_MODE:w,PHRASAL_WORDS_MODE:_,COMMENT:x,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:O,NUMBER_MODE:A,C_NUMBER_MODE:k,BINARY_NUMBER_MODE:S,CSS_NUMBER_MODE:C,REGEXP_MODE:M,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function D(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,r="";for(let i=0;i<e.length;i++){a+=1;const o=a;let s=h(e[i]);for(i>0&&(r+=n),r+="(";s.length>0;){const e=t.exec(s);if(null==e){r+=s;break}r+=s.substring(0,e.index),s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+o):(r+=e[0],"("===e[0]&&a++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function r(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=o(e.classNameAliases||{}),function t(i,s){const l=i;if(i.compiled)return l;i.compiled=!0,i.__beforeBegin=null,i.keywords=i.keywords||i.beginKeywords;let c=null;if("object"==typeof i.keywords&&(c=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=function(e,n){const t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){const a=n.split("|");t[a[0]]=[e,P(a[0],a[1])]}))}}(i.keywords,e.case_insensitive)),i.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(i.lexemes||c||/\w+/,!0),s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",i.__beforeBegin=r),i.begin||(i.begin=/\B|\b/),l.beginRe=n(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(l.endRe=n(i.end)),l.terminator_end=h(i.end)||"",i.endsWithParent&&s.terminator_end&&(l.terminator_end+=(i.end?"|":"")+s.terminator_end)),i.illegal&&(l.illegalRe=n(i.illegal)),void 0===i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return o(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:B(e)?o(e,{starts:e.starts?o(e.starts):null}):Object.isFrozen(e)?o(e):e}("self"===e?i:e)}))),i.contains.forEach((function(e){t(e,l)})),i.starts&&t(i.starts,s),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function B(e){return!!e&&(e.endsWithParent||B(e.starts))}function P(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function H(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,i(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const U=i,$=o,{nodeStream:z,mergeStreams:F}=l,K=Symbol("nomatch");var G=function(e){const n=[],a=Object.create(null),i=Object.create(null),o=[];let s=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return g.noHighlightRe.test(e)}function f(e,n,t,a){const r={code:n,language:e};x("before:highlight",r);const i=r.result?r.result:p(r.language,r.code,t,a);return i.code=r.code,x("after:highlight",i),i}function p(e,n,t,i){const o=n;function l(e,n){const t=w.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=N.subLanguage?function(){if(""===A)return;let e=null;if("string"==typeof N.subLanguage){if(!a[N.subLanguage])return void O.addText(A);e=p(N.subLanguage,A,!0,R[N.subLanguage]),R[N.subLanguage]=e.top}else e=m(A,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(k+=e.relevance),O.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void O.addText(A);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(A),t="";for(;n;){t+=A.substring(e,n.index);const a=l(N,n);if(a){const[e,r]=a;O.addText(t),t="",k+=r;const i=w.classNameAliases[e]||e;O.addKeyword(n[0],i)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(A)}t+=A.substr(e),O.addText(t)}(),A=""}function d(e){return e.className&&O.openNode(w.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function f(e){return 0===N.matcher.regexIndex?(A+=e[0],1):(M=!0,0)}function b(e){const n=e[0],t=o.substr(e.index),a=h(N,e,t);if(!a)return K;const r=N;r.skip?A+=n:(r.returnEnd||r.excludeEnd||(A+=n),u(),r.excludeEnd&&(A=n));do{N.className&&O.closeNode(),N.skip||N.subLanguage||(k+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),d(a.starts)),r.returnEnd?0:n.length}let v={};function y(n,a){const i=a&&a[0];if(A+=n,null==i)return u(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===i){if(A+=o.slice(a.index,a.index+1),!s){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,a=new r(t),i=[t.__beforeBegin,t["on:begin"]];for(const t of i)if(t&&(t(e,a),a.ignore))return f(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?A+=n:(t.excludeBegin&&(A+=n),u(),t.returnBegin||t.excludeBegin||(A=n)),d(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+i+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){const e=b(a);if(e!==K)return e}if("illegal"===a.type&&""===i)return 1;if(C>1e5&&C>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return A+=i,i.length}const w=E(e);if(!w)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const _=D(w);let x="",N=i||_;const R={},O=new g.__emitter(g);!function(){const e=[];for(let n=N;n!==w;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>O.openNode(e)))}();let A="",k=0,S=0,C=0,M=!1;try{for(N.matcher.considerAll();;){C++,M?M=!1:N.matcher.considerAll(),N.matcher.lastIndex=S;const e=N.matcher.exec(o);if(!e)break;const n=y(o.substring(S,e.index),e);S=e.index+n}return y(o.substr(S)),O.closeAllNodes(),O.finalize(),x=O.toHTML(),{relevance:k,value:x,language:e,illegal:!1,emitter:O,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:o.slice(S-100,S+100),mode:n.mode},sofar:x,relevance:0,value:U(o),emitter:O};if(s)return{illegal:!1,relevance:0,value:U(o),emitter:O,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||g.languages||Object.keys(a);const t=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:U(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),r=n.filter(E).filter(_).map((n=>p(n,e,!1)));r.unshift(t);const i=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(E(e.language).supersetOf===n.language)return 1;if(E(n.language).supersetOf===e.language)return-1}return 0})),[o,s]=i,l=o;return l.second_best=s,l}function b(e){return g.tabReplace||g.useBR?e.replace(l,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):e}function v(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){const n=E(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||E(e)))}(e);if(h(t))return;x("before:highlightBlock",{block:e,language:t}),g.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,r=t?f(t,a,!0):m(a),o=z(n);if(o.length){const e=document.createElement("div");e.innerHTML=r.value,r.value=F(o,z(e),a)}r.value=b(r.value),x("after:highlightBlock",{block:e,result:r}),e.innerHTML=r.value,e.className=function(e,n,t){const a=n?i[n]:t,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),e.includes(a)||r.push(a),r.join(" ").trim()}(e.className,t,r.language),e.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const y=()=>{if(y.called)return;y.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,v)};function E(e){return e=(e||"").toLowerCase(),a[e]||a[i[e]]}function w(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e]=n}))}function _(e){const n=E(e);return n&&!n.disableAutodetect}function x(e,n){const t=e;o.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:f,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=$(g,e)},initHighlighting:y,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",y,!1)},registerLanguage:function(n,t){let r=null;try{r=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw e;console.error(e),r=u}r.name||(r.name=n),a[n]=r,r.rawDefinition=t.bind(null,e),r.aliases&&w(r.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:E,registerAliases:w,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=E(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:_,inherit:$,addPlugin:function(e){o.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.4.0";for(const e in j)"object"==typeof j[e]&&t(j[e]);return Object.assign(e,j),e}({});e.exports=G},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function i(e){return o("(?=",e,")")}function o(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const s=n,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:r.join(" ")},u="\\.([0-9](_?[0-9])*)",g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},f={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},p={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},b={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,m,d,e.REGEXP_MODE];h.contains=v.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(v)});const y=[].concat(b,h.contains),E=y.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(y)}]),w={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:E};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:E},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,p,m,b,d,{begin:o(/[{,\n]\s*/,i(o(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,s+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:s+i("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:E}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:s}),w],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[w,e.inherit(e.TITLE_MODE,{begin:s})]},{variants:[{begin:"\\."+s},{begin:"\\$"+s}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:s}),"self",w]},{begin:"(get|set)\\s+(?="+s+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:s}),{begin:/\(\)/},w]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(t,a){var r=document.createTextNode(t),i=document.createElement("br");n.appendChild(r),e.text.length-1>a&&n.appendChild(i)})):n.textContent=e.text,{tag:n}};var a={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels"]}]};function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(e,t){var a=n({elem:"li",class:"footer-link__item"}),r="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,i=n({elem:"a",class:"footer-link__link",text:r});return"consonant"===t?"vowels"!==e&&e.endsWith("vowels")?i.tag.href="../../consonants/".concat(e):i.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?i.tag.href="../consonants/".concat(e):i.tag.href="../".concat(e),a.tag.appendChild(i.tag),a.tag};var o=t(802),s=t.n(o),l=t(344),c=t.n(l);s().registerLanguage("javascript",c());var u=function(e,t,a){var r=n({elem:"div",class:"page-nav__item fade-in"}),i=""!==t?t:"sometime later!",o=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:i});return"top"===t?o.tag.href="../../":"one"===a?o.tag.href="../":t&&(o.tag.href="../".concat(t,"/")),r.tag.appendChild(o.tag),r.tag};var g;function d(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}!function(t,o,s){var l={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},c=l.root,u=l.WholeFrag,g=l.Wrapper;g.tag.className="wrapper wrapper_layout_sub";var d=function(e){var t=n({elem:"header",class:"header fade-in"}),a=n({elem:"h1",class:"logo"}),r=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return r.tag.href="consonant"===e?"../../../":"../../",a.tag.appendChild(r.tag),t.tag.appendChild(a.tag),function(){return t.tag}}(s);u().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(t(o)),u().appendChild(h.tag);var f=function(t){var o=n({elem:"footer",class:"footer fade-in"}),s=n({elem:"nav",class:"footer-nav"}),l=n({elem:"ul",class:"footer-link"}),c=e();a.intro.map((function(e){"object"===r(e)?(c().appendChild(i(Object.keys(e).toString(),t)),e.consonants.map((function(e){return c().appendChild(i(e,t))}))):c().appendChild(i(e,t))})),l.tag.appendChild(c()),s.tag.appendChild(l.tag),o.tag.appendChild(s.tag);var u=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});u.tag.href="https://www14.big.or.jp/~amiami/happy/",o.tag.appendChild(u.tag);var g=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return o.tag.appendChild(g.tag),function(){return o.tag}}(s);u().appendChild(f()),g.tag.appendChild(u()),c.appendChild(g.tag)}((function(){var t,a,r,i,o,l=e(),c=n({elem:"section",class:"section"}),g=e(),d=(t={role:"explain",element:"h1",title:"Fifty Sounds Table",text:['These letters we learnt are called "Fifty Sounds Table(Gojuon)".',"Correctly, the number of letters are not fifty.","It comes from the traditional one.","","One of example code might be like below.","How do you code?"]},a=e(),r=n({elem:"div",class:t.role}),i=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),o=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text}),a().appendChild(i.tag),a().appendChild(o.tag),r.tag.appendChild(a()),function(){return r.tag});g().appendChild(d());var h,f,p,m,b=(h="  // Those are called as Gojuon/ごじゅうおん/五十音\n  // gojuon arrays in Hepburn Romaji\n  const vowelsArray = [...'aiueo'];\n  const consonants = [...'kstnhmyrw'];\n  const hepburn = [...'hcsf'];\n\n  const gojuonHepburn = [vowelsArray].concat(\n    consonants\n      .map((consonant) => {\n        if (consonant === 'y') {\n          return vowelsArray\n            .filter((_, i) => i % 2 === 0)\n            .map((letter) => consonant + letter);\n        }\n\n        if (consonant === 'w') {\n          return vowelsArray\n            .filter((_, i) => i === 0 || i === 4)\n            .map((letter) => consonant + letter);\n        }\n\n        return vowelsArray.map((letter) => {\n          if (consonant === 's' && letter === 'i')\n            return consonant + hepburn[0] + letter;\n          if (consonant === 't') {\n            if (letter === 'i') return hepburn[1] + hepburn[0] + letter;\n            if (letter === 'u') return consonant + hepburn[2] + letter;\n          }\n          if (consonant === 'h' && letter === 'u') return hepburn[3] + letter;\n          if (consonant === 'y' && (letter === 'i' || letter === 'e'))\n            return '  ';\n          if (consonant === 'w' && letter !== 'a' && letter !== 'o') return '  ';\n\n          return consonant + letter;\n        });\n      })\n      .concat([['n']])\n  );\n\n  // Hiragana array\n  const hiragana = [];\n  for (let i = 12354; i < 12436; i++) {\n    if (\n      (i <= 12362 && i % 2 === 0) ||\n      (i > 12362 && i <= 12385 && i % 2 !== 0) ||\n      (i > 12386 && i <= 12392 && i % 2 === 0) ||\n      (i > 12393 && i <= 12398) ||\n      (i > 12397 && i <= 12412 && i % 3 === 0) ||\n      (i > 12413 && i <= 12418) ||\n      (i > 12418 && i <= 12424 && i % 2 === 0) ||\n      (i > 12424 && i <= 12429) ||\n      i === 12431 ||\n      (i > 12433 && i <= 12435)\n    )\n      hiragana.push(String.fromCharCode(i));\n  }\n\n  // The list by Hepburn Romaji and Hiragana\n  const combine = gojuonHepburn.map((row, i) => {\n    return Object.assign(\n      {},\n      ...row.map((letter, pos) => {\n        const count = () => {\n          const common = i * 5 - 5 + 3;\n          if (letter[0] === 'r') return common;\n          if (letter[0] === 'w') return common;\n          if (gojuonHepburn.length - 1 === i) return common - 5 + 2;\n\n          return i * 5;\n        };\n        const position = count() + pos;\n\n        return { [letter]: hiragana[position] };\n      })\n    );\n  });\n\n  // The result\n  // [\n  //   { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' },\n  //   { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' },\n  //   { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' },\n  //   { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' },\n  //   { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' },\n  //   { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' },\n  //   { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' },\n  //   { ya: 'や', yu: 'ゆ', yo: 'よ' },\n  //   { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' },\n  //   { wa: 'わ', o: 'を' },\n  //   { n: 'ん' },\n  // ];",f=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),p=n({elem:"pre",class:"pre"}),m=s().highlight("javascript",h).value,p.tag.innerHTML=m,f.tag.appendChild(p.tag),{Code:f}).Code;g().appendChild(b.tag),c.tag.appendChild(g()),l().appendChild(c.tag);var v,y,E,w,_,x=n({elem:"section",class:"section"});return x.tag.appendChild((v="n",y="",(_=n({elem:"div",class:"page-nav fade-in"})).tag.appendChild(u("pre",v,E)),_.tag.appendChild(u("next",y,w)),_.tag)),l().appendChild(x.tag),l()}));var f=d("kstcnhfmyrwgzjdbp"),p=d("aiueo"),m=f.map((function(e){return p.map((function(n){return e+n}))}));(g=console).log.apply(g,d(m))})()})();