(()=>{var e,t;e=document.querySelector(".top-books"),t=1,e&&(e.querySelectorAll("a").forEach((function(l){var o=l.href.replace("http://helion.pl/view/9102Q/","").replace(".htm",""),a=document.createElement("div"),n=document.createElement("a"),r=document.createElement("img"),c=document.createElement("span");c.innerText="#"+t++,c.classList.add("position"),r.src="https://static01.helion.com.pl/global/okladki/181x236/".concat(o,".jpg"),a.classList.add("book","darker-overlay-on-hover"),n.href=l.href,a.appendChild(c),n.appendChild(r),a.appendChild(n),e.appendChild(a),l.style.boxShadow="none",a.appendChild(l)})),e.removeChild(e.querySelector("ol")),e.style.textAlign="center")})();