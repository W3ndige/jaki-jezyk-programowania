(()=>{var e={7348:(e,t,r)=>{function o(){var e=document.createElement("div"),t=document.createElement("i");return t.classList.add("fa","fa-star"),e.append(t),e}r(169),document.querySelectorAll(".stars").forEach((function(e){return function(e){var t,r=e.getAttribute("data-rating");for(t=r;t>1;t--){var a=o(),n=document.createElement("i");n.classList.add("fa","fa-star","filled"),a.append(n),e.append(a)}var l=o(),c=document.createElement("i");c.classList.add("fa","fa-star","filled","not-full"),c.style.width="".concat(17.66*t,"px"),l.append(c),e.append(l)}(e)})),document.location.hash.includes(encodeURI("książki"))?document.querySelector(".books").scrollIntoView():document.location.hash.includes("kursy")&&document.querySelector(".courses").scrollIntoView()},169:(e,t,r)=>{"use strict";r.r(t)},8103:(e,t,r)=>{"use strict";r.r(t)}},t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(8103),r(7348),document.querySelectorAll(".book").forEach((function(e){var t=e.querySelector(".helion-ksiazkasm4");if(t)if(t.innerText.startsWith("nak"))e.parentElement.removeChild(e);else{var r,o,a=e.getAttribute("data-book-id"),n=document.createElement("a");n.classList.add("book-link","darker-overlay-on-hover"),n.target="_blank",n.href="https://helion.pl/view/9102Q/".concat(a,".htm"),o=n,(r=e).parentNode.insertBefore(o,r),o.appendChild(r)}}))})();