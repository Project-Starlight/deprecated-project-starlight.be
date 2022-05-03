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
            if (!checkRequirements(e)){
                postContactForm(e);
            }
        });
    }

}

