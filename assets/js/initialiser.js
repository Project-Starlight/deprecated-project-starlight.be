"use strict";

document.addEventListener('DOMContentLoaded', init);

function animateHomepage() {
    classHelper("#index section:first-of-type","animate",false);
}

function init() {
    if (document.querySelector("header")) {
        headerInitializer();
    }
    if (document.querySelector("#index")) {
        indexInitializer();
        window.addEventListener('load',()=>{
            animateHomepage();
        })
    }
    if (document.querySelector("#prijs-pagina")) {
        prijsPaginaInitializer();
    }
    if (document.querySelector("#contactUs")) {
        contactUsPageInitializer();
    }

}

function indexInitializer() {
    animateSectionWhenInViewport();
    document.querySelectorAll("#index .button").forEach((Element) => {
        Element.addEventListener('click', (e) => {
            navigateHomePageButtons(e);
        });
    });
}

function headerInitializer() {
    document.querySelector("header #icons").addEventListener('click', e => {
        header_icon(e)
    });
    document.querySelector("header #smaller-format-icons").addEventListener('click', e => {
        header_icon(e)
    });
    document.querySelector("header h1").addEventListener('click', () => {
        navigateToDifferentHtmlPage("../index.html")
    });
    document.querySelector(".smaller-format-arrow").addEventListener("click", (e) => {
        navigateArrowForSmallerFormat(e);
    })
}

function prijsPaginaInitializer() {
    renderPrice();
    document.querySelectorAll("#prijs-pagina main div div").forEach((Element) => {
        Element.addEventListener('click', navigateFromPricingToContact)
    });
}

function contactUsPageInitializer() {
    if (loadFromStorage("selectedPriceCategory")) {
        document.querySelectorAll("#pricingOption option").forEach((Element) => {
            if (loadFromStorage("selectedPriceCategory") === Element.value) {
                Element.selected = "selected";
            }
        });
    }
    document.querySelector(".begin button").addEventListener("click", (e) => {
        navigateWithHidden(".begin", ".algemene-informatie", e)
    });

    /* Algemene informatie navigatie */

    document.querySelector(".algemene-informatie button[name='terug']").addEventListener("click", (e) => {
        navigateWithHidden(".algemene-informatie", ".begin", e)
    });

    document.querySelector(".algemene-informatie button[name='volgende']").addEventListener("click", (e) => {
        navigateWithHidden(".algemene-informatie", ".product-informatie", e)
    });

    /* Product informatie navigatie */

    document.querySelector(".product-informatie button[name='terug']").addEventListener("click", (e) => {
        navigateWithHidden(".product-informatie", ".algemene-informatie", e)
    });

    document.querySelector(".product-informatie button[name='volgende']").addEventListener("click", (e) => {
        navigateWithHidden(".product-informatie", ".bericht", e)
    });

    /* Bericht navigatie */

    document.querySelector(".bericht button[name='terug']").addEventListener("click", (e) => {
        navigateWithHidden(".bericht", ".product-informatie", e)
    });

    document.querySelector(".bericht button[name='volgende']").addEventListener("click", (e) => {
        const requirements = checkRequirements();
        if (requirements != null) {
            showNotEverythingFilledInFormError(requirements, e);
        } else {
            showFinalCheck(e);
            navigateWithHidden(".bericht", ".final-check", e);
            finalCheckClicker();
        }
    });

    /* Show final check */

    document.querySelector(".final-check button[name='terug']").addEventListener("click", (e) => {
        navigateWithHidden(".final-check", ".bericht", e)
    });

    document.querySelector(".final-check input[name='verstuur']").addEventListener("click", (e) => {
        postContactForm(e);
    });

    /* Show error if something bad happend with the server side*/

    document.querySelector(".form-error ul").addEventListener("click", (e) => {
        navigateWithHidden(".form-error", ".algemene-informatie", e);
        document.querySelector(`.algemene-informatie input[id="${e.target.closest("li").className}"]`).focus();
    });

    /* Show message that everything went well and is sent to the server */

    document.querySelector(".form-succes button").addEventListener("click", () => {
        navigateToDifferentHtmlPage("../index.html");
    });
}

function finalCheckClicker() {
    document.querySelectorAll(".final-check li").forEach(li => {
        li.addEventListener("click", (e) => {
            let className = e.target.classList;
            className.remove("no-input");
            navigateFinalCheckLi(className, e);
        })
    })
}
