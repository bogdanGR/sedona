"use strict";!function(){var e=document.querySelector(".feedback-form"),t=e.querySelector("#first-name"),a=e.querySelector("#last-name"),r=e.querySelector("#patronymic"),o=(e.querySelector(".feedback-form__textarea"),e.querySelector("#tel")),l=e.querySelector("#email"),u=(e.querySelector(".feedback-form__error-msg"),document.querySelector(".popup-failure")),c=document.querySelector(".popup-success"),s=u.querySelector(".popup-failure__btn"),n=c.querySelector(".popup-success__btn"),i=localStorage.getItem("firstName"),m=localStorage.getItem("lastName"),p=localStorage.getItem("patronymic"),d=localStorage.getItem("tel"),v=localStorage.getItem("feedbackFormMail");(i||m||p||d||v)&&(t.value=i,a.value=m,r.value=p,o.value=d,l.value=v);var f=function(){u.classList.contains("popup-failure--show")&&u.classList.remove("popup-failure--show")},g=function(){c.classList.contains("popup-success--show")&&c.classList.remove("popup-success--show")},S=function(e){return void 0!==e.keyCode},y=function(e){return S(e)&&27===e.keyCode},q=function(e){e.preventDefault(),t.value&&a.value&&r.value&&o.value&&l.value?(c.classList.add("popup-success--show"),localStorage.setItem("firstName",t.value),localStorage.setItem("lastName",a.value),localStorage.setItem("patronymic",r.value),localStorage.setItem("tel",o.value),localStorage.setItem("feedbackFormMail",l.value)):u.classList.add("popup-failure--show")};e.addEventListener("submit",q),s.addEventListener("click",f),n.addEventListener("click",g),window.addEventListener("keydown",function(e){y(e)&&(g(),f())}),t.required=!0,t.minLength=3,t.maxLength=15,a.required=!0,a.minLength=3,a.maxLength=15,r.required=!0,r.minLength=5,r.maxLength=15,o.required=!0,l.required=!0}();