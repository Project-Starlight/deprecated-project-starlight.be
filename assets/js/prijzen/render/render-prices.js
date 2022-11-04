"use strict";

function renderPrices() {
    document.querySelector("#sterrenhemel #kleine-sterrenhemel span")
        .innerHTML = `${prettyPrice(_pricesAfterDiscount.smallOption.price)}`;
    document.querySelector("#sterrenhemel #gemiddelde-sterrenhemel span")
        .innerHTML = `${prettyPrice(_pricesAfterDiscount.mediumOption.price)}`;
    document.querySelector("#sterrenhemel #grote-sterrenhemel span")
        .innerHTML = `${prettyPrice(_pricesAfterDiscount.largeOption.price)}`;
    document.querySelector("#sterrenhemel #exclusieve-sterrenhemel span")
        .innerHTML = `${_pricesAfterDiscount.exclusiveOption.price}`
}

function getTotalPrice() {
    let selectedItems = getSelectedItemsObject();
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

function renderTotalPrice() {
    document.querySelector("#configuratie #totaal-prijs").innerHTML = `${prettyPrice(getTotalPrice())}`;
}

function renderExtraOptionPrices() {
    document.querySelector("#opties #twee-kleuren-optie span").innerHTML = prettyPrice(_pricesAfterDiscount.tweeKleuren.price, true);
    document.querySelector("#opties #meteorietenregen-optie span").innerHTML = prettyPrice(_pricesAfterDiscount.meteorietenregen.price, true);
}