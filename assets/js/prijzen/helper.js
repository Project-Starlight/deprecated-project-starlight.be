"use strict";
const configuratieHelper = new ConfiguratieHelper();


function saveConfigurationToStorage() {
    saveToStorage("configuratie", getConfiguratieObjectExtended());
}

function renderConfigurationBox() {
    renderTotalPrice();
    renderChosenConfig();
}


function renderChosenConfig() {
    const selectedItems = getConfiguratieObject();
    document.querySelector("#insert-chosen-options")
        .innerHTML = getConfigurationHtml(selectedItems);
}

function toggleSterrenhemel(sterrenhemelBox) {
    configuratieHelper.disableAllSterrenhemelsExcept(sterrenhemelBox);
}

function disableOrEnableOptiesWhenExclusieveSterrenHemel(sterrenhemelBox) {
    if (sterrenhemelBox.getAttribute("id") === "exclusieve-sterrenhemel") {
        configuratieHelper.disableAllOptions();
    } else {
        configuratieHelper.applyDefaultStyleExtraOptions();
    }
}

function toggleExtraOpties(optiesBox) {
    const idSelectedSterrenhemel = document.querySelector("#sterrenhemel .sterrenhemel-box[aria-disabled='false']").getAttribute("id");
    if (idSelectedSterrenhemel === "exclusieve-sterrenhemel") return;
    if (optiesBox.getAttribute("id") === "geen-optie") {
        configuratieHelper.applyDefaultStyleExtraOptions();
    } else {
        if (optiesBox.getAttribute("aria-disabled") === "false") {
            optiesBox.setAttribute("aria-disabled", "true");
            configuratieHelper.checkIfGeenOptieShouldBeEnabled();
        } else {
            document.querySelector("#opties .opties-box#geen-optie").setAttribute("aria-disabled", "true");
            optiesBox.setAttribute("aria-disabled", "false");
        }
    }
}

