"use strict";
renderPrices();
renderExtraOptionPrices();
renderChosenConfig();
document.querySelectorAll("#sterrenhemel .sterrenhemel-box")
    .forEach((sterrenhemelBox) => {
        sterrenhemelBox.addEventListener("click", (e) => {
            toggleSterrenhemel(sterrenhemelBox);
            disableOrEnableOptiesWhenExclusieveSterrenHemel(sterrenhemelBox);
            renderConfigurationBox();
            saveConfigurationToStorage();
        });
    });
document.querySelectorAll("#opties .opties-box")
    .forEach(optiesBox => {
        optiesBox.addEventListener("click", e => {
            toggleExtraOpties(optiesBox)
            renderConfigurationBox();
            saveConfigurationToStorage();
        })
    });
document.querySelector("button[name='contact']").addEventListener("click",(e)=>{
    if(loadFromStorage("byContactButton") === true){
        navigateToDifferentHtmlPage("../contact/index.html");
        saveToStorage("queryToBeShown","#configuratie");
    } else {
        navigateToDifferentHtmlPage("../contact/index.html");
        saveToStorage("queryToBeShown","#persoonlijke-gegevens")
    }
})