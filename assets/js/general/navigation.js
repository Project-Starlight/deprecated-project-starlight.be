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
    if(hiddenSelectorClassList.contains("hidden")){
        hiddenSelectorClassList.remove("hidden");
    }
    else if (!hiddenSelectorClassList.contains("hidden")){
        hiddenSelectorClassList.add("hidden");
    }
}

function switchDirectionArrow(arrowSelectorClassList){
    if (arrowSelectorClassList.contains("up"))
    {
        arrowSelectorClassList.remove("up");
        arrowSelectorClassList.add("down")
    }
    else if(arrowSelectorClassList.contains("down"))
    {
        arrowSelectorClassList.remove("down");
        arrowSelectorClassList.add("up");
    }

}

