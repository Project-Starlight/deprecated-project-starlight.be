

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
