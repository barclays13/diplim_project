!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{document.querySelector(".head").querySelector(".right");const e=document.getElementById("callback_form"),t=document.getElementById("free_visit_form");document.addEventListener("click",n=>{const l=n.target;(l.classList.contains("close_icon")||l.classList.contains("overlay"))&&(e.style.display="none",t.style.display="none"),l.classList.contains("open-popup")&&(t.style.display="block"),l.matches(".head-main>.right>.call>.btn")&&(e.style.display="block")})};var o=()=>{document.getElementsByName("name").forEach(e=>{e.addEventListener("input",()=>{console.log(0),e.value=e.value.replace(/[^а-яё]/i,"")})}),document.getElementsByName("phone").forEach(e=>{e.addEventListener("input",()=>{console.log(1),e.value=e.value.replace(/[^+0-9]/,"")})})};var r=()=>{document.querySelectorAll(".form-content>form").forEach(t=>{t.addEventListener("submit",n=>{n.preventDefault();const l=document.createElement("div");l.style.cssText="color:white; font-size: 2rem",t.parentNode.parentNode.append(l),l.textContent="Идет отправка...";const o=new FormData(t);let r={};o.forEach((e,t)=>{r[t]=e}),e(r).then(()=>{t.parentNode.remove(),l.textContent="Отправлено!";t.querySelectorAll("input").forEach(e=>e.value="")}).catch(e=>{t.parentNode.remove(),l.textContent="Ошибка, что-то пошло не так...",console.error(e)})})});const e=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var c=()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",()=>{e.style.display="none",t.style.display="block"}),t.addEventListener("click",e=>{const n=e.target;(n.classList.contains("close_icon")||n.classList.contains("overlay")||n.classList.contains("btn"))&&t.removeAttribute("style")})};var s=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"},3e3)};var a=()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".wrapper>a");0==window.scrollY&&(t.style.display="none"),document.addEventListener("scroll",()=>{window.scrollY>190&&document.documentElement.clientWidth<768?e.style.position="fixed":e.removeAttribute("style"),window.scrollY<775?t.style.display="none":t.style.display="block"})};var i=()=>{const e=document.querySelector(".top-menu").querySelector("img"),t=document.querySelector(".popup-menu");t.querySelector("img");e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",()=>{t.style.display="none"})};var d=()=>{const e=document.querySelector(".gallery-slider").querySelectorAll(".slide");e.forEach((e,t)=>{0==t?e.style.display="block":0!==t&&(e.style.display="none")});let t=0;setInterval(()=>{((e,t)=>{e[t].style.display="none"})(e,t),++t>=e.length&&(t=0),((e,t)=>{e[t].style.display="block"})(e,t)},2500)};var u=()=>{const e=document.querySelector("#cards"),t=e.querySelector("#card_order"),n=e.querySelectorAll(".club>input"),l=e.querySelector("#price-total"),o=e.querySelector(".price-message>input");t.addEventListener("change",(e,t)=>{const r=e.target;r.matches("#card_leto_mozaika")?(n[1].removeAttribute("checked"),n[0].setAttribute("checked","")):r.matches("#card_leto_schelkovo")&&(n[0].removeAttribute("checked"),n[1].setAttribute("checked","")),(r.matches("input")||r.matches("label"))&&(console.log(r),(e=>{let t,r=0;e.matches("#m1")&&n[0].hasAttribute("checked")&&(r=1999),e.matches("#m2")&&n[0].hasAttribute("checked")&&(r=9900),e.matches("#m3")&&n[0].hasAttribute("checked")&&(r=13900),e.matches("#m4")&&n[0].hasAttribute("checked")&&(r=19900),e.matches("#m1")&&n[1].hasAttribute("checked")&&(r=2999),e.matches("#m2")&&n[1].hasAttribute("checked")&&(r=14990),e.matches("#m3")&&n[1].hasAttribute("checked")&&(r=21990),e.matches("#m4")&&n[1].hasAttribute("checked")&&(r=24990),t="ТЕЛО2019"!=o.value?1:.7,r&&t&&(l.textContent=r*t)})(r))})};var y=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide");e.addEventListener("click",e=>{e.target;let n=[0,1,2,3,4];t[n.length].style.display="block",t[n[0]].style.display="none",console.log("sumSlide",n),t.forEach((e,t)=>{"block"==e.style.display&&n.push(t)})})};(()=>{const e=document.querySelector(".clubs-list"),t=e.querySelector("ul");e.addEventListener("click",()=>{t.hasAttribute("style")?t.removeAttribute("style"):(t.style.display="none")&&(t.style.display="block")})})(),l(),c(),i(),a(),u(),r(),o(),y(),d(),s()}]);