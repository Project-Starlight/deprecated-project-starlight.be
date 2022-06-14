"use strict";

function generateVisualAPIErrorInConsole() {
    console.error('%c%s', 'background-color: red;color: white', '! An error occurred while calling the API');
}

function errorHandler(error) {
    console.error(error);
    document.querySelector(".final-check").classList.add("hidden");
    const html = `<h2>Er is iets misgelopen met de api!</h2>
                    <p>We raden u aan om ons te contacteren op een ander manier:</p>
                    <p>email: ${_local.email}</p>
                    <p>telefonisch: ${_local.tel}</p>`
    document.querySelector(".error").innerHTML = html;
}
