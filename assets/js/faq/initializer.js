"use strict";
loadQuestions();

function navigateArrowForFaqPage(e) {
    e.preventDefault();
    let $faqArrowClassList;
    if (e.target.closest("svg") == null) {
        $faqArrowClassList = e.currentTarget.querySelector("svg").classList;
    } else {
        $faqArrowClassList = e.target.closest("svg").classList;
    }
    switchDirectionArrow($faqArrowClassList);
    e.target.closest(".outer-wrapper").querySelector(".antwoord").classList.toggle("hidden");
}

async function fetchQuestions() {
    const response = await fetch("../assets/js/data/faq.json");
    if (!response.ok) throw new Error(`Failed to fetch questions: ${response.status}`);
    return await response.json();
}

function createQuestionElement(product) {
    const id = product.naam.replace(/\s+/g, '_').toLowerCase();
    let productHTML = `<section id="${id}"><div class="section-wrapper"><h3>${product.naam}</h3>`

    for (const vraag of product.vragen) {
        productHTML += `
        <div class="outer-wrapper">
            <div class="vraag">
                <h4>${vraag.vraag}</h4>
                <svg class="down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/>
            </svg>
            </div>
            <div class="antwoord hidden">
               <p>${vraag.antwoord}</p>
            </div>
        </div>`;
    }
    productHTML += "</div></section>";
    return productHTML;
}

function loadQuestions() {
    const faq = fetchQuestions();
    faq.then((data) => {
        const mainElement = document.querySelector("main");
        for (const product of data.producten) {
            mainElement.insertAdjacentHTML("beforeend", createQuestionElement(product));
        }
        makeQuestionsClickable();
    }).catch((error) => {
        console.log(error);
    });
}

function makeQuestionsClickable() {
    document.querySelectorAll("#faq div.vraag").forEach((query) => {
        query.addEventListener("click", (e) => {
            navigateArrowForFaqPage(e);
        });
    });
}