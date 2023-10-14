"use strict";
loadProducts();

async function fetchProducts() {
    const response = await fetch("assets/js/data/producten.json");
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
    return createBiggerFormatProductSection($template, product);
}

function createBiggerFormatProductSection($template, product){
    const template = $template.content.cloneNode(true);
    const productId = createProductId(product);
    template.querySelector("section").classList.add(productId);
    template.querySelector("h3").innerText = product.title;
    template.querySelector("p").innerText = product.description;
    template.querySelector("button").innerText = "Meer informatie";

    const $swiper = template.querySelector(".swiper-wrapper");

    product.images.forEach((image) => {
        $swiper.insertAdjacentHTML("beforeend", `<div class="swiper-slide"><img src="${image.src}" alt="${image.alt}"></div>`);
    });
    return template;

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
    const template = $template.content.cloneNode(true);
    const productId = createProductId(product);
    template.querySelector("section").classList.add(productId);
    template.querySelector("h3").innerText = product.title;
    template.querySelector("p").innerText = product.description;
    template.querySelector("button").innerText = "Meer informatie";
    const $swiper = template.querySelector(".swiper-wrapper");

    product.images.forEach((image) => {
        $swiper.insertAdjacentHTML("beforeend", `<div class="swiper-slide"><img src="${image.src}" alt="${image.alt}"></div>`);
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
        //animateSectionWhenInViewport();
        const biggerFormatSwiper = new Swiper('.bigger-format-swiper',{
            autoplay:{
                delay: 3000,
            }
        });
        const smallerFormatSwiper = new Swiper('.smaller-format-swiper',{
            autoplay:{
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
            }
        });
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
