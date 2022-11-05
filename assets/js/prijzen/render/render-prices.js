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



function renderTotalPrice() {
    document.querySelector("#configuratie #totaal-prijs").innerHTML = `${prettyPrice(getTotalPrice())}`;
}

function renderExtraOptionPrices() {
    document.querySelector("#opties #twee-kleuren-optie span").innerHTML = prettyPrice(_pricesAfterDiscount.tweeKleuren.price, true);
    document.querySelector("#opties #meteorietenregen-optie span").innerHTML = prettyPrice(_pricesAfterDiscount.meteorietenregen.price, true);
}