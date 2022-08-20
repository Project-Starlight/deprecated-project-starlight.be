"use strict";

function renderPrice(){
    document.querySelector("#prijs-pagina #kleine-sterrenhemel h3").innerHTML = `${_serviceOptions.smallOption.prijs}`;
    document.querySelector("#prijs-pagina #gemiddelde-sterrenhemel h3").innerHTML = `${_serviceOptions.mediumOption.prijs}`;
    document.querySelector("#prijs-pagina #grote-sterrenhemel h3").innerHTML = `${_serviceOptions.bigOption.prijs}`;
    document.querySelector("#prijs-pagina #exclusieve-sterrenhemel h3").innerHTML = `${_serviceOptions.exclusiveOption.prijs}`;
    document.querySelector("#prijs-pagina #meteorietenregen h3").innerHTML = `${_serviceOptions.extraOptions.meteorietenregen.prijs}`;
    document.querySelector("#prijs-pagina #logo h3").innerHTML = `${_serviceOptions.extraOptions.logo.prijs}`;
    document.querySelector("#prijs-pagina #twee-kleuren h3").innerHTML = `${_serviceOptions.extraOptions.tweeKleuren.prijs}`
}
