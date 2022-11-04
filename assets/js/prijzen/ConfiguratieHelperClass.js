"use strict";
class ConfiguratieHelper{
    constructor() {
    }

    toggleAriaDisabled(sterrenhemelBoxOrOptieBox){
        if (sterrenhemelBoxOrOptieBox.getAttribute("aria-disabled") === "true"){
            sterrenhemelBoxOrOptieBox.setAttribute("aria-disabled","false");
        } else {
            sterrenhemelBoxOrOptieBox.setAttribute("aria-disabled","true");
        }
    }
    setAriaDisabled(sterrenhemelBoxOrOptieBox,disabledOrEnabled){
        if (disabledOrEnabled === "enabled"){
            sterrenhemelBoxOrOptieBox.setAttribute("aria-disabled","false");
        } else if (disabledOrEnabled === "disabled"){
            sterrenhemelBoxOrOptieBox.setAttribute("aria-disabled","true");
        }
    }
    checkIfGeenOptieShouldBeEnabled(){
        const ariaDisabledTweeKleurenOptie = document.querySelector("#twee-kleuren-optie").getAttribute("aria-disabled");
        const ariaDisabledMeteorietenregenOptie = document.querySelector("#meteorietenregen-optie").getAttribute("aria-disabled");
        if (ariaDisabledTweeKleurenOptie === "true" && ariaDisabledMeteorietenregenOptie === "true") {
            this.applyDefaultStyleExtraOptions();
        }
    }
    disableAllOptions(){
        document.querySelectorAll(".opties-box").forEach(optiesBox => {
            optiesBox.setAttribute("aria-disabled", "true");
        })
        document.querySelector("#opties h2").style.color = "gray";
    }
    applyDefaultStyleExtraOptions(){
        document.querySelector("#opties #geen-optie").setAttribute("aria-disabled", "false");
        document.querySelector("#opties #twee-kleuren-optie").setAttribute("aria-disabled", "true");
        document.querySelector("#opties #meteorietenregen-optie").setAttribute("aria-disabled", "true");
        document.querySelector("#opties h2").style.color = "white";
    }
    disableAllSterrenhemelsExcept(exceptSterrenhemel){
        configuratieHelper.setAriaDisabled(exceptSterrenhemel,"enabled");
        document.querySelectorAll("#sterrenhemel .sterrenhemel-box")
            .forEach((sterrenhemelBox2) => {
                if (exceptSterrenhemel !== sterrenhemelBox2) {
                    configuratieHelper.setAriaDisabled(sterrenhemelBox2,"disabled")
                }
            })
    }
}