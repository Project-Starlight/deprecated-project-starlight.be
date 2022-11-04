"use strict";
popup();
animateSectionWhenInViewport();
document.querySelectorAll("#index .button")
    .forEach((Element) => {
        Element.addEventListener('click', (e) => {
            navigateHomePageButtons(e);
        });
    });

function popup() {
    if (localStorage.key("popup") === null || loadFromStorage("popup") === false) {
        document.querySelector("body").classList.add("stop-scrolling");
        document.querySelector(".popup").classList.remove("hidden");
    } else {
        removeDisclaimerPopup();
    }
    document.querySelector(".popup-content button").addEventListener("click", removeDisclaimerPopup);
}

function removeDisclaimerPopup() {
    document.querySelector("body").classList.remove("stop-scrolling");
    document.querySelector(".popup").classList.add("hidden");
    saveToStorage("popup", true);
}