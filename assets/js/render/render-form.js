"use strict";



function showFinalCheck(e){
    const html =
        `<p>${document.querySelector(".algemene-informatie input[name='voornaam']").value}</p>
                    <p>${document.querySelector(".algemene-informatie input[name='achternaam']").value}</p>
                    <p>${document.querySelector(".algemene-informatie input[name='email']").value}</p>
                    <p>${document.querySelector(".algemene-informatie input[name='telefoon']").value}</p>
                    <p>${document.querySelector(".product-informatie input[name='merk']").value}</p>
                    <p>${document.querySelector(".product-informatie input[name='model']").value}</p>
                    <p>${document.querySelector(".product-informatie input[name='jaar']").value}</p>
                    <p>${refactorSelect(document.querySelector(".product-informatie select").value)}</p>
                    <p>${document.querySelector(".bericht textarea").value}</p>`
    document.querySelector(".final-check div div:last-child").innerHTML = html;
}
