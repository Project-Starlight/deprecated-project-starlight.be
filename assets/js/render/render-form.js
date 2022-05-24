"use strict";

function showFinalCheck(e) {
    const selectors = {
        Voornaam: ".algemene-informatie input[name='voornaam']",
        Achternaam: ".algemene-informatie input[name='achternaam']",
        Email: ".algemene-informatie input[name='email']",
        Telefoon: ".algemene-informatie input[name='telefoon']",
        Merk: ".product-informatie input[name='merk']",
        Model: ".product-informatie input[name='model']",
        Optie: ".product-informatie select",
        Jaar: ".product-informatie input[name='jaar']",
        Bericht: ".bericht textarea"
    }
    let htmlTitle = ``;
    let htmlTxt = ``;
    for (let selectorsKey in selectors) {
        if (getValue(selectors[selectorsKey]) !== "kies-optie" && getValue(selectors[selectorsKey])){
            htmlTitle += `<p>${selectorsKey}</p>`;
            htmlTxt += `<p class="${selectorsKey}">${getValue(selectors[selectorsKey])}</p>`;
        }
    }

    document.querySelector(".final-check div div:first-child").innerHTML = htmlTitle;
    document.querySelector(".final-check div div:last-child").innerHTML = htmlTxt;
}

function showFormError(requiredFormFieldsThatArentFilledIn, e) {
    document.querySelector(".form-error ul").innerHTML = "";
    requiredFormFieldsThatArentFilledIn.forEach(function (field) {
        document.querySelector(".form-error ul").insertAdjacentHTML("beforeend", `<li class="${field}"><p>${field}</p><i class="fa-solid fa-pencil"></i></li>`);
    })
    navigateWithHidden(".final-check", ".form-error", e);
}

function getValue(selector) {
    return document.querySelector(`${selector}`).value;
}