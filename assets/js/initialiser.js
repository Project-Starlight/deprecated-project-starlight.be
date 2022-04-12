"use strict";
const _local = {tel: '0497659529', email: 'michiel.stragier@gmail.com'}
document.addEventListener('DOMContentLoaded',init);

function init(){
    if (document.querySelector("#index")){
        document.querySelector("header #icons").addEventListener('click',header_icon);
    }
}
function header_icon(e){
    e.preventDefault();
    if (e.target.classList[1] === "fa-instagram"){
        window.open("https://www.instagram.com/");
    }
    else if(e.target.classList[1] === "fa-facebook-f"){
        window.open("https://www.facebook.com/");
    }
    else if(e.target.classList[1] === "fa-phone"){
        window.location.href(`tel:${_local.tel}`);
    }
    else if(e.target.classList[1] === "fa-envelope"){
        window.location.href(`mailto:${_local.email}`);
    }
}