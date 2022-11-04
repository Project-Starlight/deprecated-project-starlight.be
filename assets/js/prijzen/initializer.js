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