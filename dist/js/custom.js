const prevIcon = '<img src="dist/images/slider-left-arw.svg"class="prev-btn slider-arrow">';
const nextIcon = '<img src="dist/images/slider-right-arw.svg"class="next-btn slider-arrow">';
const leftIcon = '<img src="dist/images/about-left-arw.svg"class="slider-arrow left-btn">';
const rightIcon = '<img src="dist/images/about-right-arw.svg"class="slider-arrow right-btn">';

$('.banner-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        prevIcon, nextIcon
    ],
    pagination: false,
    autoplay: 1000,
    autoplaySpeed: 1000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.history-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        leftIcon, rightIcon
    ],
    pagination: false,
    autoplay: 1000,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            item: 3
        },
        1100: {
            items: 4
        }

    }
})

$(function() {
    AOS.init({
        duration: 800,
        offset: 30,
    });
});

jQuery(document).ready(function() {
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 100) {
            jQuery("header").addClass("actve");
        } else {
            jQuery("header").removeClass("actve");
        }
    });
});