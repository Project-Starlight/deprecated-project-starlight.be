"use strict";

/* This mostly consist of helper functions we use around the different pages! */

function prettyPrice(price, extraOption = false) {
    if (price === "gratis") {
        return "gratis";
    } else if (price === "Prijs op aanvraag") {
        return price;
    } else if (!extraOption) {
        return `€${price}`;
    } else if (extraOption) {
        return `+€${price}`;
    }
}
function getExtraOptionPrice(option) {
    switch (option) {
        case "twee-kleuren-optie":
            return _pricesAfterDiscount.tweeKleuren.price;
        case "meteorietenregen-optie":
            return _pricesAfterDiscount.meteorietenregen.price;

    }
}

function getConfigurationHtml(configuratie) {
    let html = "";
    if (configuratie.sterrenhemel === null) {
        html += `<li>Geen sterrenhemel gekozen</li>`
    } else if (configuratie.sterrenhemel === "exclusieve-sterrenhemel") {
        html += `<li>${configuratie.sterrenhemel}</li><li>Zet bij uw bericht wat voor opties u wilt!</li>`
    } else {
        html += `<li>${configuratie.sterrenhemel}</li>`
    }
    configuratie.extraOpties.forEach(optie => {
        if (optie === "geen-optie") {
            html += `<li>Geen optie(s) geselecteerd</li>`;
            return;
        }
        html += `<li>${optie} (${prettyPrice(getExtraOptionPrice(optie), true)})</li>`;
    })
    return html;
}

//TODO: look if these functions still have some use or not (after removal of contactUs.html and pricing.html

function addAnimationClasses(entry) {
    const target = entry.target;
    const informatieClassList = target.querySelector(".informatie").classList;
    const figureClassList = target.querySelector("figure").classList;

    const leftToRightClassName = "left-to-right-animation";
    const rightToLeftClassName = "right-to-left-animation"

    if (target.querySelector(".links")) {
        informatieClassList.add(leftToRightClassName);
        figureClassList.add(rightToLeftClassName);
    } else if (target.querySelector(".rechts")) {
        informatieClassList.add(rightToLeftClassName);
        figureClassList.add(leftToRightClassName);
    }
}

function removeAnimationClasses(entry) {
    const target = entry.target;
    const informatieClassList = target.querySelector(".informatie").classList;
    const figureClassList = target.querySelector("figure").classList;

    const leftToRightClassName = "left-to-right-animation";
    const rightToLeftClassName = "right-to-left-animation"

    if (informatieClassList.contains(leftToRightClassName)) {
        informatieClassList.remove(leftToRightClassName);
        figureClassList.remove(rightToLeftClassName);
    } else if (informatieClassList.contains(rightToLeftClassName)) {
        informatieClassList.remove(rightToLeftClassName);
        figureClassList.remove(leftToRightClassName);
    }
}

function buildCallback() {
    return (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                addAnimationClasses(entry);
            } else {
                removeAnimationClasses(entry);
            }
        });
    }
}

function animateSectionWhenInViewport() {
    const callback = buildCallback();
    let observer = new IntersectionObserver(callback);
    const animationSections = document.querySelectorAll(".animate-in-viewport");
    animationSections.forEach(section => {
        observer.observe(section);
    })

}