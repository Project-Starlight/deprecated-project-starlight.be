"use strict";

function renderControleerGegevens() {
    const html =
        `<ul>
            <li>Voornaam</li>
            <li>Achternaam</li>
            <li>E-mail</li>
            <li>Telefoon</li>
            <li>Merk</li>
            <li>Model</li>
            <li>Jaar</li>
            <li>Configuratie</li>
            <li>Bericht</li>
        </ul>
        <ul>
            <li>${getBodyForm().voornaam}</li>
            <li>${getBodyForm().achternaam}</li>
            <li>${getBodyForm().email}</li>
            <li>${getBodyForm().telefoon}</li>
            <li>${getBodyForm().automerk}</li>
            <li>${getBodyForm().automodel}</li>
            <li>${getBodyForm().autojaar}</li>
            <li>${getBodyForm().sterrenhemel}</li>
            <li>${getBodyForm().bericht}</li>
        </ul>`
    document.querySelector("#controle .controleer-gegevens").innerHTML = html;
}
