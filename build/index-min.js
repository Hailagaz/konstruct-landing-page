document.addEventListener("DOMContentLoaded",()=>{window.location.hash&&document.querySelector(window.location.hash).scrollIntoView();var e=document.querySelectorAll(".header__link[data-goto]");function t(e){var t=e.target;t.dataset.goto&&document.querySelector(t.dataset.goto)&&(t=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight,iconHeader.classList.contains("_active")&&(document.body.classList.remove("_lock"),iconHeader.classList.remove("_active"),navHeader.classList.remove("_active")),window.scrollTo({top:t,behavior:"smooth"}),e.preventDefault())}0<e.length&&e.forEach(e=>{e.addEventListener("click",t)})});
document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".showbutton");window.addEventListener("scroll",function(n){700<window.scrollY?o.classList.remove("showbutton__hidden"):window.scrollY<700&&o.classList.add("showbutton__hidden")}),o.addEventListener("click",function(n){window.scrollTo(0,0)})});