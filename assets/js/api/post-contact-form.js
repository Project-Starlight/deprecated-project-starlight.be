"use strict";

function postContactForm(e){
    e.preventDefault();
    let body =
    {
        "voornaam": document.querySelector(".algemene-informatie input[name='voornaam']").value,
        "achternaam": document.querySelector(".algemene-informatie input[name='achternaam']").value,
        "email": document.querySelector(".algemene-informatie input[name='email']").value,
        "telefoon": parseInt(document.querySelector(".algemene-informatie input[name='telefoon']").value),
        "automerk": document.querySelector(".product-informatie input[name='merk']").value,
        "automodel": document.querySelector(".product-informatie input[name='model']").value,
        "autojaar": parseInt(document.querySelector(".product-informatie input[name='jaar']").value),
        "prijsoptie": document.querySelector(".product-informatie select").value,
        "bericht": document.querySelector(".bericht textarea").value
    }
    fetchFromServer("https://api.stragier-michiel.be/api/message","POST", body)
        .catch(errorHandler);
}
