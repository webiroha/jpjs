(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},t=function(e){var t=document.createElement(e.elem);return t.className=e.class,Array.isArray(e.text)?e.text.forEach((function(a,r){var n=document.createTextNode(a),o=document.createElement("br");t.appendChild(n),e.text.length-1>r&&t.appendChild(o)})):t.textContent=e.text,{tag:t}};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var r={root:document.getElementById("root"),WholeFrag:e(),Wrapper:t({elem:"div",class:"wrapper"}),CenterFrag:e()},n=r.root,o=r.WholeFrag,l=r.Wrapper,p=r.CenterFrag;n.className="root_layout_top",l.tag.className="wrapper wrapper_layout_top";var i,c=t({elem:"div",class:"center-wrapper"}),d=t({elem:"div",class:"deco slide-in-upper__0"}),s=t({elem:"span",class:"deco__item",text:"遊"}),u=t({elem:"h1",class:"jpjs opacity_0 slide-in-upper__1",text:["Japanese","JavaScript"]}),m=e(),y=[{letter:"に",x:-1.4,y:-.5},{letter:"ほ",x:1,y:-.1},{letter:"ん",x:-1.4,y:1.4},{letter:"ご",x:1.7,y:2.6}].map((function(e){return a={elem:"span",class:"nihongo-motion opacity_0",text:e.letter,x:e.x,y:e.y},(r=t(a).tag).style.top="".concat(a.y,"em"),r.style.left="".concat(a.x,"em"),function(){return r};var a,r})),h=(4,function(e){if(Array.isArray(e))return e}(i=y)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var l,p=e[Symbol.iterator]();!(r=(l=p.next()).done)&&(a.push(l.value),4!==a.length);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==p.return||p.return()}finally{if(n)throw o}}return a}}(i)||function(e,t){if(e){if("string"==typeof e)return a(e,4);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,4):void 0}}(i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=h[0],f=h[1],v=h[2],C=h[3];m().appendChild(g()),m().appendChild(f()),m().appendChild(v()),m().appendChild(C()),s.tag.appendChild(m()),d.tag.appendChild(s.tag),p().appendChild(d.tag),p().appendChild(u.tag),c.tag.appendChild(p());var x=t({elem:"div",class:"bottom-wrapper fade-in"}),b=e(),_=t({elem:"p",class:"copy",text:"Play with Japanese & JavaScript"}),w=t({elem:"a",class:"start-button",text:"Let's start!"});w.tag.href="./intro/preparation",b().appendChild(_.tag),b().appendChild(w.tag),x.tag.appendChild(b()),o().appendChild(c.tag),o().appendChild(x.tag),l.tag.appendChild(o()),n.appendChild(l.tag)})();