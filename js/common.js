document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  });





jQuery(document).ready(function ($) {
    $('.logo-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 }
            }
        ]
    });

    // Button Controls
    $('.prev-btn').click(function () {
        $('.logo-slider').slick('slickPrev');
    });
    $('.next-btn').click(function () {
        $('.logo-slider').slick('slickNext');
    });



});

$(document).ready(function () {
    $('.product-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0',
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.freshness-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.experts-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slick-prevs'),
        nextArrow: $('.slick-nexts'),
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$('.openings-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    infinite: true,
   
    dots: false,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.js-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.js-product').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [

        {
         breakpoint: 991,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }    
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

function formatNumber(n) {
    return n < 10 ? '0' + n : n;
}

let $slider = $('.js-ai-powered-slider');
let $current = $('.counter-lft-vul');
let $total = $('.counter-rgt-vul');

$slider.on('init', function (event, slick) {
    $current.text(formatNumber(1));
    $total.text(formatNumber(slick.slideCount));
});

$slider.on('afterChange', function (event, slick, currentSlide) {
    $current.text(formatNumber(currentSlide + 1));
});

$slider.slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.custom-prev'),
    nextArrow: $('.custom-next')
});

// accordion add active class

$(document).ready(function () {
    $('.accordion-button').on('click', function () {
        // Remove 'active' class from all .accordion-item elements
        $('.accordion-item').removeClass('active');

        // Add 'active' class to the clicked button's closest .accordion-item
        $(this).closest('.accordion-item').addClass('active');
    });
});

// what we do section animation
/* 
const whatWeDoContElem = document.getElementById("what-do-we-container");

whatWeDoContElem.addEventListener("mouseenter", function(e) {
    if (e.target.id === "c1") {
        e.target.style.backgroundImage = 'url("./images/1.png")';
    }
    if (e.target.id === "c2") {
        e.target.style.backgroundImage = 'url("./images/2.png")';
    }
    if (e.target.id === "c3") {
        e.target.style.backgroundImage = 'url("./images/3.png")';
    }
    if (e.target.id === "c4") {
        e.target.style.backgroundImage = 'url("./images/3.png")';
    }
    if (e.target.id === "c5") {
        e.target.style.backgroundImage = 'url("./images/2.png")';
    }

    if (e.target.id === "c6") {
        e.target.style.backgroundImage = 'url("./images/1.png")';
    }
}, true);


whatWeDoContElem.addEventListener("mouseout", function(e) {
    if (e.target.id === "c1") {
        e.target.style.backgroundImage = '';
    }
    if (e.target.id === "c2") {
        e.target.style.backgroundImage = '';
    }
    if (e.target.id === "c3") {
        e.target.style.backgroundImage = '';
    }
    if (e.target.id === "c4") {
        e.target.style.backgroundImage = '';
    }
    if (e.target.id === "c5") {
        e.target.style.backgroundImage = '';
    }

    if (e.target.id === "c6") {
        e.target.style.backgroundImage = '';
    }
}, true);
*/



