console.log("Check, check!");

const slideContainer = document.querySelector('.carousel');

let flicky = new Flickity(slideContainer, {

    imagesLoaded: true,
    wrapAround: true,
    pageDots: false

});