"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    if (document.querySelector("#index")){
        document.querySelector("header #icons").addEventListener('click',header_icon);
        document.querySelector("header #drop-down-arrow i").addEventListener('click',switch_nav);
    }
}

function header_icon(e){
    e.preventDefault();
    if (e.target.classList[1] === "fa-instagram"){
        window.open(_local.instagramURL);
    }
    else if(e.target.classList[1] === "fa-facebook-f"){
        window.open(_local.facebookURL);
    }
    else if(e.target.classList[1] === "fa-phone"){
        window.location.href = `tel:${_local.tel}`;
    }
    else if(e.target.classList[1] === "fa-envelope"){
        window.location.href = `mailto:${_local.email}`;
    }
}
window.onscroll = function (e) {
    if(window.scrollY === 0){
        hide_nav(e);
    }
    if(window.scrollY >= 10) {
        show_nav(e);
    }
}

function switch_nav(e){
    e.preventDefault();
    if (document.querySelector("header nav").className === "hidden"){
        show_nav(e);
    } else {
        hide_nav(e);
    }
}
function show_nav(e){
    e.preventDefault();
    document.querySelector("header nav").className = "";
    document.querySelector("header #drop-down-arrow").style.transform = "rotate(180deg)";
}
function hide_nav(e){
    e.preventDefault();
    document.querySelector("header nav").className = "hidden";
    document.querySelector("header #drop-down-arrow").style.transform = "rotate(0deg)";
}
