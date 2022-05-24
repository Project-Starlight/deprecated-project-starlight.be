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
            htmlTitle += getValueListItemFinalCheck(selectorsKey,selectors,true);
            htmlTxt += getValueListItemFinalCheck(selectorsKey,selectors);
    }

    document.querySelector(".final-check div ul:first-child").innerHTML = htmlTitle;
    document.querySelector(".final-check div ul:last-child").innerHTML = htmlTxt;
    console.log(document.querySelector(".final-check div div:last-child"));
}

function getValueListItemFinalCheck(selectorsKey, selectors,key = false){
    if (getRefactorValue(selectors[selectorsKey]) === "/"){
        if (key){
            return `<li class="${selectorsKey} no-input">${selectorsKey}</li>`;
        }
        return `<li class="${selectorsKey} no-input">${getRefactorValue(selectors[selectorsKey])}</li>`;
    } else {
        if (key){
            return `<li class="${selectorsKey}">${selectorsKey}</li>`;
        }
        return `<li class="${selectorsKey}">${getRefactorValue(selectors[selectorsKey])}</li>`;
    }
}

function refactorBericht(str){
    if (str === "" || str === "kies-optie"){
        return "/"
    }
    return str.replace(/\n/g, "<br />");
}

function showNotEverythingFilledInFormError(requiredFormFieldsThatArentFilledIn, e) {
    document.querySelector(".form-error ul").innerHTML = "";
    requiredFormFieldsThatArentFilledIn.forEach(function (field) {
        document.querySelector(".form-error ul").insertAdjacentHTML("beforeend", `<li class="${field}"><p>${field}</p><i class="fa-solid fa-pencil"></i></li>`);
    })
    navigateWithHidden(".bericht", ".form-error", e);
}

function getRefactorValue(selector) {
    return refactorBericht(document.querySelector(`${selector}`).value);
}