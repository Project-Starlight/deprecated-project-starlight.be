"use strict";
document.querySelector("header #icons").addEventListener('click', e => {
    social_navigation(e);
});
document.querySelector("header #smaller-format-icons").addEventListener('click', e => {
    social_navigation(e);
});
document.querySelector("header h1").addEventListener('click', () => {
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
    switchHidden($smallerFormatNavClassList);
    switchDirectionArrow($smallerFormatArrowClassList)
}
