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
        .catch(errorHandler)
}

function getValueForm(formSelector, number = false) {
    const $selectorValue = document.querySelector(`${formSelector}`).value;

    if ($selectorValue) {
        if (number) {
            return parseInt($selectorValue)
        } else {
            return $selectorValue;
        }
    } else {
        if (number) {
            return 1;
        } else {
            return "NO INPUT FROM USER";
        }
    }
}

function checkRequirements(e) {
    const form = {
        voornaam: document.querySelector(".algemene-informatie input[name='voornaam']").value,
        achternaam: document.querySelector(".algemene-informatie input[name='achternaam']").value,
        email: document.querySelector(".algemene-informatie input[name='email']").value
    }
    let requiredFormFieldsThatArentFilledIn = [];
    for (let formField in form) {
        console.log(form[formField]);
        if (!form[formField]) {
            console.log(formField)
            requiredFormFieldsThatArentFilledIn.push(`${formField}`);
        }
    }
    console.log(requiredFormFieldsThatArentFilledIn)
    if (requiredFormFieldsThatArentFilledIn) {
        showFormError(requiredFormFieldsThatArentFilledIn,e);
        return true;
    } else {
        return false;
    }
}

function showFormError(requiredFormFieldsThatArentFilledIn,e) {
    document.querySelector(".form-error ul").innerHTML = "";
    requiredFormFieldsThatArentFilledIn.forEach(function (field) {
        document.querySelector(".form-error ul").insertAdjacentHTML("beforeend", `<li>${field}<i class="fa-solid fa-pencil"></i></li>`);

    })
    navigateWithHidden(".final-check",".form-error",e);
}

