"use strict";
function showConfiguration(){
    const configuratie = loadFromStorage("configuratie");
    if (configuratie === null){
        showNoConfigurationYet();
    } else {
        const $configuratieDiv = document.querySelector("#configuratie-div").classList
        if ($configuratieDiv.contains("hidden")){
            $configuratieDiv.remove("hidden");
        }
        document.querySelector("#no-configuratie-li button").innerHTML = "Configureer configuratie!";
        document.querySelector("#totaal-prijs").innerHTML = prettyPrice(configuratie.totalPrice);
        document.querySelector("fieldset.contact-form-fieldset#configuratie #insert-chosen-options")
            .innerHTML = getConfigurationHtml(configuratie);
    }
}

function showContactGegevensContactUsPage() {
    document.querySelector("#contactgegevens .volledige-email p").innerHTML = `${_contactAndSocialMedia.email}`;
    document.querySelector("#contactgegevens .volledige-telefoonnummer p").innerHTML = `${_contactAndSocialMedia.tel}`;
    document.querySelector("#contactgegevens .instagram p").innerHTML = `${_contactAndSocialMedia.instagram}`;
    document.querySelector("#contactgegevens .facebook p").innerHTML =`${_contactAndSocialMedia.facebook}`;
}

function addClassForBarAnimation(selectors,direction){
    const classList = document.querySelector(selectors).classList;
    if (direction === "forward"){
        if (classList.contains("backward-bar-animation")) classList.replace("backward-bar-animation","forward-bar-animation");
    }
    else if (direction === "backward"){
        if (classList.contains("forward-bar-animation")) classList.replace("forward-bar-animation","backward-bar-animation");
    }
}

function showNoConfigurationYet() {
    const $configuratieDiv = document.querySelector("#configuratie-div").classList
    if (!$configuratieDiv.contains("hidden")){
        $configuratieDiv.add("hidden");
    }
    //TODO: Show screen when there is no configuration yet
}

