!function(e){function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function e(){var n=this;a(this,e),this.guides=[];for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];void 0!==i&&i.forEach(function(e){n.guides.push(e.toString().split(/\s->|or\s/))})};n.default=i},,function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){0!==b.length&&$(".return-btn").css("visibility","visible");var e=this.next;e&&b.push(e),r(e)}function r(e){1===b.length&&$(".return-btn").css("visibility","hidden"),y.clear(),e instanceof g.default?(m.set("Sugestia:"),y.addMessage("Zacznij z:"),e.guides.forEach(function(e,n){n>0&&y.addMessage("lub","span");var t=new d.default(!0);e.forEach(function(e,n){n%2==0&&0!==n&&t.addMessage("lub","span"),1===n&&t.addMessage('Później:<br><i class="then fa fa-long-arrow-down fa-4x" aria-hidden="true"></i>',"p"),t.add(e,e+".png",!1)})})):"string"==typeof e&&(m.set(f.default[e].question),f.default[e].answers.forEach(function(e){y.add(e.text,e.img,e.next)}))}function o(){if(1!==b.length){b.pop();r(b[b.length-1])}}Object.defineProperty(n,"__esModule",{value:!0}),n.functionClickedAnswer=void 0;var s=t(11),u=a(s),l=t(9),d=a(l),c=t(12),f=a(c),p=t(0),g=a(p),w=t(10),h=a(w),m=new u.default,y=new d.default,b=["whyProgramming"];(new h.default).load(function(){return r("whyProgramming")}),$(".return-btn").on("click",o),$(document).on("keydown",function(e){8===e.which&&o()}),$(".again-btn").on("click",function(){return r("whyProgramming")}),$(document).on("keydown",function(e){27===e.which&&r("whyProgramming")}),n.functionClickedAnswer=i},,,,,,,function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(){l=$(this).children("p").css("background-color"),$(this).children("img").addClass("jumpImg"),$(this).children("p").css("background-color","#0a5677"),$(this).children(".shade").addClass("shadeImg")}function r(){$(this).children("img").removeClass("jumpImg"),$(this).children("p").css("background-color",l),$(this).children(".shade").removeClass("shadeImg")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=t(2),u=function(){function e(n){if(a(this,e),this.container=document.querySelectorAll(".answers")[0],n){var t=this.container,i=document.createElement("div");i.classList.add("guide-container"),t.append(i),this.container=i}}return o(e,[{key:"add",value:function(e,n,t){var a=document.createElement("button");a.classList.add("answer"),a.next=t,a.addEventListener("mouseover",i),a.addEventListener("focus",i),a.addEventListener("mouseout",r),a.addEventListener("blur",r),a.setAttribute("tabindex","0");var o=document.createElement("img");o.setAttribute("src","img/"+n.toLowerCase().replace(/\s/g,"")),o.setAttribute("alt",""),a.appendChild(o);var u=document.createElement("div");u.classList.add("shade"),a.appendChild(u);var l=document.createElement("p");if(l.innerText=e,a.appendChild(l),!1!==t)this.container.appendChild(a),a.addEventListener("click",s.functionClickedAnswer);else{var d=document.createElement("a");d.setAttribute("href","technologies/"+e.toLowerCase().replace(/\s/g,"")+".html"),d.setAttribute("target","_blank"),d.appendChild(a),this.container.appendChild(d)}}},{key:"addMessage",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"p",t=document.createElement(n);"lub"===e&&t.classList.add("or"),t.innerHTML=e,this.container.appendChild(t)}},{key:"clear",value:function(){for(var e=this.container.children,n=e.length;n--;)e[n].classList.add("fadeOut"),e[n].style.display="none",e[n].remove()}}]),e}(),l=void 0;n.default=u},function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(){document.querySelector(".answers").innerHTML='<div class="spinner">\n  <div class="bounce1"></div>\n  <div class="bounce2"></div>\n  <div class="bounce3"></div>\n</div>'}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),o=t(14),s=function(e){return e&&e.__esModule?e:{default:e}}(o),u=function(){function e(){a(this,e)}return r(e,[{key:"load",value:function(e){window.addEventListener("load",e),s.default.forEach(function(e){(new Image).src="img/"+e}),document.addEventListener("DOMContentLoaded",i)}}]),e}();n.default=u},function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=function(){function e(){a(this,e),this.element=document.querySelector(".question")}return i(e,[{key:"set",value:function(e){this.element.innerText=e}}]),e}();n.default=r},function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(25),r=a(i),o=t(0),s=a(o),u={whyProgramming:{question:"Dlaczego chciałbyś się uczyć programowania?",answers:[new r.default("Chciałbym tym zainteresować moje dzieci","forkids.png",new s.default("Scratch -> Python or Javascript")),new r.default("Chciałbym zostać programistą","prodev.png","whichField"),new r.default("Mam pomysł na projekt","startup.png","whatToCreate"),new r.default("Nie wiem, słyszałem, że to fajne. Wybierz coś dla mnie!","fun.png",new s.default("Python","Javascript"))]},whatToCreate:{question:"Co chciałbyś zrobić?",answers:[new r.default("Aplikację mobilną!","mobile.png","whichMobilePlatform"),new r.default("Grę!","games.png","whichPlatformForGame"),new r.default("Aplikację desktopową!","webdev.png","whichDesktopPlatform"),new r.default("Prostą stronę internetową!","webdev2.png",new s.default("HTML & CSS -> Javascript")),new r.default("Założyć bloga!","webdev2.png",new s.default("Jekyll","Wordpress"))]},whichField:{question:"W jakiej dziedzinie?",answers:[new r.default("Aplikacje","webdev.png","typeOfApps"),new r.default("Gry","games.png","typeOfGames"),new r.default("Data science","dataanalysis.png",new s.default("R","Python")),new r.default("Systemy wbudowane","lowlevel.png",new s.default("C")),new r.default("Sztuczna inteligencja","brain.png",new s.default("Python")),new r.default("Robotyka","robot.png",new s.default("C","C++","Python")),new r.default("Bazy danych","databases.png",new s.default("SQL")),new r.default("Nie wiem, ja tylko chce $$$","money.png",new s.default("Java","C♯","Python"))]},whichMobilePlatform:{question:"Na jaką platformę?",answers:[new r.default("iOS","apple.png",new s.default("swift")),new r.default("Android","android.png",new s.default("java")),new r.default("Web","webdev.png","frontendOrBackend")]},whichDesktopPlatform:{question:"Na jaką platformę?",answers:[new r.default("Mac","apple.png",new s.default(["Swift"])),new r.default("Linux","linux.png",new s.default(["Java"])),new r.default("Windows","windows.png",new s.default("C♯")),new r.default("Wieloplatformowe","crossplatform.png",new s.default("Java"))]},typeOfApps:{question:"Jaki rodzaj aplikacji?",answers:[new r.default("Mobilne","mobile.png","whichMobilePlatform"),new r.default("Desktopowe","pc.png","whichDesktopPlatform"),new r.default("Webowe","webdev.png","frontendOrBackend")]},frontendOrBackend:{question:"Frontend czy backend?",answers:[new r.default("Frontend","frontend.png",new s.default("Javascript -> Angular or React")),new r.default("Backend","backend.png","whichTypeOfWork")]},whichTypeOfWork:{question:"Jaka praca bardziej Ci odpowiada?",answers:[new r.default("W korporacji","corpo.png","doLikeMicrosoft"),new r.default("Małe biznesy / Freelance","smallbuissness.png",new s.default("PHP","Python -> Django","Ruby -> Ruby on Rails","Javascript -> Node.js"))]},doLikeMicrosoft:{question:"Lubisz Microsoft?",answers:[new r.default("Tak","yes.png",new s.default("C♯ -> ASP.NET")),new r.default("Nie","no.png",new s.default("Java -> Spring"))]},typeOfGames:{question:"Jaki typ gier?",answers:[new r.default("AAA","aaa.png",new s.default("C++ -> Unreal Engine 4")),new r.default("Indie","indie.png",new s.default("C♯ -> Unity")),new r.default("Wirtualna rzeczywistość","virtualreality.png",new s.default("C++","C♯ -> Unity")),new r.default("Yyy co?","undecided.png","easyOrPerformence")]},whichPlatformForGame:{question:"Na jaką plaftormę?",answers:[new r.default("Gra desktopowa","pc.png","typeOfGames"),new r.default("Gra mobilna","mobile.png",new s.default("C♯ -> Unity","Java -> LibGDX")),new r.default("Gra przeglądarkowa","webdev.png",new s.default("Javascript -> Phaser"))]},easyOrPerformence:{question:"Łatwiejsza nauka czy wydajność?",answers:[new r.default("Łatwiejsza nauka","easylerning.png",new s.default("C♯ -> Unity")),new r.default("Wydajność","graphics.png",new s.default("C++ -> Unreal Engine 4"))]}};n.default=u},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=["aaa.png","android.png","angular.png","apple.png","asp.net.png","backend.png","brain.png","c++.png","c.png","corpo.png","crossplatform.png","c♯.png","dataanalysis.png","databases.png","django.png","easylerning.png","facebook.png","forkids.png","frontend.png","fun.png","games.png","google.png","graphics.png","html&css.png","imagesNames.js","indie.png","java.png","javascript.png","jekyll.png","lernsthnew.png","libgdx.png","linux.png","logo.ico","logo.png","lowlevel.png","microsoft.png","mobile.png","money.png","no.png","node.js.png","pc.png","phaser.png","php.png","prodev.png","python.png","r.png","react.png","robot.png","ruby.png","rubyonrails.png","scratch.png","smallbuissness.png","spring.png","sql.png","startup.png","statistics.png","swift.png","undecided.png","unity.png","unrealengine4.png","virtualreality.png","webdev.png","webdev2.png","windows.png","wordpress.png","yes.png"];n.default=a},,,,,,,,,,,function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function e(n,t,i){a(this,e),this.text=n,this.img=t,this.next=i};n.default=i}]);