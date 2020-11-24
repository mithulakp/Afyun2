const prevIcon = '<img src="dist/images/slider-left-arw.svg"class="prev-btn slider-arrow">';
const nextIcon = '<img src="dist/images/slider-right-arw.svg"class="next-btn slider-arrow">';


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

$(function() {
    AOS.init({
        duration: 800,
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


// Navigation
var menu_nav = document.querySelector("#burger");
var global_menu = document.querySelector('#global_menu');
var close_btn = document.querySelector('#close-btn');
var mybody = document.querySelector('body');
menu_nav.addEventListener('click', function() {
    global_menu.classList.toggle('active');
    mybody.classList.toggle('menu_active');
});

close_btn.addEventListener('click', function() {
    global_menu.classList.remove('active');
    mybody.classList.remove('menu_active');
});