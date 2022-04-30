"use strict";

document.addEventListener('DOMContentLoaded',init);

function init(){
    if (document.querySelector("header")){
        document.querySelector("header #icons").addEventListener('click',header_icon);
        document.querySelector("header h1").addEventListener('click',()=>{navigateToDifferentHtmlPage("../index.html")});
    }
    if (document.querySelector("#prijs-pagina")){
        renderPrice();
        document.querySelectorAll("#prijs-pagina main div div").forEach((Element)=> {
            Element.addEventListener('click',navigateFromPricingToContact)
        });
    }
    if (document.querySelector("#contactUs")){
        if(loadFromStorage("selectedPriceCategory")){
            document.querySelectorAll("#pricingOption option").forEach((Element)=>{
                if (loadFromStorage("selectedPriceCategory") === Element.value){
                    Element.selected = "selected";
            }});
        }
        document.querySelector(".begin button").addEventListener("click",(e)=>{
            navigateWithHidden(".begin",".algemene-informatie",e)
        });
        document.querySelector(".algemene-informatie button[name='terug']").addEventListener("click",(e)=>{
            navigateWithHidden(".algemene-informatie",".begin",e)
        });
        document.querySelector(".algemene-informatie button[name='volgende']").addEventListener("click",(e)=>{
            navigateWithHidden(".algemene-informatie",".product-informatie",e)
        });
        document.querySelector(".product-informatie button[name='terug']").addEventListener("click",(e)=>{
            navigateWithHidden(".product-informatie",".algemene-informatie",e)
        });
        document.querySelector(".product-informatie button[name='volgende']").addEventListener("click",(e)=>{
            navigateWithHidden(".product-informatie",".bericht",e)
        });
        document.querySelector(".bericht button[name='terug']").addEventListener("click",(e)=>{
            navigateWithHidden(".bericht",".product-informatie",e)
        });
        document.querySelector(".bericht button[name='volgende']").addEventListener("click",(e)=>{
            navigateWithHidden(".bericht",".final-check",e);
            showFinalCheck(e);
        });
        document.querySelector(".final-check button[name='terug']").addEventListener("click",(e)=>{
            navigateWithHidden(".final-check",".bericht",e)
        });
        document.querySelector(".final-check input[name='verstuur']").addEventListener("click",(e)=>{
            postContactForm(e)
        });
    }

}

function showFinalCheck(e){
    const html =
        `<p>${document.querySelector(".algemene-informatie input[name='voornaam']").value}</p>
                    <p>${document.querySelector(".algemene-informatie input[name='achternaam']").value}</p>
                    <p>${document.querySelector(".algemene-informatie input[name='email']").value}</p>
                    <p>${document.querySelector(".algemene-informatie input[name='telefoon']").value}</p>
                    <p>${document.querySelector(".product-informatie input[name='merk']").value}</p>
                    <p>${document.querySelector(".product-informatie input[name='model']").value}</p>
                    <p>${document.querySelector(".product-informatie input[name='jaar']").value}</p>
                    <p>${document.querySelector(".product-informatie select").value}</p>
                    <p>${document.querySelector(".bericht textarea").value}</p>`
    document.querySelector(".final-check div div:last-child").innerHTML = html;
}

function navigateFromPricingToContact(e){
    e.preventDefault();
    saveToStorage("selectedPriceCategory", e.target.closest("div").id);
    navigateToDifferentHtmlPage("contactUs.html");
}

function navigateToDifferentHtmlPage(htmlPage) {
    if (document.querySelector('#index')){
        window.location.href = `pages/${htmlPage}`;
    } else {
        window.location.href = `${htmlPage}`;
    }

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
