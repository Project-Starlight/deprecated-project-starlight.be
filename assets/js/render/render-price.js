"use strict";

function renderPrice(){
    document.querySelector("#prijs-pagina #kleine-sterrenhemel h3").innerHTML = `${_pricing.smallCar}`;
    document.querySelector("#prijs-pagina #gemiddelde-sterrenhemel h3").innerHTML = `${_pricing.mediumCar}`;
    document.querySelector("#prijs-pagina #grote-sterrenhemel h3").innerHTML = `${_pricing.bigCar}`;
}
