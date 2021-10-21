import $ from 'jquery'
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {

    $('.slider').slick({
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    })

    $(document).on('click', '.main-btn', function (e) {
        $(this).toggleClass('active');
        $('.btn-cont').toggleClass('active');
        $('.nav--mobile').slideToggle()
    });
})
