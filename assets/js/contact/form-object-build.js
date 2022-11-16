"use strict";
function getBodyForm() {
    return {
            "voornaam": document.querySelector("input[name='voornaam']").value,
            "achternaam": document.querySelector("input[name='achternaam']").value,
            "email": document.querySelector("input[name='email']").value,
            "telefoon": document.querySelector("input[name='tel']").value,
            "automerk": document.querySelector("input[name='merk']").value,
            "automodel": document.querySelector("input[name='model']").value,
            "autojaar": document.querySelector("input[name='jaar']").value,
            "sterrenhemel": getSterrenhemel(),
            "bericht": document.querySelector("textarea#bericht-in").value,
            "tweekleuren": isTweeKleurenSelected(),
            "meteorietenregen": isMeteorietenregenSelected(),
            "sterrenhemelPrijs": `${getSterrenhemelPrijs(getSterrenhemel())}`,
            "tweekleurenPrijs": _pricesAfterDiscount.tweeKleuren.price,
            "meteorietenregenPrijs": _pricesAfterDiscount.tweeKleuren.price,
            "totaalPrijs": `${getTotalPrice()}`
        };
}

function isTweeKleurenSelected() {
    const configuratie = loadFromStorage("configuratie")
    return configuratie.extraOpties.includes("twee-kleuren-optie");
}

function isMeteorietenregenSelected() {
    const configuratie = loadFromStorage("configuratie")
    return configuratie.extraOpties.includes("meteorietenregen-optie");
}
function getSterrenhemel(){
    const configuratie = loadFromStorage("configuratie")
    return configuratie.sterrenhemel;
}