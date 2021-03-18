(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(o){var t=e[o];"object"!=typeof t||Object.isFrozen(t)||n(t)})),e}var o=n,t=n;o.default=t;class a{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(e,...n){const o=Object.create(null);for(const n in e)o[n]=e[n];return n.forEach((function(e){for(const n in e)o[n]=e[n]})),o}function l(e){return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,escapeHTML:s,inherit:r,nodeStream:function(e){const n=[];return function e(o,t){for(let a=o.firstChild;a;a=a.nextSibling)3===a.nodeType?t+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:t,node:a}),t=e(a,t),l(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:t,node:a}));return t}(e,0),n},mergeStreams:function(e,n,o){let t=0,a="";const r=[];function i(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){a+="<"+l(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+s(e.value)+'"'})).join("")+">"}function g(e){a+="</"+l(e)+">"}function u(e){("start"===e.event?c:g)(e.node)}for(;e.length||n.length;){let n=i();if(a+=s(o.substring(t,n[0].offset)),t=n[0].offset,n===e){r.reverse().forEach(g);do{u(n.splice(0,1)[0]),n=i()}while(n===e&&n.length&&n[0].offset===t);r.reverse().forEach(c)}else"start"===n[0].event?r.push(n[0].node):r.pop(),u(n.splice(0,1)[0])}return a+s(o.substr(t))}});const c=e=>!!e.kind;class g{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{u._collapse(e)})))}}class d extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const o=e.root;o.kind=n,o.sublanguage=!0,this.add(o)}toHTML(){return new g(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const p="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",v="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",w={begin:"\\\\[\\s\\S]",relevance:0},y={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[w]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[w]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,o={}){const t=r({className:"comment",begin:e,end:n,contains:[]},o);return t.contains.push(x),t.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),t},N=_("//","$"),k=_("/\\*","\\*/"),R=_("#","$"),S={className:"number",begin:m,relevance:0},A={className:"number",begin:v,relevance:0},C={className:"number",begin:b,relevance:0},O={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},j={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,contains:[w]}]}]},M={className:"title",begin:p,relevance:0},T={className:"title",begin:f,relevance:0};var I=Object.freeze({__proto__:null,IDENT_RE:p,UNDERSCORE_IDENT_RE:f,NUMBER_RE:m,C_NUMBER_RE:v,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:w,APOS_STRING_MODE:y,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:x,COMMENT:_,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:R,NUMBER_MODE:S,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:C,CSS_NUMBER_MODE:O,REGEXP_MODE:j,TITLE_MODE:M,UNDERSCORE_TITLE_MODE:T,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function B(e){function n(n,o){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(o?"g":""))}class o{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const o=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let t=0,a="";for(let s=0;s<e.length;s++){t+=1;const r=t;let l=h(e[s]);for(s>0&&(a+=n),a+="(";l.length>0;){const e=o.exec(l);if(null==e){a+=l;break}a+=l.substring(0,e.index),l=l.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+String(Number(e[1])+r):(a+=e[0],"("===e[0]&&t++)}a+=")"}return a}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const o=n.findIndex(((e,n)=>n>0&&void 0!==e)),t=this.matchIndexes[o];return n.splice(0,o),Object.assign(n,t)}}class t{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new o;return this.rules.slice(e).forEach((([e,o])=>n.addRule(e,o))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let o=n.exec(e);if(this.resumingScanAtSamePosition())if(o&&o.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,o=n.exec(e)}return o&&(this.regexIndex+=o.position+1,this.regexIndex===this.count&&this.considerAll()),o}}function a(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=r(e.classNameAliases||{}),function o(s,l){const i=s;if(s.compiled)return i;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords;let c=null;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),s.keywords&&(s.keywords=function(e,n){const o={};return"string"==typeof e?t("keyword",e):Object.keys(e).forEach((function(n){t(n,e[n])})),o;function t(e,t){n&&(t=t.toLowerCase()),t.split(" ").forEach((function(n){const t=n.split("|");o[t[0]]=[e,D(t[0],t[1])]}))}}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return i.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),l&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",s.__beforeBegin=a),s.begin||(s.begin=/\B|\b/),i.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(i.endRe=n(s.end)),i.terminator_end=h(s.end)||"",s.endsWithParent&&l.terminator_end&&(i.terminator_end+=(s.end?"|":"")+l.terminator_end)),s.illegal&&(i.illegalRe=n(s.illegal)),void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:H(e)?r(e,{starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){o(e,i)})),s.starts&&o(s.starts,l),i.matcher=function(e){const n=new t;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(i),i}(e)}function H(e){return!!e&&(e.endsWithParent||H(e.starts))}function D(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function P(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,s(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const K=s,$=r,{nodeStream:U,mergeStreams:V}=i,W=Symbol("nomatch");var F=function(e){const n=[],t=Object.create(null),s=Object.create(null),r=[];let l=!0;const i=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let u={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return u.noHighlightRe.test(e)}function p(e,n,o,t){const a={code:n,language:e};_("before:highlight",a);const s=a.result?a.result:f(a.language,a.code,o,t);return s.code=a.code,_("after:highlight",s),s}function f(e,n,o,s){const r=n;function i(e,n){const o=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,o)&&e.keywords[o]}function g(){null!=N.subLanguage?function(){if(""===S)return;let e=null;if("string"==typeof N.subLanguage){if(!t[N.subLanguage])return void R.addText(S);e=f(N.subLanguage,S,!0,k[N.subLanguage]),k[N.subLanguage]=e.top}else e=m(S,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(A+=e.relevance),R.addSublanguage(e.emitter,e.language)}():function(){if(!N.keywords)return void R.addText(S);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(S),o="";for(;n;){o+=S.substring(e,n.index);const t=i(N,n);if(t){const[e,a]=t;R.addText(o),o="",A+=a;const s=E.classNameAliases[e]||e;R.addKeyword(n[0],s)}else o+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(S)}o+=S.substr(e),R.addText(o)}(),S=""}function d(e){return e.className&&R.openNode(E.classNameAliases[e.className]||e.className),N=Object.create(e,{parent:{value:N}}),N}function h(e,n,o){let t=function(e,n){const o=e&&e.exec(n);return o&&0===o.index}(e.endRe,o);if(t){if(e["on:end"]){const o=new a(e);e["on:end"](n,o),o.ignore&&(t=!1)}if(t){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,o)}function p(e){return 0===N.matcher.regexIndex?(S+=e[0],1):(j=!0,0)}function v(e){const n=e[0],o=r.substr(e.index),t=h(N,e,o);if(!t)return W;const a=N;a.skip?S+=n:(a.returnEnd||a.excludeEnd||(S+=n),g(),a.excludeEnd&&(S=n));do{N.className&&R.closeNode(),N.skip||N.subLanguage||(A+=N.relevance),N=N.parent}while(N!==t.parent);return t.starts&&(t.endSameAsBegin&&(t.starts.endRe=t.endRe),d(t.starts)),a.returnEnd?0:n.length}let b={};function w(n,t){const s=t&&t[0];if(S+=n,null==s)return g(),0;if("begin"===b.type&&"end"===t.type&&b.index===t.index&&""===s){if(S+=r.slice(t.index,t.index+1),!l){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=b.rule,n}return 1}if(b=t,"begin"===t.type)return function(e){const n=e[0],o=e.rule,t=new a(o),s=[o.__beforeBegin,o["on:begin"]];for(const o of s)if(o&&(o(e,t),t.ignore))return p(n);return o&&o.endSameAsBegin&&(o.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),o.skip?S+=n:(o.excludeBegin&&(S+=n),g(),o.returnBegin||o.excludeBegin||(S=n)),d(o),o.returnBegin?0:n.length}(t);if("illegal"===t.type&&!o){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(N.className||"<unnamed>")+'"');throw e.mode=N,e}if("end"===t.type){const e=v(t);if(e!==W)return e}if("illegal"===t.type&&""===s)return 1;if(O>1e5&&O>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return S+=s,s.length}const E=y(e);if(!E)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=B(E);let _="",N=s||x;const k={},R=new u.__emitter(u);!function(){const e=[];for(let n=N;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>R.openNode(e)))}();let S="",A=0,C=0,O=0,j=!1;try{for(N.matcher.considerAll();;){O++,j?j=!1:N.matcher.considerAll(),N.matcher.lastIndex=C;const e=N.matcher.exec(r);if(!e)break;const n=w(r.substring(C,e.index),e);C=e.index+n}return w(r.substr(C)),R.closeAllNodes(),R.finalize(),_=R.toHTML(),{relevance:A,value:_,language:e,illegal:!1,emitter:R,top:N}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:r.slice(C-100,C+100),mode:n.mode},sofar:_,relevance:0,value:K(r),emitter:R};if(l)return{illegal:!1,relevance:0,value:K(r),emitter:R,language:e,top:N,errorRaised:n};throw n}}function m(e,n){n=n||u.languages||Object.keys(t);const o=function(e){const n={relevance:0,emitter:new u.__emitter(u),value:K(e),illegal:!1,top:g};return n.emitter.addText(e),n}(e),a=n.filter(y).filter(x).map((n=>f(n,e,!1)));a.unshift(o);const s=a.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(y(e.language).supersetOf===n.language)return 1;if(y(n.language).supersetOf===e.language)return-1}return 0})),[r,l]=s,i=r;return i.second_best=l,i}function v(e){return u.tabReplace||u.useBR?e.replace(i,(e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e)):e}function b(e){let n=null;const o=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const o=u.languageDetectRe.exec(n);if(o){const n=y(o[1]);return n||(console.warn(c.replace("{}",o[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?o[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||y(e)))}(e);if(h(o))return;_("before:highlightBlock",{block:e,language:o}),u.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const t=n.textContent,a=o?p(o,t,!0):m(t),r=U(n);if(r.length){const e=document.createElement("div");e.innerHTML=a.value,a.value=V(r,U(e),t)}a.value=v(a.value),_("after:highlightBlock",{block:e,result:a}),e.innerHTML=a.value,e.className=function(e,n,o){const t=n?s[n]:o,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.includes(t)||a.push(t),a.join(" ").trim()}(e.className,o,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const w=()=>{if(w.called)return;w.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,b)};function y(e){return e=(e||"").toLowerCase(),t[e]||t[s[e]]}function E(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{s[e]=n}))}function x(e){const n=y(e);return n&&!n.disableAutodetect}function _(e,n){const o=e;r.forEach((function(e){e[o]&&e[o](n)}))}Object.assign(e,{highlight:p,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),v(e)},highlightBlock:b,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),u=$(u,e)},initHighlighting:w,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",w,!1)},registerLanguage:function(n,o){let a=null;try{a=o(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!l)throw e;console.error(e),a=g}a.name||(a.name=n),t[n]=a,a.rawDefinition=o.bind(null,e),a.aliases&&E(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(t)},getLanguage:y,registerAliases:E,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=y(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:x,inherit:$,addPlugin:function(e){r.push(e)},vuePlugin:P(e).VuePlugin}),e.debugMode=function(){l=!1},e.safeMode=function(){l=!0},e.versionString="10.4.0";for(const e in I)"object"==typeof I[e]&&o(I[e]);return Object.assign(e,I),e}({});e.exports=F},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",o=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],a=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function s(e){return r("(?=",e,")")}function r(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const l=n,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const o=e[0].length+e.index,t=e.input[o];"<"!==t?">"===t&&(((e,{after:n})=>{const o="</"+e[0].slice(1);return-1!==e.input.indexOf(o,n)})(e,{after:o})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:o.join(" "),literal:t.join(" "),built_in:a.join(" ")},g="\\.([0-9](_?[0-9])*)",u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${u})((${g})|\\.)?|(${g}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${u})\\b((${g})\\b|\\.)?|(${g})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},v={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:l+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},b=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,d,e.REGEXP_MODE];h.contains=b.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(b)});const w=[].concat(v,h.contains),y=w.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(w)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:y};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,v,d,{begin:r(/[{,\n]\s*/,s(r(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,l+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:l+s("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[v,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:y}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:l}),E],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[E,e.inherit(e.TITLE_MODE,{begin:l})]},{variants:[{begin:"\\."+l},{begin:"\\$"+l}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:l}),"self",E]},{begin:"(get|set)\\s+(?="+l+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:l}),{begin:/\(\)/},E]},{begin:/\$[(.]/}]}}}},n={};function o(t){if(n[t])return n[t].exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.p="/jpjs/",(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(o,t){var a=document.createTextNode(o),s=document.createElement("br");n.appendChild(a),e.text.length-1>t&&n.appendChild(s)})):n.textContent=e.text,{tag:n}};var t={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels","nvowels","hvowels","mvowels","yvowels"]}]};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=function(e,o){var t=n({elem:"li",class:"footer-link__item"}),a="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,s=n({elem:"a",class:"footer-link__link",text:a});return"consonant"===o?"vowels"!==e&&e.endsWith("vowels")?s.tag.href="../../consonants/".concat(e):s.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?s.tag.href="../consonants/".concat(e):s.tag.href="../".concat(e),t.tag.appendChild(s.tag),t.tag};const r=function(o,r,l){var i={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},c=i.root,g=i.WholeFrag,u=i.Wrapper;u.tag.className="wrapper wrapper_layout_sub";var d=function(e){var o=n({elem:"header",class:"header fade-in"}),t=n({elem:"h1",class:"logo"}),a=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return a.tag.href="consonant"===e?"../../../":"../../",t.tag.appendChild(a.tag),o.tag.appendChild(t.tag),function(){return o.tag}}(l);g().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(o(r)),g().appendChild(h.tag);var p=function(o){var r=n({elem:"footer",class:"footer fade-in"}),l=n({elem:"nav",class:"footer-nav"}),i=n({elem:"ul",class:"footer-link"}),c=e();t.intro.map((function(e){"object"===a(e)?(c().appendChild(s(Object.keys(e).toString(),o)),e.consonants.map((function(e){return c().appendChild(s(e,o))}))):c().appendChild(s(e,o))})),i.tag.appendChild(c()),l.tag.appendChild(i.tag),r.tag.appendChild(l.tag);var g=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});g.tag.href="https://www14.big.or.jp/~amiami/happy/",r.tag.appendChild(g.tag);var u=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return r.tag.appendChild(u.tag),function(){return r.tag}}(l);return g().appendChild(p()),u.tag.appendChild(g()),c.appendChild(u.tag),function(){return c}};var l=o(802),i=o.n(l),c=o(344),g=o.n(c);i().registerLanguage("javascript",g());const u=function(e){var o=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),t=n({elem:"pre",class:"pre"}),a=i().highlight("javascript",e).value;return t.tag.innerHTML=a,o.tag.appendChild(t.tag),{Code:o}};var d=function(e,o,t){var a=n({elem:"div",class:"page-nav__item fade-in"}),s=""!==o?o:"sometime later!",r=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:s});return"top"===o?r.tag.href="../../":"one"===t?r.tag.href="../":o&&(r.tag.href="../".concat(o,"/")),a.tag.appendChild(r.tag),a.tag};const h=function(e,o,t,a){var s=n({elem:"div",class:"page-nav fade-in"});return s.tag.appendChild(d("pre",e,t)),s.tag.appendChild(d("next",o,a)),s.tag};function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}var f=function(o){var t=n({elem:"section",class:"section"}),a=e(),s=function(o){var t=e(),a=n({elem:"div",class:o.role}),s=n({elem:o.element,class:"".concat(o.role,"__title slide-in-upper__0"),text:o.title}),r=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:o.text});return t().appendChild(s.tag),t().appendChild(r.tag),a.tag.appendChild(t()),function(){return a.tag}}({role:"explain",element:"h1",title:o.explain.title,text:o.explain.text});a().appendChild(s());var r=u(o.romaji).Code;a().appendChild(r.tag),a().appendChild(function(o){var t=n({elem:"div"}),a=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's hear the sound!"});t.tag.appendChild(a.tag);var s=n({elem:"div",class:"sound-block fade-in"}),r=e();return o.map((function(e){return t="n"!==(o=e)&&1===o.length?new Audio("../../assets/sounds/single/".concat(o,".wav")):new Audio("../../../assets/sounds/single/".concat(o,".wav")),(a=n({elem:"button",class:"sound-button",text:o})).tag.type="button",a.tag.addEventListener("click",(function(){t.currentTime=0,t.play()})),void r().appendChild(a.tag);var o,t,a})),s.tag.appendChild(r()),t.tag.appendChild(s.tag),t.tag}(o.sound));var l=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:o.jpText});a().appendChild(l.tag);var i=u(o.letters).Code;a().appendChild(i.tag);var c=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:o.exampleText});a().appendChild(c.tag);var g=u(o.examples).Code;return a().appendChild(g.tag),a().appendChild(h.apply(void 0,function(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return p(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?p(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.navLink))),t.tag.appendChild(a()),t.tag};var m=function(e,n){return"".concat(e," is ").concat(n," in Hiragana.")},v=function(e,n){return"".concat(e," is ").concat(n," in Kanji.")},b=m("Red","あか"),w=v("あか","赤");console.log(b),console.log(w);var y=m("Memory","きおく"),E=v("きおく","記憶");console.log(y),console.log(E);var x=m("Pond","いけ"),_=v("いけ","池");console.log(x),console.log(_);var N=m("Voice","こえ"),k=v("こえ","声");console.log(N),console.log(k);var R="さいこう",S=m("Awesome",R),A=v(R,"最高");console.log(S),console.log(A);var C=m("Match","しあい"),O=v("しあい","試合");console.log(C),console.log(O);var j=m("Hem","すそ"),M=v("すそ","裾");console.log(j),console.log(M);var T=m("World","せかい"),I=v("せかい","世界");console.log(T),console.log(I);var L="たいくつ",B=m("Boredom",L),H=v(L,"退屈");console.log(B),console.log(H);var D=m("Wisdom","ちえ"),P=v("ちえ","知恵");console.log(D),console.log(P);var K=m("Vertical","たて"),$=v("たて","縦");console.log(K),console.log($);var U=m("Outside","そと"),V=v("そと","外");console.log(U),console.log(V);var W=m("Summer","なつ"),F=v("なつ","夏");console.log(W),console.log(F);var z=m("Meat","にく"),G=v("にく","肉");console.log(z),console.log(G);var X=m("Cloth","ぬの"),Z=v("ぬの","布");console.log(X),console.log(Z);var q=m("Cat","ねこ"),J=v("ねこ","猫");console.log(q),console.log(J);var Q=m("Flower","はな"),Y=v("はな","花");console.log(Q),console.log(Y);var ee=m("Skin","ひふ"),ne=v("ひふ","皮膚");console.log(ee),console.log(ne);var oe="こうへい",te=m("Equity",oe),ae=v(oe,"公平");console.log(te),console.log(ae);var se=m("Star","ほし"),re=v("ほし","星");console.log(se),console.log(re);var le=m("Bean","まめ"),ie=v("まめ","豆");console.log(le),console.log(ie);var ce=m("South","みなみ"),ge=v("みなみ","南");console.log(ce),console.log(ge);var ue=m("Bug","むし"),de=v("むし","虫");console.log(ue),console.log(de);var he=m("String","ひも"),pe=v("ひも","紐");console.log(he),console.log(pe);var fe=m("Vegetable","やさい"),me=v("やさい","野菜");console.log(fe),console.log(me);var ve="ゆいいつ",be=m("Uniqueness",ve),we=v(ve,"唯一");console.log(be),console.log(we);var ye=m("Good morning","おはよう");console.log(ye);var Ee=m("Ease","らく"),xe=v("らく","楽");console.log(Ee),console.log(xe);var _e=m("Reason","りゆう"),Ne=v("りゆう","理由");console.log(_e),console.log(Ne);var ke=m("Absence","るす"),Re=v("るす","留守");console.log(ke),console.log(Re);var Se=m("History","れきし"),Ae=v("れきし","歴史");console.log(Se),console.log(Ae);var Ce=m("Corridor","ろうか"),Oe=v("ろうか","廊下");console.log(Ce),console.log(Oe);var je="わくせい",Me=m("Planet",je),Te=v(je,"惑星");console.log(Me),console.log(Te);var Ie,Le,Be,He="つくえをかう",De=m("BuyDesk",He),Pe=(Be=(Ie=He).replace("つくえ",(Le=["机","買"])[0]).replace("か",Le[1]),"".concat(Ie," is ").concat(Be," in Kanji."));console.log(De),console.log(Pe);var Ke=m("Hello","こんにちは");console.log(Ke);var $e=m("Galaxy","ぎんが"),Ue=v("ぎんが","銀河");console.log($e),console.log(Ue);var Ve="ぐうすう",We=m("Even Number",Ve),Fe=v(Ve,"偶数");console.log(We),console.log(Fe);var ze=m("Language","げんご"),Ge=v("げんご","言語");console.log(ze),console.log(Ge);var Xe="ざつがく",Ze=m("Trivia",Xe),qe=v(Xe,"雑学");console.log(Ze),console.log(qe);var Je="じんせい",Qe=m("Life",Je),Ye=v(Je,"人生");console.log(Qe),console.log(Ye);var en=m("Brain","ずのう"),nn=v("ずのう","頭脳");console.log(en),console.log(nn);var on="ぜつめつ",tn=m("Extinction",on),an=v(on,"絶滅");console.log(tn),console.log(an);var sn="ぞくせい",rn=m("Attribute",sn),ln=v(sn,"属性");console.log(rn),console.log(ln);var cn="だいどころ",gn=m("Kitchen",cn),un=v(cn,"台所");console.log(gn),console.log(un);var dn=m("Nosebleed","はなぢ"),hn=v("はなぢ","鼻血");console.log(dn),console.log(hn);var pn="みかづき",fn=m("Crescent moon",pn),mn=v(pn,"三日月");console.log(fn),console.log(mn);var vn=m("Exit","でぐち"),bn=v("でぐち","出口");console.log(vn),console.log(bn);var wn=m("Double","ばい"),yn=v("ばい","倍");console.log(wn),console.log(yn);var En=m("Travel","たび"),xn=v("たび","旅");console.log(En),console.log(xn);var _n="ぶんぼうぐ",Nn=m("Stationery",_n),kn=v(_n,"文房具");console.log(Nn),console.log(kn);var Rn="べんごし",Sn=m("Lawyer",Rn),An=v(Rn,"弁護士");console.log(Sn),console.log(An);var Cn=m("Signal","でんぱ"),On=v("でんぱ","電波");console.log(Cn),console.log(On);var jn=m("For and against","さんぴ"),Mn=v("さんぴ","賛否");console.log(jn),console.log(Mn);var Tn=m("Music note","おんぷ"),In=v("おんぷ","音符");console.log(Tn),console.log(In);var Ln="かんぺき",Bn=m("Perfect",Ln),Hn=v(Ln,"完璧");console.log(Bn),console.log(Hn);var Dn=m("Progress","しんぽ"),Pn=v("しんぽ","進歩");console.log(Dn),console.log(Pn);var Kn="きゃくほんか",$n=m("Scriptwriter",Kn),Un=v(Kn,"脚本家");console.log($n),console.log(Un);var Vn=m("Nine","きゅう"),Wn=v("きゅう","九");console.log(Vn),console.log(Wn);var Fn="せんきょ",zn=m("Election",Fn),Gn=v(Fn,"選挙");console.log(zn),console.log(Gn);var Xn="しゃしん",Zn=m("Photo",Xn),qn=v(Xn,"写真");console.log(Zn),console.log(qn);var Jn=m("Hobby","しゅみ"),Qn=v("しゅみ","趣味");console.log(Jn),console.log(Qn);var Yn="しょくじ",eo=m("Meal",Yn),no=v(Yn,"食事");console.log(eo),console.log(no);var oo=m("Tea","ちゃ"),to=v("ちゃ","茶");console.log(oo),console.log(to);var ao="ちゅうしょく",so=m("Lunch",ao),ro=v(ao,"昼食");console.log(so),console.log(ro);var lo="ちょうしょく",io=m("Breakfast",lo),co=v(lo,"朝食");console.log(io),console.log(co);var go="ろうにゃくなんにょ",uo=m("Men and women of all ages",go),ho=v(go,"老若男女");console.log(uo),console.log(ho);var po="にゅうきょ",fo=m("Move in",po),mo=v(po,"入居");console.log(fo),console.log(mo);var vo=m("Hundred","ひゃく"),bo=v("ひゃく","百");console.log(vo),console.log(bo);var wo=m("WindSounds","ひゅうひゅう");console.log(wo);var yo="ひょうか",Eo=m("Evaluation",yo),xo=v(yo,"評価");console.log(Eo),console.log(xo);var _o=m("Pulse","みゃく"),No=v("みゃく","脈");console.log(_o),console.log(No);var ko="みょうじ",Ro=m("Last name",ko),So=v(ko,"名字");console.log(Ro),console.log(So);var Ao=m("Abbreviation","りゃく"),Co=v("りゃく","略");console.log(Ao),console.log(Co);var Oo="りゅうせい",jo=m("Meteor",Oo),Mo=v(Oo,"流星");console.log(jo),console.log(Mo);var To="こうりょ",Io=m("Consideration",To),Lo=v(To,"考慮");console.log(Io),console.log(Lo);var Bo=m("Opposite","ぎゃく"),Ho=v("ぎゃく","逆");console.log(Bo),console.log(Ho);var Do="ぎゅうにく",Po=m("Beef",Do),Ko=v(Do,"牛肉");console.log(Po),console.log(Ko);var $o="せいぎょ",Uo=m("Control",$o),Vo=v($o,"制御");console.log(Uo),console.log(Vo);var Wo="じゃぐち",Fo=m("Faucet",Wo),zo=v(Wo,"蛇口");console.log(Fo),console.log(zo);var Go="じゅうよう",Xo=m("Importance",Go),Zo=v(Go,"重要");console.log(Xo),console.log(Zo);var qo="さくじょ",Jo=m("Deletion",qo),Qo=v(qo,"削除");console.log(Jo),console.log(Qo);var Yo="びゃくや",et=m("Midnight sun",Yo),nt=v(Yo,"白夜");console.log(et),console.log(nt);var ot="ごびゅう",tt=m("Fallacy",ot),at=v(ot,"誤謬");console.log(tt),console.log(at);var st="びょういん",rt=m("Hospital",st),lt=v(st,"病院");function it(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}console.log(rt),console.log(lt),o.p,o.p,o.p,o.p,o.p,r(f,{explain:{title:"Consonant S",text:["Let's try to learn consonant s + vowels!","","There are two ways to write in consonant s + vowels.","We will use Hepburn-shiki Romaji here."]},romaji:"const consonantS = 's';\nconst vowels = [...'aiueo'];\nconst hepburnElem = 'h';\n\n// Kunrei-shiki and Nihon-shiki Romaji\nconst sVowelsByRomaji = vowels.map(\n  (vowel) => consonantS + vowel\n);\nconsole.log(sVowelsByRomaji.toString());\n// sa, si, su, se, so\n\n// Hepburn-shiki Romaji(We will use this here.)\nconst sVowelsByRomajiHepburn = vowels.map(\n  (vowel) => {\n    if (vowel === 'i') {\n      return consonantS + hepburnElem + vowel;\n    } else {\n      return consonantS + vowel;\n    }\n});\nconsole.log(sVowelsByRomajiHepburn.toString());\n// sa, shi, su, se, so\n",sound:["sa","shi","su","se","so"],jpText:"The consonant s + vowels spelt by hiragana and katakana.",letters:"const sVowelLetters = [\n  { sa: { hiragana: 'さ', katakana: 'サ' } },\n  { shi: { hiragana: 'し', katakana: 'シ' } },\n  { su: { hiragana: 'す', katakana: 'ス' } },\n  { se: { hiragana: 'せ', katakana: 'セ' } },\n  { so: { hiragana: 'そ', katakana: 'ソ' } },\n];",exampleText:"Let's use consonant s + vowels in practice!",examples:"// Base code\nconst vowels =\n  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };\n\nconst kVowels =\n  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };\n\nconst sVowels =\n  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };\n\nconst englishHiragana = (\n  english,\n  hiragana\n) =>\n  `${english} is ${hiragana} in Hiragana.`;\n\nconst hiraganaKanji = (\n  hiragana,\n  kanji\n) =>\n  `${hiragana} is ${kanji} in Kanji.`;\n\n\n// awesome・さいこう・最高\nconst awesome = sVowels.sa + vowels.i + kVowels.ko + vowels.u;\nconst awesomeHiragana = englishHiragana('Awesome', awesome);\nconst awesomeKanji = hiraganaKanji(awesome, '最高');\n\nconsole.log(awesomeHiragana);\n// Awesome is さいこう in Hiragana.\nconsole.log(awesomeKanji);\n// さいこう is 最高 in Kanji.\n\n\n// match(game)・しあい・試合\nconst match = sVowels.shi + vowels.a + vowels.i;\nconst matchHiragana = englishHiragana('Match', match);\nconst matchKanji = hiraganaKanji(match, '試合');\n\nconsole.log(matchHiragana);\n// Match is しあい in Hiragana.\nconsole.log(matchKanji);\n// しあい is 試合 in Kanji.\n\n\n// hem・すそ・裾\nconst hem = sVowels.su + sVowels.so;\nconst hemHiragana = englishHiragana('Hem', hem);\nconst hemKanji = hiraganaKanji(hem, '裾');\n\nconsole.log(hemHiragana);\n// Hem is すそ in Hiragana.\nconsole.log(hemKanji);\n// すそ is 裾 in Kanji.\n\n\n// world・せかい・世界\nconst world = sVowels.se + kVowels.ka + vowels.i;\nconst worldHiragana = englishHiragana('World', world);\nconst worldKanji = hiraganaKanji(world, '世界');\n\nconsole.log(worldHiragana);\n// World is せかい in Hiragana.\nconsole.log(worldKanji);\n// せかい is 世界 in Kanji.\n",navLink:["kvowels","tvowels","",""]},"consonant");var ct,gt,ut=function(e){if(Array.isArray(e))return it(e)}(ct="aiueo")||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(ct)||it(ct,gt)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),dt=ut.map((function(e){return"s"+e}));console.log(dt.toString());var ht=ut.map((function(e){return"i"===e?"sh"+e:"s"+e}));console.log(ht.toString())})()})();