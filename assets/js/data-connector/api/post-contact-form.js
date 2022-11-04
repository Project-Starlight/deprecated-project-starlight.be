"use strict";

function postContactForm(e) {
    e.preventDefault();
    let body =
        {
            "voornaam": getValueForm(".algemene-informatie input[name='voornaam']"),
            "achternaam": getValueForm(".algemene-informatie input[name='achternaam']"),
            "email": getValueForm(".algemene-informatie input[name='email']"),
            "telefoon": getValueForm(".algemene-informatie input[name='telefoon']", true),
            "automerk": getValueForm(".product-informatie input[name='merk']"),
            "automodel": getValueForm(".product-informatie input[name='model']"),
            "autojaar": getValueForm(".product-informatie input[name='jaar']", true),
            "prijsoptie": getValueForm(".product-informatie select"),
            "bericht": getValueForm(".bericht textarea"),
            "tweekleuren": getValueForm(".product-informatie input[name='tweekleuren']",false,true),
            "meteorietenregen": getValueForm(".product-informatie input[name='meteorietenregen']",false,true),
            "logo": getValueForm(".product-informatie input[name='logo']",false,true)
        }
    fetchFromServer(_config.apiURL + "/message", "POST", body)
        .then(() => {
            navigateWithHidden("form", ".form-succes", e);
        })
        .catch(error => {
            errorHandler(error)
        })
}

function getValueForm(formSelector, number = false, boolean = false) {
    const $selectorValue = document.querySelector(`${formSelector}`).value;
    if ($selectorValue === "kies-optie") {
        return null;
    } else if ($selectorValue) {
        if (number) {
            return parseInt($selectorValue);
        } else if (boolean) {
            return document.querySelector(`${formSelector}`).checked;
        } else {
            return $selectorValue;
        }
    } else {
        return null;
    }
}

function checkRequirements() {
    const form = {
        voornaam: document.querySelector(".algemene-informatie input[name='voornaam']").value,
        achternaam: document.querySelector(".algemene-informatie input[name='achternaam']").value,
        email: document.querySelector(".algemene-informatie input[name='email']").value
    }
    let requiredFormFieldsThatArentFilledIn = [];
    for (let formField in form) {
        if (!form[formField]) {
            requiredFormFieldsThatArentFilledIn.push(`${formField}`);
        }
    }
    if (requiredFormFieldsThatArentFilledIn.length > 0) {
        return requiredFormFieldsThatArentFilledIn;
    } else {
        return null;
    }
}
