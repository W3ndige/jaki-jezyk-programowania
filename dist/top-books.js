!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=216)}({216:function(e,t){var n,r;n=document.querySelector(".top-books"),r=1,n&&(n.querySelectorAll("a").forEach(function(e){var t=e.href.replace("http://helion.pl/view/9102Q/","").replace(".htm",""),o=document.createElement("div"),l=document.createElement("a"),c=document.createElement("img"),i=document.createElement("span");i.innerText="#"+r++,i.classList.add("position"),c.src="https://static01.helion.com.pl/global/okladki/181x236/".concat(t,".jpg"),o.classList.add("book"),l.href=e.href,o.appendChild(i),l.appendChild(c),o.appendChild(l),n.appendChild(o),e.style.boxShadow="none",o.appendChild(e)}),n.removeChild(n.querySelector("ol")),n.style.textAlign="center")}});