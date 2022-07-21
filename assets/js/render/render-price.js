"use strict";

function renderPrice(){
    document.querySelector("#prijs-pagina #kleine-sterrenhemel h3").innerHTML = `${_serviceOptions.smallOption.prijs}`;
    document.querySelector("#prijs-pagina #gemiddelde-sterrenhemel h3").innerHTML = `${_serviceOptions.mediumOption.prijs}`;
    document.querySelector("#prijs-pagina #grote-sterrenhemel h3").innerHTML = `${_serviceOptions.bigOption.prijs}`;
    document.querySelector("#prijs-pagina #exclusieve-sterrenhemel h3").innerHTML = `${_serviceOptions.exclusiveOption.prijs}`
}
