!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{document.getElementsByName("name").forEach(e=>{e.addEventListener("input",()=>{console.log(0),e.value=e.value.replace(/[^а-яё]/i,"")})})};var r=()=>{const e=document.querySelectorAll(".form-content>form"),t=document.querySelector("#banner-form"),o=document.querySelector("#thanks"),n=document.querySelector("#check1");t.addEventListener("submit",e=>{e.preventDefault();const l=document.createElement("div");if(l.style.cssText="color:white; font-size: 2rem",t.append(l),!n.checked)return l.style.cssText="color:red; font-size: 1rem","Необходимо подвердить согласие!"==l.previousSibling.textContent||"checkbox"==l.previousSibling.name?void(l.name="checkbox"):(l.textContent="Необходимо подвердить согласие!",void(l.name="checkbox"));l.textContent="Идет отправка...";e.target;const c=new FormData(t);let s={};c.forEach((e,t)=>{s[t]=e}),r(s).then(()=>{t.parentNode.remove(),l.textContent="Запрос отправлен!",o.style.display="block";t.querySelectorAll("input").forEach(e=>e.value="")}).catch(e=>{t.parentNode.remove(),l.textContent="Ошибка, что-то пошло не так...",console.error(e)})}),e.forEach(e=>{e.addEventListener("submit",t=>{t.preventDefault();const o=document.createElement("div");o.style.cssText="color:white; font-size: 2rem",e.parentNode.parentNode.append(o),o.textContent="Идет отправка...";const n=new FormData(e);let l={};n.forEach((e,t)=>{l[t]=e}),r(l).then(()=>{e.parentNode.remove(),o.textContent="Запрос отправлен!";e.querySelectorAll("input").forEach(e=>e.value="")}).catch(t=>{e.parentNode.remove(),o.textContent="Ошибка, что-то пошло не так...",console.error(t)})})});const r=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var l=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"},3e3)};var c=()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".wrapper>a");0==window.scrollY&&(t.style.display="none"),document.addEventListener("scroll",()=>{window.scrollY>190&&document.documentElement.clientWidth<768?e.style.position="fixed":e.removeAttribute("style"),window.scrollY<775?t.style.display="none":t.style.display="block"})};var s=()=>{const e=document.querySelector(".top-menu").querySelector("img"),t=document.querySelector(".popup-menu");t.querySelector("img");e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",()=>{t.style.display="none"})};var i=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide");t.forEach((e,t)=>{0==t?e.style.display="block":0!==t&&(e.style.display="none")});let o=0;const n=()=>{((e,t)=>{e[t].style.display="none"})(t,o),++o>=t.length&&(o=0),((e,t)=>{e[t].style.display="block"})(t,o)},r=document.createElement("div");r.classList.add("prev"),e.before(r);const l=document.createElement("div");l.classList.add("next"),e.after(l),setInterval(n,2500)};var a=()=>{const e=document.querySelector("#card_order"),t=document.querySelector(".price-message>input"),o=document.querySelector("#price-total"),n={mozaika:[{period:1,price:1999},{period:6,price:9900},{period:9,price:13900},{period:12,price:19900}],schelkovo:[{period:1,price:2999},{period:6,price:14990},{period:9,price:21990},{period:12,price:24990}]};e.addEventListener("change",e=>{const t=e.target;t.matches(".time>input")&&s(t),t.matches(".club>input")&&l(t)});let r="mozaika";const l=e=>{r=e.value,i()};let c=1;const s=e=>{c=e.value,i()},i=e=>{let l;const s=n[r].find(e=>e.period==c);l=t.value!=e?1:.7,o.textContent=Math.ceil(s.price*l)}};var d=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide");e.addEventListener("click",e=>{e.target;let o=[0,1,2,3,4];t[o.length].style.display="block",t[o[0]].style.display="none",console.log("sumSlide",o),t.forEach((e,t)=>{"block"==e.style.display&&o.push(t)})})};(()=>{const e=document.getElementById("callback_form"),t=document.getElementById("free_visit_form"),o=document.querySelectorAll(".popup"),n=document.querySelector(".fixed-gift"),r=document.getElementById("gift"),l=document.querySelector(".clubs-list").querySelector("ul");document.addEventListener("click",c=>{const s=c.target;if((s.classList.contains("close_icon")||s.classList.contains("overlay")||s.classList.contains("close-btn"))&&o.forEach(e=>{e.style.display="none"}),s.matches(".clubs-list>p")){if(l.hasAttribute("style"))return void l.removeAttribute("style");(l.style.display="none")&&(l.style.display="block")}s.matches(".fixed-gift>img")&&(n.style.display="none",r.style.display="block"),s.classList.contains("open-popup")&&(t.style.display="block"),s.matches(".head-main>.right>.call>.btn")&&(e.style.display="block")})})(),s(),c(),a(),r(),n(),d(),i(),l()}]);