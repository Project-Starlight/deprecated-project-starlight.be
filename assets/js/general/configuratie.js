"use strict";

function getConfiguratieObject() {
    let res = {
        sterrenhemel: null,
        extraOpties: []
    }
    if (document.querySelectorAll("#sterrenhemel .sterrenhemel-box[aria-disabled='false']").length === 1) {
        res.sterrenhemel = document.querySelector("#sterrenhemel .sterrenhemel-box[aria-disabled='false']").getAttribute("id");
    }
    document.querySelectorAll("#opties .opties-box[aria-disabled='false']").forEach(optiesBox => {
        res.extraOpties.push(optiesBox.getAttribute("id"))
    })
    return res;
}

function getConfiguratieObjectExtended() {
    let res = getConfiguratieObject();
    res.totalPrice = getTotalPrice();
    return res;
}

function getTotalPrice() {
    let selectedItems = getConfiguratieObject();
    if (selectedItems.sterrenhemel === null) selectedItems = loadFromStorage("configuratie");
    let totalPrice = 0;
    let tweeKleurenPrijs;
    let meteorietenregenPrijs;

    if (_pricesAfterDiscount.tweeKleuren.price === "gratis") tweeKleurenPrijs = 0;
    else tweeKleurenPrijs = _pricesAfterDiscount.tweeKleuren.price;
    if (_pricesAfterDiscount.meteorietenregen.price === "gratis") meteorietenregenPrijs = 0;
    else meteorietenregenPrijs = _pricesAfterDiscount.meteorietenregen.price;

    totalPrice = getSterrenhemelPrijs(selectedItems.sterrenhemel);
    if (selectedItems.sterrenhemel === "exclusieve-sterrenhemel") return totalPrice;

    if (selectedItems.extraOpties.length === 2) return totalPrice + (tweeKleurenPrijs + meteorietenregenPrijs);
    else if (selectedItems.extraOpties[0] === "twee-kleuren-optie") return totalPrice + tweeKleurenPrijs;
    else if (selectedItems.extraOpties[0] === "meteorietenregen-optie") return totalPrice + meteorietenregenPrijs;
    return totalPrice;
}

function getSterrenhemelPrijs(sterrenhemel) {
    switch (sterrenhemel) {
        case "kleine-sterrenhemel":
            return _pricesAfterDiscount.smallOption.price;
        case "gemiddelde-sterrenhemel":
            return _pricesAfterDiscount.mediumOption.price;
        case "grote-sterrenhemel":
            return _pricesAfterDiscount.largeOption.price;
        case "exclusieve-sterrenhemel":
            return _pricesAfterDiscount.exclusiveOption.price;
    }
}