"use strict"

function navigateWithHidden(queryToBeHidden,queryToBeShown,e){
    e.preventDefault();
    document.querySelector(queryToBeHidden).classList.add("hidden");
    document.querySelector(queryToBeShown).classList.remove("hidden");
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

function navigateFinalCheckLi(className,e){
    if (className.contains("Voornaam")||className.contains("Achternaam")||className.contains("Email")||className.contains("Telefoon")){
        navigateWithHidden(".final-check",".algemene-informatie",e);
    }
    if (className.contains("Merk")||className.contains("Model")||className.contains("Jaar")||className.contains("Optie")){
        navigateWithHidden(".final-check",".product-informatie",e);
    }
    if (className.contains("Bericht")){
        navigateWithHidden(".final-check",".bericht",e);
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
