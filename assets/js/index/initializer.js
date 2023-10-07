"use strict";
loadProducts();
async function fetchProducts() {
    const response = await fetch("../assets/js/data/producten.json");
    return response.json();
}

function makeBiggerFormatProductTemplate(product,index) {
    let linksOfRechts;
    if (index % 2 === 0) {
        linksOfRechts = "links";
    } else {
        linksOfRechts = "rechts";
    }
    const $template = document.querySelector(`#template-product-section-${linksOfRechts}`);
    return createProductSection($template, product);
}

function createProductSection($template, product) {
    const template = $template.content.cloneNode(true);
    template.querySelector("h3").innerText = product.title;
    template.querySelector("img").src = product.images[0].src;
    template.querySelector("img").alt = product.images[0].alt;
    template.querySelector("p").innerText = product.description;
    template.querySelector("button").innerText = "Meer informatie";
    return template;
}


function makeSmallerFormatProductTemplate(product) {
    const $template = document.querySelector("#template-product-section-smaller-format");
    return createProductSection($template, product);
}

function loadProducts() {
    fetchProducts().then((products) => {
        products.forEach((product, index) => {
            const biggerFormatTemplate = makeBiggerFormatProductTemplate(product, index);
            const smallerFormatTemplate = makeSmallerFormatProductTemplate(product);
            document.querySelector("main .bigger-format").appendChild(biggerFormatTemplate);
            document.querySelector("main .smaller-format").appendChild(smallerFormatTemplate);
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