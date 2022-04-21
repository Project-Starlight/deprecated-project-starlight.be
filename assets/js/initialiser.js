"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    if (document.querySelector("header")){
        document.querySelector("header #icons").addEventListener('click',header_icon);
        document.querySelector("header h1").addEventListener('click',()=>{navigateToDifferentHtmlPage("index.html")});
    }
}

function navigateToDifferentHtmlPage(htmlPage) {
    window.location.href = `${htmlPage}`;
}

function header_icon(e){
    e.preventDefault();
    switch (e.target.classList[1]){
        case "fa-instagram":
            window.open(_local.instagramURL);
            break;
        case "fa-facebook-f":
            window.open(_local.facebookURL);
            break;
        case "fa-phone":
            window.location.href = `tel:${_local.tel}`;
            break;
        case "fa-envelope":
            window.location.href = `mailto:${_local.email}`;
            break;
    }
}
