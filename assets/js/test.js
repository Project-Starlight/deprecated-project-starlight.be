"use strict";
document.addEventListener("DOMContentLoaded",(function () {
    // Images loaded is zero because we're going to process a new set of images.
    let imagesLoaded = 0;
    // Total images is still the total number of <img> elements on the page.
    const totalImages = document.querySelectorAll("img").length;

    // Step through each image in the DOM, clone it, attach an onload event
    // listener, then set its source to the source of the original image. When
    // that new image has loaded, fire the imageLoaded() callback.
    document.querySelectorAll("img").forEach(function (img) {
        img.addEventListener("load", imageLoaded)
    });

    // Do exactly as we had before -- increment the loaded count and if all are
    // loaded, call the allImagesLoaded() function.
    function imageLoaded() {
        console.table(imagesLoaded,totalImages)
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            allImagesLoaded();
        }
    }

    function allImagesLoaded() {
        console.log("ALL IMAGES LOADED");
    }
}));