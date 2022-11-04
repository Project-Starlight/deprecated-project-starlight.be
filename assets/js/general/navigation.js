"use strict"

function navigateWithHidden(queryToBeHidden, queryToBeShown, e) {
    e.preventDefault();
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

function navigateArrowForSmallerFormat(e) {
    e.preventDefault();
    const $smallerFormatNavClassList = document.querySelector("#smaller-format-nav").classList;
    const $smallerFormatArrowClassList = document.querySelector(".smaller-format svg").classList;
    switchHidden($smallerFormatNavClassList);
    switchDirectionArrow($smallerFormatArrowClassList)
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

function navigateHomePageButtons(e){
    const target = e.target.dataset.navigate + ".html";
    navigateToDifferentHtmlPage(target);
}