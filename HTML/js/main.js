$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        prevArrow: "<img src='../HTML/img/icons/left-arrow.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='../HTML/img/icons/right-arrow.svg' class='next' alt='next'>",
        slidesToScroll: 1
    });
});

$(document).ready(function(){
    $('.card__slider-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        prevArrow: "<img src='../HTML/img/icons/left-arrow.svg' class='prev' alt='prev'>",
        nextArrow: "<img src='../HTML/img/icons/right-arrow.svg' class='next' alt='next'>",
        slidesToScroll: 1
    });
})

