(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function o(e){return e.nodeName.toLowerCase()}var l=Object.freeze({__proto__:null,escapeHTML:s,inherit:r,nodeStream:function(e){const n=[];return function e(t,a){for(let i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=e(i,a),o(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n},mergeStreams:function(e,n,t){let a=0,i="";const r=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){i+="<"+o(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+s(e.value)+'"'})).join("")+">"}function u(e){i+="</"+o(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}for(;e.length||n.length;){let n=l();if(i+=s(t.substring(a,n[0].offset)),a=n[0].offset,n===e){r.reverse().forEach(u);do{g(n.splice(0,1)[0]),n=l()}while(n===e&&n.length&&n[0].offset===a);r.reverse().forEach(c)}else"start"===n[0].event?r.push(n[0].node):r.pop(),g(n.splice(0,1)[0])}return i+s(t.substr(a))}});const c=e=>!!e.kind;class u{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class g{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{g._collapse(e)})))}}class d extends g{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const p="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",b="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",w={begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[w]},_={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[w]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},y=function(e,n,t={}){const a=r({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(x),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},N=y("//","$"),R=y("/\\*","\\*/"),k=y("#","$"),C={className:"number",begin:m,relevance:0},O={className:"number",begin:b,relevance:0},A={className:"number",begin:v,relevance:0},S={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},M={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,contains:[w]}]}]},j={className:"title",begin:p,relevance:0},T={className:"title",begin:f,relevance:0};var I=Object.freeze({__proto__:null,IDENT_RE:p,UNDERSCORE_IDENT_RE:f,NUMBER_RE:m,C_NUMBER_RE:b,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:w,APOS_STRING_MODE:E,QUOTE_STRING_MODE:_,PHRASAL_WORDS_MODE:x,COMMENT:y,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:k,NUMBER_MODE:C,C_NUMBER_MODE:O,BINARY_NUMBER_MODE:A,CSS_NUMBER_MODE:S,REGEXP_MODE:M,TITLE_MODE:j,UNDERSCORE_TITLE_MODE:T,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function B(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,i="";for(let s=0;s<e.length;s++){a+=1;const r=a;let o=h(e[s]);for(s>0&&(i+=n),i+="(";o.length>0;){const e=t.exec(o);if(null==e){i+=o;break}i+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+r):(i+=e[0],"("===e[0]&&a++)}i+=")"}return i}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function i(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=r(e.classNameAliases||{}),function t(s,o){const l=s;if(s.compiled)return l;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let c=null;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){const t={};return"string"==typeof e?a("keyword",e):Object.keys(e).forEach((function(n){a(n,e[n])})),t;function a(e,a){n&&(a=a.toLowerCase()),a.split(" ").forEach((function(n){const a=n.split("|");t[a[0]]=[e,H(a[0],a[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=i),s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(l.endRe=n(s.end)),l.terminator_end=h(s.end)||"",s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),s.illegal&&(l.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:D(e)?r(e,{starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){t(e,l)})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function D(e){return!!e&&(e.endsWithParent||D(e.starts))}function H(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function P(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,s(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const K=s,$=r,{nodeStream:U,mergeStreams:z}=l,F=Symbol("nomatch");var G=function(e){const n=[],a=Object.create(null),s=Object.create(null),r=[];let o=!0;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return g.noHighlightRe.test(e)}function p(e,n,t,a){const i={code:n,language:e};y("before:highlight",i);const s=i.result?i.result:f(i.language,i.code,t,a);return s.code=i.code,y("after:highlight",s),s}function f(e,n,t,s){const r=n;function l(e,n){const t=_.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function u(){null!=N.subLanguage?function(){if(""===C)return;let e=null;if("string"==typeof N.subLanguage){if(!a[N.subLanguage])return void k.addText(C);e=f(N.subLanguage,C,!0,R[N.subLanguage]),R[N.subLanguage]=e.top}else e=m(C,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(O+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void k.addText(C);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(C),t="";for(;n;){t+=C.substring(e,n.index);const a=l(N,n);if(a){const[e,i]=a;k.addText(t),t="",O+=i;const s=_.classNameAliases[e]||e;k.addKeyword(n[0],s)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(C)}t+=C.substr(e),k.addText(t)}(),C=""}function d(e){return e.className&&k.openNode(_.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new i(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function p(e){return 0===N.matcher.regexIndex?(C+=e[0],1):(M=!0,0)}function b(e){const n=e[0],t=r.substr(e.index),a=h(N,e,t);if(!a)return F;const i=N;i.skip?C+=n:(i.returnEnd||i.excludeEnd||(C+=n),u(),i.excludeEnd&&(C=n));do{N.className&&k.closeNode(),N.skip||N.subLanguage||(O+=N.relevance),N=N.parent}while(N!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),d(a.starts)),i.returnEnd?0:n.length}let v={};function w(n,a){const s=a&&a[0];if(C+=n,null==s)return u(),0;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===s){if(C+=r.slice(a.index,a.index+1),!o){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=v.rule,n}return 1}if(v=a,"begin"===a.type)return function(e){const n=e[0],t=e.rule,a=new i(t),s=[t.__beforeBegin,t["on:begin"]];for(const t of s)if(t&&(t(e,a),a.ignore))return p(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?C+=n:(t.excludeBegin&&(C+=n),u(),t.returnBegin||t.excludeBegin||(C=n)),d(t),t.returnBegin?0:n.length}(a);if("illegal"===a.type&&!t){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===a.type){const e=b(a);if(e!==F)return e}if("illegal"===a.type&&""===s)return 1;if(S>1e5&&S>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return C+=s,s.length}const _=E(e);if(!_)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=B(_);let y="",N=s||x;const R={},k=new g.__emitter(g);!function(){const e=[];for(let n=N;n!==_;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>k.openNode(e)))}();let C="",O=0,A=0,S=0,M=!1;try{for(N.matcher.considerAll();;){S++,M?M=!1:N.matcher.considerAll(),N.matcher.lastIndex=A;const e=N.matcher.exec(r);if(!e)break;const n=w(r.substring(A,e.index),e);A=e.index+n}return w(r.substr(A)),k.closeAllNodes(),k.finalize(),y=k.toHTML(),{relevance:O,value:y,language:e,illegal:!1,emitter:k,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:r.slice(A-100,A+100),mode:n.mode},sofar:y,relevance:0,value:K(r),emitter:k};if(o)return{illegal:!1,relevance:0,value:K(r),emitter:k,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||g.languages||Object.keys(a);const t=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:K(e),illegal:!1,top:u};return n.emitter.addText(e),n}(e),i=n.filter(E).filter(x).map((n=>f(n,e,!1)));i.unshift(t);const s=i.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(E(e.language).supersetOf===n.language)return 1;if(E(n.language).supersetOf===e.language)return-1}return 0})),[r,o]=s,l=r;return l.second_best=o,l}function b(e){return g.tabReplace||g.useBR?e.replace(l,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):e}function v(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){const n=E(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||E(e)))}(e);if(h(t))return;y("before:highlightBlock",{block:e,language:t}),g.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const a=n.textContent,i=t?p(t,a,!0):m(a),r=U(n);if(r.length){const e=document.createElement("div");e.innerHTML=i.value,i.value=z(r,U(e),a)}i.value=b(i.value),y("after:highlightBlock",{block:e,result:i}),e.innerHTML=i.value,e.className=function(e,n,t){const a=n?s[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),e.includes(a)||i.push(a),i.join(" ").trim()}(e.className,t,i.language),e.result={language:i.language,re:i.relevance,relavance:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance,relavance:i.second_best.relevance})}const w=()=>{if(w.called)return;w.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,v)};function E(e){return e=(e||"").toLowerCase(),a[e]||a[s[e]]}function _(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{s[e]=n}))}function x(e){const n=E(e);return n&&!n.disableAutodetect}function y(e,n){const t=e;r.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:p,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),b(e)},highlightBlock:v,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=$(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",w,!1)},registerLanguage:function(n,t){let i=null;try{i=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw e;console.error(e),i=u}i.name||(i.name=n),a[n]=i,i.rawDefinition=t.bind(null,e),i.aliases&&_(i.aliases,{languageName:n})},listLanguages:function(){return Object.keys(a)},getLanguage:E,registerAliases:_,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=E(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:x,inherit:$,addPlugin:function(e){r.push(e)},vuePlugin:P(e).VuePlugin}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.4.0";for(const e in I)"object"==typeof I[e]&&t(I[e]);return Object.assign(e,I),e}({});e.exports=G},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],i=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function s(e){return r("(?=",e,")")}function r(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const o=n,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:a.join(" "),built_in:i.join(" ")},u="\\.([0-9](_?[0-9])*)",g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${g})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${g})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},b={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,d,e.REGEXP_MODE];h.contains=v.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(v)});const w=[].concat(b,h.contains),E=w.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(w)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:E};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:E},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,b,d,{begin:r(/[{,\n]\s*/,s(r(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,o+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:o+s("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:E}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:o}),_],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[_,e.inherit(e.TITLE_MODE,{begin:o})]},{variants:[{begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:o}),"self",_]},{begin:"(get|set)\\s+(?="+o+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:o}),{begin:/\(\)/},_]},{begin:/\$[(.]/}]}}}},n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/jpjs/",(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return e.class&&(n.className=e.class),e.id&&(n.id=e.id),Array.isArray(e.text)?e.text.forEach((function(t,a){var i=document.createTextNode(t),s=document.createElement("br");n.appendChild(i),e.text.length-1>a&&n.appendChild(s)})):n.textContent=e.text,{tag:n}};window.onload=function(){document.getElementById("loading").remove("loading")};var a={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels","nvowels","hvowels","mvowels","yvowels"]}]};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e,t){var a=n({elem:"li",class:"footer-link__item"}),i="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,s=n({elem:"a",class:"footer-link__link",text:i});return"consonant"===t?"vowels"!==e&&e.endsWith("vowels")?s.tag.href="../../consonants/".concat(e):s.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?s.tag.href="../consonants/".concat(e):s.tag.href="../".concat(e),a.tag.appendChild(s.tag),a.tag};var r=t(802),o=t.n(r),l=t(344),c=t.n(l);o().registerLanguage("javascript",c());const u=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),a=n({elem:"pre",class:"pre"}),i=o().highlight("javascript",e).value;return a.tag.innerHTML=i,t.tag.appendChild(a.tag),{Code:t}};var g=function(e,t,a){var i=n({elem:"div",class:"page-nav__item fade-in"}),s=""!==t?t:"sometime later!",r=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:s});return"top"===t?r.tag.href="../../":"one"===a?r.tag.href="../":t&&(r.tag.href="../".concat(t,"/")),i.tag.appendChild(r.tag),i.tag};t.p,t.p,t.p,t.p,t.p,function(t,r,o){var l=function(){var t=document.getElementById("root"),a=e(),i=n({elem:"div",id:"loading"}),s=n({elem:"div",class:"sk-pulse"});return i.tag.appendChild(s.tag),{root:t,WholeFrag:a,Spinner:i,Wrapper:n({elem:"div",class:"wrapper",id:"wrap"}),CenterFrag:e()}}(),c=l.root,u=l.WholeFrag,g=l.Wrapper;g.tag.className="wrapper wrapper_layout_sub";var d=function(e){var t=n({elem:"header",class:"header fade-in"}),a=n({elem:"h1",class:"logo"}),i=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return i.tag.href="consonant"===e?"../../../":"../../",a.tag.appendChild(i.tag),t.tag.appendChild(a.tag),function(){return t.tag}}(o);u().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(t(r)),u().appendChild(h.tag);var p=function(t){var r=n({elem:"footer",class:"footer fade-in"}),o=n({elem:"nav",class:"footer-nav"}),l=n({elem:"ul",class:"footer-link"}),c=e();a.intro.map((function(e){"object"===i(e)?(c().appendChild(s(Object.keys(e).toString(),t)),e.consonants.map((function(e){return c().appendChild(s(e,t))}))):c().appendChild(s(e,t))})),l.tag.appendChild(c()),o.tag.appendChild(l.tag),r.tag.appendChild(o.tag);var u=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});u.tag.href="https://www14.big.or.jp/~amiami/happy/",r.tag.appendChild(u.tag);var g=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return r.tag.appendChild(g.tag),function(){return r.tag}}(o);u().appendChild(p()),g.tag.appendChild(u()),c.appendChild(g.tag)}((function(){var t,a,i,s,r,o=n({elem:"section",class:"section"}),l=e(),c=(t={role:"explain",element:"h1",title:"Vowels",text:"Japanese has 5 vowels."},a=e(),i=n({elem:"div",class:t.role}),s=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),r=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text}),a().appendChild(s.tag),a().appendChild(r.tag),i.tag.appendChild(a()),function(){return i.tag});l().appendChild(c());var d=u("const vowelsByRomaji = ['a', 'i', 'u', 'e', 'o'];").Code;l().appendChild(d.tag);var h=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"The sound is different from English."});l().appendChild(h.tag);var p=u("const vowelSounds = [\n    { a: { sound: 'ah' } },\n    { i: { sound: 'ee' } },\n    { u: { sound: 'oo' } },\n    { e: { sound: 'eh' } },\n    { o: { sound: 'oh' } },\n  ];").Code;l().appendChild(p.tag),l().appendChild(function(t){var a=n({elem:"div"}),i=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's hear the sound!"});a.tag.appendChild(i.tag);var s=n({elem:"div",class:"sound-block fade-in"}),r=e();return t.map((function(e){return a="n"!==(t=e)&&1===t.length?new Audio("../../assets/sounds/single/".concat(t,".wav")):new Audio("../../../assets/sounds/single/".concat(t,".wav")),(i=n({elem:"button",class:"sound-button",text:t})).tag.type="button",i.tag.addEventListener("click",(function(){a.currentTime=0,a.play()})),void r().appendChild(i.tag);var t,a,i})),s.tag.appendChild(r()),a.tag.appendChild(s.tag),a.tag}(["a","i","u","e","o"]));var f=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"The vowels spelt by hiragana and katakana."});l().appendChild(f.tag);var m=u("const vowelLetters = [\n    { a: { hiragana: 'あ', katakana: 'ア' } },\n    { i: { hiragana: 'い', katakana: 'イ' } },\n    { u: { hiragana: 'う', katakana: 'ウ' } },\n    { e: { hiragana: 'え', katakana: 'エ' } },\n    { o: { hiragana: 'お', katakana: 'オ' } },\n  ];").Code;l().appendChild(m.tag);var b=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's use vowels in practice!"});l().appendChild(b.tag);var v,w,E,_,x,y=u("// Base code\nconst vowels =\n  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };\n\nconst englishHiragana = (\n  english,\n  hiragana\n) =>\n  `${english} is ${hiragana} in Hiragana.`;\n\nconst hiraganaKanji = (\n  hiragana,\n  kanji\n) =>\n  `${hiragana} is ${kanji} in Kanji.`;\n\n\n// love・あい・愛\nconst love = vowels.a + vowels.i;\nconst loveHiragana = englishHiragana('Love', love);\nconst loveKanji = hiraganaKanji(love, '愛');\n\nconsole.log(loveHiragana);\n// Love is あい in Hiragana.\nconsole.log(loveKanji);\n// あい is 愛 in Kanji.\n\n\n// no・いいえ\nconst no = vowels.i.repeat(2) + vowels.e;\nconst noHiragana = englishHiragana('No', no);\n\nconsole.log(noHiragana);\n// No is いいえ in Hiragana.\n\n\n// up・うえ・上\nconst up = vowels.u + vowels.e;\nconst upHiragana = englishHiragana('Up', up);\nconst upKanji = hiraganaKanji(up, '上');\n\nconsole.log(upHiragana);\n// Up is うえ in Hiragana.\nconsole.log(upKanji);\n// うえ is 上 in Kanji.\n\n\n// blue・あお・青\nconst blue = vowels.a + vowels.o;\nconst blueHiragana = englishHiragana('Blue', blue);\nconst blueKanji = hiraganaKanji(blue, '青');\n\nconsole.log(blueHiragana);\n// Blue is あお in Hiragana.\nconsole.log(blueKanji);\n// あお is 青 in Kanji.\n\n\n// house・いえ・家\nconst house = vowels.i + vowels.e;\nconst houseHiragana = englishHiragana('House', house);\nconst houseKanji = hiraganaKanji(house, '家');\n\nconsole.log(houseHiragana);\n// House is いえ in Hiragana.\nconsole.log(houseKanji);\n// いえ is 家 in Kanji.").Code;return l().appendChild(y.tag),l().appendChild((v="characters",w="consonants",(x=n({elem:"div",class:"page-nav fade-in"})).tag.appendChild(g("pre",v,E)),"END"!==w&&x.tag.appendChild(g("next",w,_)),x.tag)),o.tag.appendChild(l()),o.tag}));var d={a:"あ",i:"い",u:"う",e:"え",o:"お"},h=function(e,n){return"".concat(e," is ").concat(n," in Hiragana.")},p=function(e,n){return"".concat(e," is ").concat(n," in Kanji.")},f=d.a+d.i,m=h("Love",f),b=p(f,"愛");console.log(m),console.log(b);var v=h("No",d.i.repeat(2)+d.e);console.log(v);var w=d.u+d.e,E=h("Up",w),_=p(w,"上");console.log(E),console.log(_);var x=d.a+d.o,y=h("Blue",x),N=p(x,"青");console.log(y),console.log(N);var R=d.i+d.e,k=h("House",R),C=p(R,"家");console.log(k),console.log(C)})()})();