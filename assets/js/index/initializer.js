"use strict";
loadProducts();
async function fetchProducts() {
    const response = await fetch("../assets/js/data/producten.json");
    return response.json();
}

function makeProductTemplate(product, linksOfRechts) {
    const $template = document.querySelector(`#template-product-section-${linksOfRechts}`);
    const template = $template.content.cloneNode(true);
    template.querySelector("h3").innerText = product.title;
    template.querySelector("img").src = product.images[0].src;
    template.querySelector("img").alt = product.images[0].alt;
    template.querySelector("p").innerText = product.description;
    template.querySelector("button").innerText = "Meer informatie";

    return template;
}

function loadProducts() {
    fetchProducts().then((products) => {
        products.forEach((product, index) => {
            let template;
            if (index % 2 === 0) {
                template = makeProductTemplate(product, "links");
            } else {
                template = makeProductTemplate(product, "rechts");
            }
            document.querySelector("main .bigger-format").appendChild(template);
        });
        animateSectionWhenInViewport();
    });
}

document.querySelectorAll("#index .button")
    .forEach((Element) => {
        Element.addEventListener('click', (e) => {
            navigateHomePageButtons(e);
        });
    });

function navigateHomePageButtons(e) {
    const target = e.target.dataset.navigate + ".html";
    navigateToDifferentHtmlPage(target);
}