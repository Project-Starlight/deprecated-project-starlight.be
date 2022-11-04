"use strict";
if (loadFromStorage("queryToBeShown") !== null){
    navigateWithHiddenWithoutEvent("#onze-gegevens",loadFromStorage("queryToBeShown"));
    showConfiguration();
}
document.querySelector("#onze-gegevens button[name='contactgegevens']")
    .addEventListener("click", (e) => {
        showContactGegevensContactUsPage();
        navigateWithHidden("#onze-gegevens", "#contactgegevens", e);
    });

document.querySelector("#contactgegevens button[name='terug']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#contactgegevens", "#onze-gegevens", e);
    });

document.querySelector("#onze-gegevens button[name='formulier']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#onze-gegevens", "#persoonlijke-gegevens", e);
    });
document.querySelector("#persoonlijke-gegevens button[name='terug']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#persoonlijke-gegevens", "#onze-gegevens", e);
    });

document.querySelector("#persoonlijke-gegevens button[name='volgende']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#persoonlijke-gegevens", "#auto-gegevens", e);
        addClassForBarAnimation("#auto-gegevens .bar div", "forward");
    });
document.querySelector("#auto-gegevens button[name='terug']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#auto-gegevens", "#persoonlijke-gegevens", e);
        addClassForBarAnimation("#persoonlijke-gegevens .bar div", "backward");
    });
document.querySelector("#auto-gegevens button[name='volgende']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#auto-gegevens", "#configuratie", e);
        addClassForBarAnimation("#configuratie .bar div", "forward");
        showConfiguration();
    });
document.querySelector("#configuratie #no-configuratie-li button[name='configuratie']")
    .addEventListener("click", (e) => {
        saveToStorage("byContactButton",true);
        navigateToDifferentHtmlPage("prijzen.html");
    });
document.querySelector("#configuratie button[name='terug']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#configuratie", "#auto-gegevens", e);
        addClassForBarAnimation("#auto-gegevens .bar div", "backward")
    });
document.querySelector("#configuratie button[name='volgende']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#configuratie", "#bericht", e);
        addClassForBarAnimation("#bericht .bar div", "forward");
    });
document.querySelector("#bericht button[name='terug']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#bericht", "#configuratie", e);
        addClassForBarAnimation("#configuratie .bar div", "backward");
    });
document.querySelector("#bericht button[name='volgende']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#bericht", "#controle", e);
        addClassForBarAnimation("#controle .bar div", "forward")
    });
document.querySelector("#controle button[name='terug']")
    .addEventListener("click", (e) => {
        navigateWithHidden("#controle", "#bericht", e);
        addClassForBarAnimation("#bericht .bar div", "backward");
    });
document.querySelector("#controle button[type='submit']")
    .addEventListener("click", (e) => {
        //TODO: submit form
    });
