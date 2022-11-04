"use strict";
document.querySelectorAll("#faq div.vraag svg").forEach((query) => {
    query.addEventListener("click", (e) => {
        navigateArrowForFaqPage(e);
    });
});
function navigateArrowForFaqPage(e) {
    e.preventDefault();
    const $faqArrowClassList = e.target.closest("svg").classList;
    switchDirectionArrow($faqArrowClassList);
    switchHiddenFaqAnswer(e.target.closest(".outer-wrapper").querySelector(".antwoord").classList);
}
function switchHiddenFaqAnswer($answerClassList) {
    if ($answerClassList.contains("hidden")) {
        $answerClassList.remove("hidden");
    } else {
        $answerClassList.add("hidden");
    }
}

