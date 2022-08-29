"use strict";

function renderPrice(){
    document.querySelector("#prijs-pagina #kleine-sterrenhemel h3").innerHTML = `€${pricesAfterDiscount.smallOption.price}`;
    document.querySelector("#prijs-pagina #gemiddelde-sterrenhemel h3").innerHTML = `€${pricesAfterDiscount.mediumOption.price}`;
    document.querySelector("#prijs-pagina #grote-sterrenhemel h3").innerHTML = `€${pricesAfterDiscount.largeOption.price}`;
    document.querySelector("#prijs-pagina #exclusieve-sterrenhemel h3").innerHTML = `${pricesAfterDiscount.exclusiveOption.price}`;
    document.querySelector("#prijs-pagina #meteorietenregen h3").innerHTML = `+€${pricesAfterDiscount.meteorietenregen.price}`;
    document.querySelector("#prijs-pagina #logo h3").innerHTML = `${pricesAfterDiscount.logo.price}`;
    document.querySelector("#prijs-pagina #twee-kleuren h3").innerHTML = `+€${pricesAfterDiscount.tweeKleuren.price}`
}
