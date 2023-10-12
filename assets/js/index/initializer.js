"use strict";
loadProducts();

async function fetchProducts() {
    const response = await fetch("../assets/js/data/producten.json");
    return response.json();
}

function makeBiggerFormatProductTemplate(product, index) {
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
    const productId = createProductId(product);
    template.querySelector("section").classList.add(productId);
    template.querySelector("h3").innerText = product.title;
    template.querySelector("p").innerText = product.description;
    template.querySelector("button").innerText = "Meer informatie";
    return template;
}

function createProductId(product) {
    return product.title.toLowerCase().replace(" ", "-");
}

function makeSmallerFormatProductTemplate(product) {
    const $template = document.querySelector("#template-product-section-smaller-format");
    const template = createProductSection($template, product);
    product.images.forEach((image) => {
        const div = document.createElement("div");
        div.classList.add("slider-single");

        const img = document.createElement("img");
        img.classList.add("slider-single-image");
        img.src = image.src;
        img.alt = image.alt;
        div.appendChild(img);
        template.querySelector(`.slider-content`).appendChild(div);
    });
    return template;
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
        const swiper = new Swiper('.mySwiper',{});
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