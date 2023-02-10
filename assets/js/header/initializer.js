"use strict";
addEventListenerAllClick("header #icons",social_navigation);
addEventListenerAllClick("header #smaller-format-icons",social_navigation);

document.querySelector("header nav img").addEventListener('click', () => {
    navigateToDifferentHtmlPage("../index.html");
});
document.querySelector(".smaller-format svg").addEventListener("click", (e) => {
    navigateArrowForSmallerFormat(e);
})

function social_navigation(e) {
    e.preventDefault();
    switch (e.target.closest("svg").classList[0]) {
        case "instagram":
            window.open(_contactAndSocialMedia.instagramURL);
            break;
        case "facebook":
            window.open(_contactAndSocialMedia.facebookURL);
            break;
        case "phone":
            window.location.href = `tel:${_contactAndSocialMedia.tel}`;
            break;
        case "mail":
            window.location.href = `mailto:${_contactAndSocialMedia.email}`;
            break;
    }
}

function navigateArrowForSmallerFormat(e) {
    e.preventDefault();
    const $smallerFormatNavClassList = document.querySelector("#smaller-format-nav").classList;
    const $smallerFormatArrowClassList = document.querySelector(".smaller-format svg").classList;
    popupDivSwitch();
    switchHidden($smallerFormatNavClassList);
    switchDirectionArrow($smallerFormatArrowClassList)
}

function popupDivSwitch(){
    const $navPopup = document.querySelector(".nav-popup");
    if ($navPopup == null){
        const navPopupElement = document.createElement("div");
        navPopupElement.classList.add('nav-popup');
        document.body.insertBefore(navPopupElement,document.querySelector("header"));
    } else {
        $navPopup.remove();
    }
}
