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
        Tweekleuren: ".product-informatie input[name='tweekleuren']",
        Meteorietenregen: ".product-informatie input[name='meteorietenregen']",
        Logo: ".product-informatie input[name='logo']",
        Jaar: ".product-informatie input[name='jaar']",
        Bericht: ".bericht textarea"
    }
    let htmlTitle = ``;
    let htmlTxt = ``;
    for (let selectorsKey in selectors) {
        if (selectorsKey === "Tweekleuren" || selectorsKey === "Meteorietenregen" || selectorsKey === "Logo") {
            htmlTitle += getCheckBoxItemFinalCheck(selectorsKey, selectors, true);
            htmlTxt += getCheckBoxItemFinalCheck(selectorsKey, selectors, false);
        } else {
            htmlTitle += getValueListItemFinalCheck(selectorsKey, selectors, true);
            htmlTxt += getValueListItemFinalCheck(selectorsKey, selectors,false);
        }
    }
    document.querySelector(".final-check div ul.final-check-title").innerHTML = htmlTitle;
    document.querySelector(".final-check div ul.final-check-input").innerHTML = htmlTxt;
}

let counter = 0;

function getCheckBoxItemFinalCheck(selectorKey, selector, title = false) {
    const checkboxValue = document.querySelector(`${selector[selectorKey]}`).checked;
    counter = counter + 1;
    if (checkboxValue) {
        if (title) {
            return `<li class="${selectorKey}">${selectorKey}</li>`;
        }
        return `<li class='${selectorKey} no-input'><input type="checkbox" checked disabled></li>`
    } else if (!checkboxValue) {
        if (title) {
            return `<li class="${selectorKey} no-input">${selectorKey}</li>`;
        }
        return `<li class="${selectorKey}"><input type="checkbox" disabled></li>`
    }
}

function getValueListItemFinalCheck(selectorsKey, selectors, title = false) {
    if (refactorFormString(selectors[selectorsKey]) === "/") {
        if (title) {
            return `<li class="${selectorsKey} no-input">${selectorsKey}</li>`;
        }
        return `<li class="final-check-labels">${selectorsKey}:</li><li class="${selectorsKey} no-input">${refactorFormString(selectors[selectorsKey])}</li>`;
    } else {
        if (title) {
            return `<li class="${selectorsKey}">${selectorsKey}</li>`;
        }
        return `<li class="final-check-labels">${selectorsKey}:</li><li class="${selectorsKey}">${refactorFormString(selectors[selectorsKey])}</li>`;
    }
}

function refactorFormString(selector) {
    const str = document.querySelector(`${selector}`).value;
    if (str === "" || str === "kies-optie") {
        return "/"
    }
    return str.replace(/\n/g, "<br />");
}

function showNotEverythingFilledInFormError(requiredFormFieldsThatArentFilledIn, e) {
    document.querySelector(".form-error ul").innerHTML = "";
    requiredFormFieldsThatArentFilledIn.forEach(function (field) {
        document.querySelector(".form-error ul").insertAdjacentHTML("beforeend", `<li class="${field}"><p>${field}</p>
<svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.976 511.98">
  <g id="pencil-alt" transform="translate(255.988 255.99)">
    <path id="pencil-alt-2" data-name="pencil-alt" d="M497.876,142.025l-46.1,46.1a12.011,12.011,0,0,1-17,0l-111-111a12.011,12.011,0,0,1,0-17l46.1-46.1a48.1,48.1,0,0,1,67.9,0l60.1,60.1A47.922,47.922,0,0,1,497.876,142.025Zm-213.7-42.3-262.6,262.6-21.2,121.5a24.03,24.03,0,0,0,27.8,27.8l121.5-21.3,262.6-262.6a12.011,12.011,0,0,0,0-17l-111-111a12.132,12.132,0,0,0-17.1,0Zm-160.1,240.1a13.942,13.942,0,0,1,0-19.8l154-154a14,14,0,1,1,19.8,19.8l-154,154a13.943,13.943,0,0,1-19.8,0Zm-36.1,84.1h48v36.3l-64.5,11.3-31.1-31.1,11.3-64.5h36.3Z" transform="translate(-255.988 -255.99)"/>
  </g>
</svg></li>`);
    })
    navigateWithHidden(".bericht", ".form-error", e);
}
