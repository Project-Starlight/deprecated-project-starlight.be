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
}

function getValueListItemFinalCheck(selectorsKey, selectors,title = false){
    if (refactorFormString(selectors[selectorsKey]) === "/"){
        if (title){
            return `<li class="${selectorsKey} no-input">${selectorsKey}</li>`;
        }
        return `<li class="final-check-labels">${selectorsKey}:</li><li class="${selectorsKey} no-input">${refactorFormString(selectors[selectorsKey])}</li>`;
    } else {
        if (title){
            return `<li class="${selectorsKey}">${selectorsKey}</li>`;
        }
        return `<li class="final-check-labels">${selectorsKey}:</li><li class="${selectorsKey}">${refactorFormString(selectors[selectorsKey])}</li>`;
    }
}

function refactorFormString(selector){
    const str = document.querySelector(`${selector}`).value
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
