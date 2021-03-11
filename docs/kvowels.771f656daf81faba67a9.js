(()=>{var e={802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(o){var t=e[o];"object"!=typeof t||Object.isFrozen(t)||n(t)})),e}var o=n,t=n;o.default=t;class a{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const o=Object.create(null);for(const n in e)o[n]=e[n];return n.forEach((function(e){for(const n in e)o[n]=e[n]})),o}function l(e){return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,escapeHTML:r,inherit:s,nodeStream:function(e){const n=[];return function e(o,t){for(let a=o.firstChild;a;a=a.nextSibling)3===a.nodeType?t+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:t,node:a}),t=e(a,t),l(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:t,node:a}));return t}(e,0),n},mergeStreams:function(e,n,o){let t=0,a="";const s=[];function i(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function c(e){a+="<"+l(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+r(e.value)+'"'})).join("")+">"}function g(e){a+="</"+l(e)+">"}function u(e){("start"===e.event?c:g)(e.node)}for(;e.length||n.length;){let n=i();if(a+=r(o.substring(t,n[0].offset)),t=n[0].offset,n===e){s.reverse().forEach(g);do{u(n.splice(0,1)[0]),n=i()}while(n===e&&n.length&&n[0].offset===t);s.reverse().forEach(c)}else"start"===n[0].event?s.push(n[0].node):s.pop(),u(n.splice(0,1)[0])}return a+r(o.substr(t))}});const c=e=>!!e.kind;class g{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!c(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){c(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{u._collapse(e)})))}}class d extends u{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const o=e.root;o.kind=n,o.sublanguage=!0,this.add(o)}toHTML(){return new g(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}const p="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",m="\\b\\d+(\\.\\d+)?",v="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",y={begin:"\\\\[\\s\\S]",relevance:0},w={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,n,o={}){const t=s({className:"comment",begin:e,end:n,contains:[]},o);return t.contains.push(x),t.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),t},k=_("//","$"),N=_("/\\*","\\*/"),R=_("#","$"),S={className:"number",begin:m,relevance:0},A={className:"number",begin:v,relevance:0},C={className:"number",begin:b,relevance:0},O={className:"number",begin:m+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},M={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,contains:[y]}]}]},j={className:"title",begin:p,relevance:0},T={className:"title",begin:f,relevance:0};var I=Object.freeze({__proto__:null,IDENT_RE:p,UNDERSCORE_IDENT_RE:f,NUMBER_RE:m,C_NUMBER_RE:v,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>h(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:y,APOS_STRING_MODE:w,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:x,COMMENT:_,C_LINE_COMMENT_MODE:k,C_BLOCK_COMMENT_MODE:N,HASH_COMMENT_MODE:R,NUMBER_MODE:S,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:C,CSS_NUMBER_MODE:O,REGEXP_MODE:M,TITLE_MODE:j,UNDERSCORE_TITLE_MODE:T,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});const L=["of","and","for","in","not","or","if","then","parent","list","value"];function B(e){function n(n,o){return new RegExp(h(n),"m"+(e.case_insensitive?"i":"")+(o?"g":""))}class o{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){const o=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let t=0,a="";for(let r=0;r<e.length;r++){t+=1;const s=t;let l=h(e[r]);for(r>0&&(a+=n),a+="(";l.length>0;){const e=o.exec(l);if(null==e){a+=l;break}a+=l.substring(0,e.index),l=l.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?a+="\\"+String(Number(e[1])+s):(a+=e[0],"("===e[0]&&t++)}a+=")"}return a}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const o=n.findIndex(((e,n)=>n>0&&void 0!==e)),t=this.matchIndexes[o];return n.splice(0,o),Object.assign(n,t)}}class t{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new o;return this.rules.slice(e).forEach((([e,o])=>n.addRule(e,o))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let o=n.exec(e);if(this.resumingScanAtSamePosition())if(o&&o.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,o=n.exec(e)}return o&&(this.regexIndex+=o.position+1,this.regexIndex===this.count&&this.considerAll()),o}}function a(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function o(r,l){const i=r;if(r.compiled)return i;r.compiled=!0,r.__beforeBegin=null,r.keywords=r.keywords||r.beginKeywords;let c=null;if("object"==typeof r.keywords&&(c=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function(e,n){const o={};return"string"==typeof e?t("keyword",e):Object.keys(e).forEach((function(n){t(n,e[n])})),o;function t(e,t){n&&(t=t.toLowerCase()),t.split(" ").forEach((function(n){const t=n.split("|");o[t[0]]=[e,P(t[0],t[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&c)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return i.keywordPatternRe=n(r.lexemes||c||/\w+/,!0),l&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",r.__beforeBegin=a),r.begin||(r.begin=/\B|\b/),i.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(i.endRe=n(r.end)),i.terminator_end=h(r.end)||"",r.endsWithParent&&l.terminator_end&&(i.terminator_end+=(r.end?"|":"")+l.terminator_end)),r.illegal&&(i.illegalRe=n(r.illegal)),void 0===r.relevance&&(r.relevance=1),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return s(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:D(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){o(e,i)})),r.starts&&o(r.starts,l),i.matcher=function(e){const n=new t;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(i),i}(e)}function D(e){return!!e&&(e.endsWithParent||D(e.starts))}function P(e,n){return n?Number(n):function(e){return L.includes(e.toLowerCase())}(e)?0:1}function H(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,r(this.code);let n;return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const K=r,$=s,{nodeStream:U,mergeStreams:V}=i,z=Symbol("nomatch");var F=function(e){const n=[],t=Object.create(null),r=Object.create(null),s=[];let l=!0;const i=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",g={disableAutodetect:!0,name:"Plain text",contains:[]};let u={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function h(e){return u.noHighlightRe.test(e)}function p(e,n,o,t){const a={code:n,language:e};_("before:highlight",a);const r=a.result?a.result:f(a.language,a.code,o,t);return r.code=a.code,_("after:highlight",r),r}function f(e,n,o,r){const s=n;function i(e,n){const o=E.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,o)&&e.keywords[o]}function g(){null!=k.subLanguage?function(){if(""===S)return;let e=null;if("string"==typeof k.subLanguage){if(!t[k.subLanguage])return void R.addText(S);e=f(k.subLanguage,S,!0,N[k.subLanguage]),N[k.subLanguage]=e.top}else e=m(S,k.subLanguage.length?k.subLanguage:null);k.relevance>0&&(A+=e.relevance),R.addSublanguage(e.emitter,e.language)}():function(){if(!k.keywords)return void R.addText(S);let e=0;k.keywordPatternRe.lastIndex=0;let n=k.keywordPatternRe.exec(S),o="";for(;n;){o+=S.substring(e,n.index);const t=i(k,n);if(t){const[e,a]=t;R.addText(o),o="",A+=a;const r=E.classNameAliases[e]||e;R.addKeyword(n[0],r)}else o+=n[0];e=k.keywordPatternRe.lastIndex,n=k.keywordPatternRe.exec(S)}o+=S.substr(e),R.addText(o)}(),S=""}function d(e){return e.className&&R.openNode(E.classNameAliases[e.className]||e.className),k=Object.create(e,{parent:{value:k}}),k}function h(e,n,o){let t=function(e,n){const o=e&&e.exec(n);return o&&0===o.index}(e.endRe,o);if(t){if(e["on:end"]){const o=new a(e);e["on:end"](n,o),o.ignore&&(t=!1)}if(t){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return h(e.parent,n,o)}function p(e){return 0===k.matcher.regexIndex?(S+=e[0],1):(M=!0,0)}function v(e){const n=e[0],o=s.substr(e.index),t=h(k,e,o);if(!t)return z;const a=k;a.skip?S+=n:(a.returnEnd||a.excludeEnd||(S+=n),g(),a.excludeEnd&&(S=n));do{k.className&&R.closeNode(),k.skip||k.subLanguage||(A+=k.relevance),k=k.parent}while(k!==t.parent);return t.starts&&(t.endSameAsBegin&&(t.starts.endRe=t.endRe),d(t.starts)),a.returnEnd?0:n.length}let b={};function y(n,t){const r=t&&t[0];if(S+=n,null==r)return g(),0;if("begin"===b.type&&"end"===t.type&&b.index===t.index&&""===r){if(S+=s.slice(t.index,t.index+1),!l){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=b.rule,n}return 1}if(b=t,"begin"===t.type)return function(e){const n=e[0],o=e.rule,t=new a(o),r=[o.__beforeBegin,o["on:begin"]];for(const o of r)if(o&&(o(e,t),t.ignore))return p(n);return o&&o.endSameAsBegin&&(o.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),o.skip?S+=n:(o.excludeBegin&&(S+=n),g(),o.returnBegin||o.excludeBegin||(S=n)),d(o),o.returnBegin?0:n.length}(t);if("illegal"===t.type&&!o){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(k.className||"<unnamed>")+'"');throw e.mode=k,e}if("end"===t.type){const e=v(t);if(e!==z)return e}if("illegal"===t.type&&""===r)return 1;if(O>1e5&&O>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return S+=r,r.length}const E=w(e);if(!E)throw console.error(c.replace("{}",e)),new Error('Unknown language: "'+e+'"');const x=B(E);let _="",k=r||x;const N={},R=new u.__emitter(u);!function(){const e=[];for(let n=k;n!==E;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>R.openNode(e)))}();let S="",A=0,C=0,O=0,M=!1;try{for(k.matcher.considerAll();;){O++,M?M=!1:k.matcher.considerAll(),k.matcher.lastIndex=C;const e=k.matcher.exec(s);if(!e)break;const n=y(s.substring(C,e.index),e);C=e.index+n}return y(s.substr(C)),R.closeAllNodes(),R.finalize(),_=R.toHTML(),{relevance:A,value:_,language:e,illegal:!1,emitter:R,top:k}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:s.slice(C-100,C+100),mode:n.mode},sofar:_,relevance:0,value:K(s),emitter:R};if(l)return{illegal:!1,relevance:0,value:K(s),emitter:R,language:e,top:k,errorRaised:n};throw n}}function m(e,n){n=n||u.languages||Object.keys(t);const o=function(e){const n={relevance:0,emitter:new u.__emitter(u),value:K(e),illegal:!1,top:g};return n.emitter.addText(e),n}(e),a=n.filter(w).filter(x).map((n=>f(n,e,!1)));a.unshift(o);const r=a.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(w(e.language).supersetOf===n.language)return 1;if(w(n.language).supersetOf===e.language)return-1}return 0})),[s,l]=r,i=s;return i.second_best=l,i}function v(e){return u.tabReplace||u.useBR?e.replace(i,(e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e)):e}function b(e){let n=null;const o=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const o=u.languageDetectRe.exec(n);if(o){const n=w(o[1]);return n||(console.warn(c.replace("{}",o[1])),console.warn("Falling back to no-highlight mode for this block.",e)),n?o[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||w(e)))}(e);if(h(o))return;_("before:highlightBlock",{block:e,language:o}),u.useBR?(n=document.createElement("div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e;const t=n.textContent,a=o?p(o,t,!0):m(t),s=U(n);if(s.length){const e=document.createElement("div");e.innerHTML=a.value,a.value=V(s,U(e),t)}a.value=v(a.value),_("after:highlightBlock",{block:e,result:a}),e.innerHTML=a.value,e.className=function(e,n,o){const t=n?r[n]:o,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.includes(t)||a.push(t),a.join(" ").trim()}(e.className,o,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const y=()=>{if(y.called)return;y.called=!0;const e=document.querySelectorAll("pre code");n.forEach.call(e,b)};function w(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function E(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e]=n}))}function x(e){const n=w(e);return n&&!n.disableAutodetect}function _(e,n){const o=e;s.forEach((function(e){e[o]&&e[o](n)}))}Object.assign(e,{highlight:p,highlightAuto:m,fixMarkup:function(e){return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),v(e)},highlightBlock:b,configure:function(e){e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),u=$(u,e)},initHighlighting:y,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",y,!1)},registerLanguage:function(n,o){let a=null;try{a=o(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!l)throw e;console.error(e),a=g}a.name||(a.name=n),t[n]=a,a.rawDefinition=o.bind(null,e),a.aliases&&E(a.aliases,{languageName:n})},listLanguages:function(){return Object.keys(t)},getLanguage:w,registerAliases:E,requireLanguage:function(e){console.warn("requireLanguage is deprecated and will be removed entirely in the future."),console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=w(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:x,inherit:$,addPlugin:function(e){s.push(e)},vuePlugin:H(e).VuePlugin}),e.debugMode=function(){l=!1},e.safeMode=function(){l=!0},e.versionString="10.4.0";for(const e in I)"object"==typeof I[e]&&o(I[e]);return Object.assign(e,I),e}({});e.exports=F},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",o=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],t=["true","false","null","undefined","NaN","Infinity"],a=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function r(e){return s("(?=",e,")")}function s(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const l=n,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const o=e[0].length+e.index,t=e.input[o];"<"!==t?">"===t&&(((e,{after:n})=>{const o="</"+e[0].slice(1);return-1!==e.input.indexOf(o,n)})(e,{after:o})||n.ignoreMatch()):n.ignoreMatch()}},c={$pattern:n,keyword:o.join(" "),literal:t.join(" "),built_in:a.join(" ")},g="\\.([0-9](_?[0-9])*)",u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${u})((${g})|\\.)?|(${g}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${u})\\b((${g})\\b|\\.)?|(${g})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},v={className:"comment",variants:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:l+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},b=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,d,e.REGEXP_MODE];h.contains=b.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(b)});const y=[].concat(v,h.contains),w=y.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(y)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:w};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,f,m,v,d,{begin:s(/[{,\n]\s*/,r(s(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,l+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:l+r("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[v,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:c,contains:["self",e.inherit(e.TITLE_MODE,{begin:l}),E],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",returnBegin:!0,contains:[E,e.inherit(e.TITLE_MODE,{begin:l})]},{variants:[{begin:"\\."+l},{begin:"\\$"+l}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:l}),"self",E]},{begin:"(get|set)\\s+(?="+l+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:l}),{begin:/\(\)/},E]},{begin:/\$[(.]/}]}}}},n={};function o(t){if(n[t])return n[t].exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.p="/jpjs/",(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},n=function(e){var n=document.createElement(e.elem);return n.className=e.class,Array.isArray(e.text)?e.text.forEach((function(o,t){var a=document.createTextNode(o),r=document.createElement("br");n.appendChild(a),e.text.length-1>t&&n.appendChild(r)})):n.textContent=e.text,{tag:n}};var t={intro:["preparation","characters","vowels",{consonants:["kvowels","svowels","tvowels","nvowels","hvowels","mvowels"]}]};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e,o){var t=n({elem:"li",class:"footer-link__item"}),a="vowels"!==e&&e.endsWith("vowels")?"ー ".concat(e):e,r=n({elem:"a",class:"footer-link__link",text:a});return"consonant"===o?"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../../consonants/".concat(e):r.tag.href="../../".concat(e):"vowels"!==e&&e.endsWith("vowels")?r.tag.href="../consonants/".concat(e):r.tag.href="../".concat(e),t.tag.appendChild(r.tag),t.tag};const s=function(o,s,l){var i={root:document.getElementById("root"),WholeFrag:e(),Wrapper:n({elem:"div",class:"wrapper"}),CenterFrag:e()},c=i.root,g=i.WholeFrag,u=i.Wrapper;u.tag.className="wrapper wrapper_layout_sub";var d=function(e){var o=n({elem:"header",class:"header fade-in"}),t=n({elem:"h1",class:"logo"}),a=n({elem:"a",class:"logo__link",text:["Japanese","JavaScript"]});return a.tag.href="consonant"===e?"../../../":"../../",t.tag.appendChild(a.tag),o.tag.appendChild(t.tag),function(){return o.tag}}(l);g().appendChild(d());var h=n({elem:"main",class:"main"});h.tag.appendChild(o(s)),g().appendChild(h.tag);var p=function(o){var s=n({elem:"footer",class:"footer fade-in"}),l=n({elem:"nav",class:"footer-nav"}),i=n({elem:"ul",class:"footer-link"}),c=e();t.intro.map((function(e){"object"===a(e)?(c().appendChild(r(Object.keys(e).toString(),o)),e.consonants.map((function(e){return c().appendChild(r(e,o))}))):c().appendChild(r(e,o))})),i.tag.appendChild(c()),l.tag.appendChild(i.tag),s.tag.appendChild(l.tag);var g=n({elem:"a",class:"sound-thanks",text:"Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))"});g.tag.href="https://www14.big.or.jp/~amiami/happy/",s.tag.appendChild(g.tag);var u=n({elem:"small",class:"copyright",text:"© 2020 Keiko(webiroha) All Rights Reserved."});return s.tag.appendChild(u.tag),function(){return s.tag}}(l);return g().appendChild(p()),u.tag.appendChild(g()),c.appendChild(u.tag),function(){return c}};var l=o(802),i=o.n(l),c=o(344),g=o.n(c);i().registerLanguage("javascript",g());const u=function(e){var o=n({elem:"code",class:"code fade-in gruvbox-dark hljs"}),t=n({elem:"pre",class:"pre"}),a=i().highlight("javascript",e).value;return t.tag.innerHTML=a,o.tag.appendChild(t.tag),{Code:o}};var d=function(e,o,t){var a=n({elem:"div",class:"page-nav__item fade-in"}),r=""!==o?o:"sometime later!",s=n({elem:"a",class:"".concat(e,"-link page-nav__link"),text:r});return"top"===o?s.tag.href="../../":"one"===t?s.tag.href="../":o&&(s.tag.href="../".concat(o,"/")),a.tag.appendChild(s.tag),a.tag};const h=function(e,o,t,a){var r=n({elem:"div",class:"page-nav fade-in"});return r.tag.appendChild(d("pre",e,t)),r.tag.appendChild(d("next",o,a)),r.tag};function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}var f=function(o){var t=n({elem:"section",class:"section"}),a=e(),r=function(o){var t=e(),a=n({elem:"div",class:o.role}),r=n({elem:o.element,class:"".concat(o.role,"__title slide-in-upper__0"),text:o.title}),s=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:o.text});return t().appendChild(r.tag),t().appendChild(s.tag),a.tag.appendChild(t()),function(){return a.tag}}({role:"explain",element:"h1",title:o.explain.title,text:o.explain.text});a().appendChild(r());var s=u(o.romaji).Code;a().appendChild(s.tag),a().appendChild(function(o){var t=n({elem:"div"}),a=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:"Let's hear the sound!"});t.tag.appendChild(a.tag);var r=n({elem:"div",class:"sound-block fade-in"}),s=e();return o.map((function(e){return t="n"!==(o=e)&&1===o.length?new Audio("../../assets/sounds/single/".concat(o,".wav")):new Audio("../../../assets/sounds/single/".concat(o,".wav")),(a=n({elem:"button",class:"sound-button",text:o})).tag.type="button",a.tag.addEventListener("click",(function(){t.currentTime=0,t.play()})),void s().appendChild(a.tag);var o,t,a})),r.tag.appendChild(s()),t.tag.appendChild(r.tag),t.tag}(o.sound));var l=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:o.jpText});a().appendChild(l.tag);var i=u(o.letters).Code;a().appendChild(i.tag);var c=n({elem:"p",class:"text opacity_0 slide-in-upper__1",text:o.exampleText});a().appendChild(c.tag);var g=u(o.examples).Code;return a().appendChild(g.tag),a().appendChild(h.apply(void 0,function(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return p(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?p(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.navLink))),t.tag.appendChild(a()),t.tag};var m=function(e,n){return"".concat(e," is ").concat(n," in Hiragana.")},v=function(e,n){return"".concat(e," is ").concat(n," in Kanji.")},b=m("Red","あか"),y=v("あか","赤");console.log(b),console.log(y);var w=m("Memory","きおく"),E=v("きおく","記憶");console.log(w),console.log(E);var x=m("Pond","いけ"),_=v("いけ","池");console.log(x),console.log(_);var k=m("Voice","こえ"),N=v("こえ","声");console.log(k),console.log(N);var R="さいこう",S=m("Awesome",R),A=v(R,"最高");console.log(S),console.log(A);var C=m("Match","しあい"),O=v("しあい","試合");console.log(C),console.log(O);var M=m("Hem","すそ"),j=v("すそ","裾");console.log(M),console.log(j);var T=m("World","せかい"),I=v("せかい","世界");console.log(T),console.log(I);var L="たいくつ",B=m("Boredom",L),D=v(L,"退屈");console.log(B),console.log(D);var P=m("Wisdom","ちえ"),H=v("ちえ","知恵");console.log(P),console.log(H);var K=m("Vertical","たて"),$=v("たて","縦");console.log(K),console.log($);var U=m("Outside","そと"),V=v("そと","外");console.log(U),console.log(V);var z=m("Summer","なつ"),F=v("なつ","夏");console.log(z),console.log(F);var W=m("Meat","にく"),G=v("にく","肉");console.log(W),console.log(G);var X=m("Cloth","ぬの"),Z=v("ぬの","布");console.log(X),console.log(Z);var q=m("Cat","ねこ"),J=v("ねこ","猫");console.log(q),console.log(J);var Q=m("Flower","はな"),Y=v("はな","花");console.log(Q),console.log(Y);var ee=m("Skin","ひふ"),ne=v("ひふ","皮膚");console.log(ee),console.log(ne);var oe="こうへい",te=m("Equity",oe),ae=v(oe,"公平");console.log(te),console.log(ae);var re=m("Star","ほし"),se=v("ほし","星");console.log(re),console.log(se);var le=m("Bean","まめ"),ie=v("まめ","豆");console.log(le),console.log(ie);var ce=m("South","みなみ"),ge=v("みなみ","南");console.log(ce),console.log(ge);var ue=m("Bug","むし"),de=v("むし","虫");console.log(ue),console.log(de);var he=m("String","ひも"),pe=v("ひも","紐");console.log(he),console.log(pe);var fe=m("Vegetable","やさい"),me=v("やさい","野菜");console.log(fe),console.log(me);var ve="ゆうこう",be=m("Valid",ve),ye=v(ve,"有効");console.log(be),console.log(ye);var we=m("Good morning","おはよう");console.log(we);var Ee=m("Ease","らく"),xe=v("らく","楽");console.log(Ee),console.log(xe);var _e=m("Reason","りゆう"),ke=v("りゆう","理由");console.log(_e),console.log(ke);var Ne=m("Absence","るす"),Re=v("るす","留守");console.log(Ne),console.log(Re);var Se=m("History","れきし"),Ae=v("れきし","歴史");console.log(Se),console.log(Ae);var Ce=m("Corridor","ろうか"),Oe=v("ろうか","廊下");console.log(Ce),console.log(Oe);var Me="わくせい",je=m("Planet",Me),Te=v(Me,"惑星");console.log(je),console.log(Te);var Ie,Le,Be,De="つくえをかう",Pe=m("BuyDesk",De),He=(Be=(Ie=De).replace("つくえ",(Le=["机","買"])[0]).replace("か",Le[1]),"".concat(Ie," is ").concat(Be," in Kanji."));console.log(Pe),console.log(He);var Ke=m("Hello","こんにちは");console.log(Ke);var $e=m("Galaxy","ぎんが"),Ue=v("ぎんが","銀河");console.log($e),console.log(Ue);var Ve="ぐうすう",ze=m("Even Number",Ve),Fe=v(Ve,"偶数");console.log(ze),console.log(Fe);var We=m("Language","げんご"),Ge=v("げんご","言語");console.log(We),console.log(Ge);var Xe="ざつがく",Ze=m("Trivia",Xe),qe=v(Xe,"雑学");console.log(Ze),console.log(qe);var Je="じんせい",Qe=m("Life",Je),Ye=v(Je,"人生");console.log(Qe),console.log(Ye);var en=m("Brain","ずのう"),nn=v("ずのう","頭脳");console.log(en),console.log(nn);var on="ぜつめつ",tn=m("Extinction",on),an=v(on,"絶滅");console.log(tn),console.log(an);var rn="ぞくせい",sn=m("Attribute",rn),ln=v(rn,"属性");console.log(sn),console.log(ln);var cn="だいどころ",gn=m("Kitchen",cn),un=v(cn,"台所");console.log(gn),console.log(un);var dn=m("Nosebleed","はなぢ"),hn=v("はなぢ","鼻血");console.log(dn),console.log(hn);var pn="みかづき",fn=m("Crescent moon",pn),mn=v(pn,"三日月");console.log(fn),console.log(mn);var vn=m("Exit","でぐち"),bn=v("でぐち","出口");console.log(vn),console.log(bn);var yn=m("Double","ばい"),wn=v("ばい","倍");console.log(yn),console.log(wn);var En=m("Travel","たび"),xn=v("たび","旅");console.log(En),console.log(xn);var _n="ぶんぼうぐ",kn=m("Stationery",_n),Nn=v(_n,"文房具");console.log(kn),console.log(Nn);var Rn="べんごし",Sn=m("Lawyer",Rn),An=v(Rn,"弁護士");console.log(Sn),console.log(An);var Cn=m("Signal","でんぱ"),On=v("でんぱ","電波");console.log(Cn),console.log(On);var Mn=m("For and against","さんぴ"),jn=v("さんぴ","賛否");console.log(Mn),console.log(jn);var Tn=m("Music note","おんぷ"),In=v("おんぷ","音符");console.log(Tn),console.log(In);var Ln="かんぺき",Bn=m("Perfect",Ln),Dn=v(Ln,"完璧");console.log(Bn),console.log(Dn);var Pn=m("Progress","しんぽ"),Hn=v("しんぽ","進歩");console.log(Pn),console.log(Hn);var Kn="きゃくほんか",$n=m("Scriptwriter",Kn),Un=v(Kn,"脚本家");console.log($n),console.log(Un);var Vn=m("Nine","きゅう"),zn=v("きゅう","九");console.log(Vn),console.log(zn);var Fn="せんきょ",Wn=m("Election",Fn),Gn=v(Fn,"選挙");console.log(Wn),console.log(Gn);var Xn="しゃしん",Zn=m("Photo",Xn),qn=v(Xn,"写真");console.log(Zn),console.log(qn);var Jn=m("Hobby","しゅみ"),Qn=v("しゅみ","趣味");console.log(Jn),console.log(Qn);var Yn="しょくじ",eo=m("Meal",Yn),no=v(Yn,"食事");console.log(eo),console.log(no);var oo=m("Tea","ちゃ"),to=v("ちゃ","茶");console.log(oo),console.log(to);var ao="ちゅうしょく",ro=m("Lunch",ao),so=v(ao,"昼食");console.log(ro),console.log(so);var lo="ちょうしょく",io=m("Breakfast",lo),co=v(lo,"朝食");console.log(io),console.log(co);var go="ろうにゃくなんにょ",uo=m("Men and women of all ages",go),ho=v(go,"老若男女");console.log(uo),console.log(ho);var po="にゅうきょ",fo=m("Move in",po),mo=v(po,"入居");console.log(fo),console.log(mo);var vo=m("Hundred","ひゃく"),bo=v("ひゃく","百");console.log(vo),console.log(bo);var yo=m("WindSounds","ひゅうひゅう");console.log(yo);var wo="ひょうか",Eo=m("Evaluation",wo),xo=v(wo,"評価");console.log(Eo),console.log(xo);var _o=m("Pulse","みゃく"),ko=v("みゃく","脈");console.log(_o),console.log(ko);var No="みょうじ",Ro=m("Last name",No),So=v(No,"名字");console.log(Ro),console.log(So);var Ao=m("Abbreviation","りゃく"),Co=v("りゃく","略");console.log(Ao),console.log(Co);var Oo="りゅうせい",Mo=m("Meteor",Oo),jo=v(Oo,"流星");console.log(Mo),console.log(jo);var To="こうりょ",Io=m("Consideration",To),Lo=v(To,"考慮");console.log(Io),console.log(Lo);var Bo=m("Opposite","ぎゃく"),Do=v("ぎゃく","逆");console.log(Bo),console.log(Do);var Po="ぎゅうにく",Ho=m("Beef",Po),Ko=v(Po,"牛肉");console.log(Ho),console.log(Ko);var $o="せいぎょ",Uo=m("Control",$o),Vo=v($o,"制御");function zo(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}console.log(Uo),console.log(Vo),o.p,o.p,o.p,o.p,o.p,s(f,{explain:{title:"Consonant K",text:"Let's try to learn consonant k + vowels!"},romaji:"const consonantK = 'k';\nconst vowels = [...'aiueo'];\n\nconst kVowelsByRomaji = vowels.map(\n  (vowel) => consonantK + vowel\n);\nconsole.log(kVowelsByRomaji.toString());\n// ka, ki, ku, ke, ko",sound:["ka","ki","ku","ke","ko"],jpText:"The consonant k + vowels spelt by hiragana and katakana.",letters:"const kVowelLetters = [\n  { ka: { hiragana: 'か', katakana: 'カ' } },\n  { ki: { hiragana: 'き', katakana: 'キ' } },\n  { ku: { hiragana: 'く', katakana: 'ク' } },\n  { ke: { hiragana: 'け', katakana: 'ケ' } },\n  { ko: { hiragana: 'こ', katakana: 'コ' } },\n];",exampleText:"Let's use consonant k + vowels in practice!",examples:"// Base code\nconst vowels =\n  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };\n\nconst kVowels =\n  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };\n\nconst englishHiragana = (\n  english,\n  hiragana\n) =>\n  `${english} is ${hiragana} in Hiragana.`;\n\nconst hiraganaKanji = (\n  hiragana,\n  kanji\n) =>\n  `${hiragana} is ${kanji} in Kanji.`;\n\n\n// red・あか・赤\nconst red = vowels.a + kVowels.ka;\nconst redHiragana = englishHiragana('Red', red);\nconst redKanji = hiraganaKanji(red, '赤');\n\nconsole.log(redHiragana);\n// Red is あか in Hiragana.\nconsole.log(redKanji);\n// あか is 赤 in Kanji.\n\n\n// memory・きおく・記憶\nconst memory = kVowels.ki + vowels.o + kVowels.ku;\nconst memoryHiragana = englishHiragana('Memory', memory);\nconst memoryKanji = hiraganaKanji(memory, '記憶');\n\nconsole.log(memoryHiragana);\n// Memory is きおく in Hiragana.\nconsole.log(memoryKanji);\n// きおく is 記憶 in Kanji.\n\n\n// pond・いけ・池\nconst pond = vowels.i + kVowels.ke;\nconst pondHiragana = englishHiragana('Pond', pond);\nconst pondKanji = hiraganaKanji(pond, '池');\n\nconsole.log(pondHiragana);\n// Pond is いけ in Hiragana.\nconsole.log(pondKanji);\n// いけ is 池 in Kanji.\n\n\n// voice・こえ・声\nconst voice = kVowels.ko + vowels.e;\nconst voiceHiragana = englishHiragana('Voice', voice);\nconst voiceKanji = hiraganaKanji(voice, '声');\n\nconsole.log(voiceHiragana);\n// Voice is こえ in Hiragana.\nconsole.log(voiceKanji);\n// こえ is 声 in Kanji.\n",navLink:["consonants","svowels","one",""]},"consonant");var Fo,Wo,Go,Xo=(function(e){if(Array.isArray(e))return zo(e)}(Fo="aiueo")||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(Fo)||(Wo=Fo,zo(Wo,Go))||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){return"k"+e}));console.log(Xo.toString())})()})();