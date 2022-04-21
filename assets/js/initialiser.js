"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    if (document.querySelector("header")){
        document.querySelector("header #icons").addEventListener('click',header_icon);
        document.querySelector("header h1").addEventListener('click',()=>{navigateToDifferentHtmlPage("index.html")});
    }
    if (document.querySelector("#prijs-pagina")){
        document.querySelectorAll("#prijs-pagina main div div").forEach((Element)=> {
            Element.addEventListener('click',navigateFromPricingToContact)
        });
    }
    if (document.querySelector("#contactUs")){
        if(loadFromStorage("selectedPriceCategory")){
            document.querySelectorAll("form option").forEach((Element)=>{
                if (loadFromStorage("selectedPriceCategory") === Element.value){
                    Element.selected = "selected";
            }});

        }
    }
}

function navigateFromPricingToContact(e){
    e.preventDefault();
    saveToStorage("selectedPriceCategory", e.target.closest("div").id);
    navigateToDifferentHtmlPage("ContactUs.html");
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
