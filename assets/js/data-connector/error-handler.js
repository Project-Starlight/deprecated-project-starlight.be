"use strict";

function errorHandler(err) {
    const errors = err.errors
    let errorHtml = ``;
    let html = `<h2>Er is iets misgelopen met de api!</h2>
                    <p>We raden u aan om ons te contacteren op een andere manier:</p>
                    <p>email: ${_contactAndSocialMedia.email}</p>
                    <p>telefonisch: ${_contactAndSocialMedia.tel}</p>
                    <h3>Error(s) server:</h3>`
    for (const field in errors) {
        for (const error of errors[field]) {
            errorHtml += `<li>${field}: ${error}</li>`
        }
    }
    html += `<ul>${errorHtml}</ul>`
    document.querySelector("form").classList.add("hidden");
    document.querySelector(".error").innerHTML = html;
}
