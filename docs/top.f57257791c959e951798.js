(()=>{"use strict";const e=function(){var e=document.createDocumentFragment();return function(){return e}},t=function(e){var t=document.createElement(e.elem);return t.className=e.class,t.id=e.id,Array.isArray(e.text)?e.text.forEach((function(a,r){var n=document.createTextNode(a),p=document.createElement("br");t.appendChild(n),e.text.length-1>r&&t.appendChild(p)})):t.textContent=e.text,{tag:t}};window.onload=function(){document.getElementById("loading").classList.add("loaded")};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var r=function(){var a=document.getElementById("root"),r=e(),n=t({elem:"div",id:"loading"}),p=t({elem:"div",class:"sk-pulse"});return n.tag.appendChild(p.tag),{root:a,WholeFrag:r,Spinner:n,Wrapper:t({elem:"div",class:"wrapper",id:"wrap"}),CenterFrag:e()}}(),n=r.root,p=r.WholeFrag,l=r.Spinner,i=r.Wrapper,o=r.CenterFrag;i.tag.className="wrapper wrapper_layout_top";var d,c=t({elem:"div",class:"upper-wrapper"}),s=t({elem:"div",class:"upper-wrapper__inner wrapper_layout_top__inner"}),u=t({elem:"div",class:"deco slide-in-upper__0"}),m=t({elem:"span",class:"deco__item",text:"遊"}),g=t({elem:"h1",class:"jpjs opacity_0 slide-in-upper__1",text:["Japanese","JavaScript"]}),h=e(),y=[{letter:"に",x:-1.4,y:-.5},{letter:"ほ",x:1,y:-.1},{letter:"ん",x:-1.4,y:1.2},{letter:"ご",x:1.7,y:2.2}].map((function(e){return a={elem:"span",class:"nihongo-motion opacity_0",text:e.letter,x:e.x,y:e.y},(r=t(a).tag).style.top="".concat(a.y,"em"),r.style.left="".concat(a.x,"em"),function(){return r};var a,r})),f=(4,function(e){if(Array.isArray(e))return e}(d=y)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,p=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(a.push(l.value),4!==a.length);r=!0);}catch(e){n=!0,p=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw p}}return a}}(d)||function(e,t){if(e){if("string"==typeof e)return a(e,4);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,4):void 0}}(d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=f[0],C=f[1],x=f[2],w=f[3];h().appendChild(v()),h().appendChild(C()),h().appendChild(x()),h().appendChild(w()),m.tag.appendChild(h()),u.tag.appendChild(m.tag),o().appendChild(u.tag),o().appendChild(g.tag);var _=t({elem:"p",class:"copy",text:"Play with Japanese & JavaScript"});o().appendChild(_.tag),s.tag.appendChild(o()),c.tag.appendChild(s.tag);var b=t({elem:"div",class:"bottom-wrapper fade-in"}),S=e(),A=e(),j=t({elem:"div",class:"pagelinks-wrapper"}),E=t({elem:"div",class:"pagelinks-wrapper__inner"});["preparation","characters","vowels","consonants"].map((function(e,a){return S().appendChild(((n=t({elem:"a",class:"pagelink fade-in",text:a+". "+(r=e).charAt(0).toUpperCase()+r.slice(1)})).tag.href="./intro/".concat(r),n.tag));var r,n})),E.tag.appendChild(S()),j.tag.appendChild(E.tag),A().appendChild(j.tag),b.tag.appendChild(A()),p().appendChild(c.tag),p().appendChild(b.tag),i.tag.appendChild(p()),n.appendChild(l.tag),n.appendChild(i.tag)})();