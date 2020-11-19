const prevIcon = '<img src="dist/images/slide-arrow-left.svg"class="prev-btn">Prev';
const nextIcon = 'Next<img src="dist/images/slide-arrow.svg"class="next-btn">';


$('.banner-slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
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