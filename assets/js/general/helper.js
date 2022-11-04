"use strict";

/* This mostly consist of helper functions we use around the different pages! */
function prettyPrice(price, extraOption = false) {
    if (price === "gratis") {
        return "gratis";
    } else if (price === "Prijs op aanvraag") {
        return price;
    } else if (!extraOption) {
        return `€${price}`;
    } else if (extraOption) {
        return `+€${price}`;
    }
}
function getExtraOptionPrice(option) {
    switch (option) {
        case "twee-kleuren-optie":
            return _pricesAfterDiscount.tweeKleuren.price;
        case "meteorietenregen-optie":
            return _pricesAfterDiscount.meteorietenregen.price;

    }
}

function getConfigurationHtml(configuratie) {
    let html = "";
    if (configuratie.sterrenhemel === null) {
        html += `<li>Geen sterrenhemel gekozen</li>`
    } else if (configuratie.sterrenhemel === "exclusieve-sterrenhemel") {
        html += `<li>${configuratie.sterrenhemel}</li><li>Zet bij uw bericht wat voor opties u wilt!</li>`
    } else {
        html += `<li>${configuratie.sterrenhemel}</li>`
    }
    configuratie.extraOpties.forEach(optie => {
        if (optie === "geen-optie") {
            html += `<li>Geen optie(s) geselecteerd</li>`;
            return;
        }
        html += `<li>${optie} (${prettyPrice(getExtraOptionPrice(optie), true)})</li>`;
    })
    return html;
}