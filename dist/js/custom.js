const prevIcon = '<img src="dist/images/slide-arrow-left.svg"class="prev-btn">';
const nextIcon = '<img src="dist/images/slide-arrow.svg"class="next-btn">';


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
    AOS.init();
});