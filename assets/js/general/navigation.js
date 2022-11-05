"use strict"

function navigateWithHidden(queryToBeHidden, queryToBeShown, e) {
    e.preventDefault();
    document.querySelector(queryToBeHidden).classList.add("hidden");
    document.querySelector(queryToBeShown).classList.remove("hidden");
}
function navigateWithHiddenWithoutEvent(queryToBeHidden, queryToBeShown) {
    document.querySelector(queryToBeHidden).classList.add("hidden");
    document.querySelector(queryToBeShown).classList.remove("hidden");
}
function navigateToDifferentHtmlPage(htmlPage) {
    if (document.querySelector('#index')) {
        window.location.href = `pages/${htmlPage}`;
    } else {
        window.location.href = `${htmlPage}`;
    }

}

function switchHidden(hiddenSelectorClassList){
    hiddenSelectorClassList.toggle("hidden");
}

function switchDirectionArrow(arrowSelectorClassList){
    if (arrowSelectorClassList.contains("up"))
    {
        arrowSelectorClassList.replace("up","down");
    }
    else if(arrowSelectorClassList.contains("down"))
    {
        arrowSelectorClassList.replace("down","up");
    }

}

