(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var o=e[t];"object"!=typeof o||Object.isFrozen(o)||n(o)})),e}var t=n,o=n;t.default=o;class a{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function l(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function s(e){return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,escapeHTML:r,inherit:l,nodeStream:function(e){const n=[];return function e(t,o){for(let a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?o+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:o,node:a}),o=e(a,o),s(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:o,node:a}));return o}(e,0),n},mergeStreams:function(e,n,t){let o=0,a="";const l=[];function i(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){a+="<"+s(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function g(e){a+="</"+s(e)+">"}function u(e){("start"===e.event?c:g)(e.node)}for(;e.length||n.length;){let n=i();if(a+=r(t.substring(o,n[0].offset)),o=n[0].offset,n===e){l.reverse().forEach(g);do{u(n.splice(0,1)[0]),n=i()}while(n===e&&n.length&&n[0].offset===o);l.reverse().forEach(c)}else"start"===n[0].event?l.push(n[0].node):l.pop(),u(n.splice(0,1)[0])}return a+r(t.substr(o))}});const c=e=>!!e.kind;class g{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{u._collapse(e)})))}}class d extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new g(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const p="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",v="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",y={begin:"\\\\[\\s\\S]",relevance:0},w={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,t={}){const o=l({className:"comment",begin:e,end:n,contains:[]},t);return o.contains.push(x),o.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),o},N=_("//","$"),R=_("/\\*","\\*/"),k=_("#","$"),S={className:"number",begin:m,relevance:0},A={className:"number",begin:v,relevance:0},C={className:"number",begin:b,relevance:0},O={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},M={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,contains:[y]}]}]},T={className:"title",begin:p,relevance:0},I={className:"title",begin:f,relevance:0};var j=Object.freeze({__proto__:null,IDENT_RE:p,UNDERSCORE_IDENT_RE:f,NUMBER_RE:m,C_NUMBER_RE:v,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),l({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:y,APOS_STRING_MODE:w,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:x,COMMENT:_,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:k,NUMBER_MODE:S,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:C,CSS_NUMBER_MODE:O,REGEXP_MODE:M,TITLE_MODE:T,UNDERSCORE_TITLE_MODE:I,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function B(e){function n(n,t){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let o=0,a="";for(let r=0;r<e.length;r++){o+=1;const l=o;let s=h(e[r]);for(r>0&&(a+=n),a+="(";s.length>0;){const e=t.exec(s);if(null==e){a+=s;break}a+=s.substring(0,e.index),s=s.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+String(Number(e[1])+l):(a+=e[0],"("===e[0]&&o++)}a+=")"}return a}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),o=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,o)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}function a(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=l(e.classNameAliases||{}),function t(r,s){const i=r;if(r.compiled)return i;r.compiled=!0,r.__beforeBegin=null,r.keywords=r.keywords||r.beginKeywords;let c=null;if("object"==typeof r.keywords&&(c=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function(e,n){const t={};return"string"==typeof e?o("keyword",e):Object.keys(e).forEach((function(n){o(n,e[n])})),t;function o(e,o){n&&(o=o.toLowerCase()),o.split(" ").forEach((function(n){const o=n.split("|");t[o[0]]=[e,P(o[0],o[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return i.keywordPatternRe=n(r.lexemes||c||/\w+/,!0),s&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",r.__beforeBegin=a),r.begin||(r.begin=/\B|\b/),i.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(i.endRe=n(r.end)),i.terminator_end=h(r.end)||"",r.endsWithParent&&s.terminator_end&&(i.terminator_end+=(r.end?"|":"")+s.terminator_end)),r.illegal&&(i.illegalRe=n(r.illegal)),void 0===r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return l(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:D(e)?l(e,{starts:e.starts?l(e.starts):null}):Object.isFrozen(e)?l(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,i)})),r.starts&&t(r.starts,s),i.matcher=function(e){const n=new o;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(i),i}(e)}function D(e){return!!e&&(e.endsWithParent||D(e.starts))}function P(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function H(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const $=r,U=l,{nodeStream:K,mergeStreams:F}=i,G=Symbol("nomatch");var z=function(e){const n=[],o=Object.create(null),r=Object.create(null),l=[];let s=!0;const i=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let u={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return u.noHighlightRe.test(e)}function p(e,n,t,o){const a={code:n,language:e};_("before:highlight",a);const r=a.result?a.result:f(a.language,a.code,t,o);return r.code=a.code,_("after:highlight",r),r}function f(e,n,t,r){const l=n;function i(e,n){const t=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function g(){null!=N.subLanguage?function(){if(""===S)return;let e=null;if("string"==typeof N.subLanguage){if(!o[N.subLanguage])return void k.addText(S);e=f(N.subLanguage,S,!0,R[N.subLanguage]),R[N.subLanguage]=e.top}else e=m(S,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(A+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void k.addText(S);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(S),t="";for(;n;){t+=S.substring(e,n.index);const o=i(N,n);if(o){const[e,a]=o;k.addText(t),t="",A+=a;const r=E.classNameAliases[e]||e;k.addKeyword(n[0],r)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(S)}t+=S.substr(e),k.addText(t)}(),S=""}function d(e){return e.className&&k.openNode(E.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,t){let o=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(o){if(e["on:end"]){const t=new a(e);e["on:end"](n,t),t.ignore&&(o=!1)}if(o){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,t)}function p(e){return 0===N.matcher.regexIndex?(S+=e[0],1):(M=!0,0)}function v(e){const n=e[0],t=l.substr(e.index),o=h(N,e,t);if(!o)return G;const a=N;a.skip?S+=n:(a.returnEnd||a.excludeEnd||(S+=n),g(),a.excludeEnd&&(S=n));do{N.className&&k.closeNode(),N.skip||N.subLanguage||(A+=N.relevance),N=N.parent}while(N!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),d(o.starts)),a.returnEnd?0:n.length}let b={};function y(n,o){const r=o&&o[0];if(S+=n,null==r)return g(),0;if("begin"===b.type&&"end"===o.type&&b.index===o.index&&""===r){if(S+=l.slice(o.index,o.index+1),!s){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=b.rule,n}return 1}if(b=o,"begin"===o.type)return function(e){const n=e[0],t=e.rule,o=new a(t),r=[t.__beforeBegin,t["on:begin"]];for(const t of r)if(t&&(t(e,o),o.ignore))return p(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?S+=n:(t.excludeBegin&&(S+=n),g(),t.returnBegin||t.excludeBegin||(S=n)),d(t),t.returnBegin?0:n.length}(o);if("illegal"===o.type&&!t){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===o.type){const e=v(o);if(e!==G)return e}if("illegal"===o.type&&""===r)return 1;if(O>1e5&&O>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return S+=r,r.length}const E=w(e);if(!E)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=B(E);let _="",N=r||x;const R={},k=new u.__emitter(u);!function(){const e=[];for(let n=N;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>k.openNode(e)))}();let S="",A=0,C=0,O=0,M=!1;try{for(N.matcher.considerAll();;){O++,M?M=!1:N.matcher.considerAll(),N.matcher.lastIndex=C;const e=N.matcher.exec(l);if(!e)break;const n=y(l.substring(C,e.index),e);C=e.index+n}return y(l.substr(C)),k.closeAllNodes(),k.finalize(),_=k.toHTML(),{relevance:A,value:_,language:e,illegal:!1,emitter:k,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:l.slice(C-100,C+100),mode:n.mode},sofar:_,relevance:0,value:$(l),emitter:k};if(s)return{illegal:!1,relevance:0,value:$(l),emitter:k,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||u.languages||Object.keys(o);const t=function(e){const n={relevance:0,emitter:new u.__emitter(u),value:$(e),illegal:!1,top:g};return n.emitter.addText(e),n}(e),a=n.filter(w).filter(x).map((n=>f(n,e,!1)));a.unshift(t);const r=a.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(w(e.language).supersetOf===n.language)return 1;if(w(n.language).supersetOf===e.language)return-1}return 0})),[l,s]=r,i=l;return i.second_best=s,i}function v(e){return u.tabReplace||u.useBR?e.replace(i,(e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e)):e}function b(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=u.languageDetectRe.exec(n);if(t){const n=w(t[1]);return n||(console.warn(c.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||w(e)))}(e);if(h(t))return;_("before:highlightBlock",{block:e,language:t}),u.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const o=n.textContent,a=t?p(t,o,!0):m(o),l=K(n);if(l.length){const e=document.createElement("div");e.innerHTML=a.value,a.value=F(l,K(e),o)}a.value=v(a.value),_("after:highlightBlock",{block:e,result:a}),e.innerHTML=a.value,e.className=function(e,n,t){const o=n?r[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.includes(o)||a.push(o),a.join(" ").trim()}(e.className,t,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const y=()=>{if(y.called)return;y.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,b)};function w(e){return e=(e||"").toLowerCase(),o[e]||o[r[e]]}function E(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e]=n}))}function x(e){const n=w(e);return n&&!n.disableAutodetect}function _(e,n){const t=e;l.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:p,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),v(e)},highlightBlock:b,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),u=U(u,e)},initHighlighting:y,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",y,!1)},registerLanguage:function(n,t){let a=null;try{a=t(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw e;console.error(e),a=g}a.name||(a.name=n),o[n]=a,a.rawDefinition=t.bind(null,e),a.aliases&&E(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(o)},getLanguage:w,registerAliases:E,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=w(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:x,inherit:U,addPlugin:function(e){l.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.4.0";for(const e in j)"object"==typeof j[e]&&t(j[e]);return Object.assign(e,j),e}({});e.exports=z},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],o=["true","false","null","undefined","NaN","Infinity"],a=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function r(e){return l("(?=",e,")")}function l(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const s=n,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,o=e.input[t];"<"!==o?">"===o&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:t.join(" "),literal:o.join(" "),built_in:a.join(" ")},g="\\.([0-9](_?[0-9])*)",u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${u})((${g})|\\.)?|(${g}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${u})\\b((${g})\\b|\\.)?|(${g})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},v={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:s+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},b=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,d,e.REGEXP_MODE];h.contains=b.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(b)});const y=[].concat(v,h.contains),w=y.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(y)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:w};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,v,d,{begin:l(/[{,\n]\s*/,r(l(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,s+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:s+r("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[v,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:s}),E],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[E,e.inherit(e.TITLE_MODE,{begin:s})]},{variants:[{begin:"\\."+s},{begin:"\\$"+s}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:s}),"self",E]},{begin:"(get|set)\\s+(?="+s+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:s}),{begin:/\(\)/},E]},{begin:/\$[(.]/}]}}}},n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/jpjs/",(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,n.id=e.id,Array.isArray(e.text)?e.text.forEach((function(t,o){var a=document.createTextNode(t),r=document.createElement("br");n.appendChild(a),e.text.length-1>o&&n.appendChild(r)})):n.textContent=e.text,{tag:n}};window.onload=function(){document.getElementById("loading").classList.add("loaded")};var o={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels","nvowels","hvowels","mvowels","yvowels"]}]};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e,t){var o=n({elem:"li",class:"footer-link__item"}),a="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,r=n({elem:"a",class:"footer-link__link",text:a});return"consonant"===t?"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../../consonants/".concat(e):r.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../consonants/".concat(e):r.tag.href="../".concat(e),o.tag.appendChild(r.tag),o.tag};const l=function(t,l,s){var i=function(){var t=document.getElementById("root"),o=e(),a=n({elem:"div",id:"loading"}),r=n({elem:"div",class:"sk-pulse"});return a.tag.appendChild(r.tag),{root:t,WholeFrag:o,Spinner:a,Wrapper:n({elem:"div",class:"wrapper",id:"wrap"}),CenterFrag:e()}}(),c=i.root,g=i.WholeFrag,u=i.Wrapper;u.tag.className="wrapper wrapper_layout_sub";var d=function(e){var t=n({elem:"header",class:"header fade-in"}),o=n({elem:"h1",class:"logo"}),a=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return a.tag.href="consonant"===e?"../../../":"../../",o.tag.appendChild(a.tag),t.tag.appendChild(o.tag),function(){return t.tag}}(s);g().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(t(l)),g().appendChild(h.tag);var p=function(t){var l=n({elem:"footer",class:"footer fade-in"}),s=n({elem:"nav",class:"footer-nav"}),i=n({elem:"ul",class:"footer-link"}),c=e();o.intro.map((function(e){"object"===a(e)?(c().appendChild(r(Object.keys(e).toString(),t)),e.consonants.map((function(e){return c().appendChild(r(e,t))}))):c().appendChild(r(e,t))})),i.tag.appendChild(c()),s.tag.appendChild(i.tag),l.tag.appendChild(s.tag);var g=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});g.tag.href="https://www14.big.or.jp/~amiami/happy/",l.tag.appendChild(g.tag);var u=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return l.tag.appendChild(u.tag),function(){return l.tag}}(s);return g().appendChild(p()),u.tag.appendChild(g()),c.appendChild(u.tag),function(){return c}};var s=t(802),i=t.n(s),c=t(344),g=t.n(c);i().registerLanguage("javascript",g());const u=function(e){var t=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),o=n({elem:"pre",class:"pre"}),a=i().highlight("javascript",e).value;return o.tag.innerHTML=a,t.tag.appendChild(o.tag),{Code:t}};var d=function(e,t,o){var a=n({elem:"div",class:"page-nav__item fade-in"}),r=""!==t?t:"sometime later!",l=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:r});return"top"===t?l.tag.href="../../":"one"===o?l.tag.href="../":t&&(l.tag.href="../".concat(t,"/")),a.tag.appendChild(l.tag),a.tag};const h=function(e,t,o,a){var r=n({elem:"div",class:"page-nav fade-in"});return r.tag.appendChild(d("pre",e,o)),r.tag.appendChild(d("next",t,a)),r.tag};function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var f=function(t){var o=n({elem:"section",class:"section"}),a=e(),r=function(t){var o=e(),a=n({elem:"div",class:t.role}),r=n({elem:t.element,class:"".concat(t.role,"__title slide-in-upper__0"),text:t.title}),l=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.text});return o().appendChild(r.tag),o().appendChild(l.tag),a.tag.appendChild(o()),function(){return a.tag}}({role:"explain",element:"h1",title:t.explain.title,text:t.explain.text});a().appendChild(r());var l=u(t.romaji).Code;a().appendChild(l.tag),a().appendChild(function(t){var o=n({elem:"div"}),a=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's hear the sound!"});o.tag.appendChild(a.tag);var r=n({elem:"div",class:"sound-block fade-in"}),l=e();return t.map((function(e){return o="n"!==(t=e)&&1===t.length?new Audio("../../assets/sounds/single/".concat(t,".wav")):new Audio("../../../assets/sounds/single/".concat(t,".wav")),(a=n({elem:"button",class:"sound-button",text:t})).tag.type="button",a.tag.addEventListener("click",(function(){o.currentTime=0,o.play()})),void l().appendChild(a.tag);var t,o,a})),r.tag.appendChild(l()),o.tag.appendChild(r.tag),o.tag}(t.sound));var s=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.jpText});a().appendChild(s.tag);var i=u(t.letters).Code;a().appendChild(i.tag);var c=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:t.exampleText});a().appendChild(c.tag);var g=u(t.examples).Code;return a().appendChild(g.tag),a().appendChild(h.apply(void 0,function(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.navLink))),o.tag.appendChild(a()),o.tag};var m=function(e,n){return"".concat(e," is ").concat(n," in Hiragana.")},v=function(e,n){return"".concat(e," is ").concat(n," in Kanji.")},b=m("Red","あか"),y=v("あか","赤");console.log(b),console.log(y);var w=m("Memory","きおく"),E=v("きおく","記憶");console.log(w),console.log(E);var x=m("Pond","いけ"),_=v("いけ","池");console.log(x),console.log(_);var N=m("Voice","こえ"),R=v("こえ","声");console.log(N),console.log(R);var k="さいこう",S=m("Awesome",k),A=v(k,"最高");console.log(S),console.log(A);var C=m("Match","しあい"),O=v("しあい","試合");console.log(C),console.log(O);var M=m("Hem","すそ"),T=v("すそ","裾");console.log(M),console.log(T);var I=m("World","せかい"),j=v("せかい","世界");console.log(I),console.log(j);var L="たいくつ",B=m("Boredom",L),D=v(L,"退屈");console.log(B),console.log(D);var P=m("Wisdom","ちえ"),H=v("ちえ","知恵");console.log(P),console.log(H);var $=m("Vertical","たて"),U=v("たて","縦");console.log($),console.log(U);var K=m("Outside","そと"),F=v("そと","外");console.log(K),console.log(F);var G=m("Summer","なつ"),z=v("なつ","夏");console.log(G),console.log(z);var W=m("Meat","にく"),V=v("にく","肉");console.log(W),console.log(V);var X=m("Cloth","ぬの"),Z=v("ぬの","布");console.log(X),console.log(Z);var q=m("Cat","ねこ"),J=v("ねこ","猫");console.log(q),console.log(J);var Q=m("Flower","はな"),Y=v("はな","花");console.log(Q),console.log(Y);var ee=m("Skin","ひふ"),ne=v("ひふ","皮膚");console.log(ee),console.log(ne);var te="こうへい",oe=m("Equity",te),ae=v(te,"公平");console.log(oe),console.log(ae);var re=m("Star","ほし"),le=v("ほし","星");console.log(re),console.log(le);var se=m("Bean","まめ"),ie=v("まめ","豆");console.log(se),console.log(ie);var ce=m("South","みなみ"),ge=v("みなみ","南");console.log(ce),console.log(ge);var ue=m("Bug","むし"),de=v("むし","虫");console.log(ue),console.log(de);var he=m("String","ひも"),pe=v("ひも","紐");console.log(he),console.log(pe);var fe=m("Vegetable","やさい"),me=v("やさい","野菜");console.log(fe),console.log(me);var ve="ゆいいつ",be=m("Uniqueness",ve),ye=v(ve,"唯一");console.log(be),console.log(ye);var we=m("Good morning","おはよう");console.log(we);var Ee=m("Ease","らく"),xe=v("らく","楽");console.log(Ee),console.log(xe);var _e=m("Reason","りゆう"),Ne=v("りゆう","理由");console.log(_e),console.log(Ne);var Re=m("Absence","るす"),ke=v("るす","留守");console.log(Re),console.log(ke);var Se=m("History","れきし"),Ae=v("れきし","歴史");console.log(Se),console.log(Ae);var Ce=m("Corridor","ろうか"),Oe=v("ろうか","廊下");console.log(Ce),console.log(Oe);var Me="わくせい",Te=m("Planet",Me),Ie=v(Me,"惑星");console.log(Te),console.log(Ie);var je,Le,Be,De="つくえをかう",Pe=m("BuyDesk",De),He=(Be=(je=De).replace("つくえ",(Le=["机","買"])[0]).replace("か",Le[1]),"".concat(je," is ").concat(Be," in Kanji."));console.log(Pe),console.log(He);var $e=m("Hello","こんにちは");console.log($e);var Ue=m("Galaxy","ぎんが"),Ke=v("ぎんが","銀河");console.log(Ue),console.log(Ke);var Fe="ぐうすう",Ge=m("Even Number",Fe),ze=v(Fe,"偶数");console.log(Ge),console.log(ze);var We=m("Language","げんご"),Ve=v("げんご","言語");console.log(We),console.log(Ve);var Xe="ざつがく",Ze=m("Trivia",Xe),qe=v(Xe,"雑学");console.log(Ze),console.log(qe);var Je="じんせい",Qe=m("Life",Je),Ye=v(Je,"人生");console.log(Qe),console.log(Ye);var en=m("Brain","ずのう"),nn=v("ずのう","頭脳");console.log(en),console.log(nn);var tn="ぜつめつ",on=m("Extinction",tn),an=v(tn,"絶滅");console.log(on),console.log(an);var rn="ぞくせい",ln=m("Attribute",rn),sn=v(rn,"属性");console.log(ln),console.log(sn);var cn="だいどころ",gn=m("Kitchen",cn),un=v(cn,"台所");console.log(gn),console.log(un);var dn=m("Nosebleed","はなぢ"),hn=v("はなぢ","鼻血");console.log(dn),console.log(hn);var pn="みかづき",fn=m("Crescent moon",pn),mn=v(pn,"三日月");console.log(fn),console.log(mn);var vn=m("Exit","でぐち"),bn=v("でぐち","出口");console.log(vn),console.log(bn);var yn=m("Double","ばい"),wn=v("ばい","倍");console.log(yn),console.log(wn);var En=m("Travel","たび"),xn=v("たび","旅");console.log(En),console.log(xn);var _n="ぶんぼうぐ",Nn=m("Stationery",_n),Rn=v(_n,"文房具");console.log(Nn),console.log(Rn);var kn="べんごし",Sn=m("Lawyer",kn),An=v(kn,"弁護士");console.log(Sn),console.log(An);var Cn=m("Signal","でんぱ"),On=v("でんぱ","電波");console.log(Cn),console.log(On);var Mn=m("For and against","さんぴ"),Tn=v("さんぴ","賛否");console.log(Mn),console.log(Tn);var In=m("Music note","おんぷ"),jn=v("おんぷ","音符");console.log(In),console.log(jn);var Ln="かんぺき",Bn=m("Perfect",Ln),Dn=v(Ln,"完璧");console.log(Bn),console.log(Dn);var Pn=m("Progress","しんぽ"),Hn=v("しんぽ","進歩");console.log(Pn),console.log(Hn);var $n="きゃくほんか",Un=m("Scriptwriter",$n),Kn=v($n,"脚本家");console.log(Un),console.log(Kn);var Fn=m("Nine","きゅう"),Gn=v("きゅう","九");console.log(Fn),console.log(Gn);var zn="せんきょ",Wn=m("Election",zn),Vn=v(zn,"選挙");console.log(Wn),console.log(Vn);var Xn="しゃしん",Zn=m("Photo",Xn),qn=v(Xn,"写真");console.log(Zn),console.log(qn);var Jn=m("Hobby","しゅみ"),Qn=v("しゅみ","趣味");console.log(Jn),console.log(Qn);var Yn="しょくじ",et=m("Meal",Yn),nt=v(Yn,"食事");console.log(et),console.log(nt);var tt=m("Tea","ちゃ"),ot=v("ちゃ","茶");console.log(tt),console.log(ot);var at="ちゅうしょく",rt=m("Lunch",at),lt=v(at,"昼食");console.log(rt),console.log(lt);var st="ちょうしょく",it=m("Breakfast",st),ct=v(st,"朝食");console.log(it),console.log(ct);var gt="ろうにゃくなんにょ",ut=m("Men and women of all ages",gt),dt=v(gt,"老若男女");console.log(ut),console.log(dt);var ht="にゅうきょ",pt=m("Move in",ht),ft=v(ht,"入居");console.log(pt),console.log(ft);var mt=m("Hundred","ひゃく"),vt=v("ひゃく","百");console.log(mt),console.log(vt);var bt=m("WindSounds","ひゅうひゅう");console.log(bt);var yt="ひょうか",wt=m("Evaluation",yt),Et=v(yt,"評価");console.log(wt),console.log(Et);var xt=m("Pulse","みゃく"),_t=v("みゃく","脈");console.log(xt),console.log(_t);var Nt="みょうじ",Rt=m("Last name",Nt),kt=v(Nt,"名字");console.log(Rt),console.log(kt);var St=m("Abbreviation","りゃく"),At=v("りゃく","略");console.log(St),console.log(At);var Ct="りゅうせい",Ot=m("Meteor",Ct),Mt=v(Ct,"流星");console.log(Ot),console.log(Mt);var Tt="こうりょ",It=m("Consideration",Tt),jt=v(Tt,"考慮");console.log(It),console.log(jt);var Lt=m("Opposite","ぎゃく"),Bt=v("ぎゃく","逆");console.log(Lt),console.log(Bt);var Dt="ぎゅうにく",Pt=m("Beef",Dt),Ht=v(Dt,"牛肉");console.log(Pt),console.log(Ht);var $t="せいぎょ",Ut=m("Control",$t),Kt=v($t,"制御");console.log(Ut),console.log(Kt);var Ft="じゃぐち",Gt=m("Faucet",Ft),zt=v(Ft,"蛇口");console.log(Gt),console.log(zt);var Wt="じゅうよう",Vt=m("Importance",Wt),Xt=v(Wt,"重要");console.log(Vt),console.log(Xt);var Zt="さくじょ",qt=m("Deletion",Zt),Jt=v(Zt,"削除");console.log(qt),console.log(Jt);var Qt="びゃくや",Yt=m("Midnight sun",Qt),eo=v(Qt,"白夜");console.log(Yt),console.log(eo);var no="ごびゅう",to=m("Fallacy",no),oo=v(no,"誤謬");console.log(to),console.log(oo);var ao="びょういん",ro=m("Hospital",ao),lo=v(ao,"病院");console.log(ro),console.log(lo);var so="ろっぴゃく",io=m("Six hundred",so),co=v(so,"六百");console.log(io),console.log(co);var go="ひんぴょうかい",uo=m("Fair",go),ho=v(go,"品評会");function po(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}console.log(uo),console.log(ho),t.p,t.p,t.p,t.p,t.p,l(f,{explain:{title:"Consonant G",text:["Let's try to learn consonant g + vowels!","These words are voiced version of consonant k + vowels."]},romaji:"const consonantG = 'g';\nconst vowels = [...'aiueo'];\n\nconst gVowelsByRomaji = vowels.map(\n  (vowel) => consonantG + vowel\n);\nconsole.log(gVowelsByRomaji.toString());\n// ga, gi, gu, ge, go",sound:["ga","gi","gu","ge","go"],jpText:"The consonant g + vowels spelt by hiragana and katakana.",letters:"// The mark of \"゛\" is added at the right top hand corner\nconst gVowelLetters = [\n  { ga: { hiragana: 'が', katakana: 'ガ' } },\n  { gi: { hiragana: 'ぎ', katakana: 'ギ' } },\n  { gu: { hiragana: 'ぐ', katakana: 'グ' } },\n  { ge: { hiragana: 'げ', katakana: 'ゲ' } },\n  { go: { hiragana: 'ご', katakana: 'ゴ' } },\n];",exampleText:"Let's use consonant g + vowels in practice!",examples:"// Base code\nconst gVowels =\n  { ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご' };\n\nconst englishHiragana = (\n  english,\n  hiragana\n) =>\n  `${english} is ${hiragana} in Hiragana.`;\n\nconst hiraganaKanji = (\n  hiragana,\n  kanji\n) =>\n  `${hiragana} is ${kanji} in Kanji.`;\n\n",navLink:["n","","",""]},"consonant");var fo,mo,vo,bo=(function(e){if(Array.isArray(e))return po(e)}(fo="aiueo")||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(fo)||(mo=fo,po(mo,vo))||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){return"g"+e}));console.log(bo.toString())})()})();