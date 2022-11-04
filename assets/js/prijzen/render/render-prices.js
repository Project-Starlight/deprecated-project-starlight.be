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

function prettyPrice(price, extraOption = false) {
    if (price === "gratis") {
        return "gratis";
    } else if (price === "Prijs op aanvraag"){
        return price;
    }else if (!extraOption) {
        return `€${price}`;
    } else if (extraOption) {
        return `+€${price}`;
    }
}

function getTotalPrice() {
    const selectedItems = getSelectedItemsObject();
    let totalPrice = 0;
    let tweeKleurenPrijs;
    let meteorietenregenPrijs;

    if (_pricesAfterDiscount.tweeKleuren.price === "gratis") tweeKleurenPrijs = 0;
    else tweeKleurenPrijs = _pricesAfterDiscount.tweeKleuren.price;
    if (_pricesAfterDiscount.meteorietenregen.price === "gratis") meteorietenregenPrijs = 0;
    else meteorietenregenPrijs = _pricesAfterDiscount.meteorietenregen.price;

    switch (selectedItems.sterrenhemel) {
        case "kleine-sterrenhemel":
            totalPrice = _pricesAfterDiscount.smallOption.price;
            break;
        case "gemiddelde-sterrenhemel":
            totalPrice = _pricesAfterDiscount.mediumOption.price;
            break;
        case "grote-sterrenhemel":
            totalPrice = _pricesAfterDiscount.largeOption.price;
            break;
        case "exclusieve-sterrenhemel":
            return _pricesAfterDiscount.exclusiveOption.price;
    }
    if (selectedItems.extraOpties.length === 2) return totalPrice += (tweeKleurenPrijs + meteorietenregenPrijs);
    else if (selectedItems.extraOpties[0] === "twee-kleuren-optie") return totalPrice += tweeKleurenPrijs;
    else if (selectedItems.extraOpties[0] === "meteorietenregen-optie") return totalPrice += meteorietenregenPrijs;
    return totalPrice;
}

function renderTotalPrice() {
    document.querySelector("#configuratie #totaal-prijs").innerHTML = `${prettyPrice(getTotalPrice())}`;
}

function renderExtraOptionPrices() {
    document.querySelector("#opties #twee-kleuren-optie span").innerHTML = prettyPrice(_pricesAfterDiscount.tweeKleuren.price, true);
    document.querySelector("#opties #meteorietenregen-optie span").innerHTML = prettyPrice(_pricesAfterDiscount.meteorietenregen.price, true);
}