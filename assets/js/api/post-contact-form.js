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
            "bericht": getValueForm(".bericht textarea")
        }
    fetchFromServer("https://api.stragier-michiel.be/api/message", "POST", body)
        .then(() => {
            navigateWithHidden(".final-check", ".form-succes", e);
        })
        .catch(errorHandler)
}

function getValueForm(formSelector, number = false) {
    const $selectorValue = document.querySelector(`${formSelector}`).value;
    if ($selectorValue === "kies-optie") {
        return "/";
    } else if ($selectorValue) {
        if (number) {
            return parseInt($selectorValue)
        } else {
            return $selectorValue;
        }
    } else {
        if (number) {
            return 9999;
        } else {
            return "/";
        }
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
